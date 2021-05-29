// Return an array of all the values in the ages array that are 18 or over:

ages = [22, 33, 17, 11, 24, 76, 2];

// newArr = ages.filter((age) => {
//   return age >= 18;
// });

// console.log(newArr);

// Return an array of all the values in the ages array that are a specific number or over:

// Say the specific number is 10

// const val = 12;
// newArr = ages.filter((age) => {
//   return age >= val;
// });

// console.log(newArr);

// Find out how many times an element occurs in an array

let dict = {};
const myArray = ["a", "b", "a", "a", "c", "d", "b"];

myArray.forEach(function(item) {
  if (dict[item]) {
    dict[item] += 1;
  } else {
    dict[item] = 1;
  }
});

console.log(dict);
