let arr = [];
let n = +prompt("Nhập số phần tử của mảng: ");
let count = 0;
if (!isNaN(n) && n > 0) {
  for (let i = 0; i < n; i++) {
    arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}:`);
    if (isNaN(arr[i]) || !Number.isInteger(arr[i])) {
      console.log("Giá trị không hợp lệ!!");
      i--;
    }
    if (arr[i] < 0) {
      count++;
    }
  }
  console.log(count);
} else if (n === 0) {
  console.log("Mảng không có phần tử!!");
} else {
  console.log("Nhập giá trị không hợp lệ");
}