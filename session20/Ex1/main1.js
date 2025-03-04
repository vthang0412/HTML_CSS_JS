let number = +prompt("Nhập số nguyên cần tính tổng từ 1 - N:");

if (isNaN(number) && number > 0) {
    alert("Nhập lại");
} else {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    alert("Tổng các số từ 1 đến " + number + " là: " + sum);
}