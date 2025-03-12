let arr = [];
function lengthString(arr) {
  for (let i = 0; i < 5; i++) {
    arr[i] = prompt(`Nhập chuỗi thứ ${i + 1}: `);
    if (Number.isInteger(arr[i])) {
      console.log("Dữ liệu không hợp lệ");
      i--;
    }
  }
  return arr.filter((string) => string.length > 5);
}
if (arr.length === 0) {
  console.length("Mảng không có phần tử nào");
} else {
  let result = lengthString(arr);
  console.log(result);
}