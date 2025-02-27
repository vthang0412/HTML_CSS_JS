// 1. Math.abs() - Lấy giá trị tuyệt đối
console.log("=== Math.abs() ===");
      
// Truyền giá trị âm -5.5
console.log("Math.abs(-5.5) =", Math.abs(-5.5));
// Kết quả: 5.5 - Chuyển số âm thành số dương có cùng giá trị

// Truyền giá trị dương 10
console.log("Math.abs(10) =", Math.abs(10));
// Kết quả: 10 - Giữ nguyên vì đã là số dương

// 2. Math.ceil() - Làm tròn lên
console.log("\n=== Math.ceil() ===");

// Truyền giá trị 4.4
console.log("Math.ceil(4.4) =", Math.ceil(4.4));
// Kết quả: 5 - Làm tròn lên thành số nguyên gần nhất

// Truyền giá trị 5.8
console.log("Math.ceil(5.8) =", Math.ceil(5.8));
// Kết quả: 6 - Làm tròn lên thành số nguyên gần nhất

// 3. Math.floor() - Làm tròn xuống
console.log("\n=== Math.floor() ===");

// Truyền giá trị 5.7
console.log("Math.floor(5.7) =", Math.floor(5.7));
// Kết quả: 5 - Làm tròn xuống thành số nguyên gần nhất

// Truyền giá trị 6.1
console.log("Math.floor(6.1) =", Math.floor(6.1));
// Kết quả: 6 - Làm tròn xuống thành số nguyên gần nhất

// 4. Math.round() - Làm tròn đến số nguyên gần nhất
console.log("\n=== Math.round() ===");

// Truyền giá trị 10.1
console.log("Math.round(10.1) =", Math.round(10.1));
// Kết quả: 10 - Làm tròn xuống vì phần thập phân < 0.5

// Truyền giá trị 20.6
console.log("Math.round(20.6) =", Math.round(20.6));
// Kết quả: 21 - Làm tròn lên vì phần thập phân >= 0.5