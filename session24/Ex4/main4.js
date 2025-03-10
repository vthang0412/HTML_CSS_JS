let arr = [];
let menu = `
            -----MENU-----
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình
`;

let key;
while (key !== 7) {
    key = +prompt(menu);
    switch (key) {
        case 1: {
            let rows = +prompt("Nhập số hàng của mảng:");
            let cols = +prompt("Nhập số cột của mảng:");

            for (let i = 0; i < rows; i++) {
                let row = [];
                for (let j = 0; j < cols; j++) {
                    let newElement = +prompt(`Nhập phần tử tại hàng ${i + 1}, cột ${j + 1}:`);
                    row.push(newElement);
                }
                arr.push(row);
            }
            console.log(arr);
            break;
        }
        case 2: {
            if (arr.length === 0) {
                console.log("Mảng đang trống!");
            } else {
                console.log("Các phần tử trong mảng:");
                for (let i = 0; i < arr.length; i++) {
                    console.log(arr[i].join(" "));
                }
            }
            break;
        }
        case 3: {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    sum += arr[i][j];
                }
            }
            console.log("Tổng các phần tử trong mảng là: " + sum);
            break;
        }
        case 4: {
            let max = arr[0][0];
            let index = [0, 0];
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j] > max) {
                        max = arr[i][j];
                        index = [i, j];
                    }
                }
            }
            console.log(`Phần tử lớn nhất là ${max} tại vị trí hàng ${index[0] + 1}, cột ${index[1] + 1}`);
            break;
        }
        case 5: {
            let rowIndex = +prompt("Nhập hàng bạn muốn tính trung bình cộng:") - 1;
            if (rowIndex < 0 || rowIndex >= arr.length) {
                console.log("Hàng không hợp lệ!");
            } else {
                let sum = arr[rowIndex].reduce((a, b) => a + b, 0);
                let avg = sum / arr[rowIndex].length;
                console.log(`Trung bình cộng của hàng ${rowIndex + 1} là: ${avg}`);
            }
            break;
        }
        case 6: {
            arr.reverse();
            console.log("Mảng sau khi đảo ngược các hàng:");
            console.table(arr);
            break;
        }
        case 7: {
            console.log("Thoát chương trình!");
            break;
        }
        default: {
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn từ 1 đến 7.");
            break;
        }
    }
}