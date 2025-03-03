let cash = +prompt("Nhập vào số tiền muốn chuyển từ VND hoặc USD");
let type = prompt("Nhập loại tiền (VND hoặc USD)").toUpperCase();

if (isNaN(cash) || cash < 0) {
    alert("Vui lòng nhập số tiền hợp lệ (phải là số và lớn hơn 0)");
} else {
    if (type === "VND") {
        let usd = cash / 23000;
        alert(`${cash} VND = ${usd} USD`);
    } else if (type === "USD") {
        let vnd = cash * 23000;
        alert(`${cash} USD = ${vnd} VND`);
    } else {
        alert("Vui lòng chỉ nhập VND hoặc USD");
    }
}