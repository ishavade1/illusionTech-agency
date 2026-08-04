/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        primary: '#22C55E',        // Bright Green
        secondary: '#16A34A',      // Dark Green
        accent: '#4ADE80',         // Light Green

        surface: '#0F0F0F',        // Black
        'surface-light': '#1A1A1A',

        ink: '#ffffff',            // White text
        muted: '#A3A3A3',          // Gray text

        border: '#ffffff',

        success: '#22C55E',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(15, 23, 42, 0.08)',
        card: '0 8px 30px -8px rgba(37, 99, 235, 0.15)',
        glow: '0 0 60px -10px rgba(37, 99, 235, 0.35)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
      },
      backgroundImage: {
  'gradient-brand':
    'linear-gradient(135deg, #0F0F0F 0%, #14532D 50%, #22C55E 100%)',

  'gradient-accent':
    'linear-gradient(135deg, #16A34A 0%, #4ADE80 100%)',
},
    },
  },
  plugins: [],
}
