import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "dark",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "forest",
      "lofi",
      "black",
      "luxury",
      "dracula",
      "business",
      "night",
      "coffee",
    ],
  },
};
export default config;
