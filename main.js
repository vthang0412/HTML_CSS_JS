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

// //
// let numbers = [10, 20, 30, 40, 50];
// // forEach => tạo ra mảng mới từ mảng cũ
// numbers.forEach(function (elment, index) {
//     console.log(index, elment);
// });

// // map - Ánh xạ
// let result = numbers.map(function (elment, index) {
//     return elment * 2;
// });
// console.log(result);

// // filter - Lọc
// let result2 = numbers.filter(function (elment, index) {
//     return elment > 20;
// });
// console.log(result2);

// // reduce - Giảm
// // acc - accumulator - biến tích lũy
// // cur - currentValue - giá trị hiện tại
// let reduceResult = numbers.reduce(function (accumulator, currentValue) {
//     // return accumulator + currentValue;
//     console.log("accumulator", accumulator);
//     console.log("currentValue", currentValue);
//     return accumulator + currentValue;
// }, 0);
// console.log("Reduce Result", reduceResult);

// //some
// let arr = [1, 2, 3, 4, 5];
// let isTrue = arr.some(function (elment, index) {
//     return elment % 2 === 0;
// });
// console.log(isTrue);

// //every
// let isTrue2 = arr.every(function (elment, index) {
//     return elment % 2 === 0;
// });
// console.log(isTrue2);

// // 1. Tạo object person gồm các thông tin: name, age, job
// const person = {
//     personName: "Đặng Văn Thắng",
//     age: 18,
//     job: "Developer",
//     isMarried: false,
// };

// // Truy cập vào object
// console.log("Person name: ",person.personName);
// console.log("Age: ",person.age);

// const key = "personName";
// console.log("Person name: ",person[key]);

// console.log("Job: ",person.job);

// // 2.Thêm thuộc tính cho object
// person.height = 180; //thêm thuộc tính
// console.log("Height: ",person.height);

// // 3. Sửa thuộc tính cho object
// person.personName = "Đặng Văn Thg";
// person.age = 19;
// console.log("Person name: ",person);

// // 4. Xóa thuộc tính cho object
// delete person.isMarried;
// console.log("Person: ",person);

// // Tạo mảng đối tượng
// const teachers = [
//     {
//         id: 1,
//         teacherName: "Dang van A",
//     },
//     {
//         id: 2,
//         teacherName: "Dang van B",
//     },
//     {
//         id: 3,
//         teacherName: "Dang van C",
//     }
// ];
// console.table(teachers);

// // Duyệt qua đối tượng trong mảng
// for (const key in person){
//     console.log(key, person[key]);
// }

// //Lấy ra các key của object
// console.log("Danh sách key của object person:",Object.keys(person));
// console.log("Danh sách value của object person:",Object.values(person));

// // Optional chaining
// const user = {
//     name: "Dang Van Thang",
// };
// console.log("City: ",user?.address?.city);

// B1:Tạo menu
// B1.1:
// let choice;
// const products = [];
// do {
//     choice = +prompt(`
//          MENU
//     1.Thêm sản phẩm
//     2.Sửa thông tin sản phẩm
//     3.Xóa sản phẩm theo id
//     4.In danh sách sản phẩm
//     5.Tìm kiếm sản phẩm theo tên
//     6.Thoát chương trình
//     Lựa chọn của bạn:
//     `);
//     switch (choice) {
//         case 1:
//             const productNameInput = prompt("Nhập tên sản phẩm:");
//             const productPriceInput = +prompt("Nhập giá sản phẩm:");

//             const newProduct = {
//                 id: Math.ceil(Math.random() * 1000000000),
//                 productName: productNameInput,
//                 productPrice: productPriceInput,
//             };
//             products.push(newProduct);
//             console.log("Thêm sản phẩm thành công!");
//             break;
//         case 2:

//             break;
//         case 3:
//             const idDelete = +prompt("Nhập id sản phẩm cần xóa:");
//             const index = products.findIndex(function (product) {
//                 return product.id === idDelete;
//             });

//             //Trong js có những giá trị nào luôn là falsy: 0, "", null, undefined, NaN, false

//             if (index !== -1) {
//                 const productsNameDelete =  products[index].productName;
//                 const confirmDelete = prompt("Bạn có chắc chắn muốn xóa sản phẩm tên"+" " +productsNameDelete +" "+ "này không?");
//                 if (confirmDelete) {
//                     products.splice(index, 1);
//                     console.log("Xóa sản phẩm thành công!");
//                 } else {
//                     console.log("Xóa sản phẩm thất bại!");
//                 }
//                 break;
//             }
//         case 4:
//             console.table(products);
//             break;
//         case 5:

//             break;
//         case 6:
//             console.log("Cảm ơn bạn đã sử dụng chương trình!");
//             break;

//         default:
//             console.log("Lựa chọn không hợp lệ");
//             break;
//     }
// } while (choice !== 6);


//DOM - Document Object Model
//document.getElementbyId

// let div1 = document.getElementById("demo-id");

// console.log(div1);

// //

// let element = document.getElementsByClassName("demo-class");

// // console.log(element);
// let div2 = element[0];
// let b = element[2];
// console.log(div2);
// console.log(b);

// for (let i = 0; i <= element.length - 1; i++) {
//     console.log(element[i]);
// }

// let divs = document.getElementsByTagName("div");
// console.log(divs);

// let div = document.querySelector("div#demo-id.demo-class");
// console.log(div);

// let elements = document.querySelectorAll("div.demo-class");
// console.log(elements);

// let p = document.getElementById("paragraph");

// // console.dir(document);
// // console.dir(p);

// console.log(p.innerHTML);
// console.log(p.innerText);

// console.log(p.textContent);

// p.textContent = "Hello world";
// p.innerText = "Hehe world";
// p.innerHTML = "<b><i>Hello world</i></b>"

// let img = document.getElementsByTagName("img")[0];

// console.log(img);

// let link = img.getAttribute("src");

// console.log(link);

// let a = document.getElementById("anchor");
// let url = a.getAttribute("href");
// console.log(url);

// a.setAttribute("href","http://rikkei.edu.vn");

// let div = document.getElementById("demo-style-property");

// // console.log(div.style);

// // console.log(div.style.backgroundColor);

// // div.style.backgroundColor = "red";

// console.log(div.classList);

// div.classList.add("c4");

// div.classList.remove("c2");// xóa c2

// let check = div.classList.contains("c4");//false

// console.log(check);

// div.classList.toggle("demo-toggle");

// div.classList.add("demo-class-list");


//Demo trên lớp
// console.log(document);
// let h1 = document.getElementById("demo-id");
// console.log(h1);

// let tagList = document.getElementsByClassName("demo-class");
// console.log(tagList);

// console.log(tagList[2]);

// for (let i = 0; i <= tagList.length; i++) {
//     console.log(tagList[i]);
// }

let iTag = document.getElementsByClassName("demo-class")[2];
console.log(iTag);
console.log(iTag.innerHTML);
console.log(iTag.innerText);
console.log(iTag.textContent);

let p = document.getElementById("demo-inner");
console.log(p.innerHTML);
console.log(p.innerText);
console.log(p.textContent);

p.textContent = "Hello world";
p.innerText = "qweqeqewq";
p.innerHTML = `
<span>1</span>
<u>123</u>
<i>321</i>
`;
//lấy phần tử id của let p = ...
console.log(p.id);

//style
console.log(p.style);

let abbr = document.getElementsByClassName("class-01")[0];
console.log(abbr);

console.log(abbr.classList);

console.log(abbr.classList.add("circle"));
console.log(abbr.classList.remove("circle"));

console.log(abbr.parentElement.parentElement.children[1]);  
console.log(abbr.children);





