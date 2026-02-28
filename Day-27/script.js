// Add click listeners to checklist items to "check" them off
document.querySelectorAll('.checklist li').forEach(item => {
  item.addEventListener('click', () => {
    item.style.textDecoration = 
      item.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    item.style.opacity = 
      item.style.opacity === '0.5' ? '1' : '0.5';
  });
});
