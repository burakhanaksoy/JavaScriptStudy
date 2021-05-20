// condition ? statement-if-true : statement-if-false;

// function checkEqual(a, b) {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Instead of using like this, we can simply do

function checkEqual(a, b) {
  return a === b ? true : false;
  // return a === b;
}

console.log(checkEqual(10, 10));

// Multiple conditional ternary operator
function checkSign(a) {
  return a < 0 ? "negative" : a > 0 ? "positive" : "zero";
}

console.log(checkSign(-1));
