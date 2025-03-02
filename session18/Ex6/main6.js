let year = parseInt(prompt("Nhập số năm cần tính:"));
let isLeapYear = false;

if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      isLeapYear = true;
    }
  } else {
    isLeapYear = true;
  }
}

if (isLeapYear) {
  alert(year + " là năm nhuận");
} else {
  alert(year + " không là năm nhuận");
}