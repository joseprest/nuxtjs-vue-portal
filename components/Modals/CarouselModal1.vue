<template>
  <div class="portfolio-modal">
    <b-modal
      hide-header
      hide-footer
      v-model="modalVisibility"
      size="lg"
      @hide="hideModal"
      @show="showModal"
      @ok="$refs.slick.onSubmit()"
    >
      <div class="text-center modal-title">
        <b-img src="~/assets/images/alur-logo-inverse.svg" />
        <p class="h1 fw-300 mt-2">{{contents.name}}</p>
      </div>
      <component
        :is="slickComp"
        ref="slick"
        :options="slickOptions"
        @reInit="reInit"
        class="slider-for"
      >
        <div
          v-for="(photo, k) in contents.photos"
          :key="k"
        >
          <div
            class="image-annotate-canvas position-relative"
            :style="{ backgroundImage: 'url(' + photo.src + ')'}"
            ref="annotation"
          >
            <a :href="photo.src" target="_blank">Download</a>
            <div
              class="annotation-container"
              v-for="(item, key) in photo.annotations"
              :key="key"
            >
              <span
                :id="generateUniqueId(item)"
                class="tooltip-wrapper position-absolute"
                :style="{left: item.x * w + 'px', top: item.y * h + 'px'}"
              >{{key + 1}}</span>
              <b-popover
                :target="generateUniqueId(item)"
                placement="top"
                triggers="hover focus"
                :content="item.text"
              ></b-popover>
            </div>
          </div>
        </div>
      </component>
    </b-modal>
  </div>
</template>

<script>
  import '~/node_modules/slick-carousel/slick/slick.scss'
  import '~/node_modules/slick-carousel/slick/slick-theme.scss'
  import ResizeMixin from '@/mixins/ResizeMixin'

  export default {
    name: 'CarouselModal1',

    mixins: [ ResizeMixin ],

    components: {
      Slick: () => import('vue-slick')
    },

    props: {
      modalShow: {
        type: Boolean,
        default: () => false
      },
      contents: {
        type: Object,
        default: () => {}
      }
    },

    data () {
      return {
        modalVisibility: false,
        slickComp: '',
        slickOptions: {
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

    watch: {
      modalShow: function () {
        this.modalVisibility = this.modalShow
      }
    },

    methods: {
      hideModal () {
        this.$nextTick(function () {
          this.slickComp = ''
        })
        this.$emit('hide')
      },
      showModal () {
        this.$nextTick(function () {
          this.slickComp = 'Slick'
        })
      },
      reInit() {
        this.$nextTick(() => {
          this.$refs.slick.reSlick()
        })
      },
      generateUniqueId (val) {
        return val.text.replace(/\s/g, '-') + '-' + val.x
      }
    }
  }
</script>
<style lang="scss">
@import '~/assets/styles/_variables.scss';
.portfolio-modal {
  .modal-dialog {
    max-width: 100% !important;
  }
  .modal-content {
    background-color: transparent;
  }
  .image-annotate-canvas {
    background-size: cover;
    margin:0 15px;
    height: 616px;
    width: 980px;
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
    a {
      position: absolute;
      bottom: 12px;
      right: 15px;
      color: rgba(255,255,255,0.7);
    }
    @media only screen and (max-width: 1200px) {
      height: 450px;
      width: 768px;
    }
    @media only screen and (max-width: 768px) {
      height: 235px;
      width: 375px;
    }
    @media only screen and (max-width: 535px) {
      width: 340px;
    }
  }
  .modal-title {
    margin-bottom: 80px;
    p {
      color: $alur-primary-color;
    }
  }
  .slick-slide {
    opacity: .7;
  }
  .slick-current.slick-active {
    opacity: 1;
    .image-annotate-canvas {
      border: 4px solid $alur-primary-color;

      &:hover {
        .annotation-container {
          display: block !important;
        }
      }
    }
  }
  .slider-arrow {
    background-color: $alur-primary-color;
    color: $brand-primary;
  }
  .slick-dots {
    li {
      button:before {
        color: $alur-primary-color;
      }
    }
  }
}
</style>
