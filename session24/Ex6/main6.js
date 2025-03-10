let str = "";
let choice;
let menu = `
                 MENU
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự
5. Kiểm tra chuỗi đối xứng
6. Chuyển đổi in hoa ký tự đầu từ
7. Thoát chương trình
`;

while (choice !== 7) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi: ");
            break;

        case 2:
            if (str === "") {
                console.log("Vui lòng nhập chuỗi trước!");
            } else {
                console.log("Chuỗi hiện tại: " + str);
            }
            break;

        case 3:
            if (str === "") {
                console.log("Vui lòng nhập chuỗi trước!");
            } else {
                console.log("Độ dài chuỗi: " + str.length);
            }
            break;

        case 4:
            if (str === "") {
                console.log("Vui lòng nhập chuỗi trước!");
            } else {
                let char = prompt("Nhập ký tự cần đếm: ");
                let count = 0;
                for (let i = 0; i < str.length; i++) {
                    if (str[i] === char) {
                        count++;
                    }
                }
                console.log(`Số lần xuất hiện của '${char}': ${count}`);
            }
            break;

        case 5:
            if (str === "") {
                console.log("Vui lòng nhập chuỗi trước!");
            } else {
                let found = true;
                for (let i = 0; i < str.length / 2; i++) {
                    if (str[i] !== str[str.length - 1 - i]) {
                        found = false;
                        break;
                    }
                }
                if (found) {
                    console.log("Đây là chuỗi đối xứng");
                } else {
                    console.log("Đây không phải chuỗi đối xứng");
                }
            }
            break;

        case 6:
            if (str === "") {
                console.log("Vui lòng nhập chuỗi trước!");
            } else {
                let arr = str.split("");
                arr[0] = arr[0].toUpperCase();
                str = arr.join("");
                console.log("Chuỗi sau khi chuyển đổi: " + str);
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