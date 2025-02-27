let a = +prompt("Nhap a: ");
        
if (a === 0) {
    alert("Phuong trinh khong phai la phuong trinh bac 2");
} else {
    let b = +prompt("Nhap b: ");
    let c = +prompt("Nhap c: ");
    let delta = b*b - 4*a*c;

    if (delta < 0) {
        alert("Phuong trinh vo nghiem");
    } else if (delta === 0) {
        let x = (-b / (2*a)).toFixed(2);
        alert(`Phuong trinh co nghiem kep x = ${x}`);
    } else {
        let x1 = ((-b + Math.sqrt(delta)) / (2*a)).toFixed(2);
        let x2 = ((-b - Math.sqrt(delta)) / (2*a)).toFixed(2);
        alert(`Phuong trinh co 2 nghiem x1 = ${x1} va x2 = ${x2}`);
    }
}