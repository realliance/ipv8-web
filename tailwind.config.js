module.exports = {
  content: ['./public/**/*.pug', './src/**/*.tsx', './src/**/*.tss'],
  theme: { 
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },  
  plugins: [],
}
