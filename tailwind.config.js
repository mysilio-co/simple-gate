module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      'my-green': '#0e90a3',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
