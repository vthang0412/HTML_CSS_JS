let number = +prompt("Nhập số nguyên N:");

if(isNaN(number) || number <= 0) {
    alert("Nhập lại");
} else {
    let result = "";
    for (let i = 1; i <= number; i++) {
        if (i % 5 === 0) {
            result += i + " ";
        }
    }
    
    if (result === "") {
        alert("Không có số nào chia hết cho 5 trong khoảng từ 1 đến " + number);
    } else {
        alert("Các số chia hết cho 5 từ 1 đến " + number + " là:\n" + result.trim());
    }
}
