// Theme toggle utility for BonominiBlog
// Handles storing theme preference in localStorage and applying appropriate classes

// Available themes
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system' // Use system preference
};

// Theme setup
function setupTheme() {
  // Check for saved theme preference or use default theme (light)
  const savedTheme = localStorage.getItem('theme') || THEMES.SYSTEM;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Apply initial theme
  if (savedTheme === THEMES.DARK || (savedTheme === THEMES.SYSTEM && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Update toggle button icons
  updateThemeToggleIcons(savedTheme);
}

// Set theme
function setTheme(theme) {
  // Save theme preference
  localStorage.setItem('theme', theme);
  
  // Apply theme based on preference
  if (theme === THEMES.DARK) {
    document.documentElement.classList.add('dark');
  } else if (theme === THEMES.LIGHT) {
    document.documentElement.classList.remove('dark');
  } else {
    // System theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  
  // Update toggle button icons
  updateThemeToggleIcons(theme);
}

// Toggle through themes: light -> dark -> system
function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || THEMES.SYSTEM;
  
  switch (currentTheme) {
    case THEMES.LIGHT:
      setTheme(THEMES.DARK);
      break;
    case THEMES.DARK:
      setTheme(THEMES.SYSTEM);
      break;
    default:
      setTheme(THEMES.LIGHT);
      break;
  }
}

// Update theme toggle button icons
function updateThemeToggleIcons(theme) {
  const themeIcons = {
    light: document.querySelectorAll('.theme-light-icon'),
    dark: document.querySelectorAll('.theme-dark-icon'),
    system: document.querySelectorAll('.theme-system-icon')
  };
  
  // Hide all icons first
  Object.values(themeIcons).forEach(icons => {
    icons.forEach(icon => icon.classList.add('hidden'));
  });
  
  // Show the current theme icon
  if (themeIcons[theme]) {
    themeIcons[theme].forEach(icon => icon.classList.remove('hidden'));
  }
}

// Setup theme on page load
document.addEventListener('DOMContentLoaded', () => {
  setupTheme();
  
  // Add click event to theme toggle buttons
  document.querySelectorAll('[id^=theme-toggle]').forEach(button => {
    button.addEventListener('click', toggleTheme);
  });
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (localStorage.getItem('theme') === THEMES.SYSTEM) {
      setupTheme();
    }
  });
});

export { THEMES, setupTheme, setTheme, toggleTheme };
