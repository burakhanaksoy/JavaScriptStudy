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
  
</div>
