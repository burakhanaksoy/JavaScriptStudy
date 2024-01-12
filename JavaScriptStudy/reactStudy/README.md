<h1>React JS</h1>

![React Logo](images/React_Logo_SVG.svg.png)

- [1. Introduction to React](#1-introduction-to-react)
  - [1.1. File Structure](#11-file-structure)
  - [1.2. Virtual DOM](#12-virtual-dom)
    - [1.2.1. Reconciliation](#121-reconciliation)
## 1. Introduction to React

- Developed by Facebook.
- One of the trifecta (React, Angular, Vue).
- Uses functional components to render DOM dynamically.
- Single page application.
- Only rerenders those parts of the page that have changed, avoids unnecessary rerendering of unchanged DOM elements.

### 1.1. File Structure

File structure might change from one project to another. However, what we use in the current project is somewhat looks like this,

```
api/
  APIUtils.js
  APIUtils.test.js
  ProfileAPI.js
  UserAPI.js
components/
  Avatar.js
  Avatar.css
  Feed.js
  Feed.css
  FeedStory.js
  FeedStory.test.js
```

This is also supported by [react's official documentation](https://legacy.reactjs.org/docs/faq-structure.html).

### 1.2. Virtual DOM

![Virtual DOM and React](images/virtual_real_DOM.jpeg)

DOM(Document object model) is a model that represents HTML content of a website. The browser compiles the HTML code to create tree of objects, which is called DOM.

This model restructures the HTML code as nodes. Through this representation, developers are allowed to manipulate the HTML content of a website.

```js
function disableInput() {
    var inputElement = document.getElementById("myInput");
    inputElement.disabled = true;
    }
```

Here, this javascript function selects `myInput` element from `document` and disables it. Here, document refers to the `DOM`.

`Virtual DOM` is the lightweight version of the real DOM, which works as an API to make changes on the real DOM.

The main reasons why we use Virtual DOM are:
- It's a lightweight version of DOM, holds less space.
- It makes changes in DOM as effectively as possible, hence increasing the app performance.
  
![A working digital clock implementation with react code](images/how-does-virtual-dom-work-in-react.gif)

#### 1.2.1. Reconciliation
React uses a diffing algorithm to determine when to update real DOM. This is called `reconciliation`. 

Find more on reconciliation [here](https://legacy.reactjs.org/docs/reconciliation.html).
