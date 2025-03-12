function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function filterPrimeNumbers(input) {
    if (!Array.isArray(input)) {
        return "Dữ liệu không hợp lệ";
    }
    if (input.length === 0) {
        return "Mảng không có phần tử nào";
    }
    let primeNumbers = input.filter((num) => {
        if (typeof num !== "number" || !Number.isInteger(num)) {
            return false;
        }
        return isPrime(num);
    });
    return primeNumbers;
}
console.log(filterPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(filterPrimeNumbers([]));
console.log(filterPrimeNumbers("abc"));