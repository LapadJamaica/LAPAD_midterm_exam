// Define the Task interface with required properties: id, name, and description
export interface Task {
    id: number;         // Unique identifier for the task
    name: string;       // Name or title of the task
    description: string; // Description providing details of the task
}

// Initialize the tasks array with a proper type of Task[]
const tasks: Task[] = []; // This array will hold all tasks

// Function to add a new task to the tasks array
function addTask(task: Task): void {
    tasks.push(task); // Adds the given task to the tasks array
}

// Function to view all tasks, returns an array of tasks
function viewTasks(): Task[] {
    return tasks; // Returns the entire tasks array
}

// Function to update a task at a specific index (id), replacing the existing task
function updateTask(id: number, task: Task): void {
    tasks[id] = task; // Replaces the task at the given index with the new task
}

// Function to delete a task by its index (id)
function deleteTask(id: number): void {
    tasks.splice(id, 1); // Removes the task at the given index (id) from the array
}

// Test the functions
addTask({ id: 1, name: 'Task 1', description: 'Description 1' }); // Adds a new task to the array
console.log(viewTasks()); // Logs the tasks array after adding the first task

updateTask(0, { id: 1, name: 'Task 2', description: 'Description 2' }); // Updates the task at index 0
console.log(viewTasks()); // Logs the tasks array after updating the first task

deleteTask(0); // Deletes the task at index 0
console.log(viewTasks()); // Logs the tasks array after deleting the first task
