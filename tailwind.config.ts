import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD200',
        'primary-foreground': '#0b0b0b',
        muted: '#777777',
        surface: '#ffffff',
        border: '#e6e6e6'
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        subtle: '0 4px 10px rgba(11,11,11,0.06)'
      },
      borderRadius: {
        lg: '0.5rem'
      }
    }
  },
  plugins: []
};
export default config;