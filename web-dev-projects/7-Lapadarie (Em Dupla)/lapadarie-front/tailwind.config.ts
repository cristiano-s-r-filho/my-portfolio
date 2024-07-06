import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors: {
      "bg-primary": "rgba(229, 207, 148, 1)",
      "bg-cardClient": "rgba(255, 255, 255, 1)",
      "bg-card": "rgba(255, 255, 255) ",
      "bg-modal-overlay":"rgba(229, 207, 148, 0.5)",
      "text-primary": "rgba(95, 51, 5, 1)",
      "bg-card2": "rgba(95, 51, 5, 1)",
      "bg-header": "#965A1B",
      "bg-input":"rgba(245, 245, 245, 1)",
      "cancel":"rgba(219, 30, 30, 1)"
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config