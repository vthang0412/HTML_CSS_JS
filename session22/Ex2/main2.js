let numbers = [2,5,7,4,1,8,6];
let secondNumber = +prompt("Nhập vào một số bất kỳ:");
if(numbers.includes(secondNumber)){
    console.log("Bingo");
}else{
    console.log("Chúc bạn may mắn lần sau");
}