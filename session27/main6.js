function kiemTraCapSoCong(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    if (arr.length <= 2) {
        return true;
    }

    let khoangCach = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== khoangCach) {
            return false;
        }
    }
    return true;
}

console.log(kiemTraCapSoCong([2, 4, 6, 8]));
console.log(kiemTraCapSoCong([3, 6, 9, 12, 14])); 
console.log(kiemTraCapSoCong("abc")); 