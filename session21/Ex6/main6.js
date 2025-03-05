let number = parseInt(prompt("Nhập một số nguyên: "));
if (isNaN(number)) {
  console.log("Hãy nhập một số nguyên!");
} else {
  console.log(`Các ước của ${number} là:`);

  let absNumber = Math.abs(number);
  for (let i = 1; i <= absNumber; i++) {
    if (absNumber % i === 0) {
      console.log(i);
    }
  }
}