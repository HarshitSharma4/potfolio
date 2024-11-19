import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darktheme:{
           primary:"#000000",
           secondary:'#0B192C',
           thirsanary:'#1E3E62',
           acent:"#FF6500",
           text:'#FAF6F0'
        },
        background: {
          primary: '#121212',
          secondary: '#1f2933',
          contrast: '#2d3748',
        },
        text: {
          primary: '#cbd5e0',
          muted: '#718096',
          light: '#f7fafc',
        },
        accent: {
          green: '#2f855a',
          hover: '#276749',
          secondary: '#38a169',
        },
        hover: {
          mint: '#68d391',
          seafoam: '#81e6d9',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
