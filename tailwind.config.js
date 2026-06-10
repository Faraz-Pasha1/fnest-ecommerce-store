/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#002366',
        'dark-gray': '#333333',
        'olive-green': '#556B2F',
        'dark-maroon': '#800000',
        'light-gray': '#D3D3D3',
        'premium-bg': '#FAFAFA',
      },
      fontSize: {
        'xs': ['0.875rem', { lineHeight: '1.25rem' }],
        'sm': ['1rem', { lineHeight: '1.5rem' }],
        'base': ['1.125rem', { lineHeight: '1.75rem' }],
        'lg': ['1.25rem', { lineHeight: '1.75rem' }],
        'xl': ['1.5rem', { lineHeight: '2rem' }],
        '2xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '3xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '4xl': ['3rem', { lineHeight: '1.16' }],
        '5xl': ['3.75rem', { lineHeight: '1.16' }],
        '6xl': ['4.5rem', { lineHeight: '1.16' }],
        '7xl': ['5.5rem', { lineHeight: '1.16' }],
        '8xl': ['7.5rem', { lineHeight: '1' }],
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
      },
      fontFamily: {
        'playfair': ['"Cinzel"', 'serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
        'cormorant': ['"Cormorant Garamond"', 'serif'], // Adding another elegant option
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'zoom-in': 'zoomIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
