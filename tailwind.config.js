module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/sections/**/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors')
    }),
    extend: {
      colors: {
        primary: '#f1682b',
        secondary: '#2b5f7b'
      },
      fontFamily: {
        asap: ['"Asap Condensed"', '"Georgia"', '"Times New Roman"', 'serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
