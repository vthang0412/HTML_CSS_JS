let cash = +prompt("Nhap so tien gui: ");
let month = +prompt("Nhap so thang gui: ");

if (month > 12) {
    alert("Nhap thang khong hop le");
}

let laiSuatNam = 4.3;
let laiSuatThang = laiSuatNam / 12 / 100;
let tienLai = cash * laiSuatThang * month;
let tongTien = cash + tienLai;

console.log(`Tien lai: ${Math.round(tienLai)}`);
console.log(`Tong tien: ${Math.round(tongTien)}`);