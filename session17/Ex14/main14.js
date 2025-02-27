let radius = parseFloat(prompt("Nhap ban kinh hinh tru:"));
let height = parseFloat(prompt("Nhap chieu cao hinh tru:"));

const PI = Math.PI;

let basePerimeter = 2 * PI * radius;

let lateralArea = basePerimeter * height;

let baseArea = PI * radius * radius;

let totalArea = lateralArea + 2 * baseArea;

let volume = baseArea * height;

console.log(`Chu vi day: ${basePerimeter.toFixed(2)}`);
console.log(`Dien tich xung quanh: ${lateralArea.toFixed(2)}`);
console.log(`Dien tich toan phan: ${totalArea.toFixed(2)}`);
console.log(`The tich hinh tru: ${volume.toFixed(2)}`);