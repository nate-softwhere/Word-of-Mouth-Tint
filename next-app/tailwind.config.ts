import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: "#DC143C",
        "crimson-light": "#F75270",
        cream: "#FDEBD0",
        "blush": "#F7CAC9",
      },
    },
  },
  plugins: [],
} satisfies Config;
