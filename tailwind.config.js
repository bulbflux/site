/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gradient-start': 'rgb(249, 115, 22)',
        'gradient-end': 'rgb(147, 51, 234)',
      },
    },
  },
  plugins: [],
};
