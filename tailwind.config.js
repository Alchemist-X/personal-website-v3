/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#1a1a1a',
        'terminal-text': '#e0e0e0',
        'terminal-yellow': '#fbbf24',
        'terminal-blue': '#60a5fa',
      },
    },
  },
  plugins: [],
}

