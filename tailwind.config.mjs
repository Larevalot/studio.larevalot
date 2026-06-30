/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f7f8f0',
          100: '#eef0e0',
          200: '#dde1c2',
          300: '#c5cb9a',
          400: '#adb574',
          500: '#959e54',
          600: '#767e40',
          700: '#5c6334',
          800: '#4a502d',
          900: '#3f4429',
          950: '#212413',
        },
        accent: {
          gold: '#d4a843',
          emerald: '#50c878',
          bronze: '#cd7f32',
        },
        dark: {
          bg: '#0a0c06',
          card: '#141808',
          border: '#2a3018',
          text: '#e8ead8',
        },
        light: {
          bg: '#f8f9f2',
          card: '#ffffff',
          border: '#d4d8c0',
          text: '#1a1c12',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        shimmer: 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(149, 158, 84, 0.2)' },
          to: { boxShadow: '0 0 30px rgba(149, 158, 84, 0.4), 0 0 60px rgba(149, 158, 84, 0.1)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};
