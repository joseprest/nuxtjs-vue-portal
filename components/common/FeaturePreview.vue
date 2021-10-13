<template>
  <div>
    <component
      :is="slickComp"
      ref="slick"
      :options="slickForOptions"
      @reInit="reInit"
      class="slider-for gallery-top"
    >
      <div
        v-for="(item, k) in contents"
        :key="k"
      >
        <div class="position-relative">
          <b-img
            src="~assets/images/duo/slide1-main.jpg"
            class="responsive-img mb-4"
            style="min-height: 280px"
          />
          <div
            class="position-absolute"
            :style="item.style"
          >
            <b-img src="~/assets/icons/Oval.svg" />
          </div>
        </div>
      </div>
    </component>
    <component
      :is="slickComp"
      ref="slick"
      :options="slickNavOptions"
      @reInit="reInit"
      class="slider-nav gallery-thumbs"
    >
      <div
        v-for="(item, key) in contents"
        :key="key"
      >
        <div class="content">
          <div class="slide-info-content">
            <div class="slide-info-title">{{item.desc}}</div>
            <div class="slide-info-text">{{item.text}}</div>
          </div>
          <div class="slide-info-img">
            <b-img
              :src="item.src"
              class="responsive-img"
              style="min-width: 103px;"
            />
          </div>
        </div>
      </div>
    </component>
  </div>
</template>

<script>
  import '~/node_modules/slick-carousel/slick/slick.scss'
  import '~/node_modules/slick-carousel/slick/slick-theme.scss'

  export default {
    name: 'CarouselModal1',
    components: {
      Slick: () => import('vue-slick')
    },
    props: {
      contents: {
        type: Array,
        default: () => []
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
          arrows: false,
          asNavFor: '.slider-nav'
        },
        slickNavOptions: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          variableWidth: true,
          asNavFor: '.slider-for'
        }
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.slickComp = 'Slick'
      })
    },
    methods: {
      reInit() {
        this.$nextTick(() => {
          this.$refs.slick.reSlick()
        })
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '~/assets/styles/_variables.scss';
  .gallery-thumbs {
    .content {
      display: flex;
      flex-direction: row;
      max-width: 300px;
      min-height: 100px;
      background-color: $alur-primary-color;
      border-radius: 4px;
      margin: 0 10px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0 1px 4px 0 rgba(0,0,0,.016);
      margin-bottom: 20px;
      .slide-info-content {
        padding: 10px;
        .slide-info-title {
          font-weight: 600;
        }
        .slide-info-text {
          font-size: 0.9rem;
          opacity: .7;
        }
      }
      .slide-info-img {
        img {
          border-radius: 4px;
        }
      }
    }
  }
</style>
