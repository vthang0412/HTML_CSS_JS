// // let isActive = false;
// // let secondActive = true;

// // //>,>=,<,<=
// // //Bieu thuc so sanh

// // console.log(1 > 1); //false
// // console.log(1 >= 1); //true

// // 1 == 1; //true
// // console.log(1 == "1"); //true
// // 1 === "1"; //false

// // console.log(1 != "1"); //false

// // console.log(1 !== "1"); //true

// // console.log((secondActive = !secondActive));

// // 1 > 1 && 2 == 2;

// //for...loop - Vòng lặp for

// let numbers = [];
// let menu = `
//     MENU 
// 1.Nhập vào mảng
// 2.Hiển thị mảng
// 3.Thêm phần tử
// 4.Sửa phần tử
// 5.Xóa phần tử
// 6.Thoát
// Lựa chọn của bạn:`;
// let key;
// while(key !== 6) {
//     let key = +prompt(menu);

//     switch (key) {
//         case 1:
//             let n = +prompt("Nhập số lượng phần tử của mảng:");
//             numbers = [];

//             if (isNaN(n)) {
//                 console.log("Số lượng phần tử không hợp lệ");
//             } else {
//                 for (let i = 0; i < n; i++) {
//                     let phanTu = +prompt(`Nhập phần tử thứ ${i + 1}:`);
//                     if (isNaN(phanTu)) {
//                         console.log("Phần tử trong mảng không chứa chữ");
//                         break;
//                     }
//                     numbers.push(phanTu);
//                 }
//                 console.log("Nhập mảng thành công");
//             }
//             break;

//         case 2:
//             if (numbers.length === 0) {
//                 console.log("Mảng rỗng!");
//             } else {
//                 console.log(numbers);
//             }
//             break;

//         case 3:
//             let phanTu = +prompt("Nhập phần tử cần thêm:");
//             if (isNaN(phanTu)) {
//                 console.log("Phần tử không hợp lệ");
//             } else {
//                 numbers.push(phanTu);
//                 console.log("Thêm phần tử thành công");
//             }
//             break;

//         case 4:
//             if (numbers.length === 0) {
//                 console.log("Mảng rỗng, không thể sửa!");
//             } else {
//                 let viTri = +prompt("Nhập vị trí cần sửa (từ 0):");
//                 if (viTri < 0 || viTri >= numbers.length) {
//                     console.log("Vị trí không hợp lệ!");
//                 } else {
//                     let giaTriMoi = +prompt("Nhập giá trị mới:");
//                     if (isNaN(giaTriMoi)) {
//                         console.log("Giá trị mới không hợp lệ");
//                     } else {
//                         numbers[viTri] = giaTriMoi;
//                         console.log("Sửa phần tử thành công");
//                     }
//                 }
//             }
//             break;

//         case 5:
//             if (numbers.length === 0) {
//                 console.log("Mảng rỗng, không thể xóa!");
//             } else {
//                 let viTri = +prompt("Nhập vị trí cần xóa (từ 0):");
//                 if (viTri < 0 || viTri >= numbers.length) {
//                     console.log("Vị trí không hợp lệ!");
//                 } else {
//                     numbers.splice(viTri, 1);
//                     console.log("Xóa phần tử thành công");
//                 }
//             }
//             break;

//         case 6:
//             console.log("Cảm ơn bạn đã sử dụng chương trình!");
//             break;

//         default:
//             alert("Số nhập không hợp lệ. Nhập lại");
//     }
// } 

// // // Khai báo hàm
// // // Function Declaration
// // function maybannuocTuDong(money){
// //     if(money === 10000){
// //         return "Pepsi vị chanh";
// //     }else if(money === 15000){
// //         return "Pepsi vị coca";

// //     }else if(money === 20000){
// //         return "Coca vị pepsi";
// //     }else{
// //         return "Tiền không hợp lệ";
// //     }
// // }
// // let lonNuoc1 = maybannuocTuDong(10000);
// // let lonNuoc2 = maybannuocTuDong(15000);
// // let lonNuoc3 = maybannuocTuDong(20000);
// // console.log(lonNuoc1);
// // console.log(lonNuoc2);
// // console.log(lonNuoc3);

// // Hàm không tên
// let sum = (function (a,b){
//     return a + b;
// })(1,2);
// console.log(sum);

// let caculateResult = function (a ,b){
//     return a * b;
// };

// console.log(sum);
// console.log(caculateResult(1,2));

// let str = sayHello("Người AE");
// console.log(str);

// function sayHello(name){
//     return "Hello " + name;
// }

// H0F
// function myFunction(random) {
//     return random;
// }
// myFunction(function () {});

//
let numbers = [10, 20, 30, 40, 50];
// forEach => tạo ra mảng mới từ mảng cũ
numbers.forEach(function (elment, index) {
    console.log(index, elment);
});

// map - Ánh xạ
let result = numbers.map(function (elment, index) {
    return elment * 2;
});
console.log(result);

// filter - Lọc
let result2 = numbers.filter(function (elment, index) {
    return elment > 20;
});
console.log(result2);

// reduce - Giảm
// acc - accumulator - biến tích lũy
// cur - currentValue - giá trị hiện tại
let reduceResult = numbers.reduce(function (accumulator, currentValue) {
    // return accumulator + currentValue;
    console.log("accumulator", accumulator);
    console.log("currentValue", currentValue);
    return accumulator + currentValue;
}, 0);
console.log("Reduce Result", reduceResult);

//some
let arr = [1, 2, 3, 4, 5];
let isTrue = arr.some(function (elment, index) {
    return elment % 2 === 0;
});
console.log(isTrue);

//every
let isTrue2 = arr.every(function (elment, index) {
    return elment % 2 === 0;
});
console.log(isTrue2);