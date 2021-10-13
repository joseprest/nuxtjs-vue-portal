<template>
  <main id="main">
    <div ref="navSticky" class="sticky-top">
      <b-navbar class="justify-content-center nav-section py-0" v-b-scrollspy="120">
        <b-navbar-nav class="content-tabs">
          <li class="nav-link p-0">
            <a
              href="#section-featured"
              class="nav-link active p-0"
              v-smooth-scroll="{ offset: offsetScrollHeight }"
            >Featured</a>
          </li>
          <li class="nav-link p-0">
            <a
              href="#section-installations"
              class="nav-link p-0"
              v-smooth-scroll="{ offset: offsetScrollHeight }"
            >Installations</a>
          </li>
          <li class="nav-link p-0">
            <a
              href="#section-take-a-tour"
              class="nav-link p-0"
              v-smooth-scroll="{ offset: offsetScrollHeight }"
            >Take a Tour</a></li>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <section
      class="section-hero-portfolio"
    >
      <b-container>
        <b-row
          class="mb-4"
          align-h="center"
        >
          You’re in good company.
        </b-row>
        <b-row
          class="text-center spot-title fw-300"
          align-h="center"
        >
          We’ve helped the best organizations<br class="d-none d-lg-block d-xl-block">build the best offices.
        </b-row>
        <b-row v-if="tabletMode">
          <div
            class="clients-carousel"
            v-swiper:options="clientLogoOptions"
          >
            <div class="swiper-wrapper">
              <div class="clients-item swiper-slide d-flex align-items-center justify-content-center"
                   v-for="(slide, index) in clientLogos"
                   :key="index"
              >
                <b-img class="responsive-img" :src="slide.src"/>
              </div>
            </div>
          </div>
        </b-row>
        <b-row
          v-else
          class="mobile-view mb-4"
        >
          <b-col
            class="client-logo d-flex align-items-center justify-content-center mb-3"
            cols="6"
            v-for="(slide, index) in clientLogos"
            :key="index"
          >
            <b-img class="img-responsive" :src="slide.src"/>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
      class="section section-featured-portfolio position-relative"
      id="section-featured"
    >
      <b-container>
        <b-row
          class="h1 fw-300 text-center mb-4 spot-title"
          align-h="center"
        >
          You’ll find our products in offices<br class="d-none d-lg-block d-xl-block" />across the world.
        </b-row>
        <b-row
          class="text-center spot-subtitle"
          align-h="center"
        >
          Explore the galleries below to see how ALUR products have been used to<br class="d-none d-lg-block d-xl-block" />enhance offices of every shape and size.
        </b-row>
      </b-container>
      <slick-carousel :options="slideOptions">
        <template slot="content">
          <div
            v-for="(slide, index) in featuredData"
            :key="index"
            class="spot-wrap pl-2 pr-2 d-flex align-items-stretch"
          >
            <b-img
              :src="slide.src"
              class="responsive-img feature-img"
            />
          </div>
        </template>
      </slick-carousel>
    </section>
    <section class="section section-portfolio" id="section-installations">
      <b-container>
        <b-row
          class="h1 fw-300 spot-title"
          align-h="center"
        >Explore our installations</b-row>
        <div v-if="tabletMode">
          <b-row class="portfolio-filters">
            <div
              v-for="(filter, key) in filterOptions"
              :key="key"
            >
              <filter-drop-down
                :text="filter.name"
                :options="filter.options"
              />
            </div>
          </b-row>
          <b-row
            v-if="filteredData.length > 0"
            class="portfolio-tags"
          >
            <div
              v-for="(item, key) in filteredData"
              :key="key"
            >
              <div class="tags-item">
                <span>{{item.t}}</span>
                <i class="icon-close tags-item-close" @click="removeFilter(item)"></i>
              </div>
            </div>
          </b-row>
          <b-row class="portfolio-list">
            <b-col
              v-for="(item, key) in getInstallationsByPage(installations)"
              :key="key"
              cols="4"
              class="portfolio-card"
            >
              <div
                class="portfolio-card__img"
                @click="viewPortfolio(item)"
              >
                <b-img
                  :src="item.photos[0].src"
                  class="responsive-img"
                />
              </div>
              <div class="portfolio-card__content">
                <div class="portfolio-card__content-title mb-1">{{item.name}}</div>
                <div class="portfolio-card__content-location mb-1">{{item.location}}</div>
                <a class="portfolio-card__content-link mb-3" @click="viewPortfolio(item)">View Installation</a>
              </div>
            </b-col>
          </b-row>
          <b-row class="portfolio-footer">
            <a
              v-if="loadMore"
              class="btn btn-primary"
              @click="clickCounts = clickCounts + 1"
            >View More</a>
          </b-row>
        </div>
        <div v-else>
          <slick-carousel :options="slideMobileOptions" class="portfolio-mobile-list">
            <template slot="content">
              <div
                v-for="(item, key) in installations"
                :key="key"
                class="portfolio-card"
              >
                <div
                  class="portfolio-card__img"
                  @click="viewPortfolio(item)"
                >
                  <b-img
                    :src="item.photos[0].src"
                    class="responsive-img"
                  />
                </div>
                <div class="portfolio-card__content">
                  <div class="portfolio-card__content-title mb-1">{{item.name}}</div>
                  <div class="portfolio-card__content-location mb-1">{{item.location}}</div>
                  <a class="portfolio-card__content-link mb-3" @click="viewPortfolio(item)">View Installation</a>
                </div>
              </div>
            </template>
          </slick-carousel>
        </div>
      </b-container>
    </section>
    <section class="section section-portfolio-tour" id="section-take-a-tour">
      <b-container>
        <b-row
          class="h1 fw-300 spot-title"
          align-h="center"
        >Take a tour</b-row>
        <b-row
          class="video-bg position-relative"
        >
          <video
            class="section-video"
            autoplay="autoplay"
            loop="loop"
            muted="muted"
            poster="~/assets/images/3dTour-poster.jpg">
            <source src="~/assets/video/chicago.mp4" type="video/mp4"/>
          </video>
          <div class="text-center tour-wrapper">
            <b-container>
              <h3 class="tour-title">Tour our Chicago Showroom</h3>
            <a class="btn btn-secondary" href="https://my.matterport.com/show/?m=HYFgWo4mqsw&amp;brand=3" target="_blank">
              <span>Take a 3d tour</span>
            </a>
            </b-container>
          </div>
        </b-row>
        <b-row
          class="video-bg position-relative"
        >
          <video
            class="section-video"
            autoplay="autoplay"
            loop="loop"
            muted="muted"
            poster="~/assets/images/3dTour-poster.jpg">
            <source src="~/assets/video/nyc.mp4" type="video/mp4"/>
          </video>
          <div class="text-center tour-wrapper">
            <b-container>
              <h3 class="tour-title">Tour our NYC Showroom</h3>
            <a class="btn btn-secondary" href="https://my.matterport.com/show/?m=ugTJgaYk3Fs" target="_blank">
              <span>Take a 3d tour</span>
            </a>
            </b-container>
          </div>
        </b-row>
        <b-row
          class="video-bg position-relative"
        >
          <video
            class="section-video"
            autoplay="autoplay"
            loop="loop"
            muted="muted"
            poster="~/assets/images/3dTour-poster.jpg">
            <source src="~/assets/video/3dTour_Installation.mp4" type="video/mp4"/>
          </video>
          <div class="text-center tour-wrapper">
            <b-container>
              <h3 class="tour-title">Tour our Beaux-Arts Group Showroom</h3>
            <a class="btn btn-secondary" href="https://my.matterport.com/show/?m=RjaaPy5EAdi" target="_blank">
              <span>Take a 3d tour</span>
            </a>
            </b-container>
          </div>
        </b-row>
      </b-container>
    </section>
    <carousel-modal1
      :modalShow="modalVisibility"
      :contents="items"
      @hide="modalVisibility = false"
    />
  </main>
</template>

<script>
import SlickCarousel from '~/components/Carousels/SlickCarousel.vue'
import CarouselModal1 from '~/components/Modals/CarouselModal1.vue'
import FilterDropDown from '~/components/FilterDropDown.vue'
import { mapGetters } from 'vuex'
import ResizeMixin from '@/mixins/ResizeMixin'

import { get } from 'lodash'
  export default {
    components: {
      SlickCarousel,
      CarouselModal1,
      FilterDropDown
    },

    mixins: [ ResizeMixin ],

    data () {
      return {
        title: 'Install Portfolio',
        clientLogoOptions: {
          slidesPerView: '6'
        },
        modalVisibility: false,
        items: {},
        offsetScrollHeight: -100,
        clickCounts: 0,
        loadMore: false,
        slideOptions: {
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
        },
        slideMobileOptions: {
          slidesToShow: 1,
          infinite: true,
          accessibility: true,
          adaptiveHeight: true,
          dots: true,
          edgeFriction: 0.30,
          swipe: true,
          centerMode: true,
          variableWidth: true,
          customPaging: function(slick,index) {
            return `<a><span class="highlight">${index + 1}</span>&nbsp;of&nbsp${slick.slideCount}</a>`
          }
        },
        clientLogos: [
          {
            src:  require("~/assets/images/logos/white/etrade.svg")
          },
          {
            src:  require("~/assets/images/logos/white/esteeLauder.svg")
          },
          {
            src:  require("~/assets/images/logos/white/uber.svg")
          },
          {
            src:  require("~/assets/images/logos/white/dell.svg")
          },
          {
            src:  require("~/assets/images/logos/white/freddieMac.svg")
          },
          {
            src:  require("~/assets/images/logos/white/accenture.svg")
          },
        ]
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: '' }
        ]
      }
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
    computed: {
      ...mapGetters(['featuredData', 'filterOptions', 'filteredData', 'installations'])
    },


    mounted() {
      this.updateOffsetScrollHeight()
      window.onresize = () => {
        this.updateOffsetScrollHeight()
      }
    },

    async fetch ({ store }) {
      await store.dispatch('getInstallations')
    },

    methods: {
      handleScroll (event) {
        const navHeight = this.$parent.$parent.$children[0].$refs.desktopNav.clientHeight ||
          this.$parent.$parent.$children[0].$refs.mobileNav.clientHeight
        const ref = this.$refs.navSticky
        if (ref) {
          const scrollTop = window.scrollY
          if (scrollTop > navHeight) {
            ref.style.position = 'fixed'
          } else {
            ref.style.position = 'relative'
          }
        }
      },

      updateOffsetScrollHeight() {
        this.offsetScrollHeight = -(this.$refs.navSticky.offsetHeight + 100)
      },

      removeFilter (value) {
        this.$store.commit('removeFilterData', value)
      },

      viewPortfolio (item) {
        this.modalVisibility = true
        this.items = item
      },

      getInstallationsByPage (data) {
        const limits = (this.clickCounts + 1) * 9

        if (data.length <= limits) {
          this.loadMore = false
          return data
        } else {
          this.loadMore = true
          return data.slice(0, limits)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
.section {
  margin: 88px 0;
}
.nav-section {
  background-color: $brand-primary;
  min-height: 62px;
  width: 100%;
  top: 0;
  z-index: 2000;

  .navbar-nav {
    &.content-tabs {
      li a {
        display: flex;
        align-items: center;
        min-height: 62px;
      }
      li:not(:last-child) {
        margin-right: 42px;
      }
      li a {
        font-size: 1rem;
      }
    }

    .nav-item {
      margin-right: 42px;
      padding-left: 0;
      padding-right: 0;
      a.nav-link {
        padding: 0;
        color: $alur-primary-color;
        height: 18px;
      }
    }
    .nav-link {
      color: $alur-grey;
      position: relative;
      &:hover, &:focus {
        color: $alur-primary-color;
        background-color: transparent;
      }
      &.active {
        color: $alur-primary-color;
        &:after{
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          transition: background-color .3s ease;
          content: "";
          background-color: $alur-primary-color;
        }
        a {
          opacity: 1;
          color: $alur-primary-color;
        }
      }
    }
  }
}
.section-hero-portfolio {
  min-height: 540px;
  height: 1px;
  padding-top: 130px;
  padding-bottom: 110px;
  color: white;
  background-color: $night-grey;
  background-image: url('../../assets/images/hero-portfolio.jpg');

  .spot-title {
    font-size: 3rem;
    margin-bottom: 60px;
    line-height: 1.33;
    letter-spacing: .9px;
  }

  .clients-carousel {
    .clients-item {
      width: auto !important;
      margin-right: 45px;
      &:last-child {
        margin-right: 0px;
      }
    }
    .swiper-wrapper {
      -ms-flex-pack: center;
      justify-content: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }
}
.section-featured-portfolio {
  background-image: radial-gradient(circle at 50% 0,hsla(0,0%,100%,.8),hsla(0,0%,100%,0)),linear-gradient(180deg,#f3f8fc,#f3f8fc 61%,#fff);
  margin-top: 0;
  padding-top: 88px;

  .container {
    padding-bottom: 70px;
    .spot-title {
      line-height: 1.4;
      color: $brand-primary;
    }
    .spot-subtitle {
      font-weight: 300;
      line-height: 1.88;
      letter-spacing: -.3px;
    }
  }
  .feature-img {
    max-height: 480px;
    max-width: 763px;
  }
}

.section-portfolio {
  background-color: $alur-primary-color1;
  .spot-title {
    padding-top: 114px;
    margin-bottom: 50px;
  }
  .portfolio-filters {
    margin-bottom: 24px;
    padding-bottom: 28px;
    border-bottom: 1px solid $alur-grey;
  }
  .portfolio-tags {
    margin-bottom: 24px;
    padding-bottom: 14px;
    border-bottom: 1px solid $alur-grey;

    .tags-item {
      display: -ms-inline-flexbox;
      display: inline-flex;
      -ms-flex-align: baseline;
      align-items: baseline;
      margin-right: 10px;
      margin-bottom: 10px;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.225;
      letter-spacing: .4px;
      border-radius: 6px;
      box-shadow: 0 1px 8px 0 rgba(0,0,0,.17), 0 1px 1px 0 rgba(0,0,0,.16);
      background-color: hsla(0,0%,100%,.92);
      color: $brand-primary;
      padding: 15px 15px 15px 24px;
      .tags-item-close {
        border: none;
        margin-left: 8px;
        cursor: pointer;
        opacity: .5;
        transition: opacity .3s ease;
      }
    }
  }
  .portfolio-list {
    .portfolio-card {
      margin-bottom: 16px;
      padding-left: 8px;
      padding-right: 8px;
      overflow: hidden;
      &__img {
        position: relative;
        padding-bottom: 100%;
        background-color: $alur-grey;
        transition: opacity .3s ease;
        img {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
        }
      }
      &:hover {
        .portfolio-card__img {
          opacity: .8;
        }
      }
      &__content {
        padding: 24px 0;
        &-title {
          font-size: 1.25rem;
          line-height: 1;
          letter-spacing: 1px;
        }
        &-location {
          font-size: .936rem;
          font-weight: 300;
          line-height: 1.6;
          color: $alur-light-grey;
        }
        &-link {
          font-size: .936rem;
          line-height: 1.6;
          letter-spacing: -.2px;
          color: $brand-primary;
        }
      }
    }
  }
  .portfolio-mobile-list {
    padding-bottom: 48px;
    .portfolio-card {
      margin-bottom: 16px;
      padding-left: 8px;
      padding-right: 8px;
      overflow: hidden;
      &__img {
        max-width: 300px;
      }
      &__content {
        margin: 24px 0;
        &-title {
          font-size: 1.25rem;
          line-height: 1;
          letter-spacing: 1px;
          max-width: 300px;
        }
        &-location {
          font-size: .936rem;
          font-weight: 300;
          line-height: 1.6;
          color: $alur-light-grey;
        }
        &-link {
          font-size: .936rem;
          line-height: 1.6;
          letter-spacing: -.2px;
          color: $brand-primary;
        }
      }
    }
  }
  .portfolio-footer {
    padding: 40px 0 70px;
    a {
      margin: 0 auto;
    }
  }
}

.section-portfolio-tour {
  .video-bg {
    margin-top: 80px;
    video {
      width: 100%;
      object-fit: fill;
      max-height: 670px;
    }
    .tour-wrapper {
      position: absolute;
      bottom: 30px;
      left: 0;
      width: 100%;
      padding-top: 70px;
      padding-bottom: 55px;
      .tour-title {
        color: $alur-primary-color;
        font-size: 2.5rem;
        margin-bottom: 30px;
        font-weight: 200;
        line-height: 1.16;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .section {
    margin: 48px 0;
  }
  .container {
    max-width: calc(100% - 40px) !important;
  }
  .section-hero-portfolio {
    .spot-title {
      font-size: 2rem;
    }
  }
  .section-featured-portfolio {
    margin-top: 0;
    padding-top: 48px;
    .feature-img {
      max-height: 220px;
      max-width: 311px;
    }
  }
  .section-portfolio-tour {
    .container {
      max-width: 100% !important;
    }
    .video-bg {
      margin-top: 48px;
      video {
        width: 100%;
        object-fit: fill;
        max-height: 380px;
      }
      .tour-wrapper {
        bottom: -30px;
        width: 100%;
        padding-top: 70px;
        .tour-title {
          color: $alur-primary-color;
          font-size: 1.5rem;
          margin-bottom: 20px;
          font-weight: 200;
          line-height: 1.16;
        }
      }
    }
  }
  .section-portfolio {
   .container {
     max-width: 100% !important;
     margin-left: 0;
     margin-right: 0;
     padding: 0;
   }
  }
}

@media only screen and (max-width: 575px) {
  .nav-section {
    .navbar-nav {
      &.content-tabs {
        li:not(:last-child) {
          margin-right: 27px;
        }
      }
    }
  }
  .section-hero-portfolio {
    padding-top: 80px;
  }
  .section-portfolio-tour {
    .container {
      max-width: 100% !important;
    }
    .video-bg {
      video {
        max-height: 203px;
      }
      .tour-wrapper {
        bottom: -30px;
        width: 100%;
        padding-top: 70px;
        .tour-title {
          color: $alur-primary-color;
          font-size: 1.5rem;
          margin-bottom: 20px;
          font-weight: 200;
          line-height: 1.16;
        }
      }
    }
  }
}
</style>
<style lang="scss">
@import '~/assets/styles/_variables.scss';
.portfolio-mobile-list {
  .slick-track {
    .slick-slide {
      min-height: 354px;
    }
  }
  .slick-dots {
    li {
      width: auto;
      display: none;
    }
    li.slick-active {
      display: block;
      margin: 0 auto !important;
      .highlight {
        color: $brand-primary;
        font-weight: bold;
      }
    }
  }
}
</style>
