/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      md: "900px",
    },
    colors: {
      primary: "#bcc7d1",
      secondary: "#142636",
      tertiary: "#97a7b5",
      typography: "#394a5a",
    },
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
