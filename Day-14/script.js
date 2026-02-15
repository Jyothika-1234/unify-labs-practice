// 1. Target the display element
const display = document.getElementById('display');

// 2. Define your data
const selectedDay = 14;

// 3. Update the display with a message
function updateDisplay(message) {
  display.innerText = message;
}

// Practice: Change the message below
updateDisplay("Logic Engine Online: Day " + selectedDay);
// This replaces the text "{{ selectedDay }}" in your H1 with the number 14
document.body.innerHTML = document.body.innerHTML.replace('{{ selectedDay }}', selectedDay);
