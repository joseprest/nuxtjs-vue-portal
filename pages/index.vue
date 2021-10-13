<template>
  <div>
    <section class="section section-hero-index mb-7">
      <b-container>
        <b-img
          src="~/assets/images/icons/alur-logo-white.svg"
          class="d-none d-xs-block d-sm-block d-md-none d-lg-none"
        />
        <div class="spot-title h1-lg mb-3">
          <strong>Together</strong>, we can build the <br>workplace of the future
        </div>
        <div class="spot-link">
          <nuxt-link to="/get-started" class="btn btn-secondary">
            Start a Project
          </nuxt-link>
        </div>
      </b-container>
    </section>
    <section class="section-mobile-company d-none d-xs-block d-sm-block d-md-none d-lg-none">
      <span>you're in good company</span>
      <div class="logo-wrapper">
        <b-img src="~/assets/images/company-logo/e-trader.svg" />
        <b-img src="~/assets/images/company-logo/accenture.svg" /></div>
      <div class="logo-wrapper">
        <b-img src="~/assets/images/company-logo/lauder.svg" />
        <b-img src="~/assets/images/company-logo/uber.svg" /></div>
      <div class="logo-wrapper">
        <b-img src="~/assets/images/company-logo/dell.svg" />
        <b-img src="~/assets/images/company-logo/freddie.svg" /></div>
    </section>
    <section class="section section-introducing-duo mb-7 d-none d-lg-block d-xl-block">
      <b-container>
        <b-row>
          <b-col
            cols="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <div class="section-wrap text-center">
              <b-img src="~/assets/images/duo-wall-logo-spot.svg"></b-img>
              <div class="section-title fw-300">Introducing Duo</div>
              <div class="section-subtitle fw-300">A double glazed solution by ALUR</div>
              <div class="section-desc fw-300">
                The next generation in frameless glass walls with enhanced aesthetics, superior sound control and luxury features.
              </div>
              <nuxt-link class="btn btn-md btn-success pt-2 pb-2" to="/duo-glass-wall">Learn more</nuxt-link>
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <image-view
              name="introducing-duo"
              ext="jpg"
              class="img-fluid"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section section-introducing-mobile-duo mb-7 d-none d-xs-block d-sm-block d-md-block d-lg-none">
      <div class="container container-fluid">
        <div class="row">
          <div class="section-wrap text-center">
            <b-img src="~/assets/images/duo-wall-logo-spot.svg"></b-img>
            <div class="section-subtitle">A double glazed solution by ALUR</div>
            <image-view
              name="introducing-duo"
              ext="jpg"
              class="img-fluid"
            />
            <div class="section-title">Introducing Duo</div>
            <div class="section-desc">
              The next generation in frameless glass walls with enhanced aesthetics, superior sound control and luxury features.
            </div>
            <nuxt-link class="btn btn-md btn-success pt-2 pb-2" to="/duo-glass-wall">Learn more</nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-home-cards">
      <div class="container container-fluid">
        <div class="section-title">
          See what ALUR can do for you
        </div>
        <div class="row">
          <b-card
            v-for="(card, i) in glassWallCards"
            :key="i"
            class="col-xl-4 col-md-12 col-sm-12 mb-7 d-flex flex-auto"
            :title="card.cardTitle"
            :img-src="card.cardSrc"
            img-alt="Image"
            overlay
            tag="article"
          >
            <b-card-text>
              {{card.cardText}}
            </b-card-text>
            <b-button
              class="mb-3 fw-700"
              :href="card.cardAction.url"
            >
              {{card.cardAction.name}}
            </b-button>
          </b-card>
        </div>
      </div>
    </section>
    <section class="section section-spot3 mb-7">
      <div class="container container-fluid">
        <div class="spot-subtitle">
          Our Mission
        </div>
        <div class="spot-title">
          We believe offices should be <span>beautiful</span>, <br><span>modern</span> and <span>sustainable</span>.
        </div>
        <nuxt-link class="btn btn-md btn-default" to="/why-alur">Learn how we’re different</nuxt-link>
      </div>
    </section>
    <section class="section section-home-care">
      <div class="container container-fluid">
        <div class="title">We care about you. Your business. The planet.</div>
        <b-row class="section-features-list mx-auto">
          <slick-carousel :options="option1">
            <template slot="content">
              <div
                v-for="(card, i) in cards"
                :key="i"
                class="spot-wrap px-4 d-flex align-items-stretch"
              >
                <b-card
                  class="d-flex flex-auto"
                  :img-src="card.cardSrc"
                >
                  <b-card-text>
                    <pre>{{card.cardText}}</pre>
                  </b-card-text>
                </b-card>
              </div>
            </template>
          </slick-carousel>
        </b-row>
      </div>
    </section>
    <section class="section section-spot4">
      <slick-carousel :options="cardOptions">
        <template slot="content">
          <div
            v-for="(feature, key) in featuredInstallations"
            :key="key"
            class="spot-wrap pr-4 d-flex align-items-stretch"
          >
            <div class="spot-image">
              <img
                class="img-responsive"
                :src="feature.photo._downloadURL"
                style="opacity: 1;"
              />
            </div>
            <div class="spot-info px-4 pt-4">
              <div class="spot-label mb-2">{{ feature.isNew ? 'New' : '' }}</div>
              <div class="h3 spot-title mb-3">{{feature.installationName}}</div>
              <div class="spot-text mb-5">{{feature.featureBlurb||''}}</div>
            </div>
          </div>
        </template>
      </slick-carousel>
    </section>
  </div>
</template>

<script>
import ImageView from '~/components/Images/ImageView.vue'
import { mapGetters, mapActions } from 'vuex'
import SlickCarousel from '~/components/Carousels/SlickCarousel.vue'

export default {
  data () {
    return {
      title: 'ALUR Glass and Modular Dividing Wall',
      cards: [
        {
          cardSrc: require('~/assets/images/calendar.svg'),
          cardText: 'Accelerated Tax\nDepreciation'
        },
        {
          cardSrc: require('~/assets/images/icons/ic-fast-shipping-blue.svg'),
          cardText: 'Fast Shipping'
        },
        {
          cardSrc: require('~/assets/images/icons/ic-leed-blue.svg'),
          cardText: 'Qualifies for LEED'
        },
        {
          cardSrc: require('~/assets/images/icons/ic-warranty-blue.svg'),
          cardText: 'Lifetime Warranty'
        }
      ],
      glassWallCards: [
        {
          cardTitle: 'DUO Glass Walls',
          cardSrc: require('~/assets/images/card-duo-framing-bg.jpg'),
          cardText: 'Our award winning double glazed wall system with enhanced aesthetics, superior sound control and luxury features.',
          cardAction: {
            url: '/duo-glass-wall/',
            name: 'The Duo System'
          }
        },
        {
          cardTitle: 'ALUR Glass Walls',
          cardSrc: require('~/assets/images/card-alur-framing-bg.jpg'),
          cardText: 'Our award winning single glazed wall system transforms what was hidden into an inspiration of form and function.',
          cardAction: {
            url: '/glass-wall/',
            name: 'The ALUR System'
          }
        },
        {
          cardTitle: 'Dividing Walls',
          cardSrc: require('~/assets/images/card-div-walls-bg.jpg'),
          cardText: 'Perfectly integrated, the solid dividing wall ensures your privacy — beautifully.',
          cardAction: {
            url: '/dividing-wall/',
            name: 'Dividing Wall'
          }
        }
      ],
      option1: {
        slidesToShow: 4,
        infinite: true,
        accessibility: true,
        adaptiveHeight: false,
        arrows: false,
        edgeFriction: 0.30,
        swipe: true,
        centerMode: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerMode: true,
              dots: true,
              slidesToShow: 3
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
      cardOptions: {
        slidesToShow: 3,
        infinite: true,
        accessibility: true,
        adaptiveHeight: false,
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
              dots: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0',
              dots: true,
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
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },

  components: {
    ImageView,
    SlickCarousel
  },

  computed: {
    ...mapGetters(['featuredInstallations'])
  },

  async fetch ({ store }) {
    await store.dispatch('getFeaturedInstallations')
  },

  mounted () {
    this.getFeaturedInstallations()
  },

  methods: {
    ...mapActions({
      getFeaturedInstallations: 'getFeaturedInstallations'
    })
  }
}
</script>

<style lang='scss' scoped>
@import '~/assets/styles/_variables.scss';

.section {
  text-align: center;
}

.section-hero-index {
  display: flex;
  padding-top: 445px;
  align-items: center;
  color: $alur-primary-color;
  background: url('../assets/images/hero-home.jpg') no-repeat center center;
  background-size: cover;
  height: calc(100vh - 150px);
  min-height: 700px;
  max-height: 100vw;

  .container {
    text-align: left;
    .spot-title {
      letter-spacing: -.9px;
    }

    .spot-link {
      margin-bottom: 88px;
      a {
        padding: 10px 0;
        min-width: 240px;
        font-weight: 700;
      }
    }
  }
}

.section-mobile-company {
  text-align: center;
  width: 70%;
  margin: 58px auto;

  span {
    text-transform: uppercase;
    color: $dark-grey1;
  }
  .logo-wrapper {
    display: flex;
    justify-content: center;
    padding: 20px;
    align-items: center;
    img{
      align-items: center;
    }

    img:first-child {
      margin-right: 15%;
    }
  }
}

.section-introducing-duo {
  .container {
    position: relative;
    padding: 50px 0;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 75%;
      height: 100%;
      background-color: $alur-grey-color;
    }

    .section-wrap {
      max-width: 435px;
      margin: 0 auto;
      .section-title {
        margin: 20px;
        color: $alur-green;
        font-size: 3rem;
      }
      .section-subtitle {
        margin-bottom: 15px;
        font-size: 1.5rem;
        line-height: 1;
        letter-spacing: -.2px;
      }
      .section-desc {
        margin-bottom: 40px;
        line-height: 1.76;
        letter-spacing: -.3px;
        font-size: 1.1rem;
        color: hsla(0, 0, 8%, .75);
      }
      a {
        background-color: $alur-green;
        outline: none;
        min-width: 210px;
        padding: 15px 0 !important;
      }
    }
  }
}

.section-introducing-mobile-duo {
  background-color: $alur-grey-color;
  .container {
    max-width: calc(100% - 40px) !important;
    .section-wrap {
      padding-top: 40px;
      padding-bottom: 80px;
      margin:0 auto;
      .section-subtitle {
        padding: 25px 0;
        color: black;
        font-size: 1.3rem;
        line-height: 20px;
        letter-spacing: -.24px;
        font-weight: 300;
      }
      .section-title {
        padding: 20px 0;
        color: $alur-green;
        font-size: 2rem;
        font-weight: 300;
      }
      .section-desc {
        margin:0 auto;
        line-height: 1.76;
        letter-spacing: -.3px;
        color: rgba(20, 20, 20, 0.75);
        padding-bottom: 40px;
      }
      .btn-success {
        min-width: 210px !important;
        padding: 15px 0 !important;
      }
    }
  }
}

.section-home-cards {
  .section-title {
    font-size: 40px;
    font-weight: 300;
    line-height: 48px;
    margin-bottom: 71px;
  }

  article {
    border: none;
    .card-img-overlay {
      top: unset;
      color: $alur-primary-color;
      .card-title {
        margin-bottom: 15px;
        font-weight: 300;
      }
      .card-text {
        margin-bottom: 30px;
        font-size: 1rem;
        line-height: 1.6;
        letter-spacing: -.2px;
        font-weight: 300;
        padding: 0 30px;
      }
      .btn{
        padding:0.9em 0;
        width: 75%;
      }
    }
  }
}

.section-spot3 {
  padding-top: 180px;
  position: relative;
  display: flex;
  min-height: 520px;
  width: 100%;
  color: $alur-primary-color;
  text-align: center;
  background-size: cover;
  background: url('../assets/images/spot3@2x.jpg') no-repeat center center;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .56);
    content: "";
  }

  .container {
    z-index: 1;
    .spot-subtitle {
      text-transform: uppercase;
      line-height: 20px;
      letter-spacing: 3.4px;
      font-size: 1.5rem;
      padding-bottom: 20px;
      color: hsla(0,0%,100%,.75);
    }
    .spot-title {
      text-transform: uppercase;
      line-height: 1.3;
      letter-spacing: 4px;
      font-weight: 300;
      padding-bottom: 40px;
      font-size: 2.5rem;
      color: hsla(0,0%,100%,.75)
    }

    a {
      background-color: $alur-primary-color;
      color: $brand-primary;
      font-weight: 700;
      letter-spacing: 0.44px;
      padding: 10px 20px;
      margin-bottom: 48px;
    }
  }
}
.section-home-care {
  margin-bottom: 120px;
  margin-top: 140px;
  .title {
    font-weight: 300;
    line-height: 48px;
    font-size: 2.8rem;
    padding-bottom: 72px;
  }
  .card {
    border: none;
    .card-img {
      width: unset;
      height: 48px;
    }
    .card-body {
      padding-left: 0;
      padding-right: 0;
      .card-text{
        font-weight: 300;
        font-size: 1.1rem;
      }
    }
  }
}
.section-spot4 {
  background-color: rgba(152, 191, 225, 0.5);
  padding: 80px 0;
  .spot-wrap {
    max-width: 640px !important;
  }
  .spot-image {
    img {
      height: 390px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      object-fit: cover;
    }
  }
  .spot-info {
    background-color: $alur-primary-color;
    text-align: left;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    max-width: 100%;
    .spot-label {
      color: $brand-primary;
    }
    .spot-title {
      font-weight: 200;
    }
    .spot-text {
      color: $medium-grey;
    }
  }
}

@media only screen and (max-width: $screen-sm) {
  .section-home-cards {
    .container {
      .section-title {
        font-size: 1rem;
      }
      .card-title {
        font-size: 1.5rem;
        padding-top: 2rem;
      }
    }
  }
  .section-spot3 {
    padding-top:50px;
    &:before{
      display:none;
    }
    .container {
      text-align:center !important;
      .spot-subtitle{
        font-size:12px;
        font-weight:300;
        text-align:left;
      }
      .spot-title {
        text-align:left !important;
        font-size: 28px !important;
        line-height: 56px;
        font-weight:300;
        color:white;
        width:75%;
        padding-bottom:88px;
        span{
          font-weight:700;
        }
      }
      a {
        background-color: $brand-primary;
        color: $alur-primary-color
      }
    }
  }
  .section-home-care {
    margin-top:50px;
    margin-bottom:50px;
    .container,.container-fluid{
      width:100%;
      padding:0;
      max-width:none;
      .title {
        font-size: 1.9rem !important;
        padding-bottom: 40px;
      }
    }
  }
}
@media only screen  and ( max-width: $screen-md) {
  .section-hero-index {
    background: url('../assets/images/home-hero-image.jpg') no-repeat center center;
    background-size: cover;
    position: relative;
    padding-top: 0;
    min-height: 500px;
    .container {
      max-width: calc(100% - 40px) !important;
    }
    img {
      padding-top: 160px !important;
      margin-bottom:10px;
    }
    .spot-title {
      color: $alur-primary-color;
    }
    .spot-link {
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
      text-align: center;
      padding: 20px 0;
      background-color: $brand-primary;
      margin-bottom: 0 !important;
      a {
        background-color: $alur-primary-color;
        color: $brand-primary;
        padding: 10px 0;
        min-width: 240px;
        font-weight: 700;

      }
    }
  }
  .section-introducing-duo {
    .container {
      max-width: 100% !important;
      &:before {
        width: 100%;
      }
    }
  }
  .section-home-cards {
    .container {
      max-width: calc(100% - 40px) !important;
      .section-title {
        font-size: 2rem;
        padding-bottom: 40px;
        margin-bottom: 0;
      }
    }
  }
  .section-spot3 {
    background: url('../assets/images/spot3-mobile.png') no-repeat center center;
    background-size: cover;
    .container {
      max-width: calc(100% - 40px) !important;
      .spot-title {
        font-size: 1.5rem;
        text-align:center;
      }
      a {
        background-color: $brand-primary;
        color: $alur-primary-color
      }
    }
  }
  .section-home-care {
    margin: 80px auto;
    .container,.container-fluid{
      .title {
        font-size: 1.9rem !important;
      }
    }
  }
}
@media only screen and (min-width: $screen-md) and (max-width: $screen-xl) {
  .section-home-cards {
    .container {
      max-width: calc(100% - 80px) !important;
    }
  }
}
@media only screen and (min-width: 430px) and (max-width: 1200px) {
  .section-home-cards {
    .container {
      .row {
        .card {
          align-items: center;
          img {
            max-width: 400px;
          }
          .card-body {
            min-width: 400px;
            left: 50%;
            top: 60%;
            transform: translate(-50%,-60%);
            .card-text {
              max-width: 340px;
              margin-left: auto;
              margin-right: auto;
            }
            p {
              padding: 0;
            }
            .btn {
              max-width: 210px;
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: $screen-lg) {
  .section-spot4 {
    padding: 40px 0;
    .spot-wrap {
      display: block !important;
      max-width: 327px !important;
      min-height: 590px;
      .spot-image {
        img {
          width: 100%;
          max-height: 327px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          border-bottom-left-radius: 0;
        }
      }
      .spot-info {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 0;
        min-height: 263px;
      }
    }
  }
}
</style>
<style lang="scss">
.section-home-care {
  .slick-slide {
    opacity: 1 !important;
  }
}
</style>
