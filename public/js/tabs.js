document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.tab-panel');

  window.changeTab = function(index) {
    // Hide all panels
    panels.forEach(panel => panel.classList.remove('active'));

    // Show the one that was clicked
    panels[index].classList.add('active');
  };
});
