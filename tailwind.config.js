/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Theme from Music/Agenda pages
        primary: "#1d4e68",
        secondary: "#2d7a9e",
        'background-light': "#f0f4f8",
        'background-dark': "#0f172a",
        'surface-dark': "rgba(30, 41, 59, 0.7)",
        'surface-light': "rgba(255, 255, 255, 0.9)",
        'glass-dark': "rgba(15, 23, 42, 0.6)",
        'glass-border': "rgba(255, 255, 255, 0.1)",
        // Theme from Videos page
        'videos-primary': "#2bbdee",
        'videos-bg-dark': "#101d22",
        'videos-surface-dark': "#192d33",
        // Theme from Library page
        'library-primary': "#13daec",
        'library-bg-dark': "#102022",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
        spline: ["Spline Sans", "sans-serif"],
        vietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      },
      backgroundImage: {
         'app-gradient': 'linear-gradient(to bottom, #132f42, #0a1520)',
      }
    },
  },
  plugins: [],
}
