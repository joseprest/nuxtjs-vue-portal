<template>
  <div class="layout">
    <header-view />
    <main id="main" role="main">
      <nuxt />
    </main>
    <footer-view />
  </div>
</template>

<script>
import HeaderView from './Header/HeaderView'
import FooterView from './Footer/FooterView'
import { get } from 'lodash'

export default {
  components: {
    HeaderView,
    FooterView
  },

  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },

  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },

  methods: {
    handleScroll (event) {
      const navHeight = this.$children[0].$refs.desktopNav.clientHeight ||
        this.$children[0].$refs.mobileNav.clientHeight
      const scrollTop = window.scrollY
      let ref = get(this.$children[1].$children[0], '$refs.stickyHeader') || get(this.$children[1].$children[0].$children[0], '$refs.stickyHeader')
      if (ref) {
        if (scrollTop > navHeight) {
          ref.style.position = 'fixed'
          ref.style.opacity = ref.dataset.opacity || 0.8
        } else {
          ref.style.position = 'relative'
          ref.style.opacity = 1
        }
      }
    }
  }
}
</script>
<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
ul {
  list-style: none;
  padding: 0;
}

a,
a:hover {
  text-decoration: none !important;
  cursor: pointer !important;
}

</style>
<style lang="scss">
@import '~/assets/styles/index.scss';
.layout {
  overflow-x: hidden;
}
</style>
