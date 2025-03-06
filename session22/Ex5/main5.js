let arr=[];
for (let i=0; i<5; i++){
    let number = +prompt("Nhập vào một số bất kỳ: ");
    arr.push(number);
}
let even = 0;
let odd = 0;
for (let i=0; i<arr.length; i++){
    if (arr[i] % 2 === 0){
        even += arr[i];
    }else{
        odd += arr[i];
    }
}
alert("Tổng các số chẵn là: " + even);
alert("Tổng các số lẻ là: " + odd);