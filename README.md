# Social Media Dashboard with Theme Switcher

## Overview
Responsive Social Media Dashboard built with Vanilla JavaScript - Solution to the Social media dashboard with theme switcher challenge on Frontend Mentor.

The project implements a dark/light theme switcher with localStorage persistence, using only HTML, CSS and vanilla JavaScript.

### Links
- Live Site URL: https://social-media-dashboard-o3kw.onrender.com

## Features
- Dark / Light Theme Switcher
- Saves theme preference in localStorage
- Fully responsive layout
- Hover states for all dashboard cards
- Top background pattern with curved bottom
- Instagram gradient border using ::before pseudo-element

## Built With
- Semantic HTML5 markup
- CSS custom properties
- CSS Grid and Flexbox
- Vanilla JavaScript

## How It Works

### Theme Switcher with localStorage
```javascript
const toggle = document.getElementById('toggle');
const body = document.body;

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.remove('dark', 'light');
  body.classList.add(savedTheme);
  toggle.checked = savedTheme === 'light';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
  
  // Save preference
  const currentTheme = body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
});
```

### CSS Theming
```css
body.dark {
  --bg: hsl(230, 17%, 14%);
  --card-bg: hsl(228, 28%, 20%);
}

body.light {
  --bg: hsl(0, 0%, 100%);
  --card-bg: hsl(227, 47%, 96%);
}
```

## Author
- Frontend Mentor - [@adeosunsamiat02-tech](https://www.frontendmentor.io/profile/adeosunsamiat02-tech)
- GitHub - [@adeosunsamiat02-tech](https://github.com/adeosunsamiat02-tech)
