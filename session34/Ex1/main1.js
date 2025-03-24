let acc = [];
let form = document.getElementsByTagName("form")[0];
let messageBox = document.createElement("div");
messageBox.style.color = "red";
messageBox.style.marginTop = "10px";
form.appendChild(messageBox);

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let account = JSON.parse(getAcc());
    let esiterAcc = account.find((acc) => acc.email === email);

    if (esiterAcc) {
        messageBox.innerHTML = "Email đã tồn tại";
    } else {
        if (email.length === 0 || email.includes(" ")) {
            messageBox.innerHTML = "Email không được để trống hoặc không có khoảng cách";
        } else {
            let pass = document.getElementById("pass").value;
            if (pass.length === 0) {
                messageBox.innerHTML = "Mật khẩu không được để trống";
            } else {
                let confirmPass = document.getElementById("confirmPass").value;
                if (confirmPass !== pass) {
                    messageBox.innerHTML = "Mật khẩu không trùng khớp";
                } else {
                    messageBox.style.color = "green";
                    messageBox.innerHTML = "Đăng kí thành công";
                    let newacc = { email: email, password: pass };
                    acc.push(newacc);
                    saveAcc(acc);
                }
            }
        }
    }
});

function getAcc() {
    return localStorage.getItem("acc") || "[]";
}

function saveAcc(acc) {
    localStorage.setItem("acc", JSON.stringify(acc));
}