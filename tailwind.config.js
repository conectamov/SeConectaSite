/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography')]
}
