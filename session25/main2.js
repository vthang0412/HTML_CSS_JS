let arr = [];
for (let i = 0; i < 2; i++) {
    let newArr = +prompt("Nhập số nguyên thứ " + (i + 1) + " là:");
    arr.push(newArr);
}
alert(sum(arr));
function sum(array) {
    if (array.length === 0) {
        return "Mảng không chứa phần tử";
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i]) || array[i] % 1 !== 0) {
            return "Mảng chứa giá trị không hợp lệ.";
        }
        sum += array[i];
    }
    return "Tổng các phần tử trong mảng là: " + sum;
}