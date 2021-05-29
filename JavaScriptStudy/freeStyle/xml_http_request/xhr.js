const getButton = document.querySelector(".get-data-btn");
const postButton = document.querySelector(".post-data-btn");

const baseURL = "https://reqres.in/api";

function sendHttpRequest(method, path, data) {
  const xhr = new XMLHttpRequest();
  const promise = new Promise((resolve, reject) => {
    xhr.open(method, path);

    xhr.responseType = "json";

    if (data) {
      xhr.setRequestHeader("Content-Type", "application/json");
    }

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      }
      resolve(xhr.response);
    };

    xhr.onerror = () => {
      reject("Something went wrong...");
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
}

getButton.addEventListener("click", () => {
  sendHttpRequest("GET", baseURL + "/userss")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

postButton.addEventListener("click", () => {
  sendHttpRequest("POST", baseURL + "/register", {
    email: "eve.holt@reqres.in",
    password: "pistol",
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});
