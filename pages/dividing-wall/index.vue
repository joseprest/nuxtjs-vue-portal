<template>
  <div>
    <sticky-header title="ALUR Dividing Wall" />
    <section class="section section-hero-dividing-walls">
      <div class="section-hero-wrap">
        <div class="section-hero-left-2">
          <div class="spot-title h1 fw-200 text-left">Define the boundaries and function <br class="d-none d-md-block d-lg-block d-xl-block" /> of your space, beautifully</div>
          <div class="spot-content">
            <div class="spot-desc fw-300 d-xs-block d-sm-block d-md-none d-lg-none text-left">
              Winner of&nbsp;the&nbsp;prestigious "Best of&nbsp;NeoCon" award, ALUR combines the<br class="d-none d-md-block d-lg-block d-xl-block" />simple elegance of&nbsp;glass with the&nbsp;precision of&nbsp;extruded aluminum.
            </div>
            <a
              class="hero-video-link d-flex align-items-center"
              @click="modalVisibility = true"
            >
              <div class="hero-video-icon mr-3">
                <b-img src="~assets/images/icons/play-button-blue.svg" />
              </div>
              <span class="fw-700">Watch video</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section
      class="section-dividing-features scroll-fade-in"
      v-scroll
    >
      <b-container>
        <div class="section-features-title h1 fw-300">
          The next generation of movable walls
        </div>
        <b-row>
          <slick-carousel :options="options">
            <template slot="content">
              <b-col class="spot-wrap d-flex align-items-center flex-column">
                <div class="section-features-list-item-img">
                  <b-img src="~assets/images/icons/glass-wall-icon-1.svg" />
                </div>
                <div class="section-features-list-item-title title-2">Function & flexibility
                  <p>Easy to assemble frames, off module design and integrated power, voice and data cabling provide greater flexibility & adaptability.</p>
                </div>
              </b-col>
              <b-col class="spot-wrap d-flex align-items-center flex-column">
                <div class="section-features-list-item-img">
                  <b-img src="~assets/images/icons/glass-wall-icon-2.svg" />
                </div>
                <div class="section-features-list-item-title title-2">Furniture integration
                  <p>Supports off-modular applications and fully integrates with most furniture system components.</p>
                </div>
              </b-col>
              <b-col class="spot-wrap d-flex align-items-center flex-column">
                <div class="section-features-list-item-img">
                  <b-img src="~assets/images/icons/glass-wall-icon-3.svg" />
                </div>
                <div class="section-features-list-item-title title-2">Awarded
                  <p>Winner of the prestigious NeoCon Award for the Best Movable Wall System.</p>
                </div>
              </b-col>
            </template>
          </slick-carousel>
        </b-row>
      </b-container>
    </section>
    <section
      class="section scroll-fade-in"
      v-scroll
    >
      <slick-carousel :options="slideOptions">
        <template slot="content">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="spot-wrap pl-2 pr-2 d-flex align-items-stretch"
          >
            <b-img
              :src="slide.src"
              class="img-fluid image"
            />
          </div>
        </template>
      </slick-carousel>
    </section>
    <section
      class="section section-walls-fit section-scroll-design"
    >
      <b-container>
        <b-row
          class="text-center fw-300 section-title scroll-fade-up"
          v-scroll.fadeup
          align-h="center"
        >
          The&nbsp;<span class="underline">perfect</span>&nbsp;fit
        </b-row>
        <b-row
          class="scroll-fade-in"
          v-scroll
        >
          <b-col
            cols="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="text-center"
          >
            <div class="sub-title">Designed for your office</div>
            <p>ALUR Dividing Wall is a componentized wall system that attaches directly to ALUR Glass Wall and fully supports components from most manufacturers.</p>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="text-center"
          >
            <div class="sub-title">The features you need</div>
            <p>Features easy to assemble frames, off module design and integrated power, voice and data cabling for greater flexibility in adapting to changes in layout and technology.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <features-list-glass-walls
      :featuresTitle="featuresTitle"
      :featuresList="featuresList"
      class="scroll-fade-in"
      v-scroll
    />
    <section class="section section-introducing-dividing">
      <b-container>
        <b-row
          class="dividing-row-1 scroll-fade-in"
          v-scroll
        >
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="5"
            xl="5"
            class="text-left"
          >
            <div class="title">The new standard of privacy and functionality.</div>
            <div class="content">
              The ALUR product suite is beautiful, quiet and environmentally sustainable. ALUR Dividing Wall offers exceptional sound privacy.
              <div class="action">
                <b-img src="~/assets/images/icons/ic-check-blue.svg" />
                <span>Exceptional performance</span>
              </div>
              <nuxt-link class="btn-default pt-2 pb-2" to="/acoustical">Learn more about acoustics</nuxt-link>
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="7"
            xl="7"
            class="image-wrapper"
          >
            <b-img
              src="~/assets/images/dividing-walls/leaflet-1.jpg"
              class="responsive-img"
              style="min-height: 280px"
            />
          </b-col>
        </b-row>
        <b-row
          class="dividing-row-2 scroll-fade-in"
          v-scroll
        >
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="7"
            xl="7"
            class="image-wrapper"
          >
            <b-img
              src="~/assets/images/dividing-walls/leaflet-2.jpg"
              class="responsive-img"
              style="min-height: 280px"
            />
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="5"
            xl="5"
            class="text-left"
          >
            <div class="title">Flexible and functional</div>
            <div class="content">
              Designed to be a flexible solution that fits beautifully into your space. Tiles are available in Thermofused Melamine, Fabric Wrapped, Marker Board, Tackable-Acoustical, and High Pressure Laminate options — and with integrated voice, power, data, ALUR is as practical as it is beautiful.
              <div class="action">
                <b-img src="~/assets/images/icons/ic_power-blue.svg"></b-img>
                <span>Integrated power solutions</span>
              </div>
              <nuxt-link class="btn-default pt-2 pb-2" to="/dividing-wall-features">Learn more about features</nuxt-link>
            </div>
          </b-col>
        </b-row>
        <b-row
          class="dividing-row-3 scroll-fade-in"
          v-scroll
        >
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="5"
            xl="5"
            class="text-left"
          >
            <div class="title">Integrates with hundreds <br class="d-none d-lg-block d-xl-block" />of furniture components.</div>
            <div class="content">
              ALUR Dividing Wall supports off-modular applications and fully integrates with most furniture manufacturers’ components.
              <div class="action">
                <b-img src="~/assets/images/icons/ic-flowerpot-blue.svg"></b-img>
                <span>Exceptional performance</span>
              </div>
              <nuxt-link class="btn-default pt-2 pb-2" to="/portfolio">See installation photos</nuxt-link>
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="7"
            xl="7"
            class="image-wrapper"
          >
            <b-img
              src="~/assets/images/dividing-walls/leaflet-3.jpg"
              class="responsive-img"
              style="min-height: 280px"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
      class="section-discover text-center scroll-fade-in"
      v-scroll
    >
      <b-container class="title">Discover ALUR Glass Wall</b-container>
      <installation-gallery />
    </section>
    <modal
      :modalShow="modalVisibility"
      videoName="Alur-video.mp4"
      autoplay="1"
      @hide="modalVisibility = false"
    />
  </div>
</template>

<script>
import StickyHeader from '~/components/common/StickyHeader.vue'
import ImageView from '~/components/Images/ImageView.vue'
import FeaturesListGlassWalls from '~/components/common/FeaturesListGlassWalls.vue'
import InstallationGallery from '~/components/common/InstallationGallery.vue'
import SlickCarousel from '~/components/Carousels/SlickCarousel.vue'
import Modal from '~/components/Modals/Modal.vue'

export default {
  components: {
    StickyHeader,
    ImageView,
    FeaturesListGlassWalls,
    InstallationGallery,
    SlickCarousel,
    Modal
  },
  data () {
    return {
      title: 'Dividing Glass Wall',
      modalVisibility: false,
      options: {
        slidesToShow: 3,
        infinite: true,
        accessibility: true,
        adaptiveHeight: true,
        arrows: true,
        edgeFriction: 0.30,
        swipe: true,
        centerMode: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              centerMode: true,
              dots: true,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              dots: true,
              slidesToShow: 1
            }
          }
        ]
      },
      slideOptions: {
        slidesToShow: 3,
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
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 1
            }
          }
        ]
      },
      slides: [
        {
          src: require('~/assets/images/dividing-walls/dividing-slider-1.jpg')
        },
        {
          src: require('~/assets/images/dividing-walls/dividing-slider-2.jpg')
        },
        {
          src: require('~/assets/images/dividing-walls/dividing-slider-3.jpg')
        },
        {
          src: require('~/assets/images/dividing-walls/dividing-slider-4.jpg')
        },
        {
          src: require('~/assets/images/dividing-walls/dividing-slider-5.jpg')
        },
        {
          src: require('~/assets/images/dividing-walls/dividing-slider-6.jpg')
        },
        {
          src: require('~/assets/images/dividing-walls/dividing-slider-7.jpg')
        },
        {
          src: require('~/assets/images/dividing-walls/dividing-slider-8.jpg')
        },
        {
          src: require('~/assets/images/dividing-walls/dividing-slider-9.jpg')
        }
      ],
      featuresTitle: 'Dividing wall quality features:',
      featuresList: [
        {
          svg: require('~/assets/images/icons/glass-feature-list/glass-feature-1.svg'),
          text: '3 - 1/2” Thick'
        },
        {
          svg: require('~/assets/images/icons/glass-feature-list/glass-feature-2.svg'),
          text: 'Vertical &\nHorizontal Tiles'
        },
        {
          svg: require('~/assets/images/icons/glass-feature-list/glass-feature-3.svg'),
          text: 'Tight Seams'
        },
        {
          svg: require('~/assets/images/icons/glass-feature-list/glass-feature-4.svg'),
          text: 'Anodized\nAluminum'
        },
        {
          svg: require('~/assets/images/icons/glass-feature-list/glass-feature-5.svg'),
          text: 'Glass Wall\nTransition'
        },
        {
          svg: require('~/assets/images/icons/glass-feature-list/glass-feature-6.svg'),
          text: 'Recessed Base\nand Top Track'
        },
        {
          svg: require('~/assets/images/icons/glass-feature-list/glass-feature-7.svg'),
          text: 'Modular Power,\nVoice & Data'
        },
        {
          svg: require('~/assets/images/icons/glass-feature-list/glass-feature-8.svg'),
          text: 'Furniture\nIntegration'
        },
        {
          svg: require('~/assets/images/icons/glass-feature-list/glass-feature-9.svg'),
          text: 'Exceptional\nSound Privacy'
        },
        {
          svg: require('~/assets/images/icons/glass-feature-list/glass-feature-10.svg'),
          text: '2-Week Lead\nTime Available'
        }
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
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
  .section {
    position: relative;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .section-hero-dividing-walls {
    background-image: url('~assets/images/dividing-walls/bg_prod_dividing_hero.jpg');
    min-height: 702px;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding-bottom: 80px;

    .section-hero-wrap {
      flex: auto;
      display: flex;
      justify-content: space-around;
      padding: 0 35px;

      .section-hero-left-2 {
        flex: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        color: $alur-primary-color;

        .spot-title {
          margin: 40px 0;
          line-height: 1.2;
        }
        .spot-desc {
          margin-bottom: 25px;
          font-size: 1.3rem;
          line-height: 1.5;
          letter-spacing: .9px;
        }
        span{
          font-size: 1.3rem;
        }
      }
    }
  }
  .section-dividing-features {
    text-align: center;
    padding: 120px 0;

    .section-features-title {
      padding-bottom:72px;
      color: $alur-dark-grey;

      .underline {
        border-bottom: 2px solid $brand-primary;
      }
      .row {
        .slick-slide {
          opacity: 1 !important;
        }
      }
    }
    .section-features-list-item-img {
      margin-bottom: 15px;
    }

    .section-features-list-item-title {
      font-size: 1.2rem;
      font-weight: 300;
      p {
        padding-top: 12px;
        font-size:0.9rem;
      }
    }
  }
  .section-discover {
    padding: 120px 0;
    .title {
      font-size: 2em;
      font-weight: 300;
    }
  }
  .section-walls-fit {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.54) 84%, #000000 100%), url('../../assets/images/dividing-walls/walls-fit.jpg') no-repeat;
    min-height: 600px;
    display: flex;
    align-items: flex-end;
    color: $alur-primary-color;
    padding-bottom: 60px;
    margin: 60px auto;
    .section-title {
      margin-bottom: 88px;
      line-height: 1.33;
      letter-spacing: 1px;
      font-size: 3rem;
      color: hsla(0,0%,100%,.75);
      .underline {
        border-bottom: 2px solid #fff;
      }
    }
    .row {
      .sub-title {
        margin-bottom: 16px;
        line-height: 1;
        letter-spacing: -.2px;
        font-size: 1.2rem;
      }
      p {
        font-size: 1rem;
        line-height: 2.27;
        letter-spacing: -.2px;
        opacity: .72;
      }
    }
  }
  .section-scroll-design {
    background-color: $alur-dark-grey;
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .section-introducing-dividing {
    margin: 80px auto;
    .row {
      position: relative;
      padding-top: 50px;
      padding-bottom: 50px;
      display: flex;
      align-items: center;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        display: block;
        width: 75%;
        height: 100%;
      }
      .text-left {
        max-width: 450px;
        padding-left: 80px;
        .title {
          font-size: 1.5rem;
          font-weight: 400;
          line-height: 1.42;
          color: $alur-dark-grey;
          margin-bottom: 18px;
        }
        .content {
          font-size: .9rem;
          font-weight: 300;
          line-height: 2.13;
          letter-spacing: -.2px;
          .btn-default{
            font-weight: 600 !important;
            &:hover, &:active, &:focus{
              cursor: pointer;
              background-color: $dark-blue;
            }
          }
          .action {
            display: block;
            margin-top: 10px;
            margin-bottom: 20px;
            font-weight: 400;
            img {
              margin-right: 13px;
              height: 24px;
            }
            span {
              color: $brand-primary;
            }
          }
        }
      }
      .image-wrapper {
        padding: 0 !important;
        img {
          min-height: 400px;
        }
      }
    }
    .dividing-row-1 {
      &:before {
        left: 0;
        background-color: rgba(152, 191, 225, 0.08);
      }
      .image-wrapper {
        margin-left: auto;
      }
    }
    .dividing-row-2 {
      margin: 80px -15px;
      &:before {
        right: 0;
        background-color: #f5faf6;
      }
      .text-left {
        padding-left: 15px;
      }
    }
    .dividing-row-3 {
      &:before {
        left: 0;
        background-color: #fffaf3;
      }
      .image-wrapper {
        margin-left: auto;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .container {
      max-width: calc(100% - 16px) !important;
    }
    .section-hero-dividing-walls {
      padding: 0;
      margin-bottom: 200px;
      background-position: center right;
      min-height: 360px;
      .section-hero-wrap {
        display: block;
        padding: 0;
        position: relative;
        .section-hero-left-2 {
          position: absolute;
          width: 100%;
          bottom: -195px;
          .spot-title {
            padding: 0 24px;
            margin: 19px 0;
          }
          .spot-content {
            background-color: $brand-primary;
            padding: 24px;
            width: 100%;
            .spot-desc {
              border-bottom: 1px solid rgba(255, 255, 255, 0.24);
              padding-bottom: 24px;
              margin: 0;
              font-size: 1rem;
            }
            .hero-video-link {
              padding-top: 24px;
            }
          }
        }
      }
    }
    .section-dividing-features {
      padding: 48px 0;
      .section-features-title{
        padding-bottom: 30px;
        width: 80%;
        margin:0 auto;
      }
      .section-features-list-item-title{
        color: $brand-primary;
        font-weight: 400;
        p{
          color: black;
          font-weight: 300;
        }
      }
    }
    .section-discover{
      padding: 50px 0;
      .title{
        font-size: 1.7rem;
      }
    }
    .section-walls-fit {
      display: block !important;
      margin: 48px auto;
      padding-top: 100px;
      padding-bottom: 18px;
      .section-title {
        margin-bottom: 50px;
        font-size: 1.7rem;
      }
      .row {
        .col-sm-12 {
          margin-bottom: 30px;
          .sub-title {
            font-size: 1rem;
          }
          p{
            font-size: 0.9rem;
            font-weight: 300;
          }
        }
      }
    }
    .section-scroll-design {
      background-color: #03050b;
      background-position: top;
      background-size: 150% 60%;
    }
    .section-introducing-dividing {
      margin-top: 48px;
      margin-bottom: 0;
      .container {
        max-width: 100% !important;
      }
      .dividing-row-2 {
        margin: 0 -15px;
      }
    }
  }
  @media only screen and (max-width: 1008px) {
    .section-introducing-dividing {
      .row {
        padding-top: 0;
        &:before {
          width: 100%;
        }
        .text-left {
          padding-left: 15px;
          .title {
            margin-bottom: 12px;
          }
          .content {
            .action {
              margin-bottom: 20px;
            }
          }
        }
        .image-wrapper {
          img {
            min-height: unset;
          }
        }
      }
      .dividing-row-1,
      .dividing-row-2,
      .dividing-row-3 {
        .text-left {
          order: 2;
          margin-top: 26px;
        }
      }
      .dividing-row-2 {
        margin: 0 -15px;
      }
    }
  }
</style>
