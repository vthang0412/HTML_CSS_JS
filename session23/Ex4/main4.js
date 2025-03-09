let arr = [];
let n = +prompt("Nhập số phần tử của mảng: ");
let result = "";
if (!isNaN(n) || Number.isInteger(n)) {
  for (let i = 0; i < n; i++) {
    arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}:`);
  }
  for (let value of arr) {
    if (!isNaN(value) || Number.isInteger(value)) {
      result += value + " ";
    }
  }
  console.log(result);
} else if (n === 0) {
  console.log("Không có ký tự số ");
} else {
  console.log("Không hợp lệ");
}