/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  darkMode: 'class',
  plugins: []
}

