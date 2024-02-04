/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xm: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1044px',
    },
    extend: {},
    colors: {
      white: '#ffffff',
      grey: '#666666',
      primaryAccent: '#6C40B5',
      red: '#ff2400',
    },
  },
  plugins: [],
}
