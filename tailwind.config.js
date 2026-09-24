/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          50: '#f0f7ff', 100: '#dceaf9', 200: '#bbd6f2', 300: '#8bbbe9',
          400: '#4a90e2', 500: '#2a709c', 600: '#22537f', 700: '#193661',
          800: '#193661', 900: '#142b4e', 950: '#0d1f39',
        },
        brand: {
          blue: '#4a90e2', coral: '#f04e37', navy: '#193661',
          taupe: '#c0b0a3', warm: '#e2dddb', cyan: '#44c8f5',
        },
        navy: {
          50: '#f0f7ff',
          100: '#dceaf9',
          200: '#bbd6f2',
          300: '#8bbbe9',
          400: '#4a90e2',
          500: '#2a709c',
          600: '#22537f',
          700: '#22537f',
          800: '#193661',
          900: '#193661',
          950: '#142b4e',
        }
      },
      fontFamily: {
        sans: ['Calibri Brand', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.05)',
        'glass-hover': '0 10px 40px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
