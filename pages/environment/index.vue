<template>
  <div>
    <section class="section section-hero-env">
      <b-container>
        <p>
          <img src="~/assets/icons/leed-white.svg" alt="icon">
          <span>Environmental Benefits</span>
        </p>
        <div class="spot-title">
          Earn up to <br>16 LEED® points
        </div>
      </b-container>
    </section>
    <section class="section section-env-spot1">
      <b-container>
        <div class="h1 spot-title">
          ALUR creates architectural products that support environmental sustainability.
        </div>
      </b-container>
    </section>
    <section class="section-3-col section-env-spot2">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="section-header text-center">
              <div class="h3 section-title">Our thinking</div>
              <div class="text-large">ALUR is committed to improving the indoor built environment and minimizing the impact on the natural <br class="d-none d-lg-block d-xl-block">ecosystem through sustainable design and thoughtful choice and sourcing of materials.</div>
            </div>
          </b-col>
        </b-row>
        <b-row
          v-if="tabletMode"
          class="d-flex justify-content-center"
        >
          <b-col cols="4">
            <div class="img"><img src="~/assets/icons/pin-blue.svg" alt="icon"></div>
            <div class="text-large section-subtitle">Locally Sourced Glass</div>
            <p class="text-large">All of ALUR glass is sourced directly from local manufacturers to keep costs low and reduce our carbon footprint.</p>
          </b-col>
          <b-col cols="4">
            <div class="img"><img src="~/assets/icons/leed-blue.svg" alt="icon"></div>
            <div class="text-large section-subtitle">Qualifies for LEED® Points</div>
            <p class="text-large">ALUR Walls may contribute up to 16 LEED points in the categories of Energy & Atmosphere, Materials & Resources, and Indoor Environment Quality.</p>
          </b-col>
          <b-col cols="4">
            <div class="img"><img src="~/assets/icons/recycle-blue.svg" alt="icon"></div>
            <div class="section-subtitle">Demountable & Reusable</div>
            <p class="text-large">Walls can be repositioned to suit the changing needs of modern workspace, maximizing sustainability while avoiding construction debris and minimizing waste.</p>
          </b-col>
        </b-row>
        <b-row
          v-else
        >
          <slick-carousel
            :options="slickOption"
            class="mobile-section"
          >
            <template slot="content">
              <b-col class="text-center">
                <div class="img mx-auto"><img src="~/assets/icons/pin-blue.svg" alt="icon"></div>
                <div class="text-large section-subtitle">Locally Sourced Glass</div>
                <p class="text-large">All of ALUR glass is sourced directly from local manufacturers to keep costs low and reduce our carbon footprint.</p>
              </b-col>
              <b-col class="text-center">
                <div class="img mx-auto"><img src="~/assets/icons/leed-blue.svg" alt="icon"></div>
                <div class="text-large section-subtitle">Qualifies for LEED® Points</div>
                <p class="text-large">ALUR Walls may contribute up to 16 LEED points in the categories of Energy & Atmosphere, Materials & Resources, and Indoor Environment Quality.</p>
              </b-col>
              <b-col class="text-center">
                <div class="img mx-auto"><img src="~/assets/icons/recycle-blue.svg" alt="icon"></div>
                <div class="section-subtitle">Demountable & Reusable</div>
                <p class="text-large">Walls can be repositioned to suit the changing needs of modern workspace, maximizing sustainability while avoiding construction debris and minimizing waste.</p>
              </b-col>
            </template>
          </slick-carousel>
        </b-row>
      </b-container>
    </section>
    <section class="section section-env-spot3">
      <b-container>
        <div class="text-center">
          <div class="h3 spot-title">Our progress</div>
          <p>ALUR is still growing and changing. Every day we see more that we could do, and we plan to do it.  For now,  all ALUR architectural products qualify for LEED® credits for new and existing buildings and are GREENGUARD® certified.</p>
          <div class="spot-sidebar">
            <a href="/~/assets/files/ALUR-LEED-CI-Contribution.pdf" class="spot-sidebar-link">
              <img src="~/assets/images/pdf.jpg" alt="pdf">
              <span>ALUR LEED Commercial <br>Interiors Contribution</span>
            </a>
          </div>
        </div>
        <div
          v-if="tabletMode"
          class="check-list text-left"
        >
          <b-row class="check-list-item">
            <b-col cols="2">
              <div class="icon-check"></div>
            </b-col>
            <b-col cols="10">
              <div class="check-list-item-title">Energy & Atmosphere</div>
              <div class="check-list-item-descr">ALUR glass walls use daylight to reduce designed lighting loads and energy consumption.</div>
            </b-col>
          </b-row>
          <b-row class="check-list-item">
            <b-col cols="2">
              <div class="icon-check"></div>
            </b-col>
            <b-col cols="10">
              <div class="check-list-item-title">Simple Building Reuse</div>
              <div class="check-list-item-descr">ALUR can be installed into an existing space without disturbing existing floors, wall & ceilings.</div>
            </b-col>
          </b-row>
          <b-row class="check-list-item">
            <b-col cols="2">
              <div class="icon-check"></div>
            </b-col>
            <b-col cols="10">
              <div class="check-list-item-title">Simple Waste Management</div>
              <div class="check-list-item-descr">Waste from ALUR installations are all easily recyclable.</div>
            </b-col>
          </b-row>
          <b-row class="check-list-item">
            <b-col cols="2">
              <div class="icon-check"></div>
            </b-col>
            <b-col cols="10">
              <div class="check-list-item-title">Locally Sourced Materials</div>
              <div class="check-list-item-descr">All glass is locally sourced and manufactured.</div>
            </b-col>
          </b-row>
          <b-row class="check-list-item">
            <b-col cols="2">
              <div class="icon-check"></div>
            </b-col>
            <b-col cols="10">
              <div class="check-list-item-title">Low-Emitting Materials - Adhesives and Sealants</div>
              <div class="check-list-item-descr">The glazing tape used to secure the polycarbonate joints to the glass is composed of 100% solids and does not emit VOCs.</div>
            </b-col>
          </b-row>
          <b-row class="check-list-item">
            <b-col cols="2">
              <div class="icon-check"></div>
            </b-col>
            <b-col cols="10">
              <div class="check-list-item-title">Low-Emitting Materials - Paints and Coatings</div>
              <div class="check-list-item-descr">Instead of being coated or painted, ALUR extrusions are anodized aluminum, which is a water-based process and uses no VOCs.</div>
            </b-col>
          </b-row>
          <b-row class="check-list-item">
            <b-col cols="2">
              <div class="icon-check"></div>
            </b-col>
            <b-col cols="10">
              <div class="check-list-item-title">Share the Daylight</div>
              <div class="check-list-item-descr">Using ALUR glass walls to create private offices and conference rooms helps ensure daylight reaches occupants.</div>
            </b-col>
          </b-row>
        </div>
        <div
          v-else
          class="check-list-mobile text-left"
        >
          <slick-carousel
            :options="slickOption"
          >
            <template slot="content">
              <div>
                <b-row class="check-list-item">
                  <b-col cols="2">
                    <div class="icon-check"></div>
                  </b-col>
                  <b-col cols="10">
                    <div class="check-list-item-title">Energy & Atmosphere</div>
                    <div class="check-list-item-descr">ALUR glass walls use daylight to reduce designed lighting loads and energy consumption.</div>
                  </b-col>
                </b-row>
                <b-row class="check-list-item">
                  <b-col cols="2">
                    <div class="icon-check"></div>
                  </b-col>
                  <b-col cols="10">
                    <div class="check-list-item-title">Simple Building Reuse</div>
                    <div class="check-list-item-descr">ALUR can be installed into an existing space without disturbing existing floors, wall & ceilings.</div>
                  </b-col>
                </b-row>
                <b-row class="check-list-item">
                  <b-col cols="2">
                    <div class="icon-check"></div>
                  </b-col>
                  <b-col cols="10">
                    <div class="check-list-item-title">Simple Waste Management</div>
                    <div class="check-list-item-descr">Waste from ALUR installations are all easily recyclable.</div>
                  </b-col>
                </b-row>
                <b-row class="check-list-item">
                  <b-col cols="2">
                    <div class="icon-check"></div>
                  </b-col>
                  <b-col cols="10">
                    <div class="check-list-item-title">Locally Sourced Materials</div>
                    <div class="check-list-item-descr">All glass is locally sourced and manufactured.</div>
                  </b-col>
                </b-row>
              </div>
              <div>
                <b-row class="check-list-item">
                  <b-col cols="2">
                    <div class="icon-check"></div>
                  </b-col>
                  <b-col cols="10">
                    <div class="check-list-item-title">Low-Emitting Materials - Adhesives and Sealants</div>
                    <div class="check-list-item-descr">The glazing tape used to secure the polycarbonate joints to the glass is composed of 100% solids and does not emit VOCs.</div>
                  </b-col>
                </b-row>
                <b-row class="check-list-item">
                  <b-col cols="2">
                    <div class="icon-check"></div>
                  </b-col>
                  <b-col cols="10">
                    <div class="check-list-item-title">Low-Emitting Materials - Paints and Coatings</div>
                    <div class="check-list-item-descr">Instead of being coated or painted, ALUR extrusions are anodized aluminum, which is a water-based process and uses no VOCs.</div>
                  </b-col>
                </b-row>
                <b-row class="check-list-item">
                  <b-col cols="2">
                    <div class="icon-check"></div>
                  </b-col>
                  <b-col cols="10">
                    <div class="check-list-item-title">Share the Daylight</div>
                    <div class="check-list-item-descr">Using ALUR glass walls to create private offices and conference rooms helps ensure daylight reaches occupants.</div>
                  </b-col>
                </b-row>
              </div>
            </template>
          </slick-carousel>
        </div>
      </b-container>
    </section>
    <section class="section-design section-duo-spot1">
      <b-row class="h1 fw-300 mx-auto">Harmony in design</b-row>
    </section>
    <chat-form-acoustic :formTitle="chatSectionTitle" :formSubTitle="chatSectionSubTitle" />
    <clients-section  />
  </div>
</template>

<script>
import  ChatFormAcoustic  from '~/components/common/ChatFormAcoustic.vue'
import ClientsSection from '~/components/common/ClientsSection.vue'
import SlickCarousel from '~/components/Carousels/SlickCarousel.vue'
import ResizeMixin from '@/mixins/ResizeMixin'

export default {
  components: {
    ChatFormAcoustic,
    ClientsSection,
    SlickCarousel
  },

  mixins: [ ResizeMixin ],

  data () {
    return {
      title: 'Environment',
      chatSectionTitle: 'Let\'s chat!',
      chatSectionSubTitle: 'Imagine the perfect office.',
      slickOption: {
        slidesToShow: 1,
        infinite: true,
        accessibility: true,
        arrows: false,
        swipe: true,
        dots: true,
        centerMode: true,
        centerPadding: 0
      }
    }
  },

  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
.section-hero-env{
  text-align: left;
  display: flex;
  align-items: center;
  background: url('../../assets/images/hero-env.jpg') no-repeat center center;
  background-size: cover;
  height: 640px;
  color: white;
  background-color: $alur-light-blue;
  .spot-title {
    font-size: 2.5rem;
    font-weight: 200;
    line-height: 120%;
    letter-spacing: 0.2px;
  }
  p {
    margin-bottom: 20px;
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: -0.4px;
    img {
      margin-right: 10px;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
    }
  }
}
.section-env-spot1{
  padding-top: 30px;
  padding-bottom: 85px;
  background-color: white;
  text-align: center;
  .spot-title {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: 0.2px;
    @media screen and (max-width: 768px) {
      padding-top: 30px;
    }
  }
}
.section-env-spot2 {
  padding-top: 0;
  padding-bottom: 0;
  color: white;
  & > .container {
    background-color: $brand-primary;
    position: relative;
    padding: 60px 80px 100px 80px;
    &:before {
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 34px 32px 34px;
      border-color: transparent transparent $brand-primary transparent;
      content: "";
    }
  }
  .section-title {
    margin-bottom: 20px;
    font-size: 2.5rem;
    font-weight: 200;
  }
  .img {
    background-color: #ccdff0;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .section-header {
    margin-bottom: 50px;
  }
  .text-large {
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 1.76;
    letter-spacing: -0.3px;
    color: $medium-grey;
  }
  .section-subtitle {
    margin-bottom: 10px;
    font-size: 1.3rem;
    font-weight: 300;
    letter-spacing: -0.3px;
    color: white;
  }
}
.section-env-spot3 {
  padding-top: 80px;
  padding-bottom: 92px;
  background-color: white;
  .spot-title {
    margin-bottom: 25px;
    font-size: 2.5rem;
    font-weight: 200;
  }
  p {
    margin-bottom: 35px;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.76;
    letter-spacing: -0.3px;
    color: $medium-grey;
  }
  .spot-sidebar {
    display: inline-block;
    text-align: left;
  }
  .spot-sidebar-link {
    display: flex;
    align-items: flex-start;
    font-size: 0.9rem;
    line-height: 1.14;
    letter-spacing: -0.4px;
    color: $brand-primary;
    img {
      flex: none;
      margin-right: 16px;
    }
  }
  .check-list {
    padding-top: 30px;
    .check-list-item{
      overflow: hidden;
      padding: 24px 24px 30px 88px;
      border-bottom: 1px solid $alur-grey;
      .icon-check{
        float: right;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        vertical-align: middle;
        height: 40px;
        border: 2px solid $alur-grey-color1;
        border-radius: 50%;
        background-color: #f8fcff;
        font-size: 2rem;
      }
      .check-list-item-title{
        margin-bottom: 6px;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1;
        letter-spacing: -.2px;
        white-space: normal;
        color: $alur-light-grey;
      }
      .check-list-item-descr{
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.4;
        letter-spacing: -.3px;
        color: $alur-light-grey;

      }
    }
  }
  .check-list-mobile {
    padding-top: 30px;
    .check-list-item{
      overflow: hidden;
      padding: 15px;
      .icon-check{
        float: right;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        vertical-align: middle;
        border: 2px solid $alur-grey-color1;
        border-radius: 50%;
        background-color: #f8fcff;
        font-size: 1.75rem;
      }
      .check-list-item-title{
        margin-bottom: 6px;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1;
        letter-spacing: -.2px;
        white-space: normal;
        color: $alur-light-grey;
      }
      .check-list-item-descr{
        font-size: 0.9rem;
        font-weight: 300;
        line-height: 1.4;
        letter-spacing: -.3px;
        color: $alur-light-grey;

      }
    }
  }
}
.section-duo-spot1 {
  background-image: url('../../assets/images/glass-wall/alur-spot1-bg.jpg');
  display: flex !important;
  -ms-flex-align: center;
  align-items: center;
  min-height: 515px;
  background-color: $alur-dark-grey;
  background-position: bottom;
  background-size: cover;
  text-align: center;
  .row {
    letter-spacing: 6px;
    text-transform: uppercase;
    color: hsla(0,0%,100%,.75);
    text-align: center;
  }
}
@media only screen and (max-width: 575px) {
  section {
    .container {
      max-width: calc(100% - 32px);
      padding: 0;
    }
  }
  .section-hero-env{
    .container {
      P {
        span {
          font-size: 0.875rem;
        }
      }
      .spot-title {
        font-size: 1.75rem;
      }
    }
  }
  .section-env-spot1 {
    .spot-title {
      font-size: 1.25rem !important;
    }
  }
  .section-duo-spot1 {
    min-height: 264px;
  }
  .section-env-spot3 {
    padding: 48px 0;
  }
  .section-env-spot2 {
    & > .container {
      padding: 60px 0 20px;
    }
  }
}
@media only screen and (max-width: 768px) {
  .section-hero-env{
    background: url('../../assets/images/enviromental-mobile-bg.png') no-repeat center center;
    max-height: 494px;
    display: block;
    background-size: cover;
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 48px;
      P {
        img {
          display: block;
          margin: 0 auto;
        }
      }
      .spot-title {
        text-align: center;
      }
    }
  }
  .section-env-spot2 {
    background-color: $brand-primary;
    & > .container {
      background-color: transparent;
    }
  }
}
</style>
