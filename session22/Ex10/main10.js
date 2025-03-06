let arr = [];
let choice;
let menu = `
MENU-----------
1. Nhập vào mảng
2. Hiển thị mảng
3. Thêm phần tử
4. Sửa phần tử
5. Xóa phần tử
6. Thoát
Lựa chọn của bạn: 
`;

while (choice !== 6) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let number = +prompt("Mời bạn nhập vào số lượng phần tử muốn thêm vào mảng");
            for (let i = 0; i < number; i++) {
                let newElement = +prompt("Mời bạn nhập phần tử muốn thêm vào mảng");
                arr.push(newElement);
            }
            console.log("Mảng sau khi nhập:", arr);
            break;
        case 2:
            if (arr.length === 0) {
                console.log("Mảng đang trống!");
            } else {
                console.log("Các phần tử trong mảng:");
                for (let i = 0; i < arr.length; i++) {
                    console.log(`Phần tử thứ ${i}: ${arr[i]}`);
                }
            }
            break;
        case 3:
            let addIndex = +prompt("Mời bạn nhập vị trí của phần tử muốn thêm vào mảng");
            let newElement = +prompt("Mời bạn nhập vào phần tử muốn thêm vào trong mảng");
            arr.splice(addIndex, 0, newElement);
            console.log("Mảng sau khi thêm:", arr);
            break;
        case 4:
            let updateIndex = +prompt("Mời bạn nhập vào vị trí của phần tử muốn sửa");
            let updateElement = +prompt("Mời bạn nhập vào giá trị mới của phần tử muốn sửa");
            arr[updateIndex] = updateElement;
            console.log("Mảng sau khi sửa:", arr);
            break;
        case 5:
            let deleteIndex = +prompt("Mời bạn nhập vào vị trí của phần tử muốn xóa");
            arr.splice(deleteIndex, 1);
            console.log("Mảng sau khi xóa:", arr);
            break;
        case 6:
            console.log("Tạm biệt!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
    }
}