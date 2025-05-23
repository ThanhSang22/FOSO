import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs400: "400px",
        xs575: "575px",
        md840: "840px",
      },
      backgroundImage: {
        bgFooter: "url('/images/bgFooter.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        disabled: "#919EAB",
        yellow: "#FACA4A",
        secondary: "#637381",
        brand500: "#0373F3",
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, Record<string, string>>) => void;
    }) {
      const newUtilities = {
        ".text-goldGradient": {
          "background-image":
            "linear-gradient(90deg, #FFE3B0 0%, #F7C263 52.5%, #FFEFD1 100%)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "text-fill-color": "transparent",
          color: "#F7C263",
        },
      };
      addUtilities(newUtilities);
    },

    function ({
      addComponents,
    }: {
      addComponents: (
        components: Record<string, Record<string, string>>
      ) => void;
    }) {
      addComponents({
        ".scroll-hidden::-webkit-scrollbar": {
          display: "none",
        },
      });
    },
  ],
};
export default config;
