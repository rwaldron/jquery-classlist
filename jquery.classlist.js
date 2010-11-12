/*!
 * jQuery ClassList Plugin v0.3.0
 * http://github.com/rwldrn/jquery-classlist
 *
 * Copyright (c) 2010 Rick Waldron
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function (jQuery, undefined) {
  
  jQuery.fn.extend({
    
    // Provide a browser compatible implementation of the classList api
    //  TODO: switch to named arguments? test performance first
    classlist: function ( value ) {
      
      var arg, args, apiFn, list, classNames, 
          elem = this[0], 
          hasClassList = jQuery.support.classList || !!elem.classList, 
          slice = slice || Array.prototype.slice,
          fixMethods = {
            "contains" : "has"
          },
          noids = {
            "null": true, 
            "undefined": true,
            "false": true
          };
          
      //  Getter logic
      if ( !value ) {
        // Native classList is an array-like object; for normalization 
        // with non-native implementations, we return arrays 
        classNames = hasClassList ? 
                    elem.classList.toString() :
                    elem.className;
                
        return !jQuery.trim(classNames) ? [] : ( classNames || "" ).split(" ");
      }
      
      //  Support a simpler setter
      if ( jQuery.type(value) === "array" ) {
        /*
        classNames  = value.join(" ");
        
        if ( !jQuery.trim(classNames) ) {
          return this;
        }
        
        // Apply an array of classes to each element in matched set
        for ( var i = 0, l = this.length; i < l; i++ ) {
          elem = this[i];
          
          if ( elem.nodeType === 1 ) {
            elem.className = jQuery.trim( " " + elem.className + " " + classNames );
          }
        }
        */
        classNames  = value.join(" ");

        if ( !jQuery.trim(classNames) ) {
          return this;
        }        
        
        for ( var i = 0, l = this.length; i < l; i++ ) {
          elem = this[i];
          
          if ( hasClassList ) {
            for ( var c = 0, cl = value.length; c < cl; c++ ) {
              elem.classList.add(value[c]);
            }
          } else {
            
            elem.className = jQuery.trim( elem.className + " " + classNames );
          
          }
        }
        
        //value
        
        

        return this;
      }

      arguments.length && ( arg  = Array.prototype.join.call(arguments) );
      
      
      args = arg && arg.match(/(\w+)/gi);
      
      if ( args && args.length >= 2 && !noids[ args[1] ] ) {
        
        // compile a possible jQuery method
        apiFn = ( fixMethods[ args[0] ] ? fixMethods[ args[0] ] : args[0] ) + "Class";

        // Check if we can shortcut to an existing method
        if ( jQuery.fn[ apiFn ] ) {
          
          if ( !hasClassList ) {
            // Uses jQuery addClass, removeClass and toggleClass in single and multi mode 
            // as fallback to native classList methods
            // Returns as documented for these methods
            return jQuery(this)[ apiFn ]( args.slice(1).join(" ") );
          }
          
          //  Use native classList.contains() for performance
          if ( args[0] === 'contains' ) {
            return elem.classList.contains( args[1] );
          } 
          
          //  Use native classlist.add,remove,toggle for performance
          list  = args.slice(1);
          
          return this.each(function () {
            for ( var i = 0, len = list.length; i < len; i++ ) {
              this.classList[ args[0] ]( list[i] );
            }
          });

        } else {

          //  Should only resolve to this when item() is called;
          //  Return only for the first matched element
          return hasClassList ? 
                 elem.classList.item(+args[1]) : 
                 jQuery(elem).classlist()[ +args[1] ];
                 // might be faster: elem.className.split(" ")[ +args[1] ]
        }                 
      }
      
      return jQuery(elem).classlist();
    }
  });
})(jQuery);
