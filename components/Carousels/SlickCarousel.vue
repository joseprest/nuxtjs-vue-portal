<template>
  <div class="carousel">
    <component
      :is="slickComp"
      ref="slick"
      :options="options"
    >
      <slot name="content"></slot>
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
    options: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      slickComp: ''
    }
  },

  mounted: function () {
    this.$nextTick(function () {
      this.slickComp = 'Slick'
    })
  }
}
</script>
<style scoped>
  .carousel {
    width: 100%;
  }
</style>
<style lang="scss">
@import '~/assets/styles/_variables.scss';
  @media only screen and (max-width: 1008px){
    .slick-slide {
      opacity: 1;
    }
    .slick-current {
      opacity: 1;
    }
  }
</style>
