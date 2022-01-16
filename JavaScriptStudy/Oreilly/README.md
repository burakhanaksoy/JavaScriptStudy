<div align="left">
<img width="400" height="400" src="https://user-images.githubusercontent.com/31994778/147929926-4e973b26-6102-428a-84ed-14767e1f481c.png">
</div>

<div align="left">
  
<b>Table Of Contents</b> |
------------ | 
[Section-1 JS Fundamentals](#section1) 
[Section-2 Variables](#section2) 
[Section-3 DOM](#section3)
[Section-4 Array Operations](#section4)
[Section-5 Dates](#section5)
  
</div>

<p id="section1">
<h1>Section-1 JS Fundamentals</h1>
</p>

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

<p id="section2">
<h1>Section-2 Variables</h1>
</p>

<p align="center">
  <img width="603" alt="Screen Shot 2022-01-03 at 1 01 48 PM" src="https://user-images.githubusercontent.com/31994778/147918453-95637072-9a9c-4f9c-94ee-163a02dc5f4c.png">
</p>

<b>Table Of Contents</b> |
------------ | 
[Javascript Variables](#variables) 
[var hoisting](#var-hoisting) 
[Not Being Able to Redeclare Variables with Let](#cannot-redeclare-let) 
[Equality vs Strict Equality Operator](#equality-vs-strict)
[Constants](#constants)
[const vs let](#const-vs-let)

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

---

<p id="var-hoisting">
<h2>var hoisting</h2>
</p>

<b>[var hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting) is an interesting topic. It is one of the topics that addresses the need for the existence of keywords like `let` in ES6.</b>

Before ES6, i.e., ECMAScript 2015, JavaScript only used `var` keyword for variable declaration.

For example:

```js
person = {
    name:"Burakhan",
    age:26
}

function logPerson(){
    console.log(person);
}

logPerson();

var person;
```

We expect that this code snippet should print `{name: 'Burakhan', age: 26}` to the console, and this is what happens. However, on the next line, we execute `var person;`, meaning that `person` should be assigned to `undefined`.

However, when we call `person` on the console, we have the following:

<img width="322" alt="Screen Shot 2022-01-03 at 3 39 41 PM" src="https://user-images.githubusercontent.com/31994778/147931511-8c599ee0-dd7b-46ac-b3a7-63de9f7d9ce8.png">

Why does this happen? In other words, why didn't executing `person` return an `undefined` value, but the assigned object literal instead?

This is because a phenomenon called `var hoisting`.

In the code above, there's more than meets the eye. Inherently, Javascript executes our code as follows:

```js
person = {
    name:"Burakhan",
    age:26
}
var person;

// ======== This is executed as below =======

var person;
person = {
    name:"Burakhan",
    age:26
}
```

This one of the reasons for introducing keyword `let` with ES6. If we try the same thing with `let`, we will get the following error:

<img width="447" alt="Screen Shot 2022-01-03 at 3 44 40 PM" src="https://user-images.githubusercontent.com/31994778/147931978-89df5022-a8a8-41a8-9d9f-e7186958ff5e.png">

So, by using `let`, we cannot assign a value to a variable before declaring.

This is very nice in in my opinion with two points :

1- This let's us declare variables on top of the scope, before doing anything else, which is very nice for the code structure.

2- It'd be much easier for fellow developers to understand the code.

<b>Hoisting no longer works with `let` keyword.</b>

---

<p id="cannot-redeclare-let">
  <h2>Not Being Able to Redeclare Variables with Let</h2>
  </p>

This is another important difference between `var` and `let`. When we use `let` keyword for variable declaration, we cannot redaclare the same variable twice, unlike `var`.

For example:

```js
function printSomething(){
    let myName = "Burak";
    console.log(myName);
    
    let myName = "Ahmet";
    console.log(myName);
}
```

This will raise error

<img width="562" alt="Screen Shot 2022-01-03 at 5 48 53 PM" src="https://user-images.githubusercontent.com/31994778/147944447-71ac232e-bc70-47dd-9c4c-5672c34ed06d.png">

However, using `var` doesn't print error on, as if it's normal to declare same variable twice.

<img width="558" alt="Screen Shot 2022-01-03 at 5 50 01 PM" src="https://user-images.githubusercontent.com/31994778/147944569-00b52111-7300-4121-a7d5-f90b7943d039.png">

The following is written on [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#a_note_about_var)

>Again, this is a sensible language decision. There is no reason to redeclare variables — it just makes things more confusing.
>For these reasons and more, we recommend that you use let in your code, rather than var. There is no reason to use var, unless you need to support Internet Explorer 10 or older with your code.

---

<p id="equality-vs-strict">
  <h2>Equality vs Strict Equality Operator</h2>
  </p>
  
 Both these operators are used for testing equality between two operands. However, the community seem to find `strict-equality` operator to be both faster and more reliable.
 
<b>Case 1: (False positives)</b>
 
 ```js
let myVar1 = 22;
let myVar2 = '22';

console.log(myVar1 == myVar2); // prints true
```

```js
let myVar1 = 22;
let myVar2 = '22';

console.log(myVar1 === myVar2); // prints false
```

Here, as we can see, even if `myVar1` and `myVar2` don't have the same types, i.e., integer and string, `==` returns true and `===` returns false.

Using `===` would be more logical here. Also faster. Faster because `==` does type conversion, where `===` doesn't make this and directly compares.

<b>Case 2: (Performance)</b>

<img width="562" alt="Screen Shot 2022-01-03 at 6 41 56 PM" src="https://user-images.githubusercontent.com/31994778/147950275-43a326a8-4bd7-4ee3-ac1b-94cd23d9bc76.png">

Looking at the above image, we see that `===` is superior to `==` in that the former spends less time doing the evaluation.

Also, please check out this topic on [stackoverflow](https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons) and find this answer below

<img width="763" alt="Screen Shot 2022-01-03 at 6 50 08 PM" src="https://user-images.githubusercontent.com/31994778/147951122-ea813da4-70ce-4d0d-ad31-7f2141ad0446.png">

---

<p id="constants">
  <h2>Constants</h2>
  </p>
  
constants in Javascript use `const` keyword. Two of the important differences between constants and let is that:

1 - You cannot reassign a constant.

For example:

```js
const myConst = 12;
myConst = 11;
```

This will throw error.

<img width="565" alt="Screen Shot 2022-01-03 at 7 40 59 PM" src="https://user-images.githubusercontent.com/31994778/147956173-9ea0f57b-49ca-43d6-ab34-4654ffdf8f15.png">

2 - Constants should be initialized when they are declared.

```js
const myConst; // Errors -> Uncaught SyntaxError: Missing initializer in const declaration
```

<b>Although we cannot reassign a const, we can change it's content, especially if it's an object.</b>

For example:

```js
const person = {
    name:"Burakhan",
    age:26
}
console.log(person.name);

person.name = "Ahmet";
console.log(person.name);
```

<img width="449" alt="Screen Shot 2022-01-03 at 7 44 53 PM" src="https://user-images.githubusercontent.com/31994778/147956597-c738a505-62c6-4d75-a8cf-7bf7fb9a021e.png">

<b>Declaring variable as constant doesn't mean it cannot be changed, it means that it cannot be reassigned, i.e., it should point to the same object.</b>

---

<p id="const-vs-let">
<h2>const vs let</h2>
</p>

Referring to [When to use const and when to use let](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#when_to_use_const_and_when_to_use_let).

<img width="823" alt="Screen Shot 2022-01-03 at 7 55 02 PM" src="https://user-images.githubusercontent.com/31994778/147957631-cfbcf9e1-1958-418e-8cfc-9a56510871ca.png">

---

<p id="section3">
  <h1>Section-3 DOM</h1>
  </p>

<p align="center">
<img height="400" width="500" src="https://user-images.githubusercontent.com/31994778/148691719-ec5b8625-fffc-441d-882d-1309295bb3fb.jpeg">
</p>

<b>Table Of Contents</b> |
------------ | 
[What is DOM?](#what-is-dom)
[Document Object](#document-object)

---

<p id="what-is-dom">
  <h2>What is DOM?</h2>
  </p>
  
  <b><i>DOM stands for "Document Object Model", which simply refers to the structure that a web page's HTML content relies upon.</i></b>
  
  For example, for an empty HTML file, we usually have something like this:
  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

Each part constitutes a part of DOM.

<b>HEAD</b>: Head tag is the place where HTML's metadata is stored. charset, styles, links, fonts, title, etc. are all stored inside <head> tag.
  
<b>BODY</b>: Body is the main part of HTML document in which buttons, anchor tags, boxes, and everything that we see on a web page is stored here. <body> is the exact opposite of <head> when it comes to visibility. Content we have under <body> tag is subject to direct interaction with user.
  
<b>HTML</b>: <html> tag represents the root of HTML document. It is a container of all other HTML elements. You can reach any HTML element if you can reach #root, i.e., <html>. html element supports global attributes, meaning that when you give a class to <html class="some-class"> like this, 
  
  making the following will hide everything in the page.
  
  ```html
  <html class="some-class">
    <head>
      ...
    </head>
    <body>
      ...
    </body>
  </html>
  ```
  
  ```
  .some-class{
  display:none;
  }
  ```
  
  ---
  
  <p id="document-object">
  <h2>Document Object</h2>
  </p>
  
  <b><i>Document object</i></b>
  
  <b><i>In Javascript, `document` is the object form of HTML DOM. Basically, it is the same as DOM.</i></b>
  
  <h3>Selecting specific element</h3>
  
  For example, we can select any element on the DOM using `document` object.
  
  ```html
  <body>
    <h1>Burakhan Aksoy</h1>
    <hr/>
    <script src="app.js"></script>
  </body>
  ```
  
  I have something like this, then I will select h1 tag and make it red using js.
  
  ```js
  const myH1 = document.querySelector("h1");
  myH1.classList.add('active')
  ```
  
  This snippet adds `active` class to `myH1`.
  
  active class:
  
  ```
  .active{
  color:red;
  }
  ```
  
  <img width="871" alt="Screen Shot 2022-01-09 at 8 04 10 PM" src="https://user-images.githubusercontent.com/31994778/148692583-6f28afdf-0450-464c-9f2a-e603c62c758e.png">

---
 
<h3>Adding to DOM</h3>
  
Say that we have base HTML like this:
 
 ```html
  <body>
    <h1>Burakhan Aksoy</h1>
    <hr/>
    <script src="app.js"></script>
  </body>
  ```
  
  I am going to add something to it using `document` object.
  
  ```js
  const info = {
  name: "Burakhan Aksoy",
  age: 26,
  job: "python developer",
  location: "Istanbul",
};

let listView = '<ul>';

for(key of Object.keys(info)){
    listView += `<li>${key}:${info[key]}</li>`
}
listView += '</ul>'

document.body.innerHTML += listView;
```

And, voila!
  
  <img width="871" alt="Screen Shot 2022-01-09 at 8 21 17 PM" src="https://user-images.githubusercontent.com/31994778/148693142-b558a756-6972-4005-9cd2-f68032142989.png">

---
  
<h3>Event Listeners</h3>
  
  <b><i>Event listeners are the observer patterns to listen to specific event.</i></b>
  
  For example, I'm going to change color of each of the <li> tags on hover.
  
  ```js
  const listItems = document.querySelectorAll("li").forEach((e) => {
    e.addEventListener("mouseenter", () =>{
        e.classList.add('active');
    });

    e.addEventListener("mouseleave", () =>{
        e.classList.remove('active');
    });
});
  ```
  
  Here, I am selecting each and every `<li>` tag using `document.querySelectorAll("li")`. This returns a list of `<li>` tags.
  
  Then, I add `mouseenter` and `mouseleave` events using `addEventListener` method.
  
  Here is our css classes:
  
  ```css
      .active{
          color:red;
      }

      li:hover{
          cursor:pointer;
      }

      ul{
          list-style-type: none
      }

      li::before{
          content:"-> ";
      }
  ```
  
  Finally, we have something like this:

https://user-images.githubusercontent.com/31994778/148693970-b346d952-028f-4058-b6b7-cd43ce423e45.mov

---
  
<p id="section4">
<h1>Section-4 Array Operations</h1>
</p>

<p align="center">
  
 <img width="316" alt="Screen Shot 2022-01-11 at 9 17 37 AM" src="https://user-images.githubusercontent.com/31994778/148891221-503bb326-94ba-4224-b280-82a1d238812f.png">
  
</p>

<b>Table Of Contents</b> |
------------ | 
[Array.prototype.sort()](#array-sort)
[Array.prototype.filter()](#array-filter)
[Array.prototype.map()](#array-map)
[Array.prototype.forEach()](#array-for-each)
 
 <p id="array-sort">
 <h2>Array.prototype.sort()</h2>
 </p>
  
  <b><i>"The sort() method sorts elements of an array "in-place"."</i></b>[ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  
  <b>Example 1:(int array)</b>
  
  <img width="335" alt="Screen Shot 2022-01-11 at 7 34 42 PM" src="https://user-images.githubusercontent.com/31994778/148983264-e91240e8-52ab-47b6-9c99-af8686b8436b.png">
  
  Here, we can see the `in-place` sorting, meaning that the original array is mutated.
  
  To preserve the original state of the array, we can declare a new variable and copy `myArr`'s contents and sort.
  
 ```js
let myArr = [3, 1, 2, -1, 11];
let tempArr = [...myArr];

console.log('sorted array',tempArr.sort((a,b) => (a > b ? 1 : -1)));
console.log('temp Array', tempArr);
console.log('original array', myArr)
 ```
  
  Here, we see that `tempArr` is mutated and `myArr` preserves the original form.
  
  <img width="342" alt="Screen Shot 2022-01-11 at 7 40 00 PM" src="https://user-images.githubusercontent.com/31994778/148984072-81f82f29-dc74-4f71-8eb8-d404da9a4859.png">

  <b>Example 2: (array of objects)</b>
  
  Just like we sort integers, strings, we can also sort an array of objects. Say that we have this array:
  
  ```js
  someArr = [
  {
      "name":"burak",
      "age":26
  },
  {
      "name":"mahmut",
      "age":22
  },
  {
      "name":"ahmet",
      "age":21
  }
];
```

Say that we want to sort this array by `age` fields.
  
```js
let tempArr = [...someArr];

console.log('sorted array',tempArr.sort((a,b) => (a.age > b.age ? 1 : -1)));
console.log('original array', someArr)
```
  
  <img width="322" alt="Screen Shot 2022-01-11 at 7 43 59 PM" src="https://user-images.githubusercontent.com/31994778/148984755-a0028e23-4cdd-49af-ad91-134c7fcc98e1.png">
  
 <b>Example 3: (array of strings)</b>
  
  Say that we have an array like this:
  
  ```js
someArr = ["Burak","burak","mahmut","Ahmet", "ahmet"];
console.log(someArr.sort((a,b)=>(a>b ? 1 : -1)));
```
 
  ```
  Output:

[ 'Ahmet', 'Burak', 'ahmet', 'burak', 'mahmut' ]
 ```
 
  As we see here, lexicographical sorting gives precedence to uppercase letters.
  
---
  
 <p id="array-filter">
 <h2>Array.prototype.filter()</h2>
 </p> 
  
  <b><i>"filter() method creates a new array with the elements of the original array that passes a certain condition."</i></b>[ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  
 <b>Example 1: (array of strings)</b>
  
  Let's say that we want to filter elements starting with letter `a` or `A`.
  
```js
someArr = ["Burak","burak","mahmut","Ahmet", "ahmet", "AHmet"];

console.log(someArr.filter((e) => (e.startsWith('a') || e.startsWith('A'))));
console.log(someArr);
```
  
This outputs:

```
[ 'Ahmet', 'ahmet', 'AHmet' ]
[ 'Burak', 'burak', 'mahmut', 'Ahmet', 'ahmet', 'AHmet' ]
```
  
Also, we see that the original array is not changed.

 <b>Example 2: (Sorting the filtered list)</b>
  
```js
someArr = ["Burak","burak","mahmut","Ahmet", "ahmet", "AHmet"];

console.log(someArr.filter((e) => (e.startsWith('a') || e.startsWith('A'))).sort((a, b) => (a > b ? 1 : -1)));
console.log(someArr);
```
  
This outputs:
  
```
[ 'AHmet', 'Ahmet', 'ahmet' ]
[ 'Burak', 'burak', 'mahmut', 'Ahmet', 'ahmet', 'AHmet' ]
```
  
Here, we sorted a filtered array.
  
<b>Example 3: (array of objects)</b>
  
  ```js
  students = [
  {
    name:"Burak",
    grade:80
    
  },
  {
    name:"Sarah",
    grade:90
  },
  {
    name:"Hulusi",
    grade:44
  },
  {
    name:"Furkan",
    grade:66
  }
  ];

console.log(students.filter((e) => (e.grade >= 80)));
console.log(students);
  ```
  
  This outputs:
  
  ```
  [ { name: 'Burak', grade: 80 }, { name: 'Sarah', grade: 90 } ]
[
  { name: 'Burak', grade: 80 },
  { name: 'Sarah', grade: 90 },
  { name: 'Hulusi', grade: 44 },
  { name: 'Furkan', grade: 66 }
]
 ```
  
  Here, we filtered students having grade >= 80.
  
  <b>Example 4: (Using callback fnc)</b>
  
  ```js
  const someArr = ["Burak","burak","mahmut","Ahmet", "ahmet", "AHmet"];

  const startingWith = function(letter, word){
    const letterLower = letter.toLowerCase();
    const letterUpper = letter.toUpperCase();
    return word.startsWith(letterLower) || word.startsWith(letterUpper);
  }

const filteredArr = someArr.filter((e) => startingWith('m', e) )

console.log(filteredArr);
  ```
  
  This outputs:
  
  ```
  [ 'mahmut' ]
  ```
  ---
  
  <p id="array-map">
 <h2>Array.prototype.map()</h2>
 </p>
  
  <b><i>"map() method returns a new array by applying a function to each element of the original array."</i></b>[ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  
  <b>Example 1: (array of objects)</b>
  
  Say that we have students array as follows:
  
  ```js
  students = [
  {
    name:"Burak",
    grade:80
    
  },
  {
    name:"Sarah",
    grade:90
  },
  {
    name:"Hulusi",
    grade:44
  },
  {
    name:"Furkan",
    grade:66
  }
  ];
  
  newArr = students.map((e)=>({...e, grade:e.grade/2}));
  console.log(newArr);
  console.log(students);
  ```
  
  This outputs:
  
  <img width="322" alt="Screen Shot 2022-01-11 at 9 16 59 PM" src="https://user-images.githubusercontent.com/31994778/148998883-ce9b5844-36b1-4039-a386-642f2917f4b6.png">
  
  Here, we see that `map()` method processed each element so that grade is halved.
  
  <b>Note that original array, i.e., `students`, stays the same.</b>
  
  <b>Caveats on `map()`</b>
  
  <img width="760" alt="Screen Shot 2022-01-11 at 9 27 28 PM" src="https://user-images.githubusercontent.com/31994778/149000350-6082f42b-0760-4e06-aece-fbdfad545f48.png">

  ---
  
  
  <p id="array-for-each">
 <h2>Array.prototype.forEach()</h2>
 </p>

  <b><i>"The forEach() method executes a provided function once for each array element."</i></b>
  
  The main difference between `forEach()` and `map()` being the former won't produce a new array, and you'll be mutating the original array.
  
  <b>Example 1: (traverse and push to two arrays)</b>
  
  ```js
  const students = [
  {
    name:"Burak",
    grade:80
    
  },
  {
    name:"Sarah",
    grade:90
  },
  {
    name:"Hulusi",
    grade:44
  },
  {
    name:"Furkan",
    grade:66
  }
  ];
  
let successfulStudents = [];
let unsuccessfulStudents = [];

students.forEach((e) => {
  if(e.grade >= 80){
    successfulStudents.push(e);
    return;
  }
  unsuccessfulStudents.push(e);

});
```
  
Here, we traverse on each element of `students` array and push to either `successfulStudents` or `unsuccessfulStudents` array based on their grades.
  
  <b>The same thing could've been done with `for ... of`</b>
  
 ```js
  for(const e of students){
  if(e.grade >=80){
    successfulStudents.push(e);
    continue;
  }
  unsuccessfulStudents.push(e);
}
 ```
  
 <b>Performance-wise `for...of` seems to be faster than `forEach()`.<b>
 
 For this operation, 
   
 <img width="166" alt="Screen Shot 2022-01-15 at 11 49 38 AM" src="https://user-images.githubusercontent.com/31994778/149615904-5eacac72-287e-4b2e-943d-fd1bb5b0e977.png">

 <img width="177" alt="Screen Shot 2022-01-15 at 11 49 16 AM" src="https://user-images.githubusercontent.com/31994778/149615902-13e72624-eafc-48db-8167-4f7448678029.png">

<b>Example 2: (Traversing with element, index values)</b> 
   
<b>This is very similar to Python's enumerate</b>

```py
>>> students = [{"name":"Burak", "grade":80}, {"name":"Sarah", "grade":90}, {"name":"Hulusi", "grade":44}]
>>> 
>>> for idx, student in enumerate(students):
...     print(idx, student)
... 
0 {'name': 'Burak', 'grade': 80}
1 {'name': 'Sarah', 'grade': 90}
2 {'name': 'Hulusi', 'grade': 44}
```
   
The same can be done in JS as:
   
<img width="562" alt="Screen Shot 2022-01-15 at 12 47 12 PM" src="https://user-images.githubusercontent.com/31994778/149617446-26b102ee-a552-4bea-a3a4-09abac3bb40e.png">
   
or using `for...of`

<img width="560" alt="Screen Shot 2022-01-15 at 12 48 58 PM" src="https://user-images.githubusercontent.com/31994778/149617505-31ccc3ff-70c7-49ad-8ef6-16bf6ab576b3.png">
   
   
---
   
<p id="section5">
<h1>Section-5 Dates</h1>
</p>

<p align="center">
  
<img src="https://user-images.githubusercontent.com/31994778/149619985-1c8e9678-18d8-40d2-b194-abe693c52f77.png">
  
</p>

<b>Table Of Contents</b> |
------------ | 
[Projects](#projects)
 
 <p id="projects">
 <h2>Projects</h2>
 </p>

  <b><i>"Dates and times are very important in each programming language. We have `datetime` module in Python, and `moment` library in Javascript."</i></b>
  
  Here, I made two small projects for the sake of studying dates and `moment.js`.
  
  <h2>First Project: Formatting Date and Manipulate DOM</h2>
  
  <b>Video:</b>

https://user-images.githubusercontent.com/31994778/149664056-f3ac29f6-a876-4156-9faf-603577ad5537.mov
  
  In this project, I studied: 
  
  - ways to format a `moment` object
  - adding and subtracting date to/from another date.
  - Use Javascript's `setInterval()` method to change time displayed in the UI.

<h2>Second Project: Different Countries' Time</h2>
  
  <b>Video:</b>

https://user-images.githubusercontent.com/31994778/149664160-9a9282a5-d785-4c42-b1aa-78765a19cd9d.mov

In this project, I studied: 
  
  - Tracking time of different countries with `moment.utc()`.
  - CSS to provide UI with slick look.
  - Using `addEventListener()` method to change classes of cards with `mouseenter` and `mouseleave` events.
  
---
  
  
