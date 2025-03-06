let arr = [];
let number = +prompt("Mời bạn nhập vào số lượng phần tử muốn thêm vào mảng");
for (let i = 0; i < number; i++) {
    let newElement = +prompt("Mời bạn nhập phần tử muốn thêm vào mảng");
    arr.push(newElement);
}
console.log(arr);