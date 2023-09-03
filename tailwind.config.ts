import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        giray: "#555555",
      },
      fontFamily: {
        marugo: [
          "ヒラギノ丸ゴ Pro W4",
          "ヒラギノ丸ゴ Pro",
          "Hiragino Maru Gothic Pro",
          "ヒラギノ角ゴ Pro W3",
          "Hiragino Kaku Gothic Pro",
          "メイリオ",
          "Meiryo",
          "sans-serif",
          "HG丸ｺﾞｼｯｸM-PRO",
          "HGMaruGothicMPRO",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
