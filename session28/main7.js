let students = [
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }
];

function locSinhVien(students) {
    return students.filter(student => {
        let { math, english, literature } = student.scores;
        let diemTrungBinh = (math + english + literature) / 3;
        return diemTrungBinh >= 8;
    });
}

let sinhVienDiemCao = locSinhVien(students);
console.log("Danh sách sinh viên có điểm trung bình >= 8:", sinhVienDiemCao);
