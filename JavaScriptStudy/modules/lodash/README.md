<h1>Shallow/Deep Copy & Lodash cloneDeep</h1>

<p align="center">
<img width="650" src="https://user-images.githubusercontent.com/31994778/129945402-2a7c0628-524b-4350-b516-fc7e7f951cc7.png">
 </p>
 
 <b><i>"Mutation's not cool bro."</i></b>
 
 ٩(◕‿◕｡)۶
 
 ---
 
<b>Table Of Contents</b> |
------------ | 
[Foreword](#foreword)
[Introduction to Shallow & Deep Copying](#intro)
[Copying with ... Spread Operator](#spread)
[cloneDeep](#clone-deep)

---

Today, I want to talk about one of the most important concepts in programming. Shallow vs Deep copy.

<div id="foreword">
<h2>Foreword</h2>
</div>

><i>"In object-oriented programming, object copying is creating a copy of an existing object, a unit of data in object-oriented programming. The resulting object is called an object copy or simply copy of the original object. Copying is basic but has subtleties and can have significant overhead."</i>

[Reference](https://en.wikipedia.org/wiki/Object_copying)

<div id="intro">
<h2>Introduction to Shallow & Deep Copying</h2>
</div>

As far as I'm concerned, there are three ways to copy an object. These are shallow copying, deep copying, and , from what I recently learned, combination of deep and shallow copying.

<h3>Shallow Copy</h3>

Shallow copy is a copy that points to the same reference as the original object. Using it is faster than deep copying, however, this comes with the risk of mutation.

Let's take the following example

```py
>>> original_list = list(range(1,21))
>>> shallow_copy_list = original_list
>>> shallow_copy_list
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
>>> 
```

Everything seems fine for now. Now let's try to remove odd numbers from `shallow_copy_list`

```py
>>> for i,v in enumerate(shallow_copy_list):
...     if v % 2 == 1:
...             del shallow_copy_list[i]
... 
>>> shallow_copy_list
[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

Now, let's print `original_list`

```py
>>> original_list
[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
>>> 
(⌣_⌣”)
```

As you can see, the change we made in `shallow_copy_list` mutated `original_list`.

This can cause lot's of problems.

In situations like these, we can resort to deep copying.

---

<h3>Deep Copy</h3>

Deep copying creates a new object that is dereferenced from the copied object.

This is slower due to being recursive.

Any change in newly created object won't be reflected in the original object.

```py
>>> import copy
>>> 
>>> original_list = list(range(1,20))
>>> deep_copied_list = copy.deepcopy(original_list)
>>>
>>> original_list is deep_copied_list
False
```

Of course, we can tell they refer to different objects using `is`, but let's implement the previous example here.

```py
>>> for i,v in enumerate(deep_copied_list):
...     if v % 2 != 0:
...             del deep_copied_list[i]
... 
>>> 
>>> deep_copied_list
[2, 4, 6, 8, 10, 12, 14, 16, 18]
>>> 
>>> original_list
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
>>> 
```

Awesome ツ

---

<h3>Combination</h3>

<div id="spread">
<h2>Copying with ... Spread Operator</h2>
</div>

For some reason I don't know. Combination of shallow and deep copying is implemented. An example language is JavaScript.

In JavaScript, spread operator `...` is used to copy objects. It copies non-nested fields of an object by deep copying, and nested fields by shallow copying.

My guess for this behavior is that deep copying nested objects could introduce performance problems, due to being recursive.

```js
let originalList = [
    "Some Text",
    {
      name: "Burakhan",
      lastName: "Aksoy",
      favoriteSong: {
        name: "Hung Up",
        artist: "Madonna",
        year: 2005,
        album: "Confessions on a Dance Floor",
      },
    },
  ];
  // combined copy with spread operator
  let copiedList = [...originalList];
  // Changing a nested item, this will reflect on the original list
  copiedList[1].favoriteSong = {
    name: "Somebody to Love",
    artist: "Jefferson Airplane",
    year: 1967,
    album: "Surrealistic Pillow",
  };
  // Changing a non-nested item, this won't reflect on the original list
  copiedList[0] = 'Changed Text';
  // print originalList to see mutation
  console.log(originalList);
```

Prints

```
[
  'Some Text',
  {
    name: 'Burakhan',
    lastName: 'Aksoy',
    favoriteSong: {
      name: 'Somebody to Love',
      artist: 'Jefferson Airplane',
      year: 1967,
      album: 'Surrealistic Pillow'
    }
  }
]
```

As we can see, `'Some Text'` didn't change as it was deep copied, however, `favoriteSong` nested object was mutated as it was shallow copied.

---

<div id="clone-deep">
<h2>cloneDeep</h2>
</div>

In order to refrain from such situation, we can use lodash's cloneDeep.

