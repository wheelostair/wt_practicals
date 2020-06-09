# WEB TECH Practicals

## Session 1

Here are some tags

```html

<h1> </h1> - Heading 1
<h6> </h6> - Heading 6
<p> </p> - Paragraph
<ul> - Undefined lists
    <li> data in lists </li>    
</ul>
```
```html
    The <!DOCTYPE html> declaration defines this document to be HTML5
    The <html> element is the root element of an HTML page
    The <head> element contains meta information about the document
    The <title> element specifies a title for the document
    The <body> element contains the visible page content
    The <h1> element defines a large heading
    The <p> element defines a paragraph
```
<ul>    
    <li>git status - to see what files have chnaged or been added </li>
    <li>git add (filename) - to add files</li>
    <li>git commit - m 'what changes you've made' - to commit </li>
    <li>git push origin master - pushes master branch (use - u if first time)</li>
</ul>

## Session 2

Block Level Elements

Form a seperate block of HTML,
Can be contained within other block elements,
the following tags are all block level elements

```html

<p>…</p> 
<h1>…</h1>
<table>…</table> 
```
Inline elements

Stay inline with the rest of the content, 
They can only contain other  inline elements, but may be contained within inline and block elements,
The folowing tags are inline elements:

```html

<img>…</img>
<a>…</a>

```

HTML <Div> Tag

Defines a divison or a section in a HTML doc
Used to group elemtns to format them with styles:

```html
<body>
	<div id=“wrapper">
		<div id="header”>
       	…… 
		</div>  <!- - [end]#header - -> 
		<div id="section”>
      		……
		</div> <!- - [end]#section - -> 
		<div id="footer”>
        …….
		</div><!- - [end]#footer - ->
	</div> <!- - [end]#content - ->
</body> 
```

HTML <span> Tag

provides a way to add a hook to a piece of text or a part of a doc, e,g

```html
<p>She has <span class="blue">light blue</span> eyes.</p>
```

class and id Attributes

class specifies the element as a member of one or more classes, allows developers to define specific kinds of a given element

```html
<element class="classname">
```

id specifies a unique id for an HTML element, Can only be used once
```html
<element id="id">
```

## Session 3

<h1> Forms & Inputs </h1>

```html
<form>

</form>
```

A container for the controls (Text feild, checkbox, radio buttons etc.)

Forms can be used to send data to places:

```html
<form action="https://www.google.com" method="post">

</form>
```
Action = Where the form is sent to
Method = how the form is to be sent
    Get : data is appended to the URL
    Post: data is included in the body of the form

The <input> element handles most of the form controls, these also have different attributes, the input's change thier look and feel based on which type attribute we use.

```html
<form action="https://www.google.com" method="post">
    <p> <label for="name">Name:</label> <input type="text" name="name"> </p>
    <p> <label for="email">Email:</label> <input type="text" name="email"> </p>
    <p><input type="submit" name="Submit" value="Submit"></p>
</form>
```

The above example has two input types: Text & Submit
Inputs can have a label which is a value attribute, a specailised element used for marking form control.
It's good practice to wrap inputs and lables in <P>
