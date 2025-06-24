'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Load saved theme
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow hover:scale-105 transition"
      title="Toggle Theme"
    >
      {theme === 'light' ? <Moon className="text-black" /> : <Sun className="text-yellow-400" />}
    </button>
  );
};

export default ThemeToggle;
