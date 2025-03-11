let arr=[];
let number= +prompt("Nhập số lượng phần tử muốn thêm:");
for(let i=0 ; i< number; i++){
    let newArr= +prompt("Nhập phần tử thứ " +(i+1)+ " là:");
    arr.push(newArr);
}
    alert( Min(arr));
function Min(array) {
    if (array.length === 0) {
        return "Mảng không chứa phần tử";
    }
    let min= arr[0];
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            return "Mảng chứa giá trị không hợp lệ.";
        }
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return "Phần tử nhỏ nhất trong mảng là: " + min;
}