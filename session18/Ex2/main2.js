let math = +prompt("Nhap so diem toan:");
let literature = +prompt("Nhap so diem van:");
let english = +prompt("Nhap so diem anh:");

let result = (math + literature + english) / 3;

result = Math.round(result);

let xepLoai = "";
if (result >= 8.0) {
  xepLoai = "Gioi";
} else if (result >= 6.5 && result <= 7.9) {
  xepLoai = "Kha";
} else if (result >= 5.0 && result <= 6.4) {
  xepLoai = "Trung binh";
} else {
  xepLoai = "Yeu";
}
alert("Diem trung binh: " + result + "\nXep loai: " + xepLoai);
