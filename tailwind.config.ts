import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        veterinarian: {
          violet: "#6B4CCF",
          violetDark: "#4E36A0",
          blue: "#2F6FAA",
          blueSoft: "#EAF3FF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
