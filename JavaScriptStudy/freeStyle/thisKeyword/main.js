/* Javascript 'this' keyword refers to the object it belongs to
It has different values depending on where it is used:
Inside a method, 'this' refers to the owner object,
Alone, 'this' refers to the global object,
In a function, 'this' refers to the the global object,
In a function, in strict mode, 'this' is undefined */

// 'this' inside a method

let person = {
  firstName: "Burak",
  lastName: "Aksoy",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
};

/* In an object method, 'this' refers to the owner of the method.
So, in this example, 'this' refers to 'person' object */

console.log(person.fullName());

// 'this' inside global scope

this.garage = {
  table: "garage table",
};

console.log(this.garage.table);

// 'this' inside an object

let buraksRoom = {
  table: "buraks table",
};

console.log(buraksRoom.table);

/* Here, we can't use 'this' keyword to reach 'buraksRoom' object's table property,
because 'buraksRoom' object is a private object. So, 'this' keyword will be undefined */

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// 'this' inside a method

let myRoom = {
  table: "table in my room",
  cleanTable: function() {
    console.log(`cleaning ${this.table}`);
  },
};

myRoom.cleanTable();
// Here, 'this' refers to 'table' field inside 'myRoom' object.

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// 'this' inside a function

this.table = "window table";

const cleanTable = function(soap) {
  console.log(`cleaning ${this.table} with ${soap}`);
};

// Here, we need to use call() method, otherwise, cleanTable();, prints 'cleaning undefined'

cleanTable.call(this, "some soap");

/* Here, call() method calls 'this' object to be used in 'cleanTable' function...
We can also call cleanTable function inside 'myRoom' object*/

cleanTable.call(myRoom, "soap");

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// 'this' inside an inner function

const cleanTableTwo = function(soap) {
  let innerFunc = (_soap) => {
    console.log(`cleaning ${this.table} with ${_soap}`);
  };
  innerFunc(soap);
};

/* In this example, 'this' becomes undefined since it's enclosing scope does not have 'table' property.
 */

cleanTableTwo.call(myRoom, "soap");
cleanTableTwo.call(this, "soap");
cleanTableTwo.call(this.garage, "soap");

/* Here, we used an arrow function for 'innerFunc', because arrow functions recognize 'this' keyword,
and let's 'this' keyword to point to the outer scope of 'cleanTableTwo' object. However, a regular function
does not have this behavior. A regular function, when has a 'this' keyword, points to inside 'cleanTableTwo' object 
as it's outer scope */

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// 'this' inside a constructor

// let createRoom = function(name) {
//   this.table = `${name}'s table`;
// };
// createRoom.prototype.cleanTableThree = function(soap) {
//   console.log(`cleaning ${this.table} with ${soap}`);
// };

// jamesRoom = new createRoom("james");
// jillRoom = new createRoom("jill");

// jamesRoom.cleanTableThree("soap");
// jillRoom.cleanTableThree("soap");

/* Here, createRoom.prototype.cleanTableThree adds 'cleanTableThree' function as a method to 'createRoom' constructor,
In this way, every object created from this constructor will also have 'cleanTableThree' method */

// 'this' inside a class

class CreateRoom {
  constructor(name) {
    this.table = `${name}'s table`;
  }

  cleanTableFour(soap) {
    console.log(`cleaning ${this.table} with ${soap}`);
  }
}

jamesRoom = new CreateRoom("james");
jillRoom = new CreateRoom("jill");

jamesRoom.cleanTableFour("soap");
jillRoom.cleanTableFour("soap");

// Here, 'this' points to 'this.table' field inside the class
