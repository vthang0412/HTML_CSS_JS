let arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}:`);
  if (isNaN(arr[i]) || !Number.isInteger(arr[i])) {
    console.log("Giá trị không hợp lệ!!");
    i--;
  }
}
let max = arr[0];
let viTri = 0;
for (let index in arr) {
  if (arr[index] > max) {
    max = arr[index];
    viTri = index;
  }
}
console.log("Số lớn nhất: " + max);
console.log("Vi trí: " + viTri);