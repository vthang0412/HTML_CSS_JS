let arr = [];
let menu = `
            -----MENU-----
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
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
            {
                if (arr.length === 0) {
                    console.log("Mảng đang trống!");
                } else {
                    let max = Math.max(...arr);
                    let min = Math.min(...arr);
                    console.log("Phần tử lớn nhất:", max);
                    console.log("Phần tử nhỏ nhất:", min);
                }
                break;
            }
        case 4:
            {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                console.log("Tổng tất cả các phần tử trong mảng là:", sum);
                break;
            }
        case 5:
            {
                let count = 0;
                let sreach = +prompt("Nhập phần tử muốn tìm kiếm:");
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === sreach) {
                        count++;
                    }
                }
                if (count > 0) {
                    console.log(`Số lần xuất hiện la: ${count}`);
                } else {
                    alert("Không có phần tử cần tìm kiếm")
                }
                break;
            }
        case 6:
            arr.sort((a, b) => a - b);
            console.log("Mảng sau khi sắp xếp: " + arr);
            break;

        case 7:
            console.log("Thoát chương trình!");
            break;
            
        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn từ 1 đến 7.");
            break;
    }
}