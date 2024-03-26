import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-700': '#2563eb',
        'blue-500': '#217ed2',
        secondary: '#7458e8',
        // white: "#c5cfd9",

        'gray-900': '#0c1118',
        'gray-500': '#808080',
        'gray-400': '#acb8c4',
        'gray-300': '#6c7681',
        'gray-100': '#c5cfd9',
      },
    },
    screens: {

      xs: '480px',
      // => @media (min-width: 480px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '990px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
