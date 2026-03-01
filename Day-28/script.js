document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.checklist li');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle a 'completed' class when clicked
            item.classList.toggle('completed');
            
            // Optional: add a little "pop" animation
            if(item.classList.contains('completed')) {
                item.style.transform = "translateX(10px)";
                setTimeout(() => item.style.transform = "translateX(0)", 200);
            }
        });
    });
});
