const number = 0;
let result;

// number >= 50 ? (result = "Not to fifty") : (result = "It could be worse.");

// result = number >= 50 ? "Not to fifty" : "It could be worse.";

result = number === 0 ? 'You have nothing' : number < 10 ? 'You have very little' : 'You have a lot';
console.log(result);

myArray = [1,2,3,4,5];

for(i in myArray){
    console.log(myArray[i])
}