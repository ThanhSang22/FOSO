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
      backgroundImage: {},
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary50: "#FAF7F0",
        primary100: "#F5EEE0",
        primary200: "#EBDCC1",
        primary300: "#E1CBA3",
        primary400: "#E8AC3D",
        primary500: "#CCA763",
        primary600: "#C8A056",
        primary700: "#C39746",
        primary800: "#A98137",
        primary900: "#70531F",

        accent50: "#FBEFEE",
        accent100: "#F0BEBC",
        accent200: "#E89E9B",
        accent300: "#DD6D69",
        accent400: "#D54D48",
        accent500: "#B12C28",
        accent600: "#A62A26",
        accent700: "#962622",
        accent800: "#85221E",
        accent900: "#641917",

        gray50: "#F5F5F5",
        gray100: "#E0E0E0",
        gray200: "#CCCCCC",
        gray300: "#B8B8B8",
        gray400: "#A3A3A3",
        gray500: "#8F8F8F",
        gray600: "#7A7A7A",
        gray700: "#666666",
        gray800: "#474747",
        gray900: "#1A1A1A",
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
