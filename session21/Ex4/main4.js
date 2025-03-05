let a = +prompt("Nhập a: ");
let b = +prompt("Nhập b: ");
let c = +prompt("Nhập c: ");

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Vui lòng nhập số hợp lệ");
} else { 
    if (a === 0) {  
        if (b === 0) {
            if (c === 0) {
                alert("Phương trình có vô số nghiệm");
            } else {
                alert("Phương trình vô nghiệm");
            }
        } else {
            let x = -c / b;
            alert("Đây là phương trình bậc 1. Nghiệm x = " + x);
        }
    } else {
        let delta = b * b - 4 * a * c;
        if (delta < 0) {
            alert("Phương trình vô nghiệm");
        } else if (delta === 0) {
            let x = -b / (2 * a);
            alert("Phương trình có nghiệm kép x1 = x2 = " + x);
        } else {
            let x1 = (-b - Math.sqrt(delta)) / (2 * a);
            let x2 = (-b + Math.sqrt(delta)) / (2 * a);
            alert("Phương trình có 2 nghiệm phân biệt:\nx1 = " + x1 + "\nx2 = " + x2);
        }
    }
}