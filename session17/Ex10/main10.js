let n = +prompt("Nhap so bat ki: ");
let sqrt_n = Math.sqrt(n);
let check = Number.isInteger(sqrt_n);

check 
    ? alert("Day la so chinh phuong")
    : alert("Day khong phai so chinh phuong");