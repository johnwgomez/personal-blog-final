// Add an event listener to the theme toggle button
document.getElementById('theme-toggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  // dark them if/else 
  if (document.body.classList.contains('dark-mode')) {
    this.textContent = '🌙';
  } else {
    this.textContent = '🌞';
  }
});