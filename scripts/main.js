// ========================================
// Task Management Application
// AUREX Internship - Week 4
// ========================================


// ========================================
// DOM Elements
// ========================================

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const errorMessage = document.getElementById("errorMessage");
const emptyMessage = document.getElementById("emptyMessage");
const taskCount = document.getElementById("taskCount");

const filterButtons = document.querySelectorAll(".filter-btn");


// ========================================
// Tasks Array
// ========================================

let tasks = [];

let currentFilter = "all";


// ========================================
// Load Tasks From localStorage
// ========================================

function loadTasks() {

    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }

    displayTasks();
}


// ========================================
// Save Tasks To localStorage
// ========================================

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}


// ========================================
// Add Task
// ========================================

taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const taskText = taskInput.value.trim();


    // Validation

    if (taskText === "") {

        errorMessage.textContent =
            "Please enter a task.";

        return;
    }


    // Clear error

    errorMessage.textContent = "";


    // Create new task

    const newTask = {

        id: Date.now(),

        title: taskText,

        completed: false
    };


    // Add task to array

    tasks.push(newTask);


    // Save tasks

    saveTasks();


    // Clear input

    taskInput.value = "";


    // Display tasks

    displayTasks();

});


// ========================================
// Display Tasks
// ========================================

function displayTasks() {

    taskList.innerHTML = "";


    // Filter tasks

    let filteredTasks = tasks;


    if (currentFilter === "active") {

        filteredTasks = tasks.filter(function(task) {

            return !task.completed;

        });

    }


    if (currentFilter === "completed") {

        filteredTasks = tasks.filter(function(task) {

            return task.completed;

        });

    }


    // Empty message

    if (filteredTasks.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";

    }


    // Create task elements

    filteredTasks.forEach(function(task) {

        createTaskElement(task);

    });


    // Update task count

    updateTaskCount();

}


// ========================================
// Create Task Element
// ========================================

function createTaskElement(task) {

    const li = document.createElement("li");
      li.setAttribute("data-task-id", task.id);

    li.classList.add("task-item");


    // Add completed class

    if (task.completed) {

        li.classList.add("completed");

    }


    // Checkbox

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.classList.add("task-checkbox");

    checkbox.checked = task.completed;


    // Checkbox event

    checkbox.addEventListener("change", function() {

        toggleTask(task.id);

    });


    // Task text

    const span = document.createElement("span");

    span.classList.add("task-text");

    span.textContent = task.title;


    // Buttons container

    const actions = document.createElement("div");

    actions.classList.add("task-actions");


    // Edit button

    const editButton = document.createElement("button");

    editButton.textContent = "Edit";

    editButton.classList.add("edit-btn");


    editButton.addEventListener("click", function() {

        editTask(task.id);

    });


    // Delete button

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete-btn");


    deleteButton.addEventListener("click", function() {

        deleteTask(task.id);

    });


    // Add buttons

    actions.appendChild(editButton);

    actions.appendChild(deleteButton);


    // Add everything to li

    li.appendChild(checkbox);

    li.appendChild(span);

    li.appendChild(actions);


    // Add li to list

    taskList.appendChild(li);
}


// ========================================
// Complete / Uncomplete Task
// ========================================

function toggleTask(taskId) {

    tasks = tasks.map(function(task) {

        if (task.id === taskId) {

            return {
                ...task,
                completed: !task.completed
            };

        }

        return task;

    });


    saveTasks();

    displayTasks();
}


// ========================================
// Delete Task
// ========================================

function deleteTask(taskId) {

    tasks = tasks.filter(function(task) {

        return task.id !== taskId;

    });


    saveTasks();

    displayTasks();
}


// ========================================
// Edit Task
// ========================================

// ========================================
// Edit Task
// ========================================

function editTask(taskId) {

    const task = tasks.find(function(task) {
        return task.id === taskId;
    });

    if (!task) {
        return;
    }

    const taskItem = document.querySelector(
        `[data-task-id="${taskId}"]`
    );

    const taskText = taskItem.querySelector(".task-text");

    const input = document.createElement("input");

    input.type = "text";
    input.value = task.title;
    input.classList.add("edit-input");

    taskText.replaceWith(input);

    input.focus();

    input.select();

    // Save when Enter is pressed
    input.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            const updatedTitle = input.value.trim();

            if (updatedTitle === "") {
                alert("Task cannot be empty.");
                return;
            }

            task.title = updatedTitle;

            saveTasks();

            displayTasks();
        }

        // Cancel when Escape is pressed
        if (event.key === "Escape") {
            displayTasks();
        }

    });

}


// ========================================
// Filter Tasks
// ========================================

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {


        // Remove active class

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });


        // Add active class

        button.classList.add("active");


        // Get filter

        currentFilter = button.dataset.filter;


        // Display filtered tasks

        displayTasks();

    });

});


// ========================================
// Update Task Count
// ========================================

function updateTaskCount() {

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(function(task) {

        return task.completed;

    }).length;


    taskCount.textContent =
        `${totalTasks} tasks | ${completedTasks} completed`;
}


// ========================================
// Initial Application Load
// ========================================

loadTasks();