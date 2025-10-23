/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
       fontFamily: {
         acme: ["Acme", "sans-serif"], // 👈 your stack
      },
    },
  },
  plugins: [],
}

