module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#2D344D",
        primary: "#3451BE",
        back: "#F3F5FB",
        skin: "#FBE9E7"
      },
      fontFamily: {
        title: ["Crimson Text", "serif"],
        text: ["Nunito", "sans-serif"]
      },
      fontSize: {
        "12xl": "10rem"
      },
      height: {
        footer: "40rem"
      },
      spacing: {
         '100': '100rem',
       }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
