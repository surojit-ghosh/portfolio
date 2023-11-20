import type { Config } from 'tailwindcss'
import colors from "tailwindcss/colors";

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
      // colors: {
      //   "light-gray": "#FAFAFA",
      //   "medium-gray":"#a0a0a0",
      //   "dark-gray": "#161616",
      //   "dark-gray-2":"#1a1a1a",
      //   "dark-gray-3": "#1f1f1f",
      //   "primary": "#DAED6E",
      //   "primary-hover": "#c8db5b"
      // },
      colors: {
        primary: { ...colors.sky, DEFAULT: colors.sky[500] }
      }
    },
  },
  plugins: [],
}
export default config
