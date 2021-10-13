export default {
  name: 'Resize',

  data () {
    return {
      desktopMode: false,
      tabletMode: false,
      w: 332,
      h: 227,
    }
  },
  created () {
    if (process.browser) {
      window.addEventListener('resize', this.handleResize)
    }
  },

  destroyed () {
    if (process.browser) {
      window.removeEventListener('resize', this.handleResize)
    }
  },

  mounted () {
    this.handleResize()
  },

  methods: {
    handleResize () {
      this.tabletMode = this.$mq.above('769px')
      this.desktopMode = this.$mq.above('1200px')
      if (this.$mq.above('1201px')) {
        this.w = 972
        this.h = 608
      } else if (this.$mq.above('769px')) {
        this.w = 760
        this.h = 442
      } else if (this.$mq.above('536px')) {
        this.w = 367
        this.h = 227
      }
    }
  }
}
