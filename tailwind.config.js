/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FF6900",
        "button-color": "#585858",
        "box-color": "#F4F4F4",
        "select-box-color": "#FFE1E1",
        "text-color": "#383838",
        "bright-text-color": "#AFAFAF",
      },
      backgroundImage: {
        "main-background": "url(/images/main-background.png)",
        "result-background": "url(/images/result-background.png)",
      },
    },
  },
  plugins: [],
};
