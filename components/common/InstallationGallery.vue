<template>
  <slick-carousel :options="options">
    <template slot="content">
      <div
        v-for="(slide, index) in installationImages"
        :key="index"
        class="spot-wrap pl-2 pr-2"
      >
        <div class="position-relative annotation-wrapper">
          <image-view
            class="img-responsive image"
            :name="slide.name"
            :ext="slide.ext"
          />
          <div
            class="annotation-container"
            v-for="(item, key) in slide.annotations"
            :key="key"
          >
              <span
                :id="generateUniqueId(item)"
                class="tooltip-wrapper position-absolute"
                :style="{left: wRatio * item.left + 'px', top: hRatio * item.top + 'px'}"
              >{{key + 1}}</span>
            <b-popover
              :target="generateUniqueId(item)"
              placement="top"
              triggers="hover focus"
              :content="item.text"
            ></b-popover>
          </div>
        </div>
        <div class="slide-title fw-300 p-4">
          {{slide.title}}
          <div class="location fw-300 pt-1">{{slide.location}}</div>
        </div>
      </div>
    </template>
  </slick-carousel>
</template>

<script>
import SlickCarousel from '~/components/Carousels/SlickCarousel.vue'
import ImageView from '~/components/Images/ImageView.vue'

export default {
  name: 'InstallationGallery',

  components: {
    SlickCarousel,
    ImageView
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

  data () {
    return {
      wRatio: 0.313,
      hRatio: 0.357,
      installationImages: [
        {
          name: 'ALUR_LA_Showroom_1',
          ext: 'jpg',
          title: 'Rodenbeck Showroom',
          location: 'Los Angeles, CA',
          annotations: [
            {
              "top": 511.00001525878906,
              "left": 0,
              "text": "Magnetic Door Stop"
            },
            {
              "top": 166.00001525878906,
              "left": 113.99999237060547,
              "text": "Glass Pivot Door"
            },
            {
              "top": 43,
              "left": 214.00000762939453,
              "text": "Roller Catch"
            },
            {
              "top": 328.0000123977661,
              "left": 227.00000762939453,
              "text": "18” Ladder pull"
            },
            {
              "top": 285.0000123977661,
              "left": 465.00000762939453,
              "text": "Tackable/Acoustical Tile"
            },
            {
              "top": 202.00000762939453,
              "left": 374.00000762939453,
              "text": "Thermofused Melamine Tile"
            },
            {
              "top": 377.00000762939453,
              "left": 544.0000076293945,
              "text": "Glass Nib Wall"
            },
            {
              "top": 434.00001525878906,
              "left": 583,
              "text": "Polycarbonate T-Joint"
            },
            {
              "top": 139.00001525878906,
              "left": 586,
              "text": "Clear Anodized Aluminum Frame"
            },
            {
              "top": 273.00000762939453,
              "left": 726.0000076293945,
              "text": "84” Ladder Pull"
            },
            {
              "top": 193.00000762939453,
              "left": 716.0000076293945,
              "text": "Extra Wide Glass Double Sliding Doors"
            }
          ]
        },
        {
          name: 'Brookfield2',
          ext: 'jpg',
          title: 'Brookfield Properties',
          location: 'Los Angeles, CA',
          annotations: [
            {
              "top": 150,
              "left": 58.99999237060547,
              "text": "Drywall End Post"
            },
            {
              "top": 200,
              "left": 200,
              "text": "18” Ladder Pull"
            },
            {
              "top": 160,
              "left": 178,
              "text": "Glass Single Sliding Door"
            },
            {
              "top": 359,
              "left": 687.0000076293945,
              "text": "Polycarbonate L-Joint"
            },
            {
              "top": 220,
              "left": 832,
              "text": "18” Ladder Pull"
            },
            {
              "top": 42,
              "left": 740.9999876022339,
              "text": "Clear Anodized Aluminum Frame"
            }
          ]
        },
        {
          name: 'Enform3',
          ext: 'jpg',
          title: 'en4orm',
          location: 'Costa Mesa, CA',
          annotations: [
            {
              "top": 306.00001859664917,
              "left": 220.00000762939453,
              "text": "Tackable/Acoustical Tile"
            },
            {
              "top": 240.0000033378601,
              "left": 163.00000762939453,
              "text": "Fabric Wrap Tile"
            },
            {
              "top": 285.00001859664917,
              "left": 118.99999237060547,
              "text": "Magnetic Markerboard Tile"
            },
            {
              "top": 390.00001859664917,
              "left": 315.00000762939453,
              "text": "Glass Nib Wall"
            },
            {
              "top": 222.0000033378601,
              "left": 368.00000762939453,
              "text": "Thermofused Melamine Tile"
            },
            {
              "top": 418.00001859664917,
              "left": 459.00000762939453,
              "text": "60” Ladder Pull"
            },
            {
              "top": 74.00000762939453,
              "left": 573,
              "text": "Clear Anodized Aluminum Frame"
            },
            {
              "top": 518.9999847412109,
              "left": 708.0000076293945,
              "text": "Polycarbonate I-Joint"
            },
            {
              "top": 392.00001525878906,
              "left": 238.00000762939453,
              "text": "Polycarbonate T-Joint"
            }
          ]
        },
        {
          name: 'Grosvenor2',
          ext: 'jpg',
          title: 'Grovesvenor',
          location: 'Chicago, IL',
          annotations: [
            {
              "top": 362.99999237060547,
              "left": 293.00000762939453,
              "text": "18” Ladder Pull"
            },
            {
              "top": 139.00000762939453,
              "left": 143.99999237060547,
              "text": "Glass Single Sliding Door"
            },
            {
              "top": 518.0000228881836,
              "left": 406.00000762939453,
              "text": "Polycarbonate T-Joint"
            },
            {
              "top": 491.0000228881836,
              "left": 553.0000076293945,
              "text": "Black PVDF Resin Frame"
            },
            {
              "top": 384.99999237060547,
              "left": 616.0000076293945,
              "text": "Nib Wall"
            }
          ]
        },
        {
          name: 'Halcon3',
          ext: 'jpg',
          title: 'Halcon Corporate Offices',
          location: 'Stewartville, MN',
          annotations: [
            {
              "top": 224,
              "left": 384,
              "text": "Clerestory Glass"
            },
            {
              "top": 33,
              "left": 543,
              "text": "Clear Anodized Aluminum Frame"
            },
            {
              "top": 313.00000762939453,
              "left": 530.0000076293945,
              "text": "EuroProfile Handle Set"
            },
            {
              "top": 541.0000381469727,
              "left": 460.00000762939453,
              "text": "Polycarbonate T-Joint"
            },
            {
              "top": 358.00000762939453,
              "left": 498.00000762939453,
              "text": "Postless Glass Pivot Door"
            },
            {
              "top": 178.00000762939453,
              "left": 688.0000076293945,
              "text": "Clerestory Glass Wall"
            },
            {
              "top": 539.0000381469727,
              "left": 653.0000076293945,
              "text": "Polycarbonate I-Joint"
            },
            {
              "top": 364.00000762939453,
              "left": 243.00000762939453,
              "text": "Glass Nib Wall"
            }
          ]
        },
        {
          name: 'PnW_Chicago2',
          ext: 'jpg',
          title: 'Perkins + Will',
          location: 'Chicago, IL',
          annotations: [
            {
              "top": 212,
              "left": 350.00000762939453,
              "text": "Glass Single Sliding Door"
            },
            {
              "top": 392,
              "left": 400,
              "text": "18” Ladder Pull"
            },
            {
              "top": 392,
              "left": 486,
              "text": "18” Ladder Pull"
            },
            {
              "top": 229.00000762939453,
              "left": 49.99999237060547,
              "text": "Drywall End Post"
            },
            {
              "top": 154.00000762939453,
              "left": 686.0000076293945,
              "text": "Clear Anodized Aluminum Frame"
            },
            {
              "top": 212,
              "left": 535.0000076293945,
              "text": "Glass Single Sliding Door"
            }
          ]
        },
        {
          name: 'PerkinsWill_LA3',
          ext: 'jpg',
          title: 'Perkins + Will',
          location: 'Los Angeles, CA',
          annotations: [
            {
              "top": 444.0000305175781,
              "left": 358.00000762939453,
              "text": "Clear Anodized Aluminum Frame",
            },
            {
              "top": 267,
              "left": 370.00000762939453,
              "text": "Glass Nib Wall",
            },
            {
              "top": 462.0000305175781,
              "left": 421.00000762939453,
              "text": "Extra Wide Glass Single Sliding Door",
            },
            {
              "top": 372.00001525878906,
              "left": 459,
              "text": "60” Ladder Pull",
            },
            {
              "top": 58,
              "left": 329.00000762939453,
              "text": "Full Width Sliding Door Track",
            }
          ]
        }
      ],
      options: {
        slidesToShow: 1,
        infinite: true,
        accessibility: true,
        adaptiveHeight: true,
        arrows: true,
        edgeFriction: 0.30,
        swipe: true,
        centerMode: true,
        centerPadding: '5%',
        variableWidth: true,
        prevArrow: '<div class="slider-arrow slider-prev"></div>',
        nextArrow: '<div class="slider-arrow slider-next"></div>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '60px',
              variableWidth: true,
              dots: true,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0',
              variableWidth: true,
              dots: true,
              slidesToShow: 1
            }
          }
        ]
      }
    }
  },

  mounted () {
    this.handleResize()
  },

  methods: {
    generateUniqueId (val) {
      if (val.text) {
        return val.text.replace(/\s/g, '-') + '-' + val.top + '-' + val.left
      }
    },

    handleResize () {
      if (this.$mq.above('769px')) {
        this.wRatio = 1
        this.hRatio = 1
      } else if (this.$mq.above('536px')) {
        this.wRatio = 0.551
        this.hRatio = 0.357
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
.spot-wrap {
  margin-top: 60px;
  .slide-title {
    font-size: 1.3rem;
    letter-spacing: -.2px;
    color: black;
    font-weight: 400 !important;
    .location {
      font-size: 1rem;
      color: $alur-light-grey;
    }
  }
  @media only screen and (max-width: 535px) {
    .image {
      max-width: 304px;
      min-height: 220px;
      object-fit: cover;
    }
  }
}
</style>
<style lang="scss">
  @import '~/assets/styles/_variables.scss';
  .spot-wrap {
    .annotation-wrapper {
      .annotation-container {
        display: none;
        .tooltip-wrapper {
          color: $alur-primary-color;
          background-color: $brand-primary;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1px 10px 0 rgba(0,0,0,.17), 0 1px 2px 0 rgba(0,0,0,.16);
          &:hover {
            border: 2px solid $alur-primary-color;
          }
        }
      }
    }
    .annotation-wrapper:hover {
      .annotation-container {
        display: block !important;
      }
    }
  }
</style>
