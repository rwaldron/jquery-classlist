# jQuery.classlist()

## API

> .classlist() 
> ------------------------------------------------------------------------------
> * .classlist( )
> * .classlist( [function call string with arguments] )
> * .classlist( [function string], [arguments] )

    
    
##  Examples

Elements may have more than one class assigned to them. In HTML, this is represented by separating the class names with a space:

    <div id="mydiv" class="foo bar baz quux"></div>
    

The `.classlist()` method will return an array of classes on first element of the matched elements:
    
    $('#mydiv').classlist()
    
    > [ "foo", "bar" ]
    

The `.classlist([function call string with arguments])` signature is used to call methods of the Element.classList object:


    //  Get a class string by item index
    
    $('#mydiv').classlist('item(0)')

    > "foo"


    $('#mydiv').classlist('item(1)')

    > "bar"
    
    
    //  Check if a class exists on an element

    $('#mydiv').classlist('contains("baz")')
  
    > true

    
    //  Add a class or classes to the classlist:
    
    $('#mydiv').classlist('add("bananas")')
    
    > [ "foo", "bar", "baz", "quux", "bananas" ]
    

    $('#mydiv').classlist('add("bananas pajamamas")');
    
    > [ "foo", "bar", "baz", "quux", "bananas", "pajamamas" ]

    
    // Remove a class or classes from the classlist:
    
    $('#mydiv').classlist('remove("foo")');    
    
    > [ "bar", "baz", "quux", "bananas", "pajamamas" ]
    
    
    $('#mydiv').classlist('remove("foo bar baz")');    
    
    > [ "quux", "bananas", "pajamamas" ]
    
    
    // Toggle a class off:
    
    $('#mydiv').classlist('toggle("quux")');
    
    > [ "bananas", "pajamamas" ]
    

    // Toggle a class on:
    
    $('#mydiv').classlist('toggle("quux")');

    > [ "quux", "bananas", "pajamamas" ]
    
    

Alternatively, you can call these methods using the jQuery UI plugin standard `.classlist( [function string], [arguments] )`:

    
    $('#mydiv').classlist('item(0)')

    > "foo"


    $('#mydiv').classlist('item(1)')

    > "bar"


    $('#mydiv').classlist('contains', 'baz')
    
    > true

    
    //  Add a class or classes to the classlist:
    
    $('#mydiv').classlist('add', 'bananas')
    
    > [ "foo", "bar", "baz", "quux", "bananas" ]
    

    $('#mydiv').classlist('add', 'bananas pajamamas');
    
    > [ "foo", "bar", "baz", "quux", "bananas", "pajamamas" ]

    
    // Remove a class or classes from the classlist:
    
    $('#mydiv').classlist('remove', 'foo');    
    
    > [ "bar", "baz", "quux", "bananas", "pajamamas" ]
    
    
    $('#mydiv').classlist('remove', 'foo bar baz');    
    
    > [ "quux", "bananas", "pajamamas" ]
    
    
    // Toggle a class off:
    
    $('#mydiv').classlist('toggle', 'quux');
    
    > [ "bananas", "pajamamas" ]
    

    // Toggle a class on:
    
    $('#mydiv').classlist('toggle', 'quux');

    > [ "quux", "bananas", "pajamamas" ]


Some copy lifted from:
http://api.jquery.com/hasClass/