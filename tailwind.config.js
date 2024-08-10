/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    fontFamily: {
      'comic': ['Aloja Extended', 'sans-serif'],
      'serif': ['Cormorant Garamond', 'ui-serif', 'Georgia'],
    },
    extend: {
      container: {
        center: true,
        padding: "4px"
      }
    },
  },
  plugins: [],
}

