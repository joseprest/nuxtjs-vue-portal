<template>
  <b-row
    v-if="mode"
    class="w-100 d-flex justify-content-center align-items-center"
  >
    <b-col
      cols="12"
      sm="12"
      md="12"
      lg="5"
      xl="5"
      class="text-left desc mt-3"
      align-h="center"
    >
      <div class="h4 mb-4">Add a pop of color.</div>
      <div class="section-desc mb-5">Who says you have to choose between color and glass? ALUR offers both digital ceramic printed glass and colored interlayers in laminated glass.</div>
      <component
        :is="slickComp"
        ref="nav"
        :options="slickNavOptions"
        class="pop-nav"
      >
        <div
          v-for="(item, i) in addColors"
          :key="i"
          class="spot-wrap d-flex align-items-stretch justify-content-center"
          style="opacity: 1"
        >
          <div class="d-flex justify-content-center flex-column">
            <div class="handle-img d-flex align-items-center justify-content-center mb-4 mx-auto">
              <b-img
                :src="item.handlerSrc"
                class="img"
              />
            </div>
            <pre class="text-center">{{item.handlerText}}</pre>
          </div>
        </div>
      </component>
    </b-col>
    <b-col
      cols="12"
      sm="12"
      md="12"
      lg="7"
      xl="7"
      class="text-left content"
    >
      <component
        :is="slickComp"
        ref="for"
        :options="slickForOptions"
        class="pop-for"
      >
        <div
          v-for="(item, i) in addColors"
          :key="i"
          class="d-flex align-items-stretch"
        >
          <div
            class="position-relative"
            @click="previewImage(item)"
          >
            <b-img
              :src="item.overviewSrc"
              class="responsive-img"
            />
            <div
              class="position-absolute text"
              :style="item.style"
            >{{item.overviewText}}</div>
            <div
              class="position-absolute tab-icon" style="display: none"
            >
              <b-img
                src="~/assets/icons/Stroke_2.svg"
              />
            </div>
          </div>
        </div>
      </component>
    </b-col>
  </b-row>
  <b-row
    v-else
    class="w-100 d-flex justify-content-center align-items-center"
  >
    <b-col
      cols="12"
      sm="12"
      md="12"
      lg="5"
      xl="5"
      class="text-left desc mt-3"
      align-h="center"
    >
      <div class="h4 mb-4">Define your space</div>
      <div class="section-desc mb-5">Available in both vertical and horizontal options, dividing wall tiles add functionality and enhance aesthetic appeal.</div>
      <component
        :is="slickComp"
        ref="nav"
        :options="slickNavOptions"
        class="pop-nav"
      >
        <div
          v-for="(item, i) in addColors"
          :key="i"
          class="spot-wrap d-flex align-items-stretch justify-content-center"
          style="opacity: 1"
        >
          <div class="d-flex justify-content-center flex-column">
            <div class="handle-img d-flex align-items-center justify-content-center mb-4 mx-auto">
              <b-img
                :src="item.handlerSrc"
              />
            </div>
            <pre class="text-center">{{item.handlerText}}</pre>
          </div>
        </div>
      </component>
    </b-col>
    <b-col
      cols="12"
      sm="12"
      md="12"
      lg="7"
      xl="7"
      class="text-left content"
    >
      <component
        :is="slickComp"
        ref="for"
        :options="slickForOptions"
        class="pop-for"
      >
        <div
          v-for="(item, i) in addColors"
          :key="i"
          class="d-flex align-items-stretch"
        >
          <div
            class="position-relative"
            @click="previewImage(item)"
          >
            <b-img
              :src="item.overviewSrc"
              class="responsive-img"
            />
            <div
              class="position-absolute tab-icon" style="display: none"
            >
              <b-img
                src="~/assets/icons/Stroke_2.svg"
              />
            </div>
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
  name: 'PopColor',
  components: {
    Slick: () => import('vue-slick')
  },
  props: {
    mode: {
      type: Boolean,
      default: true
    },
    previewImage: {
      type: Function,
      default: () => {}
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
        asNavFor: '.pop-nav',
        arrows: false,
        responsive: [
          { breakpoint: 1024 },
          { breakpoint: 768 }
        ]
      },
      slickNavOptions: {
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.pop-for',
        focusOnSelect: true,
        arrows: false,
        responsive: [
          { breakpoint: 1024 },
          { breakpoint: 768 }
        ]
      },
      addColors: [
        {
          overviewSrc: require('~/assets/images/spot2-1-features@2x.jpg'),
          overviewText: 'Digital ceramic printing enables any design to be reproduced in glass, turning even the most challenging projects into spectacular printed installations.',
          style: {
            top: 55 + '%',
            left: 90 + 'px'
          },
          handlerSrc: require('~/assets/images/icons/printer-blue.svg'),
          handlerText: 'Digitally printed\nglass'
        },
        {
          overviewSrc: require('~/assets/images/spot2-1-features@2x.jpg'),
          overviewText: 'A wide range of colored interlayers in laminated glass allows you to create just the right look and ambience.',
          style: {
            top: 55 + '%',
            left: 90 + 'px'
          },
          handlerSrc: require('~/assets/images/icons/paint-blue.svg'),
          handlerText: 'Color interlayed\nglass'
        }
      ]
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.slickComp = 'Slick'
    })
    if (!this.mode) {
      this.addColors = [
        {
          overviewSrc: require('~/assets/images/bg_product_dividing_defineSpace_horizontal.jpg'),
          handlerSrc: require('~/assets/icons/Rectangle_landscape.png'),
          handlerText: 'Horizontal Tiles'
        },
        {
          overviewSrc: require('~/assets/images/bg_product_dividing_defineSpace_vertical.jpg'),
          handlerSrc: require('~/assets/icons/Rectangle_potrait.png'),
          handlerText: 'Vertical Tiles'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
  .text {
    width: 340px;
    text-align: left;
    background-color: white;
    padding: 15px;
    font-size: .8rem;
    border-radius: 6px;
  }
  .pop-nav {
    width: 70%;
    .handle-img {
      position: relative;
      background-color: white;
      box-shadow: 0 1px 8px 0 rgba(0,0,0,.17), 0 1px 2px 0 rgba(0,0,0,.16);
      border-radius: 50%;
      width: 72px;
      height: 72px;
      transition: background-color .3s ease;
    }
    .slick-current {
      .handle-img {
        background-color: $brand-primary !important;
        img {
          -webkit-filter: brightness(0) invert(1);
          filter: brightness(0) invert(1);
        }
      }
      pre{
        color: $brand-primary !important;
      }
    }
    .handle-item {
      cursor: pointer;
    }
  }
  .section-desc{
    font-weight: 300;
    line-height: 2.13;
  }
  @media only screen and (max-width: 1008px) {
    .row {
      .desc {
        order: 2;
        .pop-nav {
          margin: 0 auto;
        }
      }
      .content {
        order: 1;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .text {
      display: none !important;
    }
    .responsive-img{
      height: 240px;
    }
    .pop-nav {
      width: 70%;
      .handle-img {
        width: 48px;
        height: 48px;
        .img {
          width: 27px;
        }
      }
      pre {
        display: none;
      }
      .slick-current {
        pre {
          display: block;
          font-weight: 700;
          font-size: 14px;
        }
      }
      .handle-item {
        cursor: pointer;
      }
    }
    .h4, .section-desc{
      padding-left: 16px;
      padding-right: 16px;
    }
  }
</style>
