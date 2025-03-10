const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.onclick = function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `${taskText} <span class="delete-btn">Hapus</span>`;
    taskList.appendChild(li);

    taskInput.value = "";
};

taskList.addEventListener("click", function (event) {
    if (event.target.className === "delete-btn") {
        event.target.parentElement.remove();
    }
});
