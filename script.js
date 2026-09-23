const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const filterButtons = document.querySelectorAll(".filter");


// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";


// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// Display tasks
function renderTasks() {

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    // Filtering
    if (currentFilter === "active") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    if (currentFilter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    }


    // Empty message
    if (filteredTasks.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }


    // Create task elements
    filteredTasks.forEach(task => {

        const li = document.createElement("li");

        li.className = "task";

        if (task.completed) {
            li.classList.add("completed");
        }

        li.dataset.id = task.id;


        li.innerHTML = `
            <div class="task-left">
                <input 
                    type="checkbox" 
                    class="complete-btn"
                    ${task.completed ? "checked" : ""}
                >

                <span>${task.text}</span>
            </div>

            <div class="task-actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;


        taskList.appendChild(li);
    });
}


// CREATE
function addTask() {

    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task.");
        return;
    }


    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };


    tasks.push(newTask);

    saveTasks();

    renderTasks();

    taskInput.value = "";
}


// Add task button
addBtn.addEventListener("click", addTask);


// Add task using Enter key
taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});


// EVENT DELEGATION
taskList.addEventListener("click", function(event) {

    const taskElement = event.target.closest(".task");

    if (!taskElement) return;

    const taskId = Number(taskElement.dataset.id);

    const task = tasks.find(task => task.id === taskId);


    // DELETE
    if (event.target.classList.contains("delete-btn")) {

        tasks = tasks.filter(task => task.id !== taskId);

        saveTasks();

        renderTasks();
    }


    // EDIT
    if (event.target.classList.contains("edit-btn")) {

        const newText = prompt("Edit your task:", task.text);

        if (newText !== null && newText.trim() !== "") {

            task.text = newText.trim();

            saveTasks();

            renderTasks();
        }
    }

});


// COMPLETE / UNCOMPLETE
taskList.addEventListener("change", function(event) {

    if (!event.target.classList.contains("complete-btn")) {
        return;
    }

    const taskElement = event.target.closest(".task");

    const taskId = Number(taskElement.dataset.id);

    const task = tasks.find(task => task.id === taskId);

    task.completed = event.target.checked;

    saveTasks();

    renderTasks();
});


// FILTERS
filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        renderTasks();
    });

});


// Initial display
renderTasks();