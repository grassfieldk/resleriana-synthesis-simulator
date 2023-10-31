import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#232a3b',
          secondary: '#445675',
          accent: '#a99d69',
          neutral: '#2b3440',
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
