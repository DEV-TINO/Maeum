/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6900",
        button_color: "#585858",
        box_color: "#F4F4F4",
        select_box_color: "#FFE1E1",
      },
    },
  },
  plugins: [],
};
