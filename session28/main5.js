const company = {
    name: "RikkeiSoft",
    location: "Hà Nội",
    employees: [
        { name: "Nguyễn Văn Luận", position: "Developer" },
        { name: "Nguyễn Văn Hoàng", position: "Tester" },
        { name: "Hoàng Nam Cao", position: "Manager" }
    ]
};

console.log(`Tên công ty: ${company.name}`);
for (let i = 0; i < company.employees.length; i++) {
    console.log(`Tên nhân viên: ${company.employees[i].name}`);
}