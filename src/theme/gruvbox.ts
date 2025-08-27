// Gruvbox Dark theme colors
export const gruvboxTheme = {
  // Background colors
  bg0: '#282828',
  bg1: '#3c3836',
  bg2: '#504945',
  bg3: '#665c54',
  bg4: '#7c6f64',

  // Foreground colors
  fg0: '#fbf1c7',
  fg1: '#ebdbb2',
  fg2: '#d5c4a1',
  fg3: '#bdae93',
  fg4: '#a89984',

  // Accent colors
  red: '#fb4934',
  green: '#b8bb26',
  yellow: '#fabd2f',
  blue: '#83a598',
  purple: '#d3869b',
  aqua: '#8ec07c',
  orange: '#fe8019',

  // Neutral colors
  gray: '#928374',
  darkGray: '#1d2021',
  lightGray: '#a89984',
} as const;

// CSS custom properties for dynamic theming
export const gruvboxCSSVars = {
  '--bg-primary': gruvboxTheme.bg0,
  '--bg-secondary': gruvboxTheme.bg1,
  '--bg-tertiary': gruvboxTheme.bg2,
  '--text-primary': gruvboxTheme.fg1,
  '--text-secondary': gruvboxTheme.fg4,
  '--text-muted': gruvboxTheme.gray,
  '--accent-primary': gruvboxTheme.blue,
  '--accent-secondary': gruvboxTheme.yellow,
  '--accent-success': gruvboxTheme.green,
  '--accent-warning': gruvboxTheme.orange,
  '--accent-error': gruvboxTheme.red,
} as const;

// Helper function to apply theme
export const applyGruvboxTheme = (element: HTMLElement) => {
  Object.entries(gruvboxCSSVars).forEach(([property, value]) => {
    element.style.setProperty(property, value);
  });
};