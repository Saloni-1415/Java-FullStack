let taskName = document.getElementById("taskName");
let dueDate = document.getElementById("dueDate");
let priority = document.getElementById("priority");
let addTaskBtn = document.getElementById("addTaskBtn");

let taskList = document.getElementById("taskList");

let totalTasks = document.getElementById("totalTasks");
let pendingTasks = document.getElementById("pendingTasks");
let completedTasks = document.getElementById("completedTasks");

let allBtn = document.getElementById("allBtn");
let pendingBtn = document.getElementById("pendingBtn");
let completedBtn = document.getElementById("completedBtn");

function updateCount() {
    let total = taskList.children.length;
    let completed = 0;

    let tasks = taskList.children;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains("completed")) {
            completed++;
        }
    }

    let pending = total - completed;

    totalTasks.innerHTML = total;
    pendingTasks.innerHTML = pending;
    completedTasks.innerHTML = completed;
}

addTaskBtn.onclick = function () {

    let task = taskName.value;
    let date = dueDate.value;
    let level = priority.value;

    if (task == "" || date == "") {
        alert("Please fill all fields");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
        "<span>" + task + " | " + date + " | " + level + "</span>" +
        '<div class="task-buttons">' +
        '<button class="complete-btn">Complete</button>' +
        '<button class="edit-btn">Edit</button>' +
        '<button class="delete-btn">Delete</button>' +
        "</div>";

    taskList.appendChild(li);

    let completeBtn = li.querySelector(".complete-btn");
    let editBtn = li.querySelector(".edit-btn");
    let deleteBtn = li.querySelector(".delete-btn");

    completeBtn.onclick = function () {
        li.classList.toggle("completed");
        updateCount();
    };

    editBtn.onclick = function () {
        taskName.value = task;
        dueDate.value = date;
        priority.value = level;

        li.remove();

        updateCount();
    };

    deleteBtn.onclick = function () {
        li.remove();
        updateCount();
    };

    taskName.value = "";
    dueDate.value = "";
    priority.value = "Low";

    updateCount();
};

allBtn.onclick = function () {

    let tasks = taskList.children;

    for (let i = 0; i < tasks.length; i++) {
        tasks[i].style.display = "flex";
    }

};

pendingBtn.onclick = function () {

    let tasks = taskList.children;

    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].classList.contains("completed")) {
            tasks[i].style.display = "none";
        } else {
            tasks[i].style.display = "flex";
        }

    }

};

completedBtn.onclick = function () {

    let tasks = taskList.children;

    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].classList.contains("completed")) {
            tasks[i].style.display = "flex";
        } else {
            tasks[i].style.display = "none";
        }

    }

};

updateCount();