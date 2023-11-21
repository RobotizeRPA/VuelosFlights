import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'more': 'rgba(0, 0, 0, 0.800)',
        'primaryColor': '#00153c'
      },
      colors: {
        'title': 'rgba(255, 255, 255, 0.750)',
        'secondaryText': '#A8AAB2',
        'primaryColor': '#00153c'
      },
      height: {
        '30': '30vh',
        '25': '25vh'
      },
      minHeight: {
        '40': '40px',
        '50': '50px',
        '75': '75px',
        '150': '150px',
      },
      maxHeight: {
        '50': '50px'
      },
      borderColor: {
        'primaryColor': '#00153c'
      }
    },
  },
  plugins: [],
}
export default config
