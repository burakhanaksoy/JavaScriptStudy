// If statements are used to make a decision in the code
function trueOrFalse(isTrue) {
  if (isTrue) {
    return "Yes, it's true..";
  } else {
    return "No, it's false..";
  }
}

console.log(trueOrFalse(false));

// if statement with equal == sign
function myFunc(val) {
  if (val == 12) {
    return "Value is 12..";
  } else {
    return "Value is not 12..";
  }
}
console.log(myFunc(122));

// Comparisons with the "strict equality operator"
/*
Shown with '==='
strict equality operator does not do the type conversion, so 3 != '3'
but equality operator does the type conversion, so 3 == '3'
*/

function testEqualityOperators(val) {
  if (val == "12") {
    // returns true even if the val is 12
    return "Value is '12'";
  } else if (val === 12) {
    // returns true only if the val is 12
    return "Value is 12";
  }
}
console.log(testEqualityOperators(12));

console.log(3 === 3); // returns true
console.log(3 == "3"); // returns true
console.log(3 === "3"); // returns false
// With double equals sign '==', the string would be converted to a number and then the comparison occurs!

// Strict inequality operator -->> !==
function strictInequality(val) {
  if (val !== 17) {
    return "Different than 17";
  } else {
    return "Equal to 17";
  }
}
console.log(strictInequality("17"));

// Logical and operator => &&
function logicalAnd(val) {
  if (val < 20 && val > 10) {
    return "Value is " + val;
  } else {
    return "Out of bounds!";
  }
}
console.log(logicalAnd(19));

// Logical or operator => ||
function logicalOr(val, success) {
  if (success || val > 0) {
    return "passed if statement!";
  } else {
    return "inside else block!";
  }
}
console.log(logicalOr(1, false));

// Chained if-else statements
function chainedIfElse(val) {
  if (val < 5) {
    return "Tiny";
  } else if (val < 10) {
    return "Small";
  } else if (val < 15) {
    return "Medium";
  } else if (val < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(chainedIfElse(15));

// Golf game
var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0];
  } else if (par - strokes >= 2) {
    return names[1];
  } else if (par - strokes === 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else if (strokes - par >= 3) {
    return names[6];
  }
}
console.log(golfScore(3, 2));

// one-liner function

function lessThan(a, b) {
  return a < b;
}
console.log(lessThan(20, 20)); // false
