<h1>Section-1 JS Fundamentals</h1>
<p align="center">
  
<img width="806" alt="Screen Shot 2022-01-03 at 10 35 42 AM" src="https://user-images.githubusercontent.com/31994778/147907960-a4a8a5a0-a34c-4e59-9810-f1ba8b6c04ea.png">
  
</p>

<b>Table Of Contents</b> |
------------ | 
[How to link JS script to HTML file?](#linking-js-to-html) 
[How to link CSS script to HTML file?](#linking-css-to-html) 
 
 <p id="linking-js-to-html">
 <h2>How to link JS script to HTML file?</h2>
 </p>
 
 <p>
  <b><i>"There are two ways of linking a js script to html file."</b></i>
 </p>
 
 <b>1 - Linking in the same file (Inline): </b>
 
 <img width="706" alt="Screen Shot 2022-01-03 at 10 44 54 AM" src="https://user-images.githubusercontent.com/31994778/147908648-058f0e07-f629-4901-b84f-abd29fc8690a.png">


 <b>2 - Linking from another file: </b>
 
 <img width="738" alt="Screen Shot 2022-01-03 at 10 48 46 AM" src="https://user-images.githubusercontent.com/31994778/147908888-dedb7b22-68a3-4995-b659-fcb48dce5081.png">
 
---

<p id="linking-css-to-html">
<h2>How to link CSS script to HTML file?</h2>
</p>

Linking CSS to html file is pretty much the same as the first part.

Here, we have `style.css` file to be linked to index.html.

<img width="364" alt="Screen Shot 2022-01-03 at 10 59 02 AM" src="https://user-images.githubusercontent.com/31994778/147909403-c29aea7d-f00c-4cef-8eeb-73f4f4a5d0c6.png">

<img width="614" alt="Screen Shot 2022-01-03 at 12 19 24 PM" src="https://user-images.githubusercontent.com/31994778/147915172-d0e49c9d-d842-40df-ab0d-f63ce655310a.png">

---

<h1>Section-2 Variables</h1>

<p align="center">
  <img width="603" alt="Screen Shot 2022-01-03 at 1 01 48 PM" src="https://user-images.githubusercontent.com/31994778/147918453-95637072-9a9c-4f9c-94ee-163a02dc5f4c.png">
</p>

<b>Table Of Contents</b> |
------------ | 
[Javascript Variables](#variables) 

<p id="variables">
<h2>Javascript Variables</h2>
</p>

From [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables):

> Note: We say variables contain values. This is an important distinction to make. Variables aren't the values themselves; they are containers for values. You can think of them being like little cardboard boxes that you can store things in.

<div align="center">
<img width="800" height="300" src="https://user-images.githubusercontent.com/31994778/147919444-63e42d2b-f21c-4e74-ab4a-ba916851752a.png">
</div>

Variable declaration in Javascript is done as follows:

```js
let myName = "Burak";
let myAge = 26;
```

We can also declare variables without assigning to anything. This is called variable construction.

```js
let myName;
let myAge;
```

Printing the first one to the console

<img width="431" alt="Screen Shot 2022-01-03 at 1 20 37 PM" src="https://user-images.githubusercontent.com/31994778/147920001-e850fff9-6bb2-480e-b6cf-e2fc4c53134d.png">

printing second one 

<img width="427" alt="Screen Shot 2022-01-03 at 1 21 11 PM" src="https://user-images.githubusercontent.com/31994778/147920058-6c54256e-95f2-46b3-9145-f1913f1f4991.png">

Meaning that variables created without assigning to anything has `undefined` value.

This is useful for if statements.

```js
let strings;
const willBeListOfStrings = true;

if (willBeListOfStrings) {
  strings = ["hello", "world"];
} else {
  strings = "hello";
}

console.log(strings);
```

Here, we can change the value of `strings` variable with respect to `willBeListOfStrings` variable.

<img width="425" alt="Screen Shot 2022-01-03 at 1 26 03 PM" src="https://user-images.githubusercontent.com/31994778/147920497-91ba3a4a-c9e0-49c1-8f1c-40140f16787e.png">




