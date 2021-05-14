// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

function switchCase(val) {
  let returnVal;
  switch (val) {
    case 1:
      returnVal = "alpha";
      break;
    case 2:
      returnVal = "beta";
      break;
    case 3:
      returnVal = "gamma";
      break;
    case 4:
      returnVal = "delta";
      break;
    default:
      returnVal = null;
  }
  return returnVal;
}
console.log(switchCase(4));
/// Switch-case statements use strict equality === operator

// Multiple switch case with same output

function multipleSwitchCase(val) {
  switch (val) {
    case 1:
    case 2:
    case 3:
      return "Low";
    case 4:
    case 5:
    case 6:
      return "Mid";
    case 7:
    case 8:
    case 9:
      return "High";
    default:
      return null;
  }
}
console.log(multipleSwitchCase(10));
