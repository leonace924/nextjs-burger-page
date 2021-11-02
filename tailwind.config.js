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
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem'
      }
    },
    extend: {
      colors: {
        primary: '#f1682b',
        secondary: '#2b5f7b'
      },
      backgroundImage: {
        'menu-pattern': "url('/assets/images/img-menu-pattern.png')",
        'menu-pattern-mobile':
          "url('/assets/images/img-menu-pattern-mobile.png')"
      },
      fontFamily: {
        asap: ['"Asap Condensed"', '"Georgia"', '"Times New Roman"', 'serif']
      }
    }
  },
  variants: {
    extend: {
      margin: ['last']
    }
  },
  plugins: []
};
