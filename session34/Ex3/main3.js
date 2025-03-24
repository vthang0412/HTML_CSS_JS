let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  if (email.length === 0 || pass.length === 0) {
    console.log("Không được để trống email và pass");
  } else {
    let acc = JSON.parse(localStorage.getItem("acc")).find(
      (element) => element.email === email
    );
    console.log(acc);
    if (acc.length === 0) {
      console.log("Tài khoản không đúng");
    } else {
      if (pass === acc.password && email === acc.email) {
        console.log("Đăng nhập thành công");
        window.location.href = "https://google.com";
      } else {
        console.log("Sai mật khẩu");
      }
    }
  }
});