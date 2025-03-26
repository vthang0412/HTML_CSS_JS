let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let addList = document.getElementById("taskList");

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button class="update" onclick="updateTask(${index})">Sửa</button>
     <button class="delete" onclick="deleteTask(${index})">Xóa</button>`;
        taskList.appendChild(li);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

addTaskButton.addEventListener("click", () => {
    let task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        taskInput.value = "";
        renderTasks();
    }
});

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function updateTask(index){
    let newTask = prompt("Nhập công việc mới:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask.trim(); 
        renderTasks();
    }
}

renderTasks();