let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const taskName = input.value.trim();

  if (taskName !== "") {
    tasks.push({ name: taskName, status: "Da fare" });
    input.value = "";
    renderTasks();
  }
}

function renderTasks() {
  const list = document.getElementById("taskList");
  const filter = document.getElementById("statusFilter").value;
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();

  // Mappa per tradurre filtro da inglese a italiano
  const statusFilterMap = {
    all: null,
    todo: "Da fare",
    doing: "In corso",
    done: "Completato",
  };

  list.innerHTML = "";

  tasks.forEach((task, index) => {
    if (
      (filter === "all" || task.status === statusFilterMap[filter]) &&
      task.name.toLowerCase().includes(searchTerm)
    ) {
      const li = document.createElement("li");
      li.classList.add(task.status.replace(" ", "-").toLowerCase());


      li.innerHTML = `
        <strong>${task.name}</strong>
        <span class="status ${task.status.replace(' ', '-').toLowerCase()}">[${task.status}]</span>
        <button onclick="changeStatus(${index})">Cambia Stato</button>
        <button onclick="editTask(${index})">Modifica</button>
        <button onclick="deleteTask(${index})">Elimina</button>
      `;

      list.appendChild(li);
    }
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

function changeStatus(index) {
  const statusOrder = ["Da fare", "In corso", "Completato"];
  const currentStatus = tasks[index].status;
  const currentIndex = statusOrder.indexOf(currentStatus);
  const nextIndex = (currentIndex + 1) % statusOrder.length;
  tasks[index].status = statusOrder[nextIndex];
  renderTasks();
}

function filterTasks() {
  renderTasks();
}

function searchTasks() {
  renderTasks();
}
