let num1 = parseFloat(prompt("Nhập số thứ nhất:"));
let num2 = parseFloat(prompt("Nhập số thứ hai:"));
let min = Math.min(num1, num2);
let max = Math.max(num1, num2);

let randomNumber = Math.floor(Math.random() * (max - min - 2 + 1) + (min + 1));

alert(`Số ngẫu nhiên trong khoảng (${num1}, ${num2}): ${randomNumber}`);