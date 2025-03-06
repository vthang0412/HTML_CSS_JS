let arr=[];
for (let i=0; i< 10; i++){
    let number = +prompt("Nhập vào một số bất kỳ: ");
    arr.push(number);
}
arr.sort((a, b) => a - b);
alert("Mảng sau khi sắp xếp: " + arr);