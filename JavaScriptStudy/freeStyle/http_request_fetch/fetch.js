const getButton = document.querySelector(".get-data-btn");
const postButton = document.querySelector(".post-data-btn");

const sendHttpRequest = (method, url, payload) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(payload),
    headers: payload ? { "Content-Type": "application/json" } : {},
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error("Something went wrong");
    } else {
      return response.json();
    }
  });
};

const getData = () => {
  sendHttpRequest("GET", "https://reqres.in/api/users").then((response) => {
    console.log(response);
  });
};

const postData = (payload) => {
  sendHttpRequest("POST", "https://reqres.in/api/register", payload)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
getButton.addEventListener("click", () => {
  getData();
});
postButton.addEventListener("click", () => {
  postData({
    email: "eve.holt@reqres.in",
    password: "pistol",
  });
});
