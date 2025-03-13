function chiaMang(danhSach, kichThuoc) {
    if (!Array.isArray(danhSach)) {
        return "Dữ liệu không hợp lệ";
    }

    if (isNaN(kichThuoc) || kichThuoc <= 0) {
        return "Dữ liệu không hợp lệ";
    }

    let ketQua = [];
    let mangCon = [];

    for (let i = 0; i < danhSach.length; i++) {
        mangCon.push(danhSach[i]);
        if (mangCon.length === kichThuoc || i === danhSach.length - 1) {
            ketQua.push(mangCon);
            mangCon = [];
        }
    }

    return ketQua;
}

console.log(chiaMang([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chiaMang([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(chiaMang("abc", 3)); 