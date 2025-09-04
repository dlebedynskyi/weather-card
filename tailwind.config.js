/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      tiny: '0px',
      column: '400px',
      row: '700px',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/container-queries')],
};
