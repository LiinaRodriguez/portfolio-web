/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'neuro-bg': '#f0f0f0',
        'neuro-light': '#ffffff',
        'neuro-dark': '#d1d1d1',
        'accent-pink': '#ec4899',
      },
      boxShadow: {
        'neuro': '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff',
        'neuro-inset': 'inset 8px 8px 16px #d1d1d1, inset -8px -8px 16px #ffffff',
        'neuro-sm': '4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff',
        'neuro-lg': '12px 12px 24px #d1d1d1, -12px -12px 24px #ffffff',
        'neuro-hover': '6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
};