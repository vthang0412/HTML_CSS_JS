let a = parseFloat(prompt("Nhập độ dài cạnh thứ nhất:"));
let b = parseFloat(prompt("Nhập độ dài cạnh thứ hai:"));
let c = parseFloat(prompt("Nhập độ dài cạnh thứ ba:"));
if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    alert("Độ dài các cạnh phải là số dương hợp lệ!");
} else {
    if (a + b <= c || b + c <= a || a + c <= b) {
        alert("Ba cạnh này không tạo thành tam giác!");
    } else {
        if (a === b && b === c) {
            alert("Đây là tam giác đều");
        } else if (a === b || b === c || a === c) {
            alert("Đây là tam giác cân");
        } else if (
            a * a + b * b === c * c ||
            b * b + c * c === a * a ||
            a * a + c * c === b * b
        ) {
            alert("Đây là tam giác vuông");
        } else {
            alert("Đây là tam giác thường");
        }
    }
}