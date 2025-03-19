let red = document.getElementsByClassName("red")[0];
let green = document.getElementsByClassName("green")[0];
let purple = document.getElementsByClassName("purple")[0];
let body = document.getElementsByTagName("body")[0];
red.addEventListener("click", function () {
    body.style.backgroundColor = "red";
    body.style.color = "white";
});
green.addEventListener("click", function () {
    body.style.backgroundColor = "green";
    body.style.color = "white";
});
purple.addEventListener("click", function () {
    body.style.backgroundColor = "purple";
    body.style.color = "white";
});

