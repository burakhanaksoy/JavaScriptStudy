const dragObject = {
  x: undefined,
  y: undefined,
  mousePositionX: undefined,
  mousePositionY: undefined,
};

const box = document.querySelector(".box");

box.addEventListener("mousedown", function(e) {
  dragObject.x = box.offsetLeft;
  dragObject.y = box.offsetTop;
  dragObject.mousePositionX = e.clientX;
  dragObject.mousePositionY = e.clientY;
  box.addEventListener("mousemove", drag);
  box.addEventListener("mouseup", function() {
    box.removeEventListener("mousemove", drag);
  });
});

function drag(e) {
  const box = document.querySelector(".box");
  box.style.left = `${dragObject.x + e.clientX - dragObject.mousePositionX}px`;
  box.style.top = `${dragObject.y + e.clientY - dragObject.mousePositionY}px`;
}
