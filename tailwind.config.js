/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#171310',
        coal: '#231C18',
        cream: '#F7F0E4',
        paper: '#FBF7F0',
        sand: '#E9DDC9',
        line: '#E1D4BF',
        muted: '#897B6D',
        burgundy: {
          DEFAULT: '#6A1E2B',
          dark: '#49121B',
          light: '#8B3140',
        },
        brass: {
          DEFAULT: '#C6A15B',
          dark: '#A9823F',
          light: '#E3CB99',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      boxShadow: {
        soft: '0 24px 60px -32px rgba(23, 19, 16, 0.35)',
        card: '0 12px 32px -20px rgba(23, 19, 16, 0.3)',
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        fade: 'fade 0.4s ease-out both',
        marquee: 'marquee 32s linear infinite',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
