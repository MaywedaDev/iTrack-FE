/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#8347E7",
        "primary-light": "#F5EDFF",
        "text-col": "#161518", 
        "text-light": "#565560",
        "text-lighter": "#32475C61",
        "success": "#71DD37",
        "body": "#f7f7f7"
      }
    },
  },
  plugins: [],
}

