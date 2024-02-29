import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "lightLayout": "#F0F0F0",
        "darkLayout": "#333",
        "beige": "#CC6138",
        "gray": "#747474"
      },

      fontSize: {
        "font-14": "14px",
        "font-18": "18px",
        "font-22": "22px",
        "font-30": "30px",
        "font-42": "42px",
        "font-44": "44px",
      },

      screens: {
        "mobile": "300px",
        "tablet": "620px"
      },

    },

  },
  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        '.li': {
          display: 'flex',
          gap: '32px',
          width: '100%',
          padding: '16px 44px'
        },
        '.li:hover, .li-hover:hover': {
          backgroundColor: "#CC6138",
          color: '#FFF'
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
export default config;
