/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // black to white
        black: '#000',
        'darkest-grey': '#111',
        'darker-grey': '#222',
        'dark-grey': '#333',
        grey: '#666',
        'light-grey': '#999',
        'lighter-grey': '#ccc',
        'lightest-grey': '#eee',
        white: '#fff',

        // brand colors
        primary: '#fdd92a',
        primaryDark: '#ffc107',
        background: '#f6f5f2',

        // status colors
        error: '#e84118',
        success: '#009432',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

