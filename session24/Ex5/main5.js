let arr = [];
let rows, cols;
let choice;
let menu = `
                MENU
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử
4. Tính tổng đường chéo chính
5. Tính tổng đường chéo phụ
6. Tính trung bình cộng hàng/cột
7. Thoát chương trình
`;

while (choice !== 7) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            rows = +prompt("Nhập số hàng: ");
            cols = +prompt("Nhập số cột: ");
            for (let i = 0; i < rows; i++) {
                arr[i] = [];
                for (let j = 0; j < cols; j++) {
                    arr[i][j] = +prompt(`Nhập phần tử [${i}][${j}]: `);
                }
            }
            break;

        case 2:
            if (arr.length === 0) {
                console.log("Vui lòng nhập mảng trước!");
            } else {
                for (let i = 0; i < arr.length; i++) {
                    console.log(arr[i].join("\t"));
                }
            }
            break;

        case 3:
            if (arr.length === 0) {
                console.log("Vui lòng nhập mảng trước!");
            } else {
                let sum = 0;
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        sum += arr[i][j];
                    }
                }
                console.log("Tổng các phần tử: " + sum);
            }
            break;

        case 4:
            if (arr.length === 0) {
                console.log("Vui lòng nhập mảng trước!");
            } else if (rows !== cols) {
                console.log("Ma trận không vuông!");
            } else {
                let sum = 0;
                for (let i = 0; i < rows; i++) {
                    sum += arr[i][i];
                }
                console.log("Tổng đường chéo chính: " + sum);
            }
            break;

        case 5:
            if (arr.length === 0) {
                console.log("Vui lòng nhập mảng trước!");
            } else if (rows !== cols) {
                console.log("Ma trận không vuông!");
            } else {
                let sum = 0;
                for (let i = 0; i < rows; i++) {
                    sum += arr[i][cols - 1 - i];
                }
                console.log("Tổng đường chéo phụ: " + sum);
            }
            break;

        case 6:
            if (arr.length === 0) {
                console.log("Vui lòng nhập mảng trước!");
            } else {
                let type = prompt("Bạn muốn tính trung bình cộng của (1: Hàng, 2: Cột): ");
                if (type === "1") {
                    let row = +prompt(`Nhập số hàng (0-${rows - 1}): `);
                    if (row >= 0 && row < rows) {
                        let sum = 0;
                        for (let j = 0; j < cols; j++) {
                            sum += arr[row][j];
                        }
                        console.log(`Trung bình cộng hàng ${row}: ${sum / cols}`);
                    } else {
                        console.log("Hàng không hợp lệ!");
                    }
                } else if (type === "2") {
                    let col = +prompt(`Nhập số cột (0-${cols - 1}): `);
                    if (col >= 0 && col < cols) {
                        let sum = 0;
                        for (let i = 0; i < rows; i++) {
                            sum += arr[i][col];
                        }
                        console.log(`Trung bình cộng cột ${col}: ${sum / rows}`);
                    } else {
                        console.log("Cột không hợp lệ!");
                    }
                } else {
                    console.log("Lựa chọn không hợp lệ!");
                }
            }
            break;
        case 7:
            console.log("Thoát chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn từ 1 đến 7.");
            break;
    }
}