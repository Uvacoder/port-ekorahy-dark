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
        bgPrimary: "#201F1F",
        bgSecondary: "#161616",
        primary: "#a21caf",
        secondary: "#ffffff",
        body: "#6b7280",
        linkedin: "#0A66C2",
        github: "#181717",
        instagram: "#E4405F",
        whatsapp: "#25D366",
        html5: "#E34F26",
        css3: "#1572B6",
        js: "#F7DF1E",
        php: "#777BB4",
        dart: "#0175C2",
        mysql: "#4479A1",
        mongodb: "#47A248",
        nodejs: "#339933",
        nextjs: "#000000",
        reactjs: "#61DAFB",
        bootstrap: "#7952B3",
        tailwind: "#06B6D4",
        vcs: "#007ACC",
        androidstd: "#3DDC84",
        flutter: "#02569B",
        netlify: "#00C7B7",
        vercel: "#000000",
        ps: "#31A8FF",
        ai: "#FF9A00",
      },
      fontFamily: {
        Kanit: ["Kanit", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Bungee: ["Bungee Outline", "cursive"],
      }
    },
  },
  plugins: [],
}
