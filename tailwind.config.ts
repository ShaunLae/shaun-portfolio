import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#F6F4EA",
        baseAlt: "#EFEDDE",
        olive: "#6E7B3D",
        oliveDeep: "#4A5726",
        oliveSoft: "#8FA05A",
        text: "#23261C",
        textMuted: "#6B6F5A",
        borderGlass: "rgba(74,87,38,0.16)",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"IBM Plex Sans"', "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      screens: {
        xs: "520px",
        sm: "680px",
        md: "780px",
        lg: "820px",
        xl: "900px",
      },
      maxWidth: {
        wrap: "1080px",
      },
      borderRadius: {
        glass: "22px",
        "glass-md": "14px",
      },
    },
  },
  plugins: [],
};

export default config;
