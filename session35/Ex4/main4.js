const employeeTable = document.getElementById("employeeTable");
const employeeNameInput = document.getElementById("employeeName");
const employeePositionInput = document.getElementById("employeePosition");
const addEmployeeButton = document.getElementById("addEmployee");
const prevPageButton = document.getElementById("prevPage");
const nextPageButton = document.getElementById("nextPage");
const pageNumbers = document.getElementById("pageNumbers");

let employees = JSON.parse(localStorage.getItem("employees")) || [];

let currentPage = 1;
const rowsPerPage = 3;

addEmployeeButton.addEventListener("click", () => {
    const name = employeeNameInput.value.trim();
    const position = employeePositionInput.value.trim();

    if (name && position) {
        employees.push({ name, position });
        saveToLocalStorage();
        employeeNameInput.value = "";
        employeePositionInput.value = "";
        renderTable();
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
});

function saveToLocalStorage() {
    localStorage.setItem("employees", JSON.stringify(employees));
}

function renderTable() {
    employeeTable.innerHTML = "";

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentEmployees = employees.slice(startIndex, endIndex);

    currentEmployees.forEach((employee, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${startIndex + index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
        `;
        employeeTable.appendChild(row);
    });

    renderPagination();
}

function renderPagination() {
    pageNumbers.innerHTML = "";

    const totalPages = Math.ceil(employees.length / rowsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.classList.add("page-btn");
        if (i === currentPage) {
            button.classList.add("active");
        }
        button.addEventListener("click", () => {
            currentPage = i;
            renderTable();
        });
        pageNumbers.appendChild(button);
    }

    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages;
}

prevPageButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
});

nextPageButton.addEventListener("click", () => {
    const totalPages = Math.ceil(employees.length / rowsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderTable();
    }
});

renderTable();