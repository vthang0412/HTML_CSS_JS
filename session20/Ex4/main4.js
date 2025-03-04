let str = prompt("Nhập vào một chuỗi bất kỳ:");
let char = prompt("Nhập vào ký tự cần tìm:");

if(str === null || char === null || char.length !== 1) {
    alert("Vui lòng nhập chuỗi và một ký tự hợp lệ!");
} else {
    let found = false;
    let i = 0;
    
    while (i < str.length) {
        if (str.charAt(i) === char) {
            found = true;
            break;
        }
        i++;
    }
    
    if (found) {
        alert("Tồn tại từ cần tìm kiếm");
    } else {
        alert("Không tồn tại từ cần tìm kiếm");
    }
}