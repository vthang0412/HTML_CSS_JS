var math = parseFloat(prompt("Nhập số điểm Toán:"));
var physics = parseFloat(prompt("Nhập số điểm Lý:"));
var chemistry = parseFloat(prompt("Nhập số điểm Hóa:"));

var total = ((math + physics + chemistry) / 3).toFixed(2);

alert(`Điểm trung bình:  ${total}`);


