import type { Config } from "tailwindcss";
import { colorsConfiguration } from "./src/app/styles/colorsConfiguration";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ...colorsConfiguration,
      },
    },
  },
  plugins: [],
} satisfies Config;
