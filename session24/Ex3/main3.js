let arr = [];
let menu = `
            -----MENU-----
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình
`;

let key;
while (key !== 7) {
    key = +prompt(menu);
    switch (key) {
        case 1:
            {
                let number = +prompt("Mời bạn nhập vào số lượng phần tử muốn thêm vào mảng");
                for (let i = 0; i < number; i++) {
                    let newElement = +prompt("Mời bạn nhập phần tử muốn thêm vào mảng");
                    arr.push(newElement);
                }
                console.log(arr);
                break;

            }
        case 2:
            {
                if (arr.length === 0) {
                    console.log("Mảng đang trống!");
                } else {
                    console.log("Các phần tử trong mảng:");
                    for (let i = 0; i < arr.length; i++) {
                        console.log(`Phần tử thứ ${i}: ${arr[i]}`);
                    }
                }
                break;
            }
        case 3:
            let max = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            console.log(`Phần tử lớn nhất trong mảng la ${max}`);
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += arr[i]
                }
            }
            let average = sum / arr.length;
            console.log(`Trung bình cộng của mảng là ${average}`);
            break;
        case 5:
            console.log("Mảng sau khi đảo ngược là:");
            for (let i = arr.length - 1; i >= 0; i--) {
                console.log(arr[i]);
            }
            break;
        case 6:
            for (let i = 0; i < arr.length / 2; i++) {
                if (arr[i] !== arr[arr.length - 1 - i]) {
                    console.log("Mảng không đối xứng");
                    break;
                } else {
                    console.log("Mảng đối xứng");
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