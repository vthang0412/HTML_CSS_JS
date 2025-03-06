let n = +prompt("Nhập số lượng phần tử của mảng:");
let numbers = [];

if (isNaN(numbers)){
    console.log("Phần tử trong mảng không chứa chữ");
}else{
    for (let i = 0; i < n; i++) {
        let phanTu = +prompt(`Nhập phần tử thứ ${i + 1}:`);
        numbers.push(phanTu);
    }
}
console.log("Mảng ban đầu:", numbers);
numbers.reverse();
console.log("Mảng sau khi đảo ngược:", numbers);