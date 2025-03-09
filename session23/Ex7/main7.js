let arr = [];
let n = +prompt("Số phần tử của mảng:");
if (n === 0) {
    alert("Mảng không có phần tử");
} else if (n < 0) {
    alert("Số lượng phần tử không được nhỏ hơn 0");
} else {
    for (let i = 0; i < n; i++) {
        let char = prompt("Nhập vào 1 ký tự thứ " + (i+1) + ": ");
        arr.push(char);
    }
    let max = Math.max(...arr);
    let secondMax = Math.max(...arr.filter(x => x < max));
    alert("Số lớn thứ 2 là: " + secondMax);
}