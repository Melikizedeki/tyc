/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',      // blue-700 as example
        secondary: '#10b981',    // green-500
        lightbg: '#f9fafb'
      },
      width: {
        150: '600px'
      }
    }
  },
  plugins: []
};
