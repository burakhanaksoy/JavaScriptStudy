const mainText = document.getElementById("main-text");

mainText.addEventListener("mouseenter", () => {
  mainText.classList.add("background-red");
});

mainText.addEventListener("mouseleave", () => {
  mainText.classList.remove("background-red");
});
