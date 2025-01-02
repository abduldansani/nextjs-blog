import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#090D1F",
        lightBg: "#FFFFFF",
        textInDark1: "#FFFFFF",
        textInDark2: "#C0C5D0",
        textInLight1: "#1A1A1A",
        textInLight2: "#32353b",
        blue1: "#6941C6",
        blue2: "#024DFA",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
