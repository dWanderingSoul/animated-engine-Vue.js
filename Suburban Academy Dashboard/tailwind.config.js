/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {    
          colors: {
            primary: "#D50036",
            secondary: "#C4C4C4",
            "primary-green": "#23BE15",
            "primary-yellow": "#D5C534",
            "primary-gray": "#B0ACAC",
            "primary-black": "#000000",
            "primary-red": "#D50036",
            background: "#F5F5F5",
            text: "#000000",
          },
          fontFamily: {
            sans: ["Source Sans Pro", "sans-serif"],
          },
    },
    plugins: [],
  }
}
