let result;
result = "javascript" + 5;
console.log(result);
// "javascript5"

// 2. Trừ chuỗi với số → Kết quả là NaN 
result = "javascript" - 1;
console.log(result); // NaN

// 3. Cộng chuỗi số với số → Nối chuỗi
result = "3" + 2;
console.log(result); // "32"

// 4. Trừ chuỗi số với số → Chuyển đổi chuỗi thành số rồi thực hiện phép trừ
result = "5" - 4;
console.log(result); // 1

// 5. Kiểm tra xem giá trị có phải NaN hay không (chuỗi số hợp lệ → Không phải NaN)
result = isNaN("123");
console.log(result); // false

// 6. Kiểm tra xem giá trị có phải NaN hay không (chuỗi chữ không thể chuyển thành số → NaN)
result = isNaN("hello");
console.log(result); // true

// 7. Kiểm tra với `Number.isNaN()` (không tự động ép kiểu, chuỗi "123" không phải NaN)
result = Number.isNaN("123");
console.log(result); // false

// 8. Kiểm tra với `Number.isNaN(NaN)` (NaN thực sự là NaN)
result = Number.isNaN(NaN);
console.log(result); // true