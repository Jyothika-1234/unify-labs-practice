// Day 16 Logic Practice
console.log('Lab Session 16 Started');

// Select the element with ID 'display'
const display = document.getElementById('display');

// Change the text inside that element
display.innerText = 'Logic Engine Online';

// --- Practice your JS code here ---

// Example: Simple Toggle Logic
let isActive = true;

function toggleStatus() {
    isActive = !isActive;
    display.innerText = isActive ? 'Logic Engine Online' : 'System Offline';
    console.log('Status changed to:', isActive);
}
