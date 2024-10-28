import type { Config } from "tailwindcss";


export default {
  content: ['index.html', 'src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#1E1E1E",
          200: "#111111"
        },
        brown: {
          100: "#4F2919",
          200: "#B46538",
          300: "#7A4C20"
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
