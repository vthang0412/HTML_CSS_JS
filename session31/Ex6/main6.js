let form = document.getElementsByClassName("login-container")[0];
form.addEventListener("submit", function (events) {
  login();
});
function login() {
  const fixedUsername = "huanrose@gmail.com";
  const fixedPassword = "123456";

  const inputUsername = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;

  if (inputUsername === fixedUsername && inputPassword === fixedPassword) {
    console.log("Đăng nhập thành công");
  } else {
    console.log("Đăng nhập thất bại");
  }
}