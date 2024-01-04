import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ["Syne"],
      
    },
    colors: {
      "primary": "	#130E0A",
      "secondary": "#CACACA",
      "ascent": "#E79073",
      "white": "#FFFFFF",
    },
    screens:{
      "phone": "320px",
      'tablette': "768px"
    },
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
