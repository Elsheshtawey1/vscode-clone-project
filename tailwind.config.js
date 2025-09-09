/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'editor-bg': '#1e1e1e',
        'ui-panel': '#252526',
        'ui-border': '#3e3e42',
        'text-main': '#cccccc',
        'accent-blue': '#007acc',
        'button-bg': '#0e639c',
        'button-fg': '#ffffff',
        'input-bg': '#3c3c3c',
      }
    },
  },
  plugins: [],
};
