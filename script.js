// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new <li> for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add click handler to remove this task
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append the button to the <li>, and the <li> to the list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach event listener to Add Task button
    addButton.addEventListener('click', addTask);

    // Attach event listener for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optionally invoke addTask on DOM load if needed (e.g., default task)
    // addTask(); // Not needed unless pre-filling
});