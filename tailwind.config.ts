import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#1F1F1F",
      "primary-color": "#FFC561",
    },
    screens: {
      sm: "320px",
      md: "810px",
      lg: "1440px",
      xl: "1920px",
    },
    animation: {
      "spin-slow": "spin 6s linear infinite",
    },
  },

  plugins: [],
};
export default config;
