function findMaxAndPosition(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }
    if (arr.length === 0) {
        return "Mảng ko có dữ liệu";
    }
    const isAllIntegers = arr.every(
        (num) => typeof num === "number" && Number.isInteger(num)
    );
    if (!isAllIntegers) {
        return "Dữ liệu không hợp lệ";
    }
    const max = Math.max(...arr);
    const position = arr.findIndex((num) => num === max);
    return `max = ${max}\nposition: ${position}`;
}
let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}: `);
    if (isNaN(arr[i]) || !Number.isInteger(arr[i])) {
        console.log("Dữ liệu không hợp lệ");
        i--;
    }
}
console.log(findMaxAndPosition(arr));