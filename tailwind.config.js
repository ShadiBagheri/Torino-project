const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slow-spin": "spin 1s linear infinite",
        "wiggle": "wiggle 250ms linear 3 both",
        "blur": "blur 1s normal 3s both",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "scale(165deg)" },
          "50%": { transform: "rotate(-10deg)" }
        ,
          blur: {
            "0%, 100%": { transition: "all 1s ease-in" },
          }
        }
      }
    },
  },
  plugins: [],
});
