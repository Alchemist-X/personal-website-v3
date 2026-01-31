/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'terminal-bg': 'var(--terminal-bg)',
        'terminal-text': 'var(--terminal-text)',
        'terminal-yellow': '#fbbf24',
        'terminal-blue': '#60a5fa',
        'terminal-border': 'var(--terminal-border)',
        'terminal-hover': 'var(--terminal-hover)',
      },
    },
  },
  plugins: [],
}

