var fruits = ["apple", "orange", "banana"];

// function myFunction(val) {
//   console.log(val);
// }

// fruits.forEach((item) => {
//   console.log(item);
// });

// Get the sum of all values in the array...

/* var myArray = [11, 3, 2, 6];
let sum = 0;
myArray.forEach((item) => {
  sum += item;
});
console.log(sum); */

// For each element in the array: update the value with 10 times the original value
var myArray = [11, 3, 2, 6];

myArray.forEach((item, index, arr) => {
  arr[index] = item * 10;
});
console.log(myArray);
