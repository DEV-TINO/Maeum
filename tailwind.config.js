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
      },
      backgroundImage: {
        "main-background": "url(/image/main-background.png)",
      },
    },
  },
  plugins: [],
};
