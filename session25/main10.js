// let products = [
//     ["mì tôm", 5, 5000],
//     ["bánh mì", 12, 15000],
//     ["bánh bao", 5, 8000],
//     ["mèn mén", 30, 20000],
//   ];
//   let cart = [];
//   // let cart = [
//   //   ["mì tôm", 1, 5000],
//   //   ["bánh mì", 1, 15000],
//   //   ["bánh bao", 1, 8000],
//   //   ["mèn mén", 1, 20000],
//   // ];
  
//   // B1: Xây menu để người dùng chọn
//   let menu = `
//   ------------ MENU ------------
//   1. Hiển thị danh sách sản phẩm
//   2. Mua hàng
//   3. Hoá đơn + Tổng tiền
//   4. Thoát
//   Mời bạn nhập vào sự lựa chọn của bạn:
//   `;
//   let input;
//   // B2: Hỏi ng dùng chọn gì???? và điều hướng
//   while (input !== 4) {
//     input = +prompt(menu);
//     switch (input) {
//       case 1: // Hiển thị sản phẩm
//         // B3: Duyệt qua mảng products
//         displayProduct(products);
//         break;
//       case 2: // Mua hàng
//         // B4: Cho ng dùng nhập tên sản phẩm muốn mua
//         let productName = prompt("Mời nhập tên sp muốn mua:");
//         // B5: Tìm kiếm xem sp đó có tồn tại trong store??
//         let findIndex = -1;
//         for (let i in products) {
//           if (productName === products[i][0]) {
//             findIndex = i;
//             break;
//           }
//         }
//         if (findIndex === -1) {
//           // B6: Nếu không ---> Làm đếch có
//           console.log("Không tồn tại sản phẩm này");
//         } else {
//           // B7: Nếu có --> Process đến việc mua hàng
//           // B8: Kiểm tra xem sản phẩm có trong giỏ hàng chưa
//           let inCartIndex = -1;
//           for (let i in cart) {
//             if (productName === cart[i][0]) {
//               inCartIndex = i;
//               break;
//             }
//           }
//           if (inCartIndex === -1) {
//             // B10: Nếu chưa ---> Thêm sản phẩm đó vào (sl = 1)
//             let buyProduct = products[findIndex];
//             let addProduct = [buyProduct[0], 1, buyProduct[2]];
//             cart.push(addProduct);
//           } else {
//             // B9: Nếu có rồi --->
//             cart[inCartIndex][1] += 1;
//           }
//           products[findIndex][1]--;
//         }
//         break;
//       case 3: // Hiển thị hoá đơn
//         displayProduct(cart);
  
//         let sum = 0;
//         for (let product of cart) {
//           sum += product[1] * product[2];
//         }
//         console.log("Tổng bill =", sum);
//         break;
//       case 4: // Thoát
//         console.log("Thank you for visiting our shop !!");
//         break;
//       default: // Không hợp lệ
//         console.log("Không hợp lệ !!! Mời nhập lại");
//         break;
//     }
//   }
  
//   function displayProduct(productList) {
//     // B3: Duyệt qua mảng products
//     for (let i in productList) {
//       console.log(
//         `${+i + 1}. ${productList[i][0]} - ${productList[i][1]} - ${
//           productList[i][2]
//         }`
//       );
//     }
//   }

let product = [
  ["Noodle", 5, 5000],
  ["Bread", 12, 15000],
  ["Dumplings", 5, 8000],
  ["Milk", 30, 20000]
];

let cart = [];
let check = true;
let input;

let menu = `
------------MENU------------
1. List of product
2. Purchase
3. Bill
4. Exit
Please enter your choice:
`;

while (check) {
  input = +prompt(menu);

  switch (input) {
      case 1:
          displayProduct(product);
          break;

      case 2:
          let findIndex = -1;
          let productName = prompt("Please enter the name of product you want to buy!")
          for (let i in product) {
              if (productName === product[i][0]) {
                  findIndex = i;
                  break;
              }
          }
          if (findIndex === -1) {
              alert("Not found the product!")
          } else {
              let productAmount = +prompt("Please enter amount of product you want to buy!")
              if (product[findIndex][1] === 0) {
                  alert("Out of product!");
                  break;
              } else if (product[findIndex][1] < productAmount){
                  alert("Out of product!");
                  break;
              }
              let cartIndex = -1;
              for (let i in cart) {
                  if (productName === cart[i][0]) {
                      cartIndex = i;
                      break;
                  }
              }
              if (cartIndex === -1) {
                  let buyProduct = product[findIndex];
                  let addProduct = [buyProduct[0], productAmount, buyProduct[2]];
                  cart.push(addProduct);
              } else {
                  cart[cartIndex][1] += productAmount;
              }
              product[findIndex][1] -= productAmount;
              alert("Purchase complete!");
          }
          console.clear();
          break;

      case 3:
          console.clear();
          displayProduct(cart);
          let sum = 0;
          for (let i = 0 ; i < cart.length ; i++) {
              sum += cart[i][1] * cart[i][2];
          }
          console.log(`Total: ${sum}`)
          break;

      case 4:
          console.clear();
          alert("Thank you for your visiting!");
          check = false;
          break;

      default:
          alert("Your choice is available! Please try again.");
          break;
  }
}

function displayProduct(productList) {
  console.clear();
  for (let i in productList) {
      console.log(`
          ${+i + 1}. ${productList[i][0]} - ${productList[i][1]} - ${productList[i][2]}
          `);
  }
}