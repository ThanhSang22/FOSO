import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
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
        gradientWarning: 'linear-gradient(135deg, #FFD666 0%, #FFAB00 100%);',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        disabled: "#919EAB",
        yellow: "#FACA4A",
        secondary: "#637381",
        brand500: "#0373F3",
        brand800: '#013065',
        brand700: '#024897',
        brand600: '#025FCA',
        brand50: '#E6F1FF',
        textSecondary: '#637381',
        textPrimary: '#1C252E',
        errDark: '#B71D18',
        textDisabled: '#919EAB',
        gradientWarning: 'linear-gradient(135deg, #FFD666 0%, #FFAB00 100%);',
        secondary50: '#F3F2F2',
        blue: '#0155C6',
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
