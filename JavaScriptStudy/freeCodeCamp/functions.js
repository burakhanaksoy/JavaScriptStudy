//  Functions allow us to create reusable codes.

function myFunction() {
    return 'Hello world'
}

console.log(myFunction())
console.log(myFunction())
console.log(myFunction())
console.log(myFunction())
console.log(myFunction())

function argsFunction(a, b) {
    console.log(a - b)
}
argsFunction(10, 5)