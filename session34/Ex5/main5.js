let employees = JSON.parse(localStorage.getItem("employees")) || [];
const employeeName = document.getElementById("employeeName");
const employeePosition = document.getElementById("employeePosition");
const addEmployeeButton = document.getElementById("addEmployee");
const employeeTable = document.getElementById("employeeTable");
addEmployeeButton.addEventListener("click", () => {
    let name = employeeName.value.trim();
    let position = employeePosition.value.trim();
    if (name && position) {
        employees.push({ name, position });
        employeeName.value = "";
        employeePosition.value = "";
        renderEmployees();
    }
});
renderEmployees();
function renderEmployees() {
    employeeTable.innerHTML = "";
    employees.forEach((employee, index) => {
        let row = `
            <tr>
                <td>${index + 1}</td>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
                <td><button class="delete-btn" onclick="deleteEmployee(${index})">Xóa</button></td>
            </tr>
        `;
        employeeTable.innerHTML += row;
    });
    localStorage.setItem("employees", JSON.stringify(employees));
}
function deleteEmployee(index) {
    employees.splice(index, 1);
    renderEmployees();
}