import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#07080B",
        "bg-2": "#0C0E13",
        panel: "#10131A",
        ink: "#EDEFF4",
        "ink-dim": "#9BA1AF",
        "ink-faint": "#5A606E",
        acc: "#3B82F6",
        "acc-2": "#22D3EE",
        "acc-warm": "#F59E0B",
        "acc-red": "#F0506E",
        "acc-green": "#34D399",
        "acc-purple": "#A78BFA",
      },
      fontFamily: {
        disp: ["var(--font-disp)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      borderColor: {
        line: "rgba(255,255,255,0.08)",
        "line-bright": "rgba(255,255,255,0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
