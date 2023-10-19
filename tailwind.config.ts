import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        muted: "#0d1117",
        "muted-hover": "#161b22",
        "issue-list-text": "#e6edf3",
        "issue-list-text-hover": "#2f81f7",
        "issue-list-border": "#30363d",
        "gh-primary": "#c9d1d9",
      },
      container: {
        screens: {
          xxl: "1280px",
          xl: "1280px",
        },
      },
      fontFamily: {
        sans: ["--apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
