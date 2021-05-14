// comment
console.log('Hello World');
/*
Multi line comment
:))
*/

var myName = "Burak";

console.log(myName)

/* There are three ways to declare a variable in JS
var, let, const...

Differences -> var can be used throughout the whole program
-> let will only be used within the scope of declaration
-> const is a constant and can never change..
*/

var a = 10;
var b = 5;
diff = a - b;
sum = a + b;
console.log("Sum: " + sum);
console.log("Diff: " + diff);

console.log(2.0 * 2.3);

var str = 'here is a "double quote string" inside';
// var str = "here is a \"double quote string\" inside"
console.log(str)

var myStr = 'Hello world. ';
myStr += "How are you?"
console.log(myStr.length)
console.log(myStr[myStr.length - 1])

function wordBlanks(noun, adj, verb, adv) {
    result = ''
    result += adj + ' ' + noun + ' ' + verb + ' ' + adv + '.';

    return result;
}
console.log(wordBlanks('dog', 'big', 'run', 'quickly'))
console.log(wordBlanks('man', 'tall', 'run', 'slowly'))

var myArray = ["string", 23];
console.log(myArray)

// Nested array
myNestedArray = [['hi', 'world'], [23, 24]]
console.log(myNestedArray)

// Arrays are mutable, so let's try to mutate first element
myNestedArray[0] = 'mutated String'
console.log(myNestedArray[0])

// extend an array using .push() method
var myArray = [1,2,3,4]
myArray.push(5,6,7)
console.log(myArray)

var removedFromArray = myArray.pop()
console.log(myArray)
console.log(removedFromArray)

// shift function - > removes the first element of the array and returns

var array1 = [1,2,3,4,5,6]
var removed = array1.shift()
console.log(array1)
console.log(removed) //1

// unshift function -> unshift adds to the beginning, opposite of push()
var array1 = [1,2,3,4,5,6]
console.log(array1.unshift('Burak'))
console.log(array1)


