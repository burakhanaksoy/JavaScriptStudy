function taskOne(callback) {
  console.log("task 1");
  callback();
}

function taskTwo() {
  console.log("task 2");
}

// I want to implement taskTwo after taskOne finishes... So create a callback function!

setTimeout(taskOne, 2000, taskTwo);
