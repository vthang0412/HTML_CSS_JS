let arr = [];
let menu = `
-------MENU-------
1. Nhập danh sách số nguyên.
2. Tính trung bình các số.
3. Tìm số chẵn lớn nhất.
4. Tìm số lẻ nhỏ nhất.
5. Thoát.`;
let choice;
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            nhapDanhSachSoNguyen();
            break;
        case 2:
            tinhTrungBinhCacSo();
            break;
        case 3:
            timSoChanLonNhat();
            break;
        case 4:
            timSoLeNhoNhat();
            break;
        case 5:
            console.log("Kết thúc chương trình.");
            break;
        default:
            console.log("Nhập sai, vui lòng chọn lại.");
            break;
    }
}

function nhapDanhSachSoNguyen() {
    let n = +prompt("Nhập số phần tử:");
    for (let i = 0; i < n; i++) {
        arr.push(+prompt("Nhập số nguyên:"));
    }
    console.log("Danh sách số nguyên:", arr);
}

function tinhTrungBinhCacSo() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("Trung bình các số:", sum / arr.length);
}

function timSoChanLonNhat() {
    let max = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && (max === null || arr[i] > max)) {
            max = arr[i];
        }
    }
    if (max !== null) {
        console.log("Số chẵn lớn nhất:", max);
    } else {
        console.log("Không có số chẵn trong mảng");
    }
}

function timSoLeNhoNhat() {
    let min = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && (min === null || arr[i] < min)) {
            min = arr[i];
        }
    }
    if (min !== null) {
        console.log("Số lẻ nhỏ nhất:", min);
    } else {
        console.log("Không có số lẻ trong mảng");
    }
}