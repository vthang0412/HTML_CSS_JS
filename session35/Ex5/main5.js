let categories = JSON.parse(localStorage.getItem("categories")) || [];
let editIndex = null;

function renderTable() {
    const table = document.getElementById("categoryTable");
    table.innerHTML = "";
    categories.forEach((cat, index) => {
        table.innerHTML += `
              <tr>
                  <td>${cat.id}</td>
                  <td>${cat.name}</td>
                  <td>
                      <span class="status ${cat.status === "Đang hoạt động" ? "active" : "inactive"}">
                          ${cat.status}
                      </span>
                  </td>
                  <td class="actions">
                      <button class="btn btn-delete" onclick="deleteCategory(${index})">
                          🗑️
                      </button>
                      <button class="btn btn-edit" onclick="editCategory(${index})">
                          ✏️
                      </button>
                  </td>
              </tr>
          `;
    });
}

function openModal(edit = false) {
    document.getElementById("modal").style.display = "flex";
    if (!edit) {
        document.getElementById("categoryId").value = "";
        document.getElementById("categoryName").value = "";
        document.querySelector('input[name="categoryStatus"][value="Đang hoạt động"]').checked = true;
        editIndex = null;
    }
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function saveCategory() {
    const id = document.getElementById("categoryId").value.trim();
    const name = document.getElementById("categoryName").value.trim();
    const status = document.querySelector('input[name="categoryStatus"]:checked').value;

    const output = document.getElementById("output");

    if (!id || !name) {
        output.innerHTML = "Mã và tên danh mục không được để trống!";
        return;
    }

    if (editIndex === null && categories.some((cat) => cat.id === id)) {
        output.innerHTML = "Mã danh mục đã tồn tại. Vui lòng nhập mã khác.";
        return;
    }

    if (editIndex !== null) {
        categories[editIndex] = { id, name, status };
    } else {
        categories.push({ id, name, status });
    }

    localStorage.setItem("categories", JSON.stringify(categories));
    renderTable();
    closeModal();

    output.innerHTML = "Mã và tên danh mục hợp lệ";
}

function editCategory(index) {
    editIndex = index;
    document.getElementById("categoryId").value = categories[index].id;
    document.getElementById("categoryName").value = categories[index].name;
    document.querySelector(`input[name="categoryStatus"][value="${categories[index].status}"]`).checked = true;
    openModal(true);
}

function deleteCategory(index) {
    if (confirm("Bạn có chắc muốn xóa danh mục này?")) {
        categories.splice(index, 1);
        localStorage.setItem("categories", JSON.stringify(categories));
        renderTable();
    }
}

renderTable();

// function clearLocalStorage() {
//     if (confirm("Bạn có chắc muốn xóa toàn bộ dữ liệu?")) {
//         localStorage.removeItem("categories");
//         categories = [];
//         renderTable();
//         alert("Dữ liệu đã được xóa!");
//     }
// }