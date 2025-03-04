let number = parseInt(prompt("Nhập một số nguyên dương:"));
if (isNaN(number) || number <= 1) {
    alert("Vui lòng nhập một số nguyên dương lớn hơn 1!");
} else {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        alert(`${number} là số nguyên tố`);
    } else {
        alert(`${number} không phải là số nguyên tố`);
    }
}