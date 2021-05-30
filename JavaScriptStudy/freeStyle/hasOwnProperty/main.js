var myVar = {
  name: "Burak",
};

console.log(Object.prototype.hasOwnProperty.call(myVar, "name"));
console.log(myVar.hasOwnProperty("name"));
