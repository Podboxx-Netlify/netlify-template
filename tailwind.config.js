module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      // padding: '2rem'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '576px',
          },
          '@screen md': {
            maxWidth: '690px',
          },
          '@screen lg': {
            maxWidth: '1152px',
          },
          '@screen xl': {
            maxWidth: '1260px',
          },
        }
      })
    }
  ],
}
