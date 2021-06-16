/* call, apply, and bind methods let's us borrow functionalities from other objects,
in this way, we can create mixins, multiple inheritance */

// using 'call' method

let add = function(c) {
  console.log(this.a + this.b + c);
};

obj = {
  a: 2,
  b: 3,
};

add.call(obj, 4); // prints 9

/* Here, add function is not a part of 'obj' object and using 'call' method
we let 'obj' object to borrow 'add' function and use it */

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

let someFunc = function() {
  console.log([].slice.call(arguments));
};

someFunc(1, 2, 3);

// Here, [].slice.call(arguments) will let arguments object use the 'slice' method of 'array' object

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// We can also use call() method for letting a sub constructor using a base constructor's method

let mammal = function(legs) {
  this.legs = legs;
};

let cat = function(legs, isDomesticated) {
  mammal.call(this, legs);
  this.isDomesticated = isDomesticated;
};

lion = new cat(4, false);

console.log(lion); // prints cat { legs: 4, isDomesticated: false }

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// using 'apply' method

/* call() method is applied to objects, however, apply() method is applied to arrays,
for example, we use call method on a function to pass object to that function, on the other hand,
we use apply method on a function to pass array to that function */

const person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

fullName = function(city, country) {
  console.log(this.firstName, this.lastName, city, country);
};

burakhan = person("Burakhan", "aksoy");

fullName.apply(burakhan, ["Istanbul", "Turkey", "World"]);

// Finding minimum of args

let numArray = [1, 2, 3, -2];

// console.log(Math.min(numArray)); // This gives error becase Math.min only accepts arguments

// Then we do like this

console.log(Math.min.apply(null, numArray));

// Here, we don't need to pass an object to Math.min() method

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// 'bind' method

let button = function(content) {
  this.content = content;
};

button.prototype.click = function() {
  console.log(`${this.content} clicked`);
};

const addButton = new button("add");

const newAddButton = addButton.click.bind(addButton);

newAddButton();

let clickButton = function() {
  console.log(`${this.content} clicked`);
};

clickButton.call(addButton);

console.log(newAddButton); // prints '[Function: bound ]'

/* Here, we see that bind() method returns a new function whose 'this' value is set to the scope of 'button' object */
