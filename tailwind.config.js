module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'primary': "#FD815A",
        secondary: {
          light: '#E5ECFF',
          DEFAULT: '#4965CB'
        },
        tertiary: {
          lightest: '#C1C8D6',
          light: '#8F9AAA',
          DEFAULT: '#333B49',
          dark: '#4E5767'
        },
        text: {
          light: '#7B8798',
          DEFAULT: '#535C68',
          dark: '#2B2F35'
        },
        background: {
          DEFAULT: "#F9FAFD"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
