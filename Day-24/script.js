const calendar = document.getElementById('calendar');

// Generate 30 days
for (let i = 1; i <= 30; i++) {
    const day = document.createElement('div');
    day.classList.add('day-circle');
    day.innerText = i;
    
    // Logic to mimic the image state
    if (i < 23) {
        day.classList.add('completed');
    } else if (i === 24) {
        day.classList.add('active');
    }
    
    calendar.appendChild(day);
}