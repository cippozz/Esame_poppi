let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const taskName = input.value.trim();

  if (taskName !== "") {
    tasks.push({ name: taskName, status: "todo" });
    input.value = "";
    renderTasks();
  }
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = `${task.name}`;
    list.appendChild(li);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
