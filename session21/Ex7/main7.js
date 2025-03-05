let tien = parseFloat(prompt("Nhập số tiền gửi ban đầu: "));
let laiSuat = parseFloat(prompt("Nhập lãi suất tháng (%, ví dụ 1 là 1%): "));
let thang = parseInt(prompt("Nhập số tháng gửi: "));

if (
  isNaN(tien) ||
  isNaN(laiSuat) ||
  isNaN(thang) ||
  tien <= 0 ||
  laiSuat < 0 ||
  thang <= 0
) {
  console.log("Vui lòng nhập các giá trị hợp lệ (số dương)!");
} else {
  let laiSuatThang = laiSuat / 100;

  let tienNhanDuoc = tien * Math.pow(1 + laiSuatThang, thang);

  let TienLai = tienNhanDuoc - tien;

  tienNhanDuoc = tienNhanDuoc.toFixed(3);
  TienLai = TienLai.toFixed(3);

  console.log(`Tiền ban đầu: ${tien}`);
  console.log(`Lãi suất: ${laiSuat}%`);
  console.log(`Số tháng gửi: ${thang}`);
  console.log(`Tiền lãi: ${TienLai}`);
  console.log(`Tiền nhận được: ${tienNhanDuoc}`);
}