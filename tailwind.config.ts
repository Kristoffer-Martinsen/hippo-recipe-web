import type { Config } from 'tailwindcss';
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'primary': '#f7fee7',
      'primary-dark': '#065f46',
      'secondary': '#f0fdf4',
      'text-primary': '#022c22',
      'text-secondary': '#f7fee7',
      'error':'#be123c',
    },
    extend: {
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fit, minmax(250px, 11fr))',
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
