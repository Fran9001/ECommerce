/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 30s linear infinite",
      },
    },
    keyframes: {
      "loop-scroll": {
        from: {
          transform: "translateX(20%)",
        },
        to: {
          transform: "translateX(-18%)",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
