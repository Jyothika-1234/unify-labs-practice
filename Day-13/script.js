// 1. Define the data
const data = {
    selectedDay: "Day 13"
};

// 2. Select the elements
const root = document.getElementById('root');
const displayPanel = document.getElementById('display');

// 3. Logic to replace the placeholder {{ selectedDay }}
root.innerHTML = root.innerHTML.replace('{{ selectedDay }}', data.selectedDay);

// 4. Update the debug panel status
displayPanel.innerText = "Logic Engine: Active";
displayPanel.style.color = "#00ff00"; // Green for 'Active'

console.log("Day 13 Lab Logic Initialized.");