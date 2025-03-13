function timSoBiThieu(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            return arr[i] + 1;
        }
    }

    return "Không có số bị thiếu";
}

console.log(timSoBiThieu([1, 2, 3, 5]));
console.log(timSoBiThieu([1, 2, 4, 5]));
console.log(timSoBiThieu("abc")); 