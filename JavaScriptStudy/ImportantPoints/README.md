<h1>JavaScript Study</h1>

<b>Table Of Contents</b> |
------------ | 
[Spread Operator](#spread) 
[Ternary Operator](#ternary)

<div id=spread>
<h2>... Spread operator</h2>
</div>

<h3>Usages</h3>

<h4>1 - Expansion:</h4>

<b><i>"Spread operator can be used for assigning each element inside an array to be used inside a function"</b></i>

```js
function multiplyValues(val1, val2, val3) {
  return val1 * val2 * val3;
}

const myArray = [2, 3, 4];

result = multiplyValues(...myArray);

console.log(result);
```

Here, each element inside `myArray` is assigned to `val1`, `val2`, `val3` inside `multiplyValues` function through the spread operator.

If the array contained more than three numbers, e.g. [1, 2, 3, 4], then it would still work fine, except that all four would be passed, but only the first three would be used unless you added more arguments to the function.

In this sense, the spread operator is used in the same way as `Function.prototype.apply()`.

Above usage is the same as

```js
result = multiplyValues.apply(null, myArray)

console.log(result)
```

---

<h4>2 - Deep Copy</h4>

<b><i>"Spread operator can also be used for creating shallow copies of objects."</b></i>

Say that we have 

```js
const myCredentials = {
  firstName: "Burakhan",
  age: 26,
  occupation: "Developer",
};
``` 

and

```js
cloneObj = { ...myCredentials };
```

Here, we deep copied `myCredentials` object to `cloneObj` through spread operator. This means that `cloneObj` and `myCredentials` point to different addresses in memory,
in other words, change in one doesn't mutate the other.

So, we can do something like `cloneObj.lastName = "Aksoy";`

When we console.log, we get

```js
console.log(JSON.stringify(cloneObj));
console.log(JSON.stringify(myCredentials))

// We get

{"firstName":"Burakhan","age":26,"occupation":"Developer","lastName":"Aksoy"}
{"firstName":"Burakhan","age":26,"occupation":"Developer"}
```

---

<h4>3 - Merging</h4>
<b><i>"We can use spread operator to merge different arrays and objects."</b></i>

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr3 = [...arr1, ...arr2];

console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]
```

Here, we merged arr1 and arr2 and created arr3. arr3 won't be affected by the changes in arr1 and arr2.

---

<h4>4 - Using ... Like *args in Python</h4>

<b><i>We know that in Python, `*args, **kwargs` is used to accept as many args and/or kwargs to a method as possible. A similar usage can be achieved in JS with spread.</b></i>

```js
function multiply(...values) {
  arr = [...values];

  let temp = 1;
  for (i = 0; i < arr.length; i++) {
    temp *= arr[i];
  }
  return temp;
}

val = multiply(1, 2, 3, 4);

console.log(val);

```

this results in output

```
24
```

---
<div id=ternary>
<h2>Ternary Operator</h2>
</div>

<b><i>"Ternary operators are used as an alternative to if-else conditionals. They are comprised of two or three parts."</b></i>

<h3>Syntax</h3>

`condition ? val1 : val2`

`variable = condition ? val1 : val2`

This can be translated as "assign variable to val1 if condition returns true, else assign variable to val2".

The equivalent Python code would be:

```python
variable = val1 if condition else val2
```

```python
condition = False

variable = 'Hello' if condition else 'World'

print(variable) # World
```

<h4>Handling null Values</h4>

Commonly used, here's an example:

```js
let response = {
  statusCode: 204,
  data: {
    name: "Burak",
    lastName: "Aksoy",
    age: 26,
    occupation: "Junior Developer",
    lang: "Python",
  },
};

let person = {};

person.name = response.statusCode === 200 ? response.data.name : null;

console.log(person.name); // Burak
```

<h4>Conditional Chaining</h4>

```js
function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}
```

is equal to

```js
function example(...){
    condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4
}
```

For example

```js
greetFriend = (friend) => {
  friend === "burak"
    ? console.log("hello")
    : friend === "ayse"
    ? console.log("hello")
    : console.log(`(Doesn't say hi..)`);
};

greetFriend("rifat"); // (Doesn't say hi..)
```


