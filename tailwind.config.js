// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gruvbox: {
          bg0: "#282828",
          bg1: "#3c3836",
          fg1: "#ebdbb2",
          yellow: "#fabd2f",
          orange: "#fe8019",
          blue:   "#83a598",
          green:  "#b8bb26",
          purple: "#d3869b",
          red:    "#fb4934",
        },
      },
      typography: (theme) => ({
        gruvbox: {
          css: {
            "--tw-prose-body": theme("colors.gruvbox.fg1"),
            "--tw-prose-links": theme("colors.gruvbox.blue"),
            "--tw-prose-bold": theme("colors.gruvbox.orange"),
            "--tw-prose-code": theme("colors.gruvbox.purple"),
            "--tw-prose-pre-bg": theme("colors.gruvbox.bg0"),

            /* Per-heading colors */
            h1: { color: theme("colors.gruvbox.yellow") },
            h2: { color: theme("colors.gruvbox.orange") },
            h3: { color: theme("colors.gruvbox.blue") },
            h4: { color: theme("colors.gruvbox.green") },
            h5: { color: theme("colors.gruvbox.purple") },
            h6: { color: theme("colors.gruvbox.red") },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
