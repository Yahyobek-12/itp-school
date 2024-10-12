/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#2d3748',
        accent: '#38b2ac',
        blacked: '#171923',
        newBlack: '#13141b'
      },
      screens: {
        'sx': '320px', 
        'xs': '475px',  
        'sm': '640px',  
        'md': '768px',  
        'lg': '1024px', 
        'xl': '1280px', 
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Menlo', 'monospace'],
        outfit: 'Outfit'
      },
    },
  },
  plugins: [],
}
