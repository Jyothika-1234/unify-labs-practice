document.querySelectorAll('.objective-item').forEach(item => {
  item.addEventListener('click', () => {
    // Toggle the 'completed' class for visual feedback
    item.classList.toggle('completed');
    
    // Optional: Add a little console log for tracking
    const taskName = item.querySelector('span:last-child').innerText;
    console.log(`Task toggled: ${taskName}`);
  });
});
