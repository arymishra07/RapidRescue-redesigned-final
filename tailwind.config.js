/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        emergency: "#dc2626",
        urgent: "#d97706",
        safe: "#16a34a",
        action: "#2563eb"
      },
      boxShadow: {
        soft: "0 10px 35px rgba(15, 23, 42, .08)"
      }
    }
  },
  plugins: []
}
