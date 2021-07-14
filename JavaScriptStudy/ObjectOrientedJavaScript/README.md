<h1>JavaScript OOP</h1>

<p align="center">
  <img width="300" height="280" src="https://user-images.githubusercontent.com/31994778/125199815-b244cd00-e270-11eb-80f2-2b391a49c243.png">
  </p>

---

<b><i>"Object oriented programming (OOP) knowledge is an essential skill that every software engineer, especially working with programming languages like Python, Java, C#, Ruby, C++ and many more, must have."</b></i>

<b>OOP is around for a long time, and unlike many frameworks, it doesn't get old and replaced by an alternative, due to not being a programming language, but being a programming paradigm.</b>


<b>Table Of Contents</b> |
------------ | 
[Four Principles of OOP](#principles) 
[Objects](#objects)
[Value Types & Reference Types](#value-reference)
[Adding and Removing Properties](#adding-removing-properties)
[Enumerating Properties](#enumerating-properties)
[Abstraction](#abstractionn)
[Getters and Setters](#get-and-set)
[Making a Small Stopwatch App](#stopwatch)

<div id="principles">
<h2>Four Principles of OOP</h2>
  
  <p align="center">
    <img width="400" src="https://user-images.githubusercontent.com/31994778/125443241-d62e46c1-1fdd-4d75-9e33-c5a5e2b169c2.png"/>
  </p>
  
  <h3>Encapsulation</h3>
  
  <b><i>"Encapsulation can be defined as grouping related variables and functions into objects."</b></i>
  
  <p align="center">
<img width="400" alt="Screen Shot 2021-07-13 at 2 23 44 PM" src="https://user-images.githubusercontent.com/31994778/125443864-7a1dc71b-d0db-4e3f-ab3f-392b1294d07e.png">
  </p>
  
  Let's look at the code below
  
  ```js
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary * overtime * rate;
}
  ```
  
  This code is a procedural coding example. The disadvantages of this style of coding are:
  
  - <b>High coupling:</b> Parameters and `getWage` function are highly coupled.
  - <b>Not Scalable:</b> This code has to be defined for each employee, e.g., employee 'burak', 'ahmet', 'ayse' must all redefine `baseSalary`, `overtime`, and `rate` variables.
  
  Let'us now consider the Object oriented version:
  
  ```js
  let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function() {
    this.baseSalary * this.overtime * this.rate;
  },
};
  ```
  
  As it is seen here, `getWage` method and other variables are decoupled.
  
  <p align="center">
  <img width="550" alt="Screen Shot 2021-07-13 at 2 44 44 PM" src="https://user-images.githubusercontent.com/31994778/125446242-f51494bf-864a-4e70-a632-87400a740d84.png">
  </p>
  
  The fewer the number of parameters passed to a function, the easier it is to use and maintain that function.

<h3>Abstraction</h3>
  
  <p align="center">
    <img width="400" alt="Screen Shot 2021-07-13 at 2 55 29 PM" src="https://user-images.githubusercontent.com/31994778/125447739-e4fdb332-4075-4832-828f-ed1d8f082b3d.png">
  </p>

  <b><i>"Abstraction is a way of abstracting a part of code so that the part abstracted away is hidden from the user / maintainer of that code. The code works behind the scenes without user interference, leading to two important things"</b></i>

  1. It is easier to understand and use the code.
  2. It is harder to break the code since the most important parts are abstracted away from the user / maintainer.
  
  Just like a computer.. It has a complex structure inside with lots of cabling, electronic components with specific voltage values.. <b>But a user doesn't have to know that to use the computer.</b>
  
  <h3>Inheritance</h3>
  
  <b><i>"Inheritance is a mechanism that allows us to eliminate redundant/repeating code."</b></i>
  
  A good example for this would be HtmlElements. For example, Select, textbox and checkbox elements are all HTML elements and they have properties like `hidden`, and `innerHtml` and methods like `focus()` and `click()`.
  
  So, it makes every sense to define a HtmlElement object and let `select`, `textbox` and `checkbox` inherit properties and methods from it.
  
  <p align="center">
    <img width="450" alt="Screen Shot 2021-07-13 at 3 05 15 PM" src="https://user-images.githubusercontent.com/31994778/125448906-764bce20-419b-4aac-a0bb-defe9b735141.png">
  </p>
  
 <h3>Polymorphism</h3>
  
  <b><i>"Polymorphism means multi form. It makes sense as it is used for changing / altering the parameters that a function takes."</b></i>
  
  In OOP, polymorphism is a technique that allows you to get rid of long if-else or switch-case statements.
  
  Let's say we have three HTML elements, `select`, `textbox` and `checkbox`. They'll all have a `render()` method.
  
  This method can be used as element.render() if we define render() methods inside these elements, specific to these elements.
  
  <p align="center">    
  <img width="450" alt="Screen Shot 2021-07-13 at 3 11 38 PM" src="https://user-images.githubusercontent.com/31994778/125451041-f822044b-7e63-44ce-b7df-eee17c24e4a5.png">    
  </p>
  
  Then, we can use this render() method as `element.render()`
  
  However, if we don't use polymorphism, then we might have to do something like this
  
  <p align="center">
  <img width="450" alt="Screen Shot 2021-07-13 at 3 26 24 PM" src="https://user-images.githubusercontent.com/31994778/125451297-afd979c3-b27a-430d-bd9b-4e41de5041a9.png">
  </p>

  and, of course, this is bad...
  
  <h3>Summary</h3>
  
  - Encapsulation: Group related properties and functions together. (Reduce complexity + increase reusability)
  - Abstraction: Hide the details and complexity. (Reduce complexity + Isolate the impact of change)
  - Inheritance: Eliminate redundant code.
  - Polymorphism: Refactor ugly switch / case statements.
  

---

  <div id="objects">
  <h2>Objects</h2>
  </div>
  
  <h3>Object Literals</h3>
  
  Object literal is a simple way to define an object. For example:
  
  ```js
  const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2,
  },
  draw: function() {
    console.log("draw");
  },
};
  ```
  
  The circle object has properties `radius`, `location`. It has a method `draw`.
  
  ---
  
  <h3>Factory</h3>
  
  Factories are used to create objects.
  
  ```js
  // Factory function
function createCircle(radius) {
  return {
    radius,
    location: {
      x: 1,
      y: 2,
    },
    draw: function() {
      console.log("draw");
    },
  };
}


let myCircle = createCircle(1);
  ```
  
  With this code, we created a `myCircle` object from `createCircle(radius)` function.
  
  <p align="center">
  <img width="448" alt="Screen Shot 2021-07-13 at 6 06 22 PM" src="https://user-images.githubusercontent.com/31994778/125476377-18ab342c-9410-4fdf-bb0d-b05087a30ba2.png">
  </p>
  
  <h3>Constructors</h3>
  
  We can also create `myCircle` object with a `Constructor Function`.
  
  <b>The naming convention used for a constructor is different. We start with first letter upper-case</b>
  
  ```js
  // Constructor Function

function Circle(radius) {
  this.radius = radius;
  (this.location = {
    x: 1,
    y: 2,
  }),
    (this.draw = function() {
      console.log("draw");
    });
}

let circle = new Circle(1);
  ```
  
  Here, we created `circle` object by using `Circle` constructor.
  
  ><b>Every object has a `constructor` property which references the constructor function that is used to create that object.</b>
  
  ---
  
  <div id="value-reference">
  <h2>Value Types & Reference Types</h2>
  </div>
  
  <p align="center">
    <img width="500" alt="Screen Shot 2021-07-13 at 6 30 34 PM" src="https://user-images.githubusercontent.com/31994778/125480626-b8fa2433-2e37-43af-aaf9-526a8bccbbd7.png">
  </p>
  
  This is the same as `Pass by value & pass by reference`.
  
  ```js
  let x = 10;

let y = x;

x = 20;

console.log(x); // 20
console.log(y); // 10
  ```
  
  ```js
  let x = { value: 10 };

let y = x;

x.value = 20;

console.log(x); // { value: 20 }
console.log(y); // { value: 20 }
  ```
  
  ><b>Here, as you can see, when x and y are primitive types, i.e., value types, change in x doesn't mutate y. However, when they are reference types, change in x is reflected on y.</b>
  
  <p align="center">
  <img width="500" alt="Screen Shot 2021-07-13 at 6 46 45 PM" src="https://user-images.githubusercontent.com/31994778/125483498-4f336cc6-2888-48dc-a6ef-e0a30d1ed4e7.png">
    </p>
  
  In the latter case, both x and y point to the same place in the memory. So change in one is reflected on the other as they are referencing same memory location.
  
   <p align="center">
  <img width="500" alt="Screen Shot 2021-07-13 at 6 51 43 PM" src="https://user-images.githubusercontent.com/31994778/125484294-9878f356-d1d4-4ed8-a96e-306c13312983.png">
    </p>
  
  ---
  
  <div id="adding-removing-properties">
  <h2>Adding and Removing Properties</h2>
  </div>
  
  <b><i>"Objects in JavaScript are dynamic, meaning that we can add/remove their properties."</b></i>
  
  ```js
  function person(name, lastName, age) {
  return {
    name,
    lastName,
    age,
  };
}

let burak = person("Burak", "Aksoy", 26);

burak.occupation = "Junior Developer";

console.log(burak);

/*
{
  name: 'Burak',
  lastName: 'Aksoy',
  age: 26,
  occupation: 'Junior Developer'
}
*/
```
  
  We can delete properties by
  
  `delete`

  ```js
  function person(name, lastName, age) {
  return {
    name,
    lastName,
    age,
  };
}

let burak = person("Burak", "Aksoy", 26);

burak.occupation = "Junior Developer";

delete burak.age;

console.log(burak); // { name: 'Burak', lastName: 'Aksoy', occupation: 'Junior Developer' }
  ```
  
  ---

  <div id="enumerating-properties">
  <h2>Enumerating Properties</h2>
  </div>
  
  ```js
  for (let key in burak) {
  console.log(key);
}
/*
name
lastName
occupation
*/
  ```
  ```js
  for (let key in burak) {
  console.log(`${key}: ${burak[key]}`);
}

/*
name: Burak
lastName: Aksoy
occupation: Junior Developer
*/
  ```
  
  We can enumerate with that key and take the value with obj[key].
  
  We can also get only properties (not methods) by
  
  ```js
  for (let key in burak) {
  if (typeof burak[key] !== "function") {
    console.log(`${key}: ${burak[key]}`);
  }
}
  ```
  
  Look whether a property inside an object by `if(prop in obj)`
  
  ```js
  if ("occupations" in burak) {
  console.log("Yes"); // Yes
}
  ```
  
  ---
  
  <div id="abstractionn">
  <h2>Abstraction</h2>
  </div>
  
  Let's say that we have a method inside our object that we want to hide from user.
  
  ```js
  function Circle(radius) {
  this.radius,
    (this.location = {
      x: 1,
      y: 1,
    });
  this.idealLocation = function() {
    // ... some logic here
  };
  this.draw = function() {
    console.log("draw");
  };
}
```
  
  Here, I have `idealLocation` method inside my constructor function. However, a user can easily reach `idealLocation` method. What can we do to hide it? Because if this method or `location` property is accessed and changed by the user, then it will mess the object up :))
  
  <p align="center">
    <img width="450" alt="Screen Shot 2021-07-13 at 8 03 10 PM" src="https://user-images.githubusercontent.com/31994778/125494989-9a5bdbd2-cb2b-41b4-ac28-bc4b5f359acc.png">
  </p>
  
  <h3>Private Properties and Methods</h3>
  
  ```js
  function Circle(radius) {
  this.radius;
  let defaultLocation = {
    x: 1,
    y: 1,
  };
  let getIdealLocation = function() {
    // ... some logic here
    defaultLocation = {
      x: 0,
      y: 0,
    };
  };
  this.draw = function() {
    getIdealLocation();

    console.log(defaultLocation);
  };
}

let myAnotherCircle = new Circle(1);

myAnotherCircle.draw();
  ```
  
  Here, we changed this keyword with let for some properties and methods. We only did these for props and methods that we want to hide from the user.
  
  <p align="center">
    <img width="567" alt="Screen Shot 2021-07-13 at 8 45 24 PM" src="https://user-images.githubusercontent.com/31994778/125500616-357ad692-ed07-4def-8535-f62e8c6338fa.png">
  </p>
  
  As it is seen here, the user can only access draw method and radius property.
  
  ---
  
  <div id="get-and-set">
  <h2>Getters and Setters</h2>
  </div>
  
  From the previous example, we see that we can't reach `defaultLocation`. But what if I want to get it with a getter? or set it with a setter?
  
  Using `Object.defineProperty()` method is the way to go!
  
  ```js
  function Circle(radius) {
  this.radius;
  let defaultLocation = {
    x: 1,
    y: 1,
  };
  let getIdealLocation = function() {
    // ... some logic here
    defaultLocation = {
      x: 0,
      y: 0,
    };
  };
  this.draw = function() {
    getIdealLocation();

    console.log(defaultLocation);
  };

  Object.defineProperty(this, "defaultLocation", { // Here, we used 'this'. Always use 'this'..
    get: function() {
      return defaultLocation;
    },
    set: function(val) {
      if (!val.x || !val.y) {
        throw new Error("Invalid location");
      }
      defaultLocation = val;
    },
  });
}

const myAnotherCircle = new Circle(1);

console.log(myAnotherCircle.defaultLocation); // { x: 1, y: 1 }

myAnotherCircle.defaultLocation =1; // Throws error

console.log(myAnotherCircle.defaultLocation); // Doesn't execute
  ```
  <p align="center">
    <img width="446" alt="Screen Shot 2021-07-13 at 9 16 09 PM" src="https://user-images.githubusercontent.com/31994778/125504280-89627e23-fcf0-49cc-8a20-02523d24ced9.png">
  </p>
  
  ---
  
  <div id="stopwatch">
  <h2>Making a Small Stopwatch App</h2>
  </div>
  
  Let's make a small stopwatch application that has `start`, `stop` functions.
  
  ```js
  function Stopwatch() {
  let time = 0;
  let endTime = 0;
  let timeElapsed = 0;
  let startFlag = false;
  let stopFlag = false;

  this.start = function() {
    if (startFlag) {
      throw new Error("Stopwatch already started");
    }
    time = performance.now();
    startFlag = true;
    stopFlag = false;
  };

  this.stop = function() {
    if (stopFlag) {
      throw new Error("Stopwatch is not started");
    }
    endTime = performance.now();
    stopFlag = true;
    startFlag = false;
    timeElapsed = endTime - time;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      console.log(`Time elapsed: ${timeElapsed / 1000}s`);
    },
  });
}
  ```
  
  Here, the end user cannot tinker with `time`, `endTime`, `timeElapsed`, `startFlag`, `stopFlag` properties. This is very important because only `start()` and `stop()` methods should be changing them.
  
  As a result, we have:
  
  <p align="center">
    <img width="443" alt="Screen Shot 2021-07-14 at 7 38 11 AM" src="https://user-images.githubusercontent.com/31994778/125562069-f403ce18-24a9-40de-ac24-d6ab353fa8a1.png">
    <h1 align="center">🥳</h1>
  </p>
  