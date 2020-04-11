module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt.js * Firebase PWA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js * Firebase = SPA * SSR * PWA * Serverless' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  buildDir: '../functions/nuxt',
  build: {
    publicPath: '/assets/',
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            configFile: '.eslintrc.js'
          }
        })
      }
    }
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  plugins: [
    { src: "~/plugins/firebase.js"},
  ],
  manifest: {
    name: 'Nuxt.js Firebase PWA',
    lang: 'ja'
  },
  env: {
    apiKey: "AIzaSyBQWNYXb3e7lfQa2hurdHaKNvOZb0my4_I",
    authDomain: "zoomstock-a9856.firebaseapp.com",
    databaseURL: "https://zoomstock-a9856.firebaseio.com",
    projectId: "zoomstock-a9856",
    storageBucket: "zoomstock-a9856.appspot.com",
    messagingSenderId: "748691684529",
    appId: "1:748691684529:web:46fd116827325963a3f690",
    measurementId: "G-B6L8WGVVY4"
  }
}
