<h1>React JS</h1>
![React logo](./images/React_Logo_SVG.svg.png)

- [1. Introduction to React](#1-introduction-to-react)
  - [1.1 File Structure](#11-file-structure)
  - [1.2 Virtual DOM](#12-virtual-dom)
## 1. Introduction to React

- Developed by Facebook.
- One of the trifecta (React, Angular, Vue).
- Uses functional components to render DOM dynamically.
- Single page application.
- Only rerenders those parts of the page that have changed, avoids unnecessary rerendering of unchanged DOM elements.

### 1.1 File Structure

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

### 1.2 Virtual DOM
