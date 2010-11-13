var emptyclass  = [],
    origclasses = [ "foo", "bar", "baz", "quux" ], 
    modclasses = [ "foo", "bar", "baz", "bananas",  "quux" ],
    endclasses = [ "bar", "baz", "bananas",  "quux" ],
    usecases = [
                  'item(0)','item(1)','item(2)','item(3)','item(4)','item(5)', 
                  'contains("baz")', 'add("bananas")', 'remove("foo")', 
                  'contains(\'baz\')', 'add(\'bananas\')', 'remove(\'foo\')', 
                  
                  
                  'toggle("quux")', // off
                  'toggle("quux")', // on
                  
                  //  bad tests
                  'item()', 'contains()', 'add()', 'remove()', 'toggle()', 
                  'item( )', 'contains( )', 'add( )', 'remove( )', 'toggle( )', 
                  'item(null)', 'contains(null)', 'add(null)', 'remove(null)', 'toggle(null)',
                  'item(undefined)', 'contains(undefined)', 'add(undefined)', 'remove(undefined)', 'toggle(undefined)',
                  'item(false)', 'contains(false)', 'add(false)', 'remove(false)', 'toggle(false)'
                  ];

test("jQuery.fn.classlist", function () {
  
  var $div  = $('#potters-field'), 
      $movein = $('#move-in'), 
      $none = $('#no-class'), 
      $missing = $('#missing-attr');
  
  $div.classlist();
  $none.classlist();
  
  same(origclasses, $div.classlist(), "Calling $div.classlist()" );
  same(!!emptyclass , !!$none.classlist(), "Calling $none.classlist()" );

  for ( var i = 0, len = usecases.length; i < len; i++ ) {
    //console.log( "$div.classlist('"+usecases[i]+"')", $div.classlist( usecases[i] ) );
  }  

  $div[0].className = "";
  same($div.classlist([null, null]), $div, "");
  
  same($div.classlist(), [], "");

  
  $div[0].className = "";
  same($div.classlist(["foo", "bar", "baz", "quux"]), $div, "$div.classlist([\"foo\", \"bar\", \"baz\", \"quux\"]) returns same as $div");
  
  $div[0].className = "";
  same($div.classlist(["foo", "bar", "baz", "quux"]).classlist(), origclasses, "$div.classlist([\"foo\", \"bar\", \"baz\", \"quux\"]).classlist() returns");


  same( $movein.classlist(["baz", "quux"]).classlist(), origclasses, "added classes to existing classes" )
  //same( $movein.classlist(["baz", "quux"]).classlist(), ["baz", "quux"], "set new class attribute" );
  
  
  
  
  
  same( $missing.classlist(["foo", "bar", "baz", "quux"]).classlist(), origclasses, "added classes to element with no class attribute" )
  

  


});

