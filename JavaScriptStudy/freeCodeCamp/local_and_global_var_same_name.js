var myVar = 10;

function myFunc() {
    var myVar = 5;
    console.log(myVar)
    return myVar;
}
console.log(myFunc())
// local myVar shadows global myVar...

function myfunc() {

}
console.log(myfunc())

// So, just like in Python, if a function doesn't have a return statement and called to print out on the screen, then it prints 
// 'undefined'.. This is very similar to printing out "None" in Python.

// Assignment with a returned value
function DivisibleByTwoCheck(num) {
    if (num % 2 == 0)
        return num;
}
myNum = DivisibleByTwoCheck(4)
console.log(myNum)

// Implementing queue data type with functions (Very high level)
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var myArr = [1, 2, 3, 4, 5]
console.log(JSON.stringify(myArr))
nextInLine( myArr, 6);
console.log(JSON.stringify(myArr))
