let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${task} <button class="delete" onclick="deleteTask(${index})">Xóa</button>`;
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
renderTasks();