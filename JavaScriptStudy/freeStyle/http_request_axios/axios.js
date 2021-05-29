const getButton = document.querySelector(".get-data-btn");
const postButton = document.querySelector(".post-data-btn");

const getData = (url) => {
  axios
    .get(url)
    .then((response) => {
      console.log(response.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const sendData = (url, payload) => {
  axios
    .post(url, payload)
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

getButton.addEventListener("click", function() {
  getData("https://reqres.in/api/users");
});

postButton.addEventListener("click", () => {
  sendData("https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    password: "pistol",
  });
});
