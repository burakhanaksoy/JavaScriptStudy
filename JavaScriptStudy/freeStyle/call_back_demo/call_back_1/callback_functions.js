function taskOne(callback) {
  console.log("task 1");
  callback();
}

function taskTwo() {
  console.log("task 2");
}

// I want to implement taskTwo after taskOne finishes... So create a callback function!

setTimeout(taskOne, 2000, taskTwo);

// --------------------------------------------------------------------

document.querySelector("#click-me-btn").addEventListener("click", () => {
  console.log("Button clicked!");
});

// --------------------------------------------------------------------

const posts = [
  { title: "title1", body: "body1" },
  { title: "title2", body: "body2" },
];

function addPost(callback) {
  setTimeout(() => {
    posts.push({ title: "title3", body: "body3" });
    callback();
  }, 3000);
}

function getAllPosts() {
  setTimeout(() => {
    let output = "<ul>";
    posts.forEach((post) => {
      output += `<li>${post.title} - ${post.body}</li>`;
    });
    output += "</ul>";
    document.getElementById("output").innerHTML = output;
  }, 2000);
}

addPost(getAllPosts);
