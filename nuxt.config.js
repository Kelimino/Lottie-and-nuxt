export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kellig21',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet",  href:"https://fonts.googleapis.com/css2?family=Catamaran:wght@800&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,800;1,200;1,300;1,400&display=swap"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

    //resest css meyerweb
    '@/assets/css/reset.css',
    //gobal css compile
    '@/assets/css/main.css',
    //main css file sass
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      "gsap"
    ]
  }
};
