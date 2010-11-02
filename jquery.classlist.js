;(function (jQuery) {
  
  jQuery.fn.classlist = function () {
      
    var arg, args, ret, apiFn, list, 
        temp = [], 
        elem = this[0], 
        hasClassList = jQuery.support.classList, 
        fixMethods = {
          "contains" : "has"
        },
        noids = {
          "null": true, 
          "undefined": true,
          "false": true
        };

    //  Getter logic
    if ( !arguments.length ) {

      ret  = ( hasClassList && elem.classList ) ||
                ( elem.className && elem.className.split(" ") );

      // Native classList is an array-like object; for normalization 
      // with non-native implementations, we return arrays 
      if ( ret.length ) {

        if ( jQuery.isArray(ret) ) {
          return ret;
        }

        // Forge an array from native classList 
        for ( var i = 0, len = ret.length; i < len; i++ ) {
          if ( ret[i] ) {
            temp[i] = ret[i];
          }            
        }

        return temp;
      }
    }

    arguments.length && (  arg  = Array.prototype.join.call(arguments) );
    
    args = arg && arg.match(/(\w+)/gi);
    
    if ( args && args.length >= 2 && !noids[ args[1] ] ) {
      
      // compile a possible jQuery method
      apiFn = ( fixMethods[ args[0] ] ? fixMethods[ args[0] ] : args[0] ) + "Class";

      // Check if we can shortcut to an existing method
      if ( jQuery.fn[ apiFn ] ) {
        // Supports jQuery addClass and removeClass multi 
        return jQuery(elem)[ apiFn ]( args.slice(1).join(" ") );
      } 

      //  Should only resolve to this when item() is called;
      return jQuery(elem).classlist()[ +args[1] ];
    }
    
    return jQuery(elem).classlist();
  };

})(jQuery);