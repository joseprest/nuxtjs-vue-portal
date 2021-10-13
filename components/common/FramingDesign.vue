<template>
  <b-row class="w-100 d-flex justify-content-center align-items-center">
    <b-col
      cols="12"
      sm="12"
      md="12"
      lg="7"
      xl="7"
      class="text-left px-0"
    >
      <component
        :is="slickComp"
        ref="for"
        :options="slickForOptions"
        class="slider-for"
      >
        <div
          v-for="(item, i) in supportDesigns"
          :key="i"
          class="d-flex align-items-stretch"
        >
          <div class="position-relative mx-auto">
            <b-img
              :src="item.src"
              class="responsive-img"
            />
            <div
              class="position-absolute text"
              :style="item.style"
            >{{item.text}}</div>
          </div>
        </div>
      </component>
    </b-col>
    <b-col
      cols="12"
      sm="12"
      md="12"
      lg="5"
      xl="5"
      class="text-left mt-3"
    >
      <div class="h4 mb-4">Framing to support<br>any design.</div>
      <div class="section-desc mb-5">Minimally designed, precision extruded aluminum profiles provide exceptional support and durability, while accentuating the natural beauty of glass.</div>
      <component
        :is="slickComp"
        ref="nav"
        :options="slickNavOptions"
        class="slider-nav"
      >
        <div
          v-for="(item, i) in supportDesigns"
          :key="i"
          class="spot-wrap"
          style="opacity: 1"
        >
          <div class="handle-item d-flex flex-column align-items-center">
            <div class="img-wrapper mb-4">
              <b-img
                :src="item.handlerSrc"
                style="width: 38px; margin: 0 auto;"
              />
            </div>
            <pre class="text-center">{{item.handlerText}}</pre>
          </div>
        </div>
      </component>
    </b-col>
  </b-row>
</template>

<script>
import '~/node_modules/slick-carousel/slick/slick.scss'
import '~/node_modules/slick-carousel/slick/slick-theme.scss'

export default {
  name: 'FramingDesign',
  components: {
    Slick: () => import('vue-slick')
  },
  props: {
    mode: {
      type: Boolean,
      default: true
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
        arrows: false,
        responsive: [
          { breakpoint: 1024 },
          { breakpoint: 768 }
        ]
      },
      slickNavOptions: {
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        centerPadding: '30px',
        arrows: false,
        responsive: [
          { breakpoint: 1024 },
          { breakpoint: 768 }
        ]
      },
      supportDesigns: [
        {
          src: require('~/assets/images/bg-product-frame-finish-a-a.jpg'),
          text: 'Bead-blasted aluminum finish provides a softer look and is scratch and fingerprint resistant.',
          style: {
            top: 60 + 'px',
            left: 120 + 'px'
          },
          handlerSrc: require('~/assets/images/duo/slide1-thumb.jpg'),
          handlerText: 'Anodized\nAluminum'
        },
        {
          src: require('~/assets/images/bg-product-frame-finish-whitePVDF.jpg'),
          text: 'More durable than powder coatings, PVDF resin-based coating is both functional and decorative. It won’t chalk, pit, chip, age or lose its color and sheen.',
          style: {
            top: 245 + 'px',
            left: 160 + 'px'
          },
          handlerSrc: require('~/assets/images/duo/slide4-thumb.jpg'),
          handlerText: 'White PVDF'
        },
        {
          src: require('~/assets/images/bg-product-frame-finish-black-resin.jpg'),
          text: 'More durable than powder coatings, PVDF resin-based coating is both functional and decorative. It won’t chalk, pit, chip, age or lose its color and sheen.',
          style: {
            top: 250 + 'px',
            left: 170 + 'px'
          },
          handlerSrc: require('~/assets/images/duo/slide2-thumb.jpg'),
          handlerText: 'Black PVDF'
        },
        {
          src: require('~/assets/images/bg-product-frame-finish-polished-alum.jpg'),
          text: 'More durable than powder coatings, PVDF resin-based coating is both functional and decorative. It won’t chalk, pit, chip, age or lose its color and sheen.',
          style: {
            top: 255 + 'px',
            left: 170 + 'px'
          },
          handlerSrc: require('~/assets/images/duo/slide3-thumb.jpg'),
          handlerText: 'Bronze PVDF'
        },
        {
          src: require('~/assets/images/bg-product-frame-finish-bronze-resin.jpg'),
          text: 'More durable than powder coatings, PVDF resin-based coating is both functional and decorative. It won’t chalk, pit, chip, age or lose its color and sheen.',
          style: {
            top: 255 + 'px',
            left: 170 + 'px'
          },
          handlerSrc: require('~/assets/images/duo/slide5-thumb.jpg'),
          handlerText: 'Custom\nMatched PVDF'
        }
      ]
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.slickComp = 'Slick'
    })
    if (!this.mode) {
      this.supportDesigns.pop()
      this.slickNavOptions.slidesToShow = 5
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
  .text {
    width: 300px;
    text-align: left;
    background-color: white;
    padding: 10px;
    font-size: 0.9rem;
    border-radius: 6px;
  }
  .slider-nav {
    .slick-current {
      .spot-wrap {
        .handle-item {
          .img-wrapper {
            border: 2px solid $brand-primary;
            border-radius: 50%;
            padding: 3px;
          }
          pre {
            display: block;
          }
        }

      }
    }
    .handle-item {
      cursor: pointer;
      padding-top: 10px;
      .img-wrapper {
        img {
          border-radius: 50%;
        }
      }
      pre {
        color: $brand-primary;
        font-weight: 700;
        display: none;
      }
    }
  }
  .section-desc{
    font-weight: 300;
    line-height: 2.13;
  }
  @media only screen and (max-width: 768px) {
    .text {
      display: none !important;
    }
    .h4, .section-desc{
      padding-left: 16px;
      padding-right: 16px;
    }
  }
</style>
