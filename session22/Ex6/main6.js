let arr=[];
let numberArr = prompt("Số phần tử muốn thêm: ");
for (let i=0; i< numberArr; i++){
    let number = +prompt("Nhập vào một số bất kỳ: ");
    arr.push(number);
}
let number = +prompt("Nhập vào số cần đếm: ");
let loop = 0;

for (let i=0; i<arr.length; i++){
    if(arr[i] === number){
        loop++;
    }
}
alert("Số " + number + " xuất hiện " + loop + " lần trong mảng");