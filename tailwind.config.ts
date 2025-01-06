/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        primary: '#0a0f15',
        'black-10': '#262626',
        'gray-10': '#F0F0F01A',
        'gray-20': '#F0F0F033',
        green: '#02A6C2',
      },
    },
  },

  darkMode: 'class',
  plugins: [nextui()],
};
