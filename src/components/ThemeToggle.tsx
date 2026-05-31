import { useState } from 'react';
import './ThemeToggle.css';

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(() => {
    const savedTheme = localStorage.getItem('lng-theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      return true;
    }
    return false;
  });

  const toggleTheme = () => {
    setIsLight(!isLight);
    if (!isLight) {
      document.body.classList.add('light-mode');
      localStorage.setItem('lng-theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('lng-theme', 'dark');
    }
  };

  return (
    <div className={`theme-toggle ${isLight ? 'light' : 'dark'}`} onClick={toggleTheme} title="切換深淺色模式">
      <div className="toggle-track">
        <div className="toggle-thumb">
          {isLight ? '☀️' : '🌙'}
        </div>
      </div>
    </div>
  );
}
