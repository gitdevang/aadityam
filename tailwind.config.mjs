// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',  // For Next.js (or other React-based projects)
    './components/**/*.{js,jsx,ts,tsx}',  // Include your components directory
    './app/**/*.{js,jsx,ts,tsx}',  // If using Next.js App Directory
    './public/**/*.html',  // If you're using raw HTML files
  ],
  theme: {
    extend: {
      fontFamily: {
        p_md: ['Poppins Medium', 'sans-serif'],
        p_reg: ['Poppins Regular', 'sans-serif'],
        p_lt: ['Poppins Light', 'sans-serif'],
        p_eb: ['Poppins ExtraBold', 'sans-serif'],
        p_sb: ['Poppins SemiBold', 'sans-serif'],
        p_bd: ['Poppins Bold', 'sans-serif'],
        p_bl: ['Poppins Black', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' }, 
          '100%': { opacity: '1' }, 
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-200px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(200px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        svgFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        shake: 'shake 1s ease forwards',
        pulse: 'pulse 1.5s ease-in-out forwards',
        slideLeft: 'slideInLeft 1s ease-out forwards',
        slideRight: 'slideInRight 1s ease-out forwards',
        slideDown: 'slideDown 1s ease-out forwards',
        slideUp: 'slideUp 1s ease-out forwards',
        zoomIn: 'zoomIn 1s ease-in-out forwards',
        zoomOut: 'zoomOut 1s ease-in-out forwards',
        svgFadeIn: 'svgFadeIn 1.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
} 
