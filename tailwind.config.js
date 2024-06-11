/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'center': '10% 1fr 2fr',
      }
    },
  },
  plugins: [],
}

