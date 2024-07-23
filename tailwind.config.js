/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mangue': {  
          DEFAULT: '#FCBB52', 
          50: '#FEF2DE',  
          100: '#FEEACA', 
          200: '#FDDBA2',  
          300: '#FDCB7A',
          400: '#FCBB52',  
          500: '#FBA51B',  
          600: '#DA8804',  
          700: '#A36603',  
          800: '#6C4302',  
          900: '#352101',  
          950: '#191000'},
      },

      backgroundImage: {
        'library-bg': "url('/src/assets/back.jpg')",
      },
      fontFamily: {
        Egyptian: ['Egyptian', 'sans-serif'],
        books: ['books', 'sans-serif']
      }
    },
  },
  plugins: [],
}

