let menu = `
1.Cộng hai số.
2.Trừ hai số.
3.Nhân hai số.
4.Chia hai số.
5.Thoát.
Lựa chọn của bạn: 
`;
let choice;
while (choice !== 5) {
let result;
choice = +prompt(menu);
let num1 = +prompt("Nhập số thứ nhất: ");
let num2 = +prompt("Nhập số thứ hai: ");
if (Number.isInteger(num1) || Number.isInteger(num2)) {
    switch (choice) {
        case 1:
            result = cong(num1, num2);
            console.log(result);
            break;
        case 2:
            result = tru(num1, num2);
            console.log(result);
            break;
        case 3:
            result = nhan(num1, num2);
            console.log(result);
            break;
        case 4:
            result = chia(num1, num2);
            console.log(result);
            break;
        case 5:
            console.log("Kết thúc chương trình.");
            break;
        default:
            console.log("Nhập sai, vui lòng chọn lại.");
            break;
    }
    } else {
        console.log("Nhập giá trị không hợp lệ");
    }
}

function cong(a, b) {
    return a + b;
}
function tru(a, b) {
    return a - b;
}
function nhan(a, b) {
    return a * b;
}
function chia(a, b) {
    return a / b;
}