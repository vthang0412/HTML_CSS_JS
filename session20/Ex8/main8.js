let n = parseInt(prompt("Nhập số lượng số nguyên tố cần hiển thị:"));
if (isNaN(n) || n <= 0) {
  alert("Số nhập không hợp lệ");
} else {
  let result = "";
  let count = 0;
  let num = 2;
  let first = true;
  while (count < n) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      if (!first) result += ", ";
      result += num;
      first = false;
      count++;
    }
    num++;
  }
  alert(`Dãy ${n} số nguyên tố đầu tiên: ${result}`);
}