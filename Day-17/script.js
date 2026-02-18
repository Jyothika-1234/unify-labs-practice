// 1. Introduction to Arrays: Our Data Source
const tasks = [
    { id: 1, name: "Learn Map", points: 50, priority: "high" },
    { id: 2, name: "Learn Filter", points: 40, priority: "high" },
    { id: 3, name: "Learn Reduce", points: 60, priority: "high" },
    { id: 4, name: "Watch Intro Video", points: 10, priority: "low" },
    { id: 5, name: "Take Knowledge Check", points: 20, priority: "low" }
];

const taskList = document.getElementById('task-list');
const totalPointsDisplay = document.getElementById('total-points');
const filterBtn = document.getElementById('filter-btn');

// FUNCTION TO RENDER DATA
const renderTasks = (taskArray) => {
    // 2. Data Transformation: Map Method
    // We transform the array of objects into an array of HTML strings
    const htmlContent = taskArray.map(task => `
        <li>
            <span>${task.name}</span>
            <span class="priority">${task.points} XP</span>
        </li>
    `).join(''); // Working with Array Methods (join)
    
    taskList.innerHTML = htmlContent;
};

// 3. Data Aggregation: Reduce Method
// We boil down the whole array into a single number (total XP)
const calculateTotal = (taskArray) => {
    const total = taskArray.reduce((acc, task) => acc + task.points, 0);
    totalPointsDisplay.innerText = total;
};

// Initial Load
renderTasks(tasks);
calculateTotal(tasks);

// 4. Data Filtering: Filter Method
filterBtn.addEventListener('click', () => {
    // We create a new array containing ONLY high priority tasks
    const highPriorityTasks = tasks.filter(task => task.priority === "high");
    renderTasks(highPriorityTasks);
    calculateTotal(highPriorityTasks);
    filterBtn.innerText = "Showing High Priority";
});