const employees = [
  { id: 1, name: "John", age: 18, address: "New York" },
  { id: 2, name: "Mike", age: 22, address: "Canada" },
  { id: 3, name: "Linda", age: 19, address: "California" },
  { id: 4, name: "Peter", age: 25, address: "London" },
  { id: 5, name: "Tony", age: 17, address: "New York" },
];

const tableBody = document.getElementsByTagName("tbody")[0];

employees.forEach((employee, index) => {
  const row = `<tr>
              <td>${index + 1}</td>
              <td>${employee.name}</td>
              <td>${employee.age}</td>
              <td>${employee.address}</td>
          </tr>`;
  tableBody.innerHTML += row;
});