/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#e11931",
        secondary: "#5bbd80",
        lightGray: "#f8f9fa",
        gray: "#4a4b4f",
      },

      fontSize: {
        huge: 'clamp(2rem, 6vw, 3rem)',
        medium: 'clamp(2rem, 6vw, 2.5rem)',
        small: 'clamp(1rem, 6vw, 1rem'
      },

      fontFamily: {
        roboto : ['Roboto', 'sans-serif']
      }
    },

    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '400px',
        md: '720px',
        lg: '984px',
        xl: '1248px',
        '2xl' : '1496px',
      },
    }
  },
  plugins: [],
}
