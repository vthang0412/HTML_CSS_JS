let input = document.getElementById("input");
let output = document.getElementById("output");
document.getElementById("check").onclick = function () {
    let email = input.value;
    if (
        email.includes("@") &&
        (email.endsWith(".com") || email.endsWith(".vn"))
    ) {
        output.innerHTML = "Email hợp lệ!";
        output.style.color = "#008000";
    } else {
        output.innerHTML = "Email không hợp lệ!";
        output.style.color = "red";
    }
};