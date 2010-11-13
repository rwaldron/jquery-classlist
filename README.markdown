# .classlist()

## Provides an interface for handling class attributes as arrays of className strings:


* [https://developer.mozilla.org/en/DOM/element.classList](https://developer.mozilla.org/en/DOM/element.classList)
* [http://hacks.mozilla.org/2010/01/classlist-in-firefox-3-6/](http://hacks.mozilla.org/2010/01/classlist-in-firefox-3-6/)
* [http://davidwalsh.name/classlist](http://davidwalsh.name/classlist)


## Performance Evidence


* [http://jsperf.com/fn-classlist-vs-fn-attr-class-split/2](http://jsperf.com/fn-classlist-vs-fn-attr-class-split/2)
* [http://jsperf.com/fn-classlist-vs-fn-addclass-join](http://jsperf.com/fn-classlist-vs-fn-addclass-join)

## API

> .classlist() 
> ------------------------------------------------------------------------------
> * .classlist( )
> * .classlist( ["set", "this", "array", "of", "classes"] )
    
    
##  Examples

### Elements may have more than one class assigned to them. In HTML, this is represented by separating the class names with a space:

    <div id="mydiv" class="foo bar baz quux"></div>
    

### The `.classlist()` method will return an array of classes on first element of the matched elements:

<pre><h2>.classlist() </h2>Get an array of all classes on an element
    
    $('#mydiv').classlist()
    
    > [ "foo", "bar", "baz", "quux" ]
    

</pre>    

### The `.classlist( [ "foo", "bar", "baz" ] )` method will take an array of class strings and apply them to all the elements in the matched set:

<pre><h2>.classlist(  [ "foo", "bar", "baz" ] ) </h2>Set classes on elements with an array of strings, returns the matched set
    
    $('#mydiv').classlist([ "foo", "bar", "baz", "quux" ])
    
    > [ div#mydiv ]
    

</pre>   




