const text = document.getElementById("text");
const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");

let fontSize = 16;

increaseButton.addEventListener("click", function () {
  fontSize += 2;
  text.style.fontSize = fontSize + "px";
});

decreaseButton.addEventListener("click", function () {
  fontSize -= 2;
  text.style.fontSize = fontSize + "px";
});