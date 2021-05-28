const p1 = Promise.resolve("P1");
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const e = true;
    if (e) {
      resolve("2nd Promise");
    } else {
      reject("Error..");
    }
  }, 2000);
});
const p3 = 1491230;
const p4 = fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
  res.json();
});

Promise.all([p1, p2, p3, p4]).then((promises) => {
  console.log("promises", promises);
});
