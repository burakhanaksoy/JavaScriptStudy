// // // Const

// // const person = {
// //     name:"Burak",
// //     age:23
// // }

// // console.log(person)

// // // You can change the fields inside const
// // person.name = "Ahmet";
// // person.age = 24;
// // console.log(person)

// // // You cannot reassign with const

// // person = {} // app.js:15 Uncaught TypeError: Assignment to constant variable.

// // // You cannot assign const to undefined

// // const cat; // Uncaught SyntaxError: Missing initializer in const declaration

// // let myName;
// // let myAge;

// // console.log(myName, myAge);

// let strings;
// const willBeListOfStrings = true;

// if (willBeListOfStrings) {
//   strings = ["hello", "world"];
// } else {
//   strings = "hello";
// }

// console.log(strings);

// const myH1 = document.querySelector("h1");

// myH1.classList.add('active')

const info = {
  name: "Burakhan Aksoy",
  age: 26,
  job: "python developer",
  location: "Istanbul",
};

let listView = "<ul>";

for (key of Object.keys(info)) {
  listView += `<li>${key}: ${info[key]}</li>`;
}
listView += "</ul>";

document.body.innerHTML += listView;

const listItems = document.querySelectorAll("li").forEach((e) => {
    e.addEventListener("mouseenter", () =>{
        e.classList.add('active');
    });

    e.addEventListener("mouseleave", () =>{
        e.classList.remove('active');
    });
});

