let number = +prompt("Nhập số cần kiểm tra có là số nguyên tố:");
alert(number + " " + isPrime(number));

function isPrime(number) {
    if (number <= 1) {
        return "không phải số nguyên tố";
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return "không phải số nguyên tố";
        }
    }
    return "là số nguyên tố";
}