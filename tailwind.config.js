/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        trail: {
          "0%": {
            background:
              "linear-gradient(90deg, rgba(189, 159, 103, 0) 90%, rgb(189, 159, 103) 100%)",
            opacity: "0",
          },
          "30%": {
            background:
              "linear-gradient(90deg, rgba(189, 159, 103, 0) 70%, rgb(189, 159, 103) 100%)",
            opacity: "1",
          },
          "70%": {
            background:
              "linear-gradient(90deg, rgba(189, 159, 103, 0) 70%, rgb(189, 159, 103) 100%)",
            opacity: "1",
          },
          "95%": {
            background:
              "linear-gradient(90deg, rgba(189, 159, 103, 0) 90%, rgb(189, 159, 103) 100%)",
            opacity: "0",
          },
        },
        opacity: {
          "0%": { borderRight: "1px solid transparent" },
          "10%": { borderRight: "1px solid #bd9f67" },
          "80%": { borderRight: "1px solid #bd9f67" },
          "100%": { borderRight: "1px solid transparent" },
        },
      },
      animation: {
        trail: "trail 1s ease-in-out",
        opacity: "opacity 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
