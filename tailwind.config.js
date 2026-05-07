/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0B0B0C',
          secondary: '#121417',
        },
        card: {
          surface: '#1A1D21',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A1A1AA',
        },
        accent: {
          gold: '#D4AF37',
          'soft-gold': '#C8A96B',
        },
        border: {
          color: 'rgba(255,255,255,0.08)',
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
