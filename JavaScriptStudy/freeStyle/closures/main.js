var addTo = function(passed) {
  var add = function(inner) {
    return inner + passed;
  };

  return add;
};

addTwo = addTo(2);

console.log(addTwo(3));

// As we can see, closures are functions that contains inner functions.

var function1 = function() {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
  setTimeout(function() {
    console.log("timeout called");
  }, 2000);
};

// function1();

const function2 = function() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000 * i);
  }
};

function2();

const myFunction = function() {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
};

// myFunction();
