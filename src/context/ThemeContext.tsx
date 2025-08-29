import React, { createContext, useContext, useState, useEffect } from 'react';
import { gruvboxDark, gruvboxLight } from '../theme/gruvbox';

type Theme = typeof gruvboxDark | typeof gruvboxLight;
type ThemeMode = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('theme-mode') as ThemeMode;
    if (saved) return saved;
    
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  const theme = mode === 'dark' ? gruvboxDark : gruvboxLight;

  const toggleTheme = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('theme-mode', newMode);
  };

  useEffect(() => {
    // Apply theme to document root for CSS variables
    const root = document.documentElement;
    root.style.setProperty('--bg-primary', theme.bg0);
    root.style.setProperty('--bg-secondary', theme.bg1);
    root.style.setProperty('--text-primary', theme.fg1);
    root.style.setProperty('--text-secondary', theme.fg3);
    
    // Apply background to entire document
    document.body.style.backgroundColor = theme.bg0;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};