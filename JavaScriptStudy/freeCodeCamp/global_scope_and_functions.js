// Scope refers to the visibility of variables.. Varibles that are defined outside of the funciton block is of global scope..
// Global scope means they can be seen everywhere in our JS code..

// var myArray = [1,2,3] // object
// var myArray = 1 // number
// var myArray = true // boolean
// var myArray = undefined; // undefined
// var myArray = 2.5 // number
// var myArray = null; //null
// console.log(typeof myArray)
// console.log(myArray)

var myGlobalVar = 10;

function myFunction() {
    var myVar = 0;
}
myFunction()

if (typeof myGlobalVar != "undefined") {
    console.log("myGlobalVar is global!");
}

if (typeof myVar != "undefined") {
    console.log("myVar is global!")
} else {
    console.log("myVar is not global!")
}

//  Yani sonuc olarak eger bir fonksiyon icerisindeysen her zaman "var" keyword'unu kullan