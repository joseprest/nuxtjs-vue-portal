const nodeExternals = require('webpack-node-externals')
const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    {src: 'bootstrap-vue/dist/bootstrap-vue.css', lang: 'scss'},
    {src: 'swiper/dist/css/swiper.css'},
    {src: 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'}
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-slick', mode: 'client' },
    { src: '~/plugins/responsive', mode: 'client' },
    { src: '~/plugins/scrollTo.js', mode: 'client' },
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/directives.js', ssr: false },
    { src: '~/plugins/vue-smooth-scroll.js', mode: 'client' },
    { src: '~/plugins/datepicker.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    [
      'nuxt-sass-resources-loader',
      '@/assets/styles/index.scss'
    ],
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        }
      ]
    }]
  ],
  bootstrapVue: {
    bootstrapCSS: false, // or `css`
    bootstrapVueCSS: false // or `bvCSS`
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      vueLoader.options.transformAssetUrls = {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'img-src',
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      }

      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     test: /\.svg$/,
      //     loader: 'svg-inline-loader',
      //     exclude: /node_modules/
      //   });
      // }

      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vue-slick/]
          })
        ]
      }
    }
  }
}
