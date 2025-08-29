// Gruvbox Dark theme colors
export const gruvboxDark = {
  // Background colors
  bg0: '#282828',
  bg1: "#1e2021",
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

// Gruvbox Light theme colors
export const gruvboxLight = {
  // Background colors (inverted)
  bg0: '#fbf1c7',
  bg1: '#f2e5bc',
  bg2: '#d5c4a1',
  bg3: '#bdae93',
  bg4: '#a89984',

  // Foreground colors (inverted)
  fg0: '#282828',
  fg1: '#3c3836',
  fg2: '#504945',
  fg3: '#665c54',
  fg4: '#7c6f64',

  // Accent colors (adjusted for light mode)
  red: '#cc241d',
  green: '#98971a',
  yellow: '#d79921',
  blue: '#458588',
  purple: '#b16286',
  aqua: '#689d6a',
  orange: '#d65d0e',

  // Neutral colors
  gray: '#928374',
  darkGray: '#a89984',
  lightGray: '#3c3836',
} as const;

// Default to dark theme for backward compatibility
export const gruvboxTheme = gruvboxDark;

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