let sum = 0;
for (let i = 1; i <= 5; i++) {
    let number = +prompt(`Nhập số thứ ${i}:`);
    
    if (Number.isInteger(number)) {
        if (number % 2 !== 0) {
            sum = sum + number;
        }
    } else {
        console.log("Số nhập vào không hợp lệ");
    }
}
console.log("Tổng các số lẻ là:", sum);