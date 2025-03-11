let arr = [];
let number = +prompt("Nhập số lượng phần tử muốn thêm:");
for (let i = 0; i < number; i++) {
    let newArr = +prompt("Nhập số nguyên thứ " + (i + 1) + " la:");
    arr.push(newArr);
}
alert(count(arr));
function count(array) {
    if (array.length === 0) {
        return "Mảng không chứa phần tử";
    }
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            count++;
        }
    }
    return "Số phần tử là số nguyên dương trong mảng là: " + count;
}