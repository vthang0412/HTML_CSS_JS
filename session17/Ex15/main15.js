let radius = parseFloat(prompt("Nhap ban kinh hinh cau:"));

const PI = Math.PI;

let maxCircumference = 2 * PI * radius;

let surfaceArea = 4 * PI * radius * radius;

let volume = (4 / 3) * PI * radius * radius * radius;

console.log(`Chu vi lon nhat: ${maxCircumference.toFixed(2)}`);
console.log(`Dien tich be mat: ${surfaceArea.toFixed(2)}`);
console.log(`The tich hinh cau: ${volume.toFixed(2)}`);