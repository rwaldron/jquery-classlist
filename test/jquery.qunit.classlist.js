var origclasses = [ "foo", "bar", "baz", "quux" ], 
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
  
  var $div  = $('#potters-field');
  
  $div.classlist();
  
  same(origclasses, $div.classlist(), "Calling $div.classlist()" );

  for ( var i = 0, len = usecases.length; i < len; i++ ) {
    //console.log( "$div.classlist('"+usecases[i]+"')", $div.classlist( usecases[i] ) );
  }  

  // functionality tests
  equal($div.classlist('item(0)'), "foo", "");
  equal($div.classlist('item(1)'), "bar", "");
  equal($div.classlist('item(2)'), "baz", "");
  equal($div.classlist('item(3)'), "quux", "");
  equal($div.classlist('item(4)'), undefined, "");
  equal($div.classlist('item(5)'), undefined, "");


  equal($div.classlist('item', 0), "foo", "");
  equal($div.classlist('item', 1), "bar", "");
  equal($div.classlist('item', 2), "baz", "");
  equal($div.classlist('item', 3), "quux", "");
  equal($div.classlist('item', 4), undefined, "");
  equal($div.classlist('item', 5), undefined, "");



  equal($div.classlist('contains("baz")'), $div.hasClass("baz"), "$div.classlist('contains(\"baz\")'), $div.hasClass(\"baz\")");
  equal($div.classlist('contains', 'baz'), $div.hasClass("baz"), "$div.classlist('contains', 'baz'), $div.hasClass(\"baz\")");



  $div.classlist('add("bananas")');
  equal($div.classlist('contains("bananas")'), true, "$div.classlist('add(\"bananas\")'), $div.classlist('contains(\"bananas\")')");

  $div.classlist('remove("foo")');
  equal($div.classlist('contains("foo")'), false, "$div.classlist('remove(\"foo\")'), !$div.classlist('contains(\"foo\")')");

  equal($div.classlist('contains(\'baz\')'), $div.hasClass("baz"), "$div.classlist('contains(\'baz\')'), $div.hasClass(\"baz\")");

  $div.classlist('add(\'bananas\')');
  equal($div.classlist('contains(\'bananas\')'), true, "$div.classlist('add(\'bananas\')'), $div.classlist('contains(\'bananas\')')");

  $div.classlist('remove(\'foo\')');
  equal($div.classlist('contains(\'foo\')'), false, "$div.classlist('remove(\'foo\')'), !$div.classlist('contains(\'foo\')')");




  $div.classlist('add', 'bananas');
  equal($div.classlist('contains','bananas'), true, "$div.classlist('add', 'bananas'), $div.classlist('contains','bananas')");

  $div.classlist('remove', 'foo');
  equal($div.classlist('contains', 'foo'), false, "$div.classlist('remove', 'foo'), !$div.classlist('contains', 'foo')");

  equal($div.classlist('contains', 'baz'), $div.hasClass("baz"), "$div.classlist('contains', 'baz'), $div.hasClass(\"baz\")");

  $div.classlist('add', 'bananas');
  equal($div.classlist('contains', 'bananas'), true, "$div.classlist('add', 'bananas'), $div.classlist('contains', 'bananas')");

  $div.classlist('remove', 'foo');
  equal($div.classlist('contains', 'foo'), false, "$div.classlist('remove', 'foo'), !$div.classlist('contains', 'foo')");




  $div.classlist('add("pajamas ui font")');
  equal($div[0].className, 'bar baz quux bananas pajamas ui font', "$div.classlist('add(\'pajamas ui font\')') = $div[0].className, 'bar baz quux bananas pajamas ui font'");

  $div.classlist('remove("pajamas ui font")');
  equal($div[0].className, 'bar baz quux bananas', "$div.classlist('remove(\"pajamas ui font\")') = $div[0].className, 'bar baz quux bananas'");




  $div.classlist('add', 'pajamas ui font');
  equal($div[0].className, 'bar baz quux bananas pajamas ui font', "$div.classlist('add', 'pajamas ui font') = $div[0].className, 'bar baz quux bananas pajamas ui font'");

  $div.classlist('remove', 'pajamas ui font');
  equal($div[0].className, 'bar baz quux bananas', "$div.classlist('remove', 'pajamas ui font') = $div[0].className, 'bar baz quux bananas'");
  
  
  
  

  // toggle off
  $div.classlist('toggle("quux")');
  equal($div.hasClass("quux"), false, "$div.classlist('toggle(\"quux\")'), !$div.hasClass(\"quux\")");

  // toggle on
  $div.classlist('toggle("quux")');
  equal($div.hasClass("quux"), true, "$div.classlist('toggle(\"quux\")'), $div.hasClass(\"quux\")");
  
  
  


  // toggle off
  $div.classlist('toggle', 'quux');
  equal($div.hasClass("quux"), false, "$div.classlist('toggle', 'quux'), !$div.hasClass(\"quux\")");

  // toggle on
  $div.classlist('toggle', 'quux');
  equal($div.hasClass("quux"), true, "$div.classlist('toggle', 'quux'), $div.hasClass(\"quux\")");


  //  junk tests

  same($div.classlist('item()'), endclasses, "");
  same($div.classlist('contains()'), endclasses, "");
  same($div.classlist('add()'), endclasses, "");
  same($div.classlist('remove()'), endclasses, "");
  same($div.classlist('toggle()'), endclasses, "");
  same($div.classlist('item( )'), endclasses, "");
  same($div.classlist('contains( )'), endclasses, "");
  same($div.classlist('add( )'), endclasses, "");
  same($div.classlist('remove( )'), endclasses, "");
  same($div.classlist('toggle( )'), endclasses, "");
  same($div.classlist('item(null)'), endclasses, "");
  same($div.classlist('contains(null)'), endclasses, "");
  same($div.classlist('add(null)'), endclasses, "");
  same($div.classlist('remove(null)'), endclasses, "");
  same($div.classlist('toggle(null)'), endclasses, "");
  same($div.classlist('item(undefined)'), endclasses, "");
  same($div.classlist('contains(undefined)'), endclasses, "");
  same($div.classlist('add(undefined)'), endclasses, "");
  same($div.classlist('remove(undefined)'), endclasses, "");
  same($div.classlist('toggle(undefined)'), endclasses, "");
  same($div.classlist('item(false)'), endclasses, "");
  same($div.classlist('contains(false)'), endclasses, "");
  same($div.classlist('add(false)'), endclasses, "");
  same($div.classlist('remove(false)'), endclasses, "");
  same($div.classlist('toggle(false)'), endclasses, "");


  
  same('bar baz bananas quux', $div[0].className, "'bar baz bananas quux' same as $div[0].className");
  

});
                  
                  /*
  console.group('jQuery.fn.classes');
  
    console.log( "$div.classlist()", $div.classlist() );

    for ( var i = 0, len = usecases.length; i < len; i++ ) {
   
      console.log( "$div.classlist('"+usecases[i]+"')", $div.classlist( usecases[i] ) );
    }  

  console.groupEnd('jQuery.fn.classes');

  
  // expect, actual
  console.log( ['bar baz bananas quux',  $div[0].className] );
  */