import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#2A9D8F",
          "teal-dark": "#228176",
          "teal-light": "#E6F5F3",
          navy: "#1A365D",
          coral: "#E76F51",
          "coral-dark": "#D4583A",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "float-slow": "floatSlow 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(1deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(42, 157, 143, 0.3)" },
          "50%": { boxShadow: "0 0 20px 8px rgba(42, 157, 143, 0.15)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
