let arr = [];
let menu = `
-------MENU-------
1. Nhập danh sách sinh viên.
2. Hiển thị danh sách sinh viên.
3. Tìm sinh viên theo tên.
4. Xóa sinh viên khỏi danh sách.
5. Thoát.
Lựa chọn của bạn:`;
let choice;
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            addStudent();
            break;
        case 2:
            showStudent();
            break;
        case 3:
            searchStudent();
            break;
        case 4:
            deleteStudent();
            break;
        case 5:
            console.log("Kết thúc chương trình.");
            break;
        default:
            console.log("Nhập sai, vui lòng chọn lại.");
            break;
    }
}
function addStudent(){
    let n = +prompt("Nhập số lượng sinh viên:");
    for (let i = 0; i < n; i++) {
        let name = prompt("Nhập tên sinh viên thứ " + (i + 1) + ":");
        arr.push(name);

    }
}
function showStudent(){
    if (arr.length === 0) {
        console.log("Danh sách sinh viên rỗng.");
    } else {
        console.log("Danh sách sinh viên:", arr);
    }
}
function searchStudent() {
    let searchName = prompt("Nhập tên sinh viên cần tìm:");
    let foundStudents = arr.filter(name => name.toLowerCase().includes(searchName.toLowerCase()));
    if (foundStudents.length > 0) {
        console.log("Sinh viên tìm thấy:", foundStudents);
    } else {
        console.log("Sinh viên không có trong danh sách");
    }
}
function deleteStudent() {
    let deleteName = prompt("Nhập tên sinh viên cần xóa:");
    let index = arr.map(name => name.toLowerCase()).indexOf(deleteName.toLowerCase());
    if (index !== -1) {
        arr.splice(index, 1);
        console.log("Đã xóa sinh viên:", deleteName);
    } else {
        console.log("Sinh viên không có trong danh sách");
    }
}