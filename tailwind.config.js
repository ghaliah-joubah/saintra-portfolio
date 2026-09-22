/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e0e9fe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36a9f7',
          500: '#0c8de4',
          600: '#006ec2',
          700: '#00589f',
          800: '#054a83',
          900: '#0a3f6e',
          950: '#062849',
        },
        dark: {
          bg: '#0B0F17',
          surface: '#131A27',
          card: '#1A2333',
          border: '#2A364F'
        }
      },
      fontFamily: {
        sans: ['Alexandria', 'Tajawal', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
