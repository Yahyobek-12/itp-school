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
        blacked: '#171923'
      },
      screens: {
        'sx': '320px',   // Super extra small screen
        'xs': '475px',   // Extra small screen
        'sm': '640px',   // Small screen
        'md': '768px',   // Medium screen
        'lg': '1024px',  // Large screen
        'xl': '1280px',  // Extra large screen
        '2xl': '1536px', // 2x Extra large screen
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
