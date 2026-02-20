// 1. Select Elements
const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

// 2. Function to add a task
function addTask() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create the 'li' element
    const li = document.createElement('li');
    
    // Create the span for text (so we can click it to toggle)
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Requirement: Toggle 'completed' class on click
    li.querySelector('.task-text').addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Requirement: Delete button to remove from DOM
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    // Add to the list and clear input
    taskList.appendChild(li);
    taskInput.value = "";
}

// 3. Event Listeners
addBtn.addEventListener('click', addTask);

// Allow pressing "Enter" to add task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
