import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'gift-red': '#d3514d',
        'gift-green': '#55ad77',
        'gift-blue': '#518ec5',
        'gift-yellow': '#e7e28b',
        'gift-purple': '#b84bd9'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        resleri: {
          primary: '#232a3b',
          secondary: '#445675',
          accent: '#a99d69',
          neutral: '#5b6782',
          'base-100': '#ffffff',
          info: '#d22b62',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272'
        }
      }
    ]
  }
};
export default config;
