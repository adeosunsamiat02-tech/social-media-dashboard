const toggle = document.getElementById('toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.remove('dark', 'light');
  body.classList.add(savedTheme);
  toggle.checked = savedTheme === 'light';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
  
  const currentTheme = body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
});