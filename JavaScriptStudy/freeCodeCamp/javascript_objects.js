var ourDog = {
  name: "Buck",
  legs: 4,
  tails: 1,
  friends: ["Burak", "Ayse", "Oguz"],
};

console.log(ourDog["name"]); // Buck

// Accessing object properties with . (dot) notation

console.log(ourDog.name); // Buck
console.log(ourDog.friends[0]);

var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

var hat = testObj.hat;
var shirt = testObj.shirt;

console.log("Wears a " + hat + " and a " + shirt);

var students = {
  1: "Burak",
  2: "Ahmet",
  3: "Necla",
};
for (i in students) {
  console.log("Student " + i + " is: " + students[i]);
}

// Using dot . notation to change object property value

var myDog = {
  name: "Buck",
  age: 5,
};
console.log(myDog);
myDog.name = "Cliff";
console.log(myDog);

// Add new properties to object
myDog["legs"] = 3;
console.log(myDog);

myDog.tails = 1;
console.log(myDog);

// Delete properties from objects
delete myDog.tails;
console.log(myDog);

// hasOwnProperty(propertyName) method, returns boolean ,
// Determines whether an object has a property with the specified name.

var myObject = {
  name: "my object",
  owner: "me",
};
console.log(myObject.hasOwnProperty("age"));

// Manipulate complex objects

var myObj = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Burkahan Aksoy",
    title: "The B Man",
    release_year: 1995,
    formats: [".py", ".js"],
    gold: false,
  },
];

// Accessing nested objects
var myCar = {
  inside: {
    glove_box: "maps",
    "passenger seat": "crumbs",
  },
  outside: {
    trunk: "jack",
  },
};

var item = myCar.inside.glove_box;
console.log(item); // maps

// Accessing nested arrays
var myPlants =[
    {
        type:'flowers',
        list:[
            'rose',
            'tulip',
            'dandelion'
        ]
    },
    {
        type:'trees',
        list:[
            'fir',
            'pine',
            'birch'
        ]
    }
];

var tulip = myPlants[0].list[1];
console.log(tulip)

// Record collection (Challenge)
var collection = {
    "2548":{
        "album":'Slippery When Wet',
        'artist':'Bon Jovi',
        'tracks':[
            "Let it rock",
            "You give love a bad name"
        ]
    },
    "2468":{
        'album':'1999',
        'artist':'Prince',
        'tracks': [
            '1999',
            'Little Red Corvette'
        ]
    },
    "1245":{
        'artist':'Robert Palmer',
        'tracks':[]
    },
    '5439':{
        'album':'Abba gold'
    }
}
/* We are supposed to create an updateRecord function with parameters id, prop, and value.. It's going to update our record
collection with the property and value. If we have an empty string for the value, it should delete that property!
If we have the prop of tracks, and a track as value, it should add that track(value) to our array...
*/

var collectionCopy = collection;
function updateRecord(id, prop, value){
    if (collection[id] === undefined){
        console.log("No such record exists...")
    }else if (prop === 'album' || prop === "artist"){
        if (collection[id][prop] === ''){
            delete collection[id][prop];
        }else{
            collection[id][prop] = value;
        }
    }else if (prop === 'tracks' && !(value in collection[id].tracks)){
        if (collection[id].hasOwnProperty('tracks')){
            collection[id].tracks.push(value)
        }else{
            collection[id]['tracks'] = []
            collection[id].tracks.push(value)
        }
    }
}
// console.log(JSON.stringify(collectionCopy))
// console.log(collectionCopy)
updateRecord(1245,'tracks',"Domates biber patlican")
updateRecord(1245,'tracks',"Alla beni pulla beni")
updateRecord(54392,'artist','Burakhan')
updateRecord(5439,'artist','ABBA')
console.log(collection)