/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,js,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#23b7a4",
        "section-dark-color": "#3a454d",
        "text-dark-primary": "#292f36",
        "text-dark-secondary": "#8d8f92",
        "bg-light": "#e1e6ea",
      },
    },
  },
  plugins: [],
};
