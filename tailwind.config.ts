import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fit, minmax(250px, 11fr))',
      }
    },
  },
  plugins: [],
}
export default config
