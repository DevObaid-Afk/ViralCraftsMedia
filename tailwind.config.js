/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        accent: ["Manrope", "sans-serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#070A13",
        midnight: "#121826",
        electric: "#5FFBF1",
        signal: "#F97316",
        aurora: "#A3E635",
        plum: "#8B5CF6",
      },
      boxShadow: {
        glow: "0 0 55px rgba(95, 251, 241, 0.22)",
        violet: "0 0 55px rgba(249, 115, 22, 0.22)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #5FFBF1 0%, #A3E635 42%, #F97316 100%)",
        "page-radial":
          "radial-gradient(circle at 18% 18%, rgba(95,251,241,.15), transparent 28%), radial-gradient(circle at 80% 12%, rgba(249,115,22,.16), transparent 25%), radial-gradient(circle at 80% 80%, rgba(163,230,53,.12), transparent 28%), linear-gradient(135deg, #070A13, #121826)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        spinSlow: "spin 18s linear infinite",
        marquee: "marquee 24s linear infinite",
        scan: "scan 4.5s ease-in-out infinite",
        orbit: "orbit 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -18px, 0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: ".45", transform: "scale(1)" },
          "50%": { opacity: ".85", transform: "scale(1.06)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scan: {
          "0%, 100%": { transform: "translateX(-18%)", opacity: ".25" },
          "50%": { transform: "translateX(18%)", opacity: ".8" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(150px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(150px) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
