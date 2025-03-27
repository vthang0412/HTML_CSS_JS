let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskName");
const addButton = document.querySelector(".task-input button");
const pendingTasks = document.getElementById("pendingTasks");
const inProgressTasks = document.getElementById("inProgressTasks");
const doneTasks = document.getElementById("doneTasks");

function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    pendingTasks.innerHTML = "";
    inProgressTasks.innerHTML = "";
    doneTasks.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML = `
            <p>${task.name}</p>
            ${
                task.status !== "Hoàn thành"
                    ? `<button onclick="changeStatus(${index})">Chuyển tiếp</button>`
                    : ""
            }
        `;

        if (task.status === "Chờ xử lý") {
            pendingTasks.appendChild(taskElement);
        } else if (task.status === "Đang làm") {
            inProgressTasks.appendChild(taskElement);
        } else if (task.status === "Hoàn thành") {
            doneTasks.appendChild(taskElement);
        }
    });
}

addButton.addEventListener("click", () => {
    const taskName = taskInput.value.trim();
    if (taskName === "") {
        alert("Tên công việc không được để trống!");
        return;
    }

    tasks.push({ name: taskName, status: "Chờ xử lý" });
    taskInput.value = "";
    saveToLocalStorage();
    renderTasks();
});

function changeStatus(index) {
    if (tasks[index].status === "Chờ xử lý") {
        tasks[index].status = "Đang làm";
    } else if (tasks[index].status === "Đang làm") {
        tasks[index].status = "Hoàn thành";
    }
    saveToLocalStorage();
    renderTasks();
}

renderTasks();  