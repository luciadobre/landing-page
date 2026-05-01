import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#999999",
        background: "#0A0A0A",
        card: "#1A1A1A",
        textColor: "#E0E0E0",
        secondaryTextColor: "#999999",
      },
      fontFamily: {
        mono: ["'Courier New'", "monospace"],
        sans: ["system-ui", "sans-serif"],
      },
      borderWidth: {
        "3": "3px",
      },
    },
  },
  plugins: [],
};
export default config;
