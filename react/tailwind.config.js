/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}']
export const theme = {
  extend: {
    colors: {
      orange: '#ff8e3c',
      red: '#db2955',
      indigo: '#172c66',
      gray: '#eff0f3',
    },
    screens: {
      xs: '360px',
    },
  },
}
export const plugins = []
