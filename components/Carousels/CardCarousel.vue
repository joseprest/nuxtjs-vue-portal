<template>
  <div class="product">
    <component
      :is="slickComp"
      ref="slick"
      :options="slickOption"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="mb-4 pl-2 pr-2 d-flex align-items-stretch image-wrapper"
      >
        <b-img
          :src="slide.src"
          @click="viewImages(slides)"
        />
      </div>
    </component>
    <div
      class="view"
      @click="viewImages(slides)"
    >Expand</div>
    <div
      class="title"
      :style="{color: colorTheme}"
    >{{cardTitle}}</div>
    <div class="text">{{cardText}}</div>
    <div class="desc">{{cardDesc}}</div>
  </div>
</template>

<script>
export default {
  name: 'CardCarousel',
  components: {
    Slick: () => import('vue-slick')
  },
  props: {
    cardTitle: {
      type: String,
      default: () => ''
    },
    cardText: {
      type: String,
      default: () => ''
    },
    cardDesc: {
      type: String,
      default: () => ''
    },
    colorTheme: {
      type: String,
      default: () => '#1e306e'
    },
    slides: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      slickComp: '',
      slickOption: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        centerMode: true,
        infinite: true,
        accessibility: true,
        adaptiveHeight: false,
        prevArrow: '<div class="slider-arrow slider-prev"></div>',
        nextArrow: '<div class="slider-arrow slider-next"></div>',
        responsive: [
          { breakpoint: 1024 },
          { breakpoint: 768 }
        ]
      }
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.slickComp = 'Slick'
    })
  },
  methods: {
    viewImages (slides) {
      this.$emit('view', slides)
    }
  }
}
</script>
<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
  .product {
    padding: 16px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    border: 1px solid $grey1;
    min-height: 392px;
    text-align: center;
    margin-bottom: 30px;
    background-color: white;
    position: relative;
    .image-wrapper {
      height: 212px;
      padding: 0 !important;
      img {
        width: 100%;
        height: auto;
      }
    }
    .title {
      margin-bottom: 10px;
      line-height: 1;
      font-size: 1.2rem;
    }
    .text {
      font-size: .9rem;
      line-height: 1.6;
      font-weight: 300;
    }
    .desc {
      font-size: .8rem;
      font-weight: 300;
      line-height: 2;
      opacity: .5;
      position: absolute;
      bottom: 15px;
      left: 0;
      right: 0;
    }
    &:hover {
      .view {
        opacity: 1;
      }
    }
    .view {
      position: absolute;
      top: 25px;
      right: 25px;
      font-size: .7rem;
      cursor: pointer;
      opacity: 0;
      transition: opacity .5s ease;
      z-index: 100;
    }
  }
@media only screen and (max-width: 768px) {
  .product {
    .view {
      opacity: 1;
    }
  }
}
</style>
<style lang="scss">
  .product {
    .slider-arrow {
      width: 32px;
      height: 32px;;
      line-height: 32px;
      top: 40%;
      &:before {
        font-size: 1.2rem;
      }
    }
    .slick-slide {
      opacity: 1;
    }
  }
</style>
