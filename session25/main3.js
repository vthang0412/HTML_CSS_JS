let arr = [];
let number = +prompt("Nhap so luong phan tu muon them:");
for (let i = 0; i < number; i++) {
    let newArr = +prompt("Nhap phan tu thu " + (i + 1) + " la:");
    arr.push(newArr);
}
console.log(outPut(arr));
function outPut(arr) {
    let found = false;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) { 
        if (isNaN(arr[i])) {
            return "du lieu không hợp lệ.";
        }
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i]);  
            found = true;
        }
    }
    if (!found) {
        return "mảng không chứa số chẵn";
    }
    return newArr;
}