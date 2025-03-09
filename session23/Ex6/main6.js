let arr = [1, 0, "hello", "", true, false, null, 42, undefined, NaN];
let ketQua = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i]) {
    ketQua[ketQua.length] = arr[i];
  }
}
console.log("Mảng sau khi loại bỏ falsy:", ketQua);