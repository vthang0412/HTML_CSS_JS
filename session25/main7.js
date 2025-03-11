let str = prompt("Nhập chuỗi cần kiểm tra:");
alert("Chuỗi sau khi chuyển đổi: " + outPut(str));
function outPut(str) {
    if (str.length === 0) {
        return "Chưa nhập chuỗi";
    }
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(' ');
}
