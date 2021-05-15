/* With ES6, we can declare variables also by using let, and const...
 *  let does not let you declare a variable twice.. ( If we declare, we get duplicate declaration error...)
 */

const greeting = {
  words: "Hello",
  number: "five",
};

greeting.message = "Hello World";
console.log(greeting);

delete greeting.message;
console.log(greeting);