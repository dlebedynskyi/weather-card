/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      tiny: '0px',
      sm: '400px',
      md: '700px',
      lg: '1000px',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/container-queries')],
};
