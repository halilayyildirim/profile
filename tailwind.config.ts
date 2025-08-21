// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        m3: {
          primary: "#5083F0",
          onPrimary: "#FFFFFF",
          primaryContainer: "#E9F2FF",
          onPrimaryContainer: "#2F4578",

          secondary: "#637297",
          onSecondary: "#FFFFFF",
          secondaryContainer: "#C6CEEA",
          onSecondaryContainer: "#3E475C",

          tertiary: "#AD6DAD",
          onTertiary: "#FFFFFF",
          tertiaryContainer: "#E6CEF8",
          onTertiaryContainer: "#514060",

          surface: "#EFF8FF",
          onSurface: "#1C2531",
        },
      },

      fontFamily: {
        onest: ["Onest", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },

     
      fontSize: {
        
        "m3-display-lg": ["57px", { lineHeight: "64px", fontWeight: "400" }],
        "m3-display-md": ["45px", { lineHeight: "52px", fontWeight: "400" }],
        "m3-display-sm": ["36px", { lineHeight: "44px", fontWeight: "400" }],

        "m3-headline-lg": ["32px", { lineHeight: "40px", fontWeight: "400" }],
        "m3-headline-md": ["28px", { lineHeight: "36px", fontWeight: "400" }],
        "m3-headline-sm": ["24px", { lineHeight: "32px", fontWeight: "400" }],

        "m3-title-lg": ["22px", { lineHeight: "28px", fontWeight: "500" }],
        "m3-title-md": ["16px", { lineHeight: "24px", fontWeight: "500" }],
        "m3-title-sm": ["14px", { lineHeight: "20px", fontWeight: "500" }],

        "m3-label-lg": ["14px", { lineHeight: "20px", fontWeight: "500", letterSpacing: "0.1px" }],
        "m3-label-md": ["12px", { lineHeight: "16px", fontWeight: "500", letterSpacing: "0.5px" }],
        "m3-label-sm": ["11px", { lineHeight: "16px", fontWeight: "500", letterSpacing: "0.5px" }],

        "m3-body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "m3-body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "m3-body-sm": ["12px", { lineHeight: "16px", fontWeight: "400" }],

        
        "custom-headline": ["32px", { lineHeight: "40px", fontWeight: "600" }],         // Onest
        "custom-headline-sm": ["24px", { lineHeight: "32px", fontWeight: "500" }],      // Onest
        "custom-title": ["20px", { lineHeight: "28px", fontWeight: "600" }],            // Onest
        "custom-label": ["16px", { lineHeight: "24px", fontWeight: "400" }],            // Urbanist
        "custom-label-sm": ["14px", { lineHeight: "20px", fontWeight: "500" }],         // Urbanist
      },
    },
  },
  plugins: [],
} satisfies Config;
