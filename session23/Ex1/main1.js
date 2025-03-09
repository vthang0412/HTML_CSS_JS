let count = 0;
let arr = [];
for(let i = 0; i < 10; i++) {
    let input = +prompt("Nhập vào một mảng số nguyên");
    arr.push(input);
}
for (let i = 0; i < 10; i++) {
    if (arr[i] >= 10) {
        count++;
        console.log(`Số lớn hơn hoặc bằng 10 là: ${arr[i]}`);
    } else {
        console.log(`Số nhỏ hơn 10 là: ${arr[i]}`);
    }
}
console.log(`Có ${count} số lớn hơn hoặc bằng 10`);