/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"]
      },
      colors: {
        accent: {
          500: "#ff6b35",
          600: "#e85b2a"
        }
      },
      backgroundImage: {
        ez: "radial-gradient(circle at 25% 25%, #1b0c28 0%, #301934 60%, #492567 100%)",
        card: "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.05))"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.25)",
        glow: "0 8px 24px rgba(232,91,42,.25)"
      }
    },
  },
  plugins: [],
}
