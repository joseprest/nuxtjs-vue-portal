<template>
  <div>
    <b-modal
      ref="modal"
      hide-header
      hide-footer
      v-model="modalVisibility"
      centered
      size="lg"
      @hide="hideModal"
      @show="showModal"
      @ok="$refs.slick.onSubmit()"
    >
      <component
        :is="slickComp"
        ref="slick"
        :options="options"
        @reInit="reInit"
      >
        <div
          v-for="(item, key) in images"
          :key="key"
          class="spot-wrap"
        >
          <b-img
            :src="item.src"
            class="responsive-img"
            style="max-height: 100%; margin-bottom: -10px;"
          />
        </div>
      </component>
    </b-modal>
  </div>
</template>

<script>
import '~/node_modules/slick-carousel/slick/slick.scss'
import '~/node_modules/slick-carousel/slick/slick-theme.scss'

export default {
  name: 'CarouselModal',
  components: {
    Slick: () => import('vue-slick')
  },
  props: {
    modalShow: {
      type: Boolean,
      default: () => false
    },
    images: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      modalVisibility: false,
      slickComp: '',
      options: {
        slidesToShow: 1,
        arrows: true,
        adaptiveHeight: true,
        centerMode: true,
        accessibility: true,
        centerPadding: 0,
        prevArrow: '<div class="slider-modal-arrow slider-modal-prev"></div>',
        nextArrow: '<div class="slider-modal-arrow slider-modal-next"></div>',
        responsive: [
          {
            breakpoint: 1009,
            settings: {
              arrows: false
            }
          }
        ]
      }
    }
  },
  watch: {
    modalShow: function () {
      this.modalVisibility= this.modalShow
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
        this.$refs.slick.reSlick();
      })
    }
  }
}
</script>
<style lang="scss">
@import '~/assets/styles/_variables.scss';
  .slider-modal-prev {
    left: -8%;
    &:before {
      content: '\003c';
    }
  }
  .slider-modal-next {
    right: -8%;
    &:before {
      content: '\003e';
    }
  }
  .slider-modal-arrow {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    color: $brand-primary;
    background: transparent;
    cursor: pointer;
    opacity: 1;
    z-index: 1;
    font-weight: 700;
    text-align: center;
    &:before {
      background-color: white;
      border-radius: 50%;
      transition: all .2s ease;
      display: block;
      width: 48px;
      height: 48px;
      line-height: 48px;
      font-size: 1.7rem;
      font-weight: 400;
    }
  }
</style>
