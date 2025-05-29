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
  list.innerHTML = `
   ${task.name}
  <button onclick="editTask(${index})">Modifica</button>
  <button onclick="deleteTask(${index})">Elimina</button>
  `;

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

function editTask(index) {
  const newName = prompt("Modifica il nome dell'attività:", tasks[index].name);
  if (newName && newName.trim() !== "") {
    tasks[index].name = newName.trim();
    renderTasks();
  }
}

