let open = document.getElementsByClassName("open")[0];
let popup = document.getElementsByClassName("content")[0];
let close = document.getElementsByTagName("i")[0];
open.addEventListener("click", function () {
  popup.style.display = "flex";
});
close.addEventListener("click", function () {
  popup.style.display = "none";
});