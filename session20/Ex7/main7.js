let num = parseInt(prompt("Nhập một số cần tính f(n):"));
let f0 = 1;
let f1 = 1;
if (isNaN(num) || num <= 0) {
    alert("Số nhập không hợp lệ");
} else {
    let result = f0.toString();
    if (num === 1) {
        alert(result);
    } else if (num === 2) {
        result = result + " " + f1;
        alert(result);
    } else {
        result = result + " " + f1;
        for (let i = 3; i <= num; i++) {
            let fNext = f0 + f1;
            result += " " + fNext;
            f0 = f1;
            f1 = fNext;
        }
        alert(result);
    }
}