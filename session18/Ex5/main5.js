let exprerience = +prompt("Nhập năm kinh nghiệm: ");
if (exprerience < 1) {
    alert("Mới vào nghề");
} else if (exprerience < 3) {
    alert("Nhân viên có kinh nghiệm");
} else if (exprerience < 6) {
    alert("Chuyên viên");
} else if (exprerience > 6) {
    alert("Quản lý");
}