const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
    const taskName = taskInput.value.trim();

    if (taskName === "") {
        alert("Tên nhiệm vụ không được để trống!");
        return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = taskName;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "deleteButton";

    deleteButton.addEventListener("click", function () {
        const confirmDelete = confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này không?");
        if (confirmDelete) {
            taskList.removeChild(newTask);
        }
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    taskInput.value = "";
});