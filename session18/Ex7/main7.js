let a = +prompt("Nhập số a: ");
let b = +prompt("Nhập số b: ");
let calculator = prompt("Nhập phép tính (+,-,*,/): ");
let result;
switch (calculator) {
    case "+":
        result = a + b;
        alert(`Kết quả của phép tính trên a + b = ${result}`);
        break;
    case "-":
        result = a - b;
        alert(`Kết quả của phép tính trên a - b = ${result}`);
        break;
    case "*":
        result = a * b;
        alert(`Kết quả của phép tính trên a * b = ${result}`);
        break;
    case "/":
        result = a / b;
        alert(`Kết quả của phép tính trên a / b = ${result}`);
        break;
    default:
        alert("Phép tính không hợp lệ");
}