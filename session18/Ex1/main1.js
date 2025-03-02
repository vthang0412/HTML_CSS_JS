let number = prompt("Vui lòng nhập một số nguyên:");
number = parseInt(number);

if (isNaN(number)) {
  alert("Vui lòng nhập một số nguyên hợp lệ!");
} else {
  if (number % 2 === 0) {
    alert(number + " là số chẵn");
  } else {
    alert(number + " là số lẻ");
  }
}
