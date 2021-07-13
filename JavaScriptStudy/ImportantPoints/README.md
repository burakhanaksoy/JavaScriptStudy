<h1>JavaScript Study</h1>

<p align="center">
  <img width="300" height="280" src="https://user-images.githubusercontent.com/31994778/125199815-b244cd00-e270-11eb-80f2-2b391a49c243.png">
  </p>

---

<b>Table Of Contents</b> |
------------ | 
[Spread Operator](#spread) 
[Ternary Operator](#ternary)
[Objects](#objects)
[Object Creation](#object-creation)
[Inheritance and Prototype Chain](#inheritance)

<div id=spread>
<h2>... Spread operator</h2>
</div>

<h3>Usages</h3>

<h4>1 - Expansion:</h4>

<b><i>"Spread operator can be used for assigning each element inside an array to be used inside a function"</b></i>

```js
function multiplyValues(val1, val2, val3) {
  return val1 * val2 * val3;
}

const myArray = [2, 3, 4];

result = multiplyValues(...myArray);

console.log(result);
```

Here, each element inside `myArray` is assigned to `val1`, `val2`, `val3` inside `multiplyValues` function through the spread operator.

If the array contained more than three numbers, e.g. [1, 2, 3, 4], then it would still work fine, except that all four would be passed, but only the first three would be used unless you added more arguments to the function.

In this sense, the spread operator is used in the same way as `Function.prototype.apply()`.

Above usage is the same as

```js
result = multiplyValues.apply(null, myArray)

console.log(result)
```

---

<h4>2 - Deep Copy</h4>

<b><i>"Spread operator can also be used for creating shallow copies of objects."</b></i>

Say that we have 

```js
const myCredentials = {
  firstName: "Burakhan",
  age: 26,
  occupation: "Developer",
};
``` 

and

```js
cloneObj = { ...myCredentials };
```

Here, we deep copied `myCredentials` object to `cloneObj` through spread operator. This means that `cloneObj` and `myCredentials` point to different addresses in memory,
in other words, change in one doesn't mutate the other.

So, we can do something like `cloneObj.lastName = "Aksoy";`

When we console.log, we get

```js
console.log(JSON.stringify(cloneObj));
console.log(JSON.stringify(myCredentials))

// We get

{"firstName":"Burakhan","age":26,"occupation":"Developer","lastName":"Aksoy"}
{"firstName":"Burakhan","age":26,"occupation":"Developer"}
```

---

<h4>3 - Merging</h4>
<b><i>"We can use spread operator to merge different arrays and objects."</b></i>

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr3 = [...arr1, ...arr2];

console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]
```

Here, we merged arr1 and arr2 and created arr3. arr3 won't be affected by the changes in arr1 and arr2.

---

<h4>4 - Using ... Like *args in Python</h4>

<b><i>We know that in Python, `*args, **kwargs` is used to accept as many args and/or kwargs to a method as possible. A similar usage can be achieved in JS with spread.</b></i>

```js
function multiply(...values) {
  arr = [...values];

  let temp = 1;
  for (i = 0; i < arr.length; i++) {
    temp *= arr[i];
  }
  return temp;
}

val = multiply(1, 2, 3, 4);

console.log(val);

```

this results in output

```
24
```

---
<div id=ternary>
<h2>Ternary Operator</h2>
</div>

<b><i>"Ternary operators are used as an alternative to if-else conditionals. They are comprised of two or three parts."</b></i>

<h3>Syntax</h3>

`condition ? val1 : val2`

`variable = condition ? val1 : val2`

This can be translated as "assign variable to val1 if condition returns true, else assign variable to val2".

The equivalent Python code would be:

```python
variable = val1 if condition else val2
```

```python
condition = False

variable = 'Hello' if condition else 'World'

print(variable) # World
```

<h4>Handling null Values</h4>

Commonly used, here's an example:

```js
let response = {
  statusCode: 204,
  data: {
    name: "Burak",
    lastName: "Aksoy",
    age: 26,
    occupation: "Junior Developer",
    lang: "Python",
  },
};

let person = {};

person.name = response.statusCode === 200 ? response.data.name : null;

console.log(person.name); // Burak
```

<h4>Conditional Chaining</h4>

```js
function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}
```

is equal to

```js
function example(...){
    condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4
}
```

For example

```js
greetFriend = (friend) => {
  friend === "burak"
    ? console.log("hello")
    : friend === "ayse"
    ? console.log("hello")
    : console.log(`(Doesn't say hi..)`);
};

greetFriend("rifat"); // (Doesn't say hi..)
```

---

<div id="objects">
<h2>Objects</h2>
  </div>

<b><i>Everything is Object in Python, not sure if the same goes for JS. It's a very broad term, so I will write down only the most important ones.</b></i>

<b><i>"JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value.A property's value can be a function, in which case the property is known as a method."</b></i>

```py
 In JavaScript, an object is a standalone entity, with properties and type.
 Compare it with a cup, for example. A cup is an object, with properties.
 A cup has a color, a design, weight, a material it is made of, etc.
 The same way, JavaScript objects can have properties, which define their characteristics.
```

<h4>Iterating through Object's properties</h4>

<h5>Using Object.hasOwnProperty()</h5>

><b>To check whether an object has a property defined on itself and not somewhere on its prototype chain, it is necessary to use the `hasOwnProperty` method which all objects inherit from `Object.prototype`.</b>

We can iterate through an Object's properties as follows

```js
const myCar = {
  name: "Ford",
  model: "Mustang",
  year: 1969,
};

function getProperties(obj) {
  result = ``;
  for (var i in obj) {
  // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${i}: ${obj[i]}\n`;
    }
  }
  return result;
}

console.log(getProperties(myCar));
```

Prints

```
name: Ford
model: Mustang
year: 1969
```

`hasOwnProperty` is the only thing in JavaScript which deals with properties and does <b>not</b> traverse the prototype chain.

<h5>Using Object.keys()</h5>

```js
function getProperties(obj) {
  let result = ``;
  arr = Object.keys(obj); // returns an array containing objects keys ['name', 'model', 'year']
  arr.forEach((element) => {
    result += `${element}: ${obj[element]}\n`;
  });
  return result;
}

result = getProperties(myCar);

console.log(result);
```

Prints

```
name: Ford
model: Mustang
year: 1969
```

<h5>Using Object.getOwnPropertyNames()</h5>

><b>The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.</b>

```js
function getProperties(obj) {
  result = ``;
  arr = Object.getOwnPropertyNames(myCar);
  arr.forEach((i) => {
    result += `${i}: ${obj[i]}\n`;
  });

  return result;
}

result = getProperties(myCar);

console.log(result);
```

Prints

```
name: Ford
model: Mustang
year: 1969
```

---

<div id="object-creation">
<h2>Object Creation</h2>
  </div>

<b><i>"In JS, we can create objects by making assignments as well. This is an alternative for `obj = new Obj();`"</b></i>

<h4>Using Assignment</h4>

```js
person = {
  name: "Burakhan",
  lastName: "Aksoy",
  age: 26,
  lang: {
    spoken: ["English", "Turkish", "Chinese"],
    computer: ["Python", "JS"],
  },
};
```

Note that `lang` is an object inside `person` object.

<h4>Using Object.create()</h4>

><b>Objects can also be created using the Object.create() method. This method can be very useful, because it allows you to choose the prototype object for the object you want to create, without having to define a constructor function.</b>

```js
// Animal properties and method encapsulation
var Animal = {
  type: 'Invertebrates', // Default value of properties
  displayType: function() {  // Method which will display type of Animal
    console.log(this.type);
  }
};

// Create new animal type called animal1
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes
```

`<b>Objects created through Object.create(anotherObject) takes anotherObject as their immediate prototype</b>`

---

<div id="inheritance">
<h2>Inheritance and Prototype Chain</h2>
</div>

<b><i>"All objects in JavaScript inherit from at least one other object. The object being inherited from is known as the `prototype`."</b></i>

><b>When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.</b>

<b>Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain.</b>

<br>

<h4>Inheriting "Properties"</h4>


<a href="" target="_blank">When properties are searched in an object, the search starts with the object itself and climb on the prototype chain until either the property is found or the last link in the prototype chain is reached.</a>

```js
// Let's create an object o from function f with its own properties a and b:
let f = function () {
   this.a = 1;
   this.b = 2;
}
let o = new f(); // {a: 1, b: 2}

// add properties in f function's prototype
f.prototype.b = 3;
f.prototype.c = 4;

// do not set the prototype f.prototype = {b:3,c:4}; this will break the prototype chain
// o.[[Prototype]] has properties b and c.
// o.[[Prototype]].[[Prototype]] is Object.prototype.
// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null,
// by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

console.log(o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing

console.log(o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o.d); // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prototype and there is no 'd' property by default, check its prototype.
// o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined.
```

<h4>Inheriting "Methods"</h4>

<b><i>"In JavaScript any function can be added to an object in the form o a property. An inherited function acts just as another property."</b></i>

```js
person = {
  name: null,
  born: null,
  getAge: function() {
    return new Date().getFullYear() - this.born;
  },
};

let ayse = Object.create(person);

ayse.name = "Ayse";
ayse.born = 1967;

console.log(ayse.getAge());
```

Here, getAge property will be inherited from person object by 'ayse' object. `getAge` property acts dynamically for different objects that inherits from `person` object.

---

<h2>Using Prototypes in JavaScript</h2>

Every function, except for arrow, has default prototype property.

```js
function helloWorld() {
  console.log("Hello World");
}

console.log(helloWorld.prototype); // {}

someFunc = () => {
  console.log("Hi");
};

console.log(someFunc.prototype); // undefined
```

<b>Let's see what prototype chains formed when different object types created</b>

```js
var o = {a: 1};

// The newly created object o has Object.prototype as its [[Prototype]]
// o has no own property named 'hasOwnProperty'
// hasOwnProperty is an own property of Object.prototype.
// So o inherits hasOwnProperty from Object.prototype
// Object.prototype has null as its prototype.
// o ---> Object.prototype ---> null

var b = ['yo', 'whadup', '?'];

// Arrays inherit from Array.prototype
// (which has methods indexOf, forEach, etc.)
// The prototype chain looks like:
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}

// Functions inherit from Function.prototype
// (which has methods call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null
```

<div>
<img width="450" alt="Screen Shot 2021-07-11 at 4 43 18 PM" src="https://user-images.githubusercontent.com/31994778/125197813-d7810d80-e267-11eb-8567-daba99066a17.png">

<img width="450" alt="Screen Shot 2021-07-11 at 4 46 33 PM" src="https://user-images.githubusercontent.com/31994778/125197827-e36ccf80-e267-11eb-941b-5fc2d516e2b5.png">
  
</div>

<p align="center">
  <img width="474" alt="Screen Shot 2021-07-11 at 5 06 40 PM" src="https://user-images.githubusercontent.com/31994778/125198493-c980bc00-e26a-11eb-93ff-263ffea11d3b.png">
  </p>
  
  <h4>Prototyping with Object.create()</h4>
  
  In JS, `Object.create()` is one of the ways to create an object. 
  
  For example
  
  ```js
  var a = {
    someProp:'some prop'
};

  var b = Object.create(a);
  ```

creates object `a` with it's immediate prototype being `b`.

<p align="center">
  <img width="462" alt="Screen Shot 2021-07-11 at 5 26 52 PM" src="https://user-images.githubusercontent.com/31994778/125199115-68a6b300-e26d-11eb-86dd-700a1250052d.png">
</p>

---


