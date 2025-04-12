/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        extra: '0.8em', // Custom letter spacing
      },
      fontSize: {
        'xxs': '0.625rem',
      },
    },
  },
  plugins: [],
}

