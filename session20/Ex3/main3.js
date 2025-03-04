let so = prompt("Nhập vào một số nguyên:");

if (so === null || isNaN(so)) {
    alert("Vui lòng nhập một số hợp lệ!");
} else {
    let chuoiSo = so.toString();
    let chuoiDaoNguoc = chuoiSo.split('').reverse().join('');
    
    if (chuoiSo === chuoiDaoNguoc) {
        alert(so + " là số đối xứng!");
    } else {
        alert(so + " không phải là số đối xứng!");
    }
}