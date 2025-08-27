/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bone: '#F7F5F3',
        'pink-light': '#FCE4EC',
        'pink-primary': '#ffafcc',
        'pink-accent': '#ff8fab',
        'pink-soft': '#F8BBD9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neumorph': '8px 8px 16px #d1ccc4, -8px -8px 16px #ffffff',
        'neumorph-inset': 'inset 4px 4px 8px #d1ccc4, inset -4px -4px 8px #ffffff',
        'neumorph-hover': '12px 12px 24px #d1ccc4, -12px -12px 24px #ffffff',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};