import { useEffect, useState } from 'react';

export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function setToLocalStorage(key: string, value: string) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, value);
  }
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
}

export function useDarkMode(): ['light' | 'dark', () => void] {
  const [darkMode, setDarkMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Fetch the dark mode value from local storage on component mount
    const storedDarkMode = getFromLocalStorage('darkMode');
    if (storedDarkMode === null) {
      setDarkMode('dark');
    } else {
      setDarkMode(storedDarkMode as 'light' | 'dark');
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever dark mode changes
    setToLocalStorage('darkMode', darkMode);
  }, [darkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  return [darkMode, toggleDarkMode];
}

export default useDarkMode;
