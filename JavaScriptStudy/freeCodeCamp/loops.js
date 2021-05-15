// Iterate with while loops
var myArray = [];
i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);

// Iterate with for loops

var myArray = [];
for (var i = 0; i < 5; i++) {
  myArray.push(i);
}
console.log(myArray);

// Iterate through odd numbers in a for loop
for (var i = 1; i < 10; i += 2) {
  console.log(i);
}

// Count backwards with a for loop
for (var i = 10; i > 0; i--) {
  console.log(i);
}

// Count backwards with a for loop
for (var i = 10; i > 0; i -= 2) {
  console.log(i);
}

// Iterate thorugh an array with a for loop
var myArray = [-1, 1, 2, 3, 4, 5, 6, 7, 8];
for (i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Nested for loops
var myList = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
var sum = 1;
function multiplyAll(list) {
  for (var i = 0; i < myList.length; i++) {
    for (var j = 0; j < myList[i].length; j++) {
      sum *= myList[i][j];
    }
  }
  return sum;
}
console.log("hello world");
console.log(multiplyAll(myList));

// Profile lookup (Coding Challenge)
var contacts = [
    {
        "firstName":'Akira',
        'lastName':'Laine',
        'number':'054322131',
        'likes':['pizza','Coding','Brownie']

    },
    {
        'firstName':'Harry',
        'lastName':'Potter',
        'number':'91238012391',
        'likes':['Hogwarts','Hermionie','Ron']

    },
    {
        'firstName':'Sherlock',
        'lastName':'Holmes',
        'number':'90103426288',
        'likes':['London','Crime','Tragedy']
    },
    {
        'firstName':'Kristian',
        'lastName':'Vos',
        'number':'007',
        'likes':['Ice cream','Waffles','Doughnuts']
        
    }
]

function lookUpProfile(name,prop){
    for(var i=0; i< contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || 'No such property'
        }
    }
    return 'No contact found...'
}

console.log(lookUpProfile('Kristian','likes'))