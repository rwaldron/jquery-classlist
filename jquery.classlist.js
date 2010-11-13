/*!
 * jQuery ClassList Plugin v0.4.0
 * http://github.com/rwldrn/jquery-classlist
 *
 * Copyright (c) 2010 Rick Waldron
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function (jQuery, undefined) {

  var slice = slice || Array.prototype.slice;

  jQuery.support.classList = !!$('<div/>')[0].classList;
  
  
  jQuery.fn.extend({
    
    // Provide a browser compatible implementation of the classList api
    //  TODO: switch to named arguments? test performance first
    classlist: function ( value ) {
      
      var elem = this[0], iter = 0, 
          classNames, className, len;
          
      //  Getter logic
      if ( !value ) {
        // Native classList is an array-like object; for normalization 
        // with non-native implementations, we return arrays 
        // This approach has proven significantly faster
        classNames = jQuery.support.classList ? 
                      elem.classList.toString() :
                      elem.className;
        
        return !jQuery.trim(classNames) ? [] : ( classNames || "" ).split( " " );
      }
      
      if ( jQuery.type(value) === "array" ) {
        
        len  = this.length;
        
        while ( len-- ) {
          elem = this[iter++];
          
          if ( elem.nodeType === 1 ) {
            if ( !elem.className ) {
              
              elem.className = value.join(" ");

            } else {
              
              className = " " + elem.className + " ",
                setClass = elem.className;

              for ( var c = 0, cl = value.length; c < cl; c++ ) {
                
                if ( jQuery.support.classList ) {
                  elem.classList.add(value[c]);
                } else {
                  if ( className.indexOf( " " + value[c] + " " ) < 0 ) {
                    elem.className += " " + value[c];
                  }
                }
              }
            }
          }          
        } 

        return this;
      }
    }
  });
})(jQuery);
