import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // <-- Me line eka aniwaryayen thiyenna one
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;