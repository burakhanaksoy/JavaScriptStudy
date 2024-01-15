<h1>React JS</h1>

![React Logo](images/React_Logo_SVG.svg.png)

- [1. Introduction to React](#1-introduction-to-react)
  - [1.1. File Structure](#11-file-structure)
  - [1.2. Virtual DOM](#12-virtual-dom)
    - [1.2.1. Reconciliation](#121-reconciliation)
- [2. Small React Projects \& Hooks](#2-small-react-projects--hooks)
  - [2.1. Background Color Change Project](#21-background-color-change-project)
    - [2.1.1. useState Hook](#211-usestate-hook)
      - [2.1.1.1. Why use useState?](#2111-why-use-usestate)
      - [2.1.1.2. Async behavior of useState](#2112-async-behavior-of-usestate)
    - [2.1.2. useEffect Hook](#212-useeffect-hook)

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
  const inputElement = document.getElementById("myInput");
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

## 2. Small React Projects & Hooks

### 2.1. Background Color Change Project

I made this small first project through some research on web and react documentation.

![Alt text](<first-react-project/src/assets/Screen Recording 2024-01-14 at 14.09.35.gif>)

Here, I have two components in default exported component,

```js
return (
  <div className="button-container">
    <ColorChangeButton />
    <ResetColorButton />
  </div>
);
```

Here, I use `useState`, and `useEffect` hooks to hold and change the state of current color, and trigger `changeBackgroundColor` function when the state of current color changes.

#### 2.1.1. useState Hook

In React, any function that start with `use` prefix is called a Hook, e.g., `useState`.

useState Hook is a special hook that returns a variable and a function.

<b>variable</b>: whose state is being changed</br>
<b>function</b>: with which we set the new state of the variable.

```ts
export default function App = () => {
const [buttonPressed, setButtonPressed] = useState(false);
const [resetPressed, setResetPressed] = useState(false);
const [pressCount, setPressCount] = useState(0);
const [currentColor, setCurrentColor] = useState(originalColor);

...
...

function ColorChangeButton() {
    return (
      <button
        onClick={() => {
          setButtonPressed(true);
          setResetPressed(false);
          setCurrentColor(colorList[pressCount]);
          setPressCount((pressCount + 1) % colorList.length);
        }}
      >
        {buttonPressed && !resetPressed
          ? "Current color is " + `${currentColor}`
          : "Change Background Color"}
      </button>
    );
  }

  return (
    <div className="button-container">
      <ColorChangeButton />
      <ResetColorButton />
    </div>
  );
}
```

This is a basic use of `useState` Hook in react.

##### 2.1.1.1. Why use useState?

- <strong>Local variables don’t persist between renders.</strong> When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
- <strong>Changes to local variables won’t trigger renders.</strong> React doesn’t realize it needs to render the component again with the new data.

TLDR: `Always refrain from declarations like let pressCount: number = 0` as the pressCount will be redeclared with each rendering.

##### 2.1.1.2. Async behavior of useState

`useState` updates variables asyncronously. [This](https://stackoverflow.com/questions/54069253/the-usestate-set-method-is-not-reflecting-a-change-immediately) is a question regarding this and the answers are to the point.

#### 2.1.2. useEffect Hook

TODO : talk about clean up function.
