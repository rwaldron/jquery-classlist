# jQuery.classlist()

### Provides a cross-browser implementation of the HTML5 classList API. For more information:

* https://developer.mozilla.org/en/DOM/element.classList "https://developer.mozilla.org/en/DOM/element.classList"
* http://hacks.mozilla.org/2010/01/classlist-in-firefox-3-6/  "http://hacks.mozilla.org/2010/01/classlist-in-firefox-3-6/"
* http://davidwalsh.name/classlist  "http://davidwalsh.name/classlist"


## API

> .classlist() 
> ------------------------------------------------------------------------------
> * .classlist( )
> * .classlist( [function call string with arguments] )
> * .classlist( [function string], [arguments] )

    
    
##  Examples

### Elements may have more than one class assigned to them. In HTML, this is represented by separating the class names with a space:

    <div id="mydiv" class="foo bar baz quux"></div>
    

### The `.classlist()` method will return an array of classes on first element of the matched elements:
    
    $('#mydiv').classlist()
    
    > [ "foo", "bar", "baz", "quux" ]
    

### The `.classlist([function call string with arguments])` signature is used to call methods of the Element.classList api.


<pre><h2>.classlist('item(index)') </h2>Get a class string by item index
    
    &lt;-- Assume the following markup --&gt;
    &lt;div id="mydiv" class="foo bar baz quux"&gt;&lt;/div&gt;

$('#mydiv').classlist('item(0)')

> "foo"


$('#mydiv').classlist('item(1)')

> "bar"


$('#mydiv').classlist('item(3)')

> "quux"

</pre>    
<pre><h2>.classlist('contains("classString")')</h2>Check if a class exists on an element

    &lt;-- Assume the following markup --&gt;
    &lt;div id="mydiv" class="foo bar baz quux"&gt;&lt;/div&gt;

$('#mydiv').classlist('contains("baz")')

> true

</pre>
<pre><h2>.classlist('add("classString")')</h2>Add a class or classes to the classlist:

    &lt;-- Assume the following markup --&gt;
    &lt;div id="mydiv" class="foo bar baz quux"&gt;&lt;/div&gt;


$('#mydiv').classlist('add("bananas")')

> [ "foo", "bar", "baz", "quux", "bananas" ]


$('#mydiv').classlist('add("bananas pajamamas")');

> [ "foo", "bar", "baz", "quux", "bananas", "pajamamas" ]

</pre>
<pre><h2>.classlist('remove("classString")')</h2> Remove a class or classes from the classlist:

    &lt;-- Assume the following markup --&gt;
    &lt;div id="mydiv" class="foo bar baz quux bananas pajamas"&gt;&lt;/div&gt;


$('#mydiv').classlist('remove("foo")');    

> [ "bar", "baz", "quux", "bananas", "pajamamas" ]


$('#mydiv').classlist('remove("foo bar baz")');    

> [ "quux", "bananas", "pajamamas" ]

</pre>
<pre><h2>.classlist('toggle("classString")')</h2>Toggle a class on or off:

    &lt;-- Assume the following markup --&gt;
    &lt;div id="mydiv" class="quux bananas pajamas"&gt;&lt;/div&gt;



// Toggle off

$('#mydiv').classlist('toggle("quux")');

> [ "bananas", "pajamamas" ]


// Toggle on

$('#mydiv').classlist('toggle("quux")');

> [ "quux", "bananas", "pajamamas" ]

</pre>    

### Alternatively, you can call these methods using the jQuery UI plugin standard `.classlist( [function string], [arguments] )`:


<pre><h2>.classlist('item', index)</h2>Get a class string by item index
    
    &lt;-- Assume the following markup --&gt;
    &lt;div id="mydiv" class="foo bar baz quux"&gt;&lt;/div&gt;


$('#mydiv').classlist('item', 0)

> "foo"


$('#mydiv').classlist('item', 1)

> "bar"


</pre>
<pre><h2>.classlist('contains', 'classString')</h2>Check if a class exists on an element
    
    &lt;-- Assume the following markup --&gt;
    &lt;div id="mydiv" class="foo bar baz quux"&gt;&lt;/div&gt;


$('#mydiv').classlist('contains', 'baz')

> true

</pre>
<pre><h2>.classlist('add', 'classString')</h2>Add a class or classes to the classlist:
    
    &lt;-- Assume the following markup --&gt;
    &lt;div id="mydiv" class="foo bar baz quux"&gt;&lt;/div&gt;


$('#mydiv').classlist('add', 'bananas')

> [ "foo", "bar", "baz", "quux", "bananas" ]


$('#mydiv').classlist('add', 'bananas pajamamas');

> [ "foo", "bar", "baz", "quux", "bananas", "pajamamas" ]

</pre>
<pre><h2>.classlist('remove', 'classString')</h2>Remove a class or classes from the classlist:
    
    &lt;-- Assume the following markup --&gt;
    &lt;div id="mydiv" class="foo bar baz quux bananas pajamamas"&gt;&lt;/div&gt;


$('#mydiv').classlist('remove', 'foo');    

> [ "bar", "baz", "quux", "bananas", "pajamamas" ]


$('#mydiv').classlist('remove', 'foo bar baz');    

> [ "quux", "bananas", "pajamamas" ]

</pre>
<pre><h2>.classlist('toggle', 'classString')</h2>Toggle a class on or off:
    
    &lt;-- Assume the following markup --&gt;
    &lt;div id="mydiv" class="quux bananas pajamamas"&gt;&lt;/div&gt;


// Toggle on:

$('#mydiv').classlist('toggle', 'quux');

> [ "bananas", "pajamamas" ]


// Toggle off:

$('#mydiv').classlist('toggle', 'quux');

> [ "quux", "bananas", "pajamamas" ]

</pre>