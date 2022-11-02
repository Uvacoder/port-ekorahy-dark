/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        primary: "#a21caf",
        secondary: "#251D3A",
        body: "#6b7280",
        linkedin: "#0A66C2",
        github: "#181717",
        instagram: "#E4405F",
        whatsapp: "#25D366",
      },
      fontFamily: {
        Kanit: ["Kanit", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}
