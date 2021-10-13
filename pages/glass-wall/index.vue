<template>
  <div>
    <sticky-header title="ALUR Glass Wall" />
    <section class="section section-hero-glass-walls">
      <div class="section-hero-wrap">
        <div class="section-hero-left-2">
          <div class="spot-title h1 fw-200">Less is more.</div>
          <div class="spot-content">
            <div class="spot-desc fw-300 text-left">
              Winner of&nbsp;the&nbsp;prestigious "Best of&nbsp;NeoCon" award, ALUR combines the<br>simple elegance of&nbsp;glass with the&nbsp;precision of&nbsp;extruded aluminum.
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
      class="section-duo-features scroll-fade-in"
      v-scroll
    >
      <b-container>
        <div class="section-features-title h1 fw-300">
          A wall system that’s truly <span class="underline">alluring</span>
        </div>
        <b-row>
          <slick-carousel :options="option1">
            <template slot="content">
              <b-col class="spot-wrap d-flex align-items-center flex-column">
                <div class="section-features-list-item-img">
                  <b-img src="~assets/images/icons/glass-wall-icon-1.svg" />
                </div>
                <div class="section-features-list-item-title title-2">Minimalist Design
                  <p>Low-profile channels with minimal framing and no vertical posts or mullions create a lighter scale, streamlined appearance.</p>
                </div>
              </b-col>
              <b-col class="spot-wrap d-flex align-items-center flex-column">
                <div class="section-features-list-item-img">
                  <b-img src="~assets/images/icons/glass-wall-icon-2.svg" />
                </div>
                <div class="section-features-list-item-title title-2">Quality Details
                  <p>Our frameless 1/2” thick glass and polycarbonate capture joints provide improved superior sound performance and reduced deflection.</p>
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
    <section class="section-duo-leaflet bg-lightblue">
      <b-container>
        <b-row
          v-scroll
          class="scroll-fade-in"
        >
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="7"
            xl="7"
            class="section-div-1"
          >
            <div class="section-content-img">
              <image-view
                class="img-responsive"
                name="leaflet-1"
                ext="jpg"
              />
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="5"
            xl="5"
            class="align-self-center mt-3 section-div-2"
          >
            <div class="section-subtitle">Form and function — <br>perfected</div>
            <div class="section-content">
              The ALUR Glass Wall system features ½" tempered glass, polycarbonate “dry joints”, minimal top and bottom channels, and beautify designed hardware, including full height sliding glass door mechanisms that are fully integrated into the top frame of this movable wall system. Our systems are designed for superior rigidity and sound attenuation. Glass edges are flat polished and chamfered to a precise angle forming a virtually seamless fit when combined with the dry joint.
              <div class="section-content-link">
                <b-img src="~assets/images/icons/ic-frameless-blue.svg" />
                <span>Frameless glass system</span>
              </div>
              <a class="btn btn-primary" href="/glass-wall-features">Learn about features</a>
            </div>
          </b-col>
        </b-row>
        <b-row
          class="subsection-2 scroll-fade-in"
          v-scroll
        >
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="5"
            xl="5"
            class="align-self-center mt-3 section-div-2"
          >
            <div class="section-subtitle">A perfect fit. Everytime.</div>
            <div class="section-content">
              ALUR Glass Wall dry joints are fabricated from high quality polycarbonate resin that is 93% clear and will not shrink or fade when exposed to UV. The unique tongue and grove design provides a secure glass-to-glass connection and self corrects the natural tendency of glass to bow, especially in larger pieces for a perfect fit every time. The connection forms a perfect seal preventing any sound leakage through the glass.
              <div class="section-content-link">
                <b-img src="~assets/images/icons/ic-joints-blue.svg" />
                <span>Polycarbonate joints</span>
              </div>
              <a class="btn btn-primary" href="/glass-wall-features">Learn more</a>
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="7"
            xl="7"
            order="1"
            order-sm="1"
            order-md="1"
            class="section-div-4"
          >
            <div class="section-content-img-wrapper">
              <div class="section-content-img">
                <image-view
                  class="img-responsive ml-auto"
                  name="leaflet-2"
                  ext="jpg"
                />
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row
          class="scroll-fade-in"
          v-scroll
        >
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="7"
            xl="7"
            class="section-div-1"
          >
            <div class="section-content-img">
              <image-view
                class="img-responsive"
                name="leaflet-3"
                ext="jpg"
              />
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="5"
            xl="5"
            class="align-self-center
            mt-3"
          >
            <div class="section-subtitle">Simply beautiful.</div>
            <div class="section-content">
              Combined with the discreet glass-to-glass joints and no vertical posts, the ALUR Glass Wall low profile channels create the stunning impression of a vast expanse of unsupported glass. This movable wall system with minimal framing also creates a more streamlined and elegant appearance compared to other bulkier unitized wall systems. The aluminum is bead blasted to prevent fingerprints and for a scratch resistant finish.
              <div class="section-content-link">
                <b-img src="~assets/images/icons/ic-design-blue.svg" />
                <span>Elegant design</span>
              </div>
              <a class="btn btn-primary" href="/why-alur">Learn about benefits</a>
            </div>
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
    <section
      class="section-spot1 d-xs-block d-sm-block d-md-none d-lg-none scroll-fade-in"
      v-scroll
    >
      <b-container class="row h1 fw-300 mx-auto section-title d-flex align-items-center justify-content-center">
        <b-row>vivamus alur ultricie</b-row>
      </b-container>
    </section>
    <section
      class="section-discover text-center scroll-fade-in"
      v-scroll
    >
      <b-container class="title">Discover ALUR Glass Wall</b-container>
      <installation-gallery />
    </section>
    <section class="section-alur-spot1-video mt-4 d-none d-md-block d-lg-block d-xl-block">
      <video
        autoplay
        loop
        muted
      >
        <source src="~assets/video/vid_alurHallwayWalk.mp4">
      </video>
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
      title: 'ALUR Glass Wall',
      modalVisibility: false,
      slides: [
        {
          src: require('~/assets/images/alur/alur-slider-1.jpg')
        },
        {
          src: require('~/assets/images/alur/alur-slider-2.jpg')
        },
        {
          src: require('~/assets/images/alur/alur-slider-3.jpg')
        },
        {
          src: require('~/assets/images/alur/alur-slider-4.jpg')
        },
        {
          src: require('~/assets/images/alur/alur-slider-5.jpg')
        },
        {
          src: require('~/assets/images/alur/alur-slider-6.jpg')
        },
        {
          src: require('~/assets/images/alur/alur-slider-7.jpg')
        },
        {
          src: require('~/assets/images/alur/alur-slider-8.jpg')
        },
        {
          src: require('~/assets/images/alur/alur-slider-9.jpg')
        },
        {
          src: require('~/assets/images/alur/alur-slider-10.jpg')
        }
      ],
      featuresTitle: 'ALUR Glass Wall Quality Features:',
      featuresList: [
        {
          svg: require('~/assets/images/icons/ic-frameless-blue.svg'),
          text: 'Frameless Glass\nSystem'
        },
        {
          svg: require('~/assets/images/icons/ic-half-thick-blue.svg'),
          text: '½" Thick\nGlass'
        },
        {
          svg: require('~/assets/images/icons/ic-joints-blue.svg'),
          text: 'Discreet Glass-to-\nGlass Joint'
        },
        {
          svg: require('~/assets/images/icons/ic-sound-privacy-primary.svg'),
          text: 'Minimal\nFraming'
        },
        {
          svg: require('~/assets/images/icons/ic-10-ft-blue.svg'),
          text: 'Up to 10’\nHigh'
        },
        {
          svg: require('~/assets/images/icons/ic-a-aluminum-blue.svg'),
          text: 'Anodized\nAluminum'
        },
        {
          svg: require('~/assets/images/icons/ic-scratch-resist-blue.svg'),
          text: 'Scratch Resistant\nFinish'
        },
        {
          svg: require('~/assets/images/icons/ic-seismic-approved-primary.svg'),
          text: 'Seismic\nApproved'
        },
        {
          svg: require('~/assets/images/icons/ic-tax-blue.svg'),
          text: 'Accelerated\nTax Depreciation'
        },
        {
          svg: require('~/assets/images/icons/ic-lead-times-blue.svg'),
          text: 'Expedited Lead\nTimes Available'
        }
      ],
      option1: {
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
      }
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

main {
  position: relative;
}
.section {
  position: relative;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.section-hero-glass-walls {
  background-image: url('~assets/images/bg_prod_glass_hero.jpg');
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
      .hero-video-link {
        &:hover {
          opacity: .7;
        }
      }
      span{
        font-size: 1.3rem;
      }
    }
  }
}
.section-duo-features {
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
    p {
      padding-top: 12px;
      font-size:0.9rem;
    }
  }
}
.section-duo-leaflet {
  margin: 88px 0;
  padding: 120px 0;
  .row:nth-child(2) {
    margin: 104px 0;
  }
  .row {
    .section-div-1 {
      img {
          width: 100%;
        }
    }
    .section-div-4 {
      .section-content-img-wrapper {
        padding-top: 40px;
        padding-bottom: 40px;
        padding-left: 70px;
      }
      .section-content-img {
        position: relative;
        top: -40px;
        left: -70px;
        box-shadow: 70px 80px 0 0 $alur-grey-color1;
        img {
          width: 100%;
        }
      }
    }
    .section-subtitle {
      margin-bottom: 24px;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.42;
      color: $brand-primary;
    }
    .section-content {
      font-size: 0.9rem;
      font-weight: 300;
      line-height: 2.13;
      letter-spacing: -.2px;
      .section-content-link {
        display: block;
        margin-top: 15px;
        margin-bottom: 32px;
        font-weight: 400;
        img {
          margin-right: 13px;
          height: 24px;
        }
        span{
          color: $brand-primary;
        }
      }
      .btn-primary{
        background-color: $brand-primary !important;
        border: none;
        min-width: 40%;
        font-weight: 600;
      }
    }
  }
}
.section-spot1 {
  background-image: url('../../assets/images/vivamus@2x.jpg');
  background-size: cover;
  .section-title {
    width: 100%;
    min-height: 264px;
    &:before,
    &:after {
      display: table;
      content: " ";
    }
    .row {
      text-transform: uppercase;
      color: white;
      line-height: 34px;
      letter-spacing: 6px;
      text-align: center;
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
.section-alur-spot1-video {
  position: relative;
  clip-path: inset(0px);
  width: 100%;
  height: 515px;
  video {
    object-fit: cover;
    background-color: $alur-dark-grey;
    background-position: center bottom;
    -webkit-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
}
@media only screen and (max-width: 768px) {
  .container {
     max-width: calc(100% - 16px) !important;
   }
  .section-hero-glass-walls {
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
            .hero-video-icon {
              background-image: url('../../assets/images/glass-wall/matterport-thumbnail.jpg');
              display: flex;
              justify-content: center;
              align-items: center;
              min-width: 118px;
              min-height: 72px;
              border-radius: 4px;
            }
            &:hover {
              opacity: .7;
            }
          }
        }
      }
    }
  }
  .section-features-list-item-title {
    color:$brand-primary;
    p {
      color: $alur-dark-grey;
    }
  }
  .section-duo-leaflet {
    margin: 48px 0 0 0 ;
    padding: 48px 0;
    .row:nth-child(2) {
      margin: 53px 0;
    }
    .row {
      .section-div-4 {
        .section-content-img-wrapper {
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 20px;
        }

        .section-content-img {
          position: relative;
          top: -20px;
          left: -36px;
          box-shadow: 30px 30px 0 0 $alur-grey-color1;
        }
      }
    }
  }
  .section-duo-features {
    padding: 48px 0;
    .section-features-title{
      padding-bottom: 30px;
      width: 80%;
      margin:0 auto;
    }
  }
  .section-discover{
    padding: 50px 0;
    .title{
      font-size: 1.7rem;
    }
  }
  .section-alur-spot1-video{
    height: 264px;
  }
}
@media only screen and (max-width: 1008px) {
  .section-duo-leaflet {
    .subsection-2 {
      .section-div-2 {
        order: 2;
      }
      .section-div-4 {
        order: 1
      }
    }
  }

}
.slick-slide {
  opacity: 1 !important;
}
</style>
