document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const totalDays = 30;
    const completedUntil = 25;
    const currentDay = 26;

    for (let i = 1; i <= totalDays; i++) {
        const dayEl = document.createElement('div');
        dayEl.classList.add('day');
        dayEl.innerText = i;

        if (i <= completedUntil) {
            dayEl.classList.add('completed');
        } else if (i === currentDay) {
            dayEl.classList.add('current');
        }

        calendar.appendChild(dayEl);
    }
});
