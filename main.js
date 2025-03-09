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
