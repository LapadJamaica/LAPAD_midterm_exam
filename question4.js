"use strict";

// Define an array of tasks. It is an empty array initially, but we can add tasks to it.
var tasks = [];

// Function to add a new task to the tasks array
function addTask(task) {
    tasks.push(task); // Push the new task to the tasks array
}

// Function to return all tasks in the tasks array
function viewTasks() {
    return tasks; // Simply returns the current list of tasks
}

// Function to update a specific task in the tasks array by its index (id)
function updateTask(id, task) {
    tasks[id] = task; // Replace the task at the given index with the new task
}

// Function to delete a task from the tasks array by its index (id)
function deleteTask(id) {
    tasks.splice(id, 1); // Remove the task at the given index
}

// Test the functions
addTask({ id: 1, name: 'Task 1', description: 'Description 1' }); // Add a new task
console.log(viewTasks()); // Log the current list of tasks

updateTask(0, { id: 1, name: 'Task 2', description: 'Description 2' }); // Update the task at index 0
console.log(viewTasks()); // Log the updated list of tasks

deleteTask(0); // Delete the task at index 0
console.log(viewTasks()); // Log the list after deletion
