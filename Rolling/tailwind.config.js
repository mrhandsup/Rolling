/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
          sm: '480px',
          md: '768px',
          lg: '1025px',
          xl: '1280px',
          xl2: '1360px',
      },
      extend: {},
  },
  plugins: [],
}

