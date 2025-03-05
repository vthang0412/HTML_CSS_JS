let firstPass = 123456;
let pass = true;

while (pass) {
    let password = +prompt("Nhập vào mật khẩu:");

    if (password === firstPass) {
        console.log("Đăng nhập thành công");
        pass = false;
    } else {
        console.log("Mật khẩu không đúng. Vui lòng thử lại.");
    }
}