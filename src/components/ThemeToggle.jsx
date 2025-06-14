import React from 'react';

const ThemeToggle = () => {
  const toggleTheme = () => {
    const currentTheme = document.documentElement.classList.contains('theme-dark') ? 'light' : 'dark';
    document.documentElement.classList.remove('theme-light', 'theme-dark');
    document.documentElement.classList.add(`theme-${currentTheme}`);
    localStorage.setItem('theme', currentTheme);
  };

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {document.documentElement.classList.contains('theme-dark') ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle; 