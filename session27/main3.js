let arr = [];
let menu = `
-------MENU-------
1.Tính diện tích hình tròn.
2.Tính chu vi hình tròn.
3.Tính diện tích hình chữ nhật.
4.Tính chu vi hình chữ nhật.
5.Thoát.
Lựa chọn của bạn:`;
let choice;
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            dientichHinhtron();
            break;
        case 2:
            chuviHinhtron();
            break;
        case 3:
            dientichHinhchunhat();
            break;
        case 4:
            chuviHinhchunhat();
            break;
        case 5:
            console.log("Kết thúc chương trình.");
            break;
        default:
            console.log("Nhập sai, vui lòng chọn lại.");
            break;
    }
}
function dientichHinhtron() {
    let r = +prompt("Nhập bán kính hình tròn:");
    if (isNaN(r) || r <= 0) {
        console.log("Bán kính không hợp lệ!");
    } else {
        arr.push(Math.PI * r * r);
        console.log("Diện tích hình tròn là:", arr);
    }
}
function chuviHinhtron() {
    let r = +prompt("Nhập bán kính hình tròn:");
    if (isNaN(r) || r <= 0) {
        console.log("Bán kính không hợp lệ!");
    } else {
        arr.push(2 * Math.PI * r);
        console.log("Chu vi hình tròn là:", arr);
    }
}
function dientichHinhchunhat() {
    let a = +prompt("Nhập chiều dài hình chữ nhật:");
    let b = +prompt("Nhập chiều rộng hình chữ nhật:");
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        console.log("Chiều dài hoặc chiều rộng không hợp lệ!");
    } else {
        arr.push(a * b);
        console.log("Diện tích hình chữ nhật là:", arr);
    }
}
function chuviHinhchunhat() {
    let a = +prompt("Nhập chiều dài hình chữ nhật:");
    let b = +prompt("Nhập chiều rộng hình chữ nhật:");
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        console.log("Chiều dài hoặc chiều rộng không hợp lệ!");
    } else {
        arr.push(2 * (a + b));
        console.log("Chu vi hình chữ nhật là:", arr);
    }
}