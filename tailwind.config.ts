import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d4355",
        secondary: "#29bd8a",
        accent: "#17a095",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(90deg, #29bd8a 0%, #17a095 100%)",
        "gradient-brand-br": "linear-gradient(135deg, #29bd8a 0%, #17a095 100%)",
        "gradient-dark": "linear-gradient(135deg, #0a1f2e 0%, #0f2a36 50%, #0a2030 100%)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        brand: "0 4px 30px rgba(41, 189, 138, 0.2)",
        "brand-lg": "0 8px 60px rgba(41, 189, 138, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
