let numberA = +prompt("Nhập số thứ nhất");
let numberB = +prompt("Nhập số thứ hai");

let result = 1;
if (isNaN(numberA) || isNaN(numberB)) {
  alert("Không hợp lệ");
} else {
  for (let i = 1; i <= numberB; i = i + 1) {
    result = result * numberA;
  }
  alert(result);
}