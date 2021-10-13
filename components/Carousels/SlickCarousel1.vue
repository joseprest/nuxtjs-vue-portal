<template>
  <div class="carousel">
    <component
      :is="slickComp"
      ref="for"
      :options="slickForOptions"
      :class="['mb-5', slickFor]"
    >
      <slot name="slider-for"></slot>
    </component>
    <component
      :is="slickComp"
      ref="nav"
      :options="slickNavOptions"
      :class="slickNav"
    >
      <slot name="slider-nav"></slot>
    </component>
  </div>
</template>

<script>
import '~/node_modules/slick-carousel/slick/slick.scss'
import '~/node_modules/slick-carousel/slick/slick-theme.scss'

export default {
  name: 'SlickCarousel',
  components: {
    Slick: () => import('vue-slick')
  },
  props: {
    navItems: {
      type: Number,
      default: () => 1
    },
    slickFor: {
      type: String,
      default: () => 'slider-for'
    },
    slickNav: {
      type: String,
      default: () => 'slider-nav'
    }
  },
  data () {
    return {
      slickComp: '',
      slickForOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        centerMode: true,
        asNavFor: '.slider-nav',
        responsive: [
          { breakpoint: 1024 },
          { breakpoint: 768 },
          { breakpoint: 375 }
        ]
      },
      slickNavOptions: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        responsive: [
          { breakpoint: 1024 },
          { breakpoint: 768 },
          { breakpoint: 540 }
        ]
      }
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.slickComp = 'Slick'
      this.slickNavOptions.slidesToShow = this.navItems
      this.slickForOptions.asNavFor = `.${this.slickNav}`
      this.slickNavOptions.asNavFor = `.${this.slickFor}`
    })
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/_variables.scss';
  .carousel {
    width: 100%;
    margin: 0 auto;
  }
</style>
