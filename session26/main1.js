let numbers = [];
for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`), 10);
    numbers.push(number);
}

let filteredNumbers = numbers.filter(function(number) {
    return number >= 10;
});

if (filteredNumbers.length === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    console.log("Các số nguyên lớn hơn hoặc bằng 10 là:", filteredNumbers);
}
