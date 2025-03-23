let showPass = document.getElementsByClassName("fa-eye")[0];
let input = document.getElementsByClassName("value")[0];
showPass.addEventListener("click", function () {
  let type = input.getAttribute("type");
  if (type === "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
});