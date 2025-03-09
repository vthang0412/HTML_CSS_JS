let arr = [];
let n = +prompt("Nhập số phần tử của mảng: ");
let sum = 0;
let count = 0;
if (!isNaN(n) && Number.isInteger(n) && n > 0) {
  for (let i = 0; i < n; i++) {
    arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}:`);
  }
  for (let value of arr) {
    if (!isNaN(value) || Number.isInteger(value)) {
      sum += value;
      count++;
    }
  }
  if (count === 0 || sum === 0) {
    console.log("Mảng không có phần tử");
  } else {
    console.log(sum);
  }
} else if (n === 0) {
  console.log("Không có phần tử nào là số");
} else {
  console.log("Số phần tử không được âm");
}