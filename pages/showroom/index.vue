<template>
  <div>
    <section class="section-hero-showroom text-center">
      <b-container>
        <div class="spot-location">New York City</div>
        <h1 class="spot-title h1">The ALUR Showroom</h1>
        <p class="spot-desc">Achieving its vision for the office of the future, ALUR has created the perfect office environment by bringing in an array of state of the art products to complement its award winning frameless glass and dividing wall system.</p>
        <div class="spot-link">
          <a @click="modalVisibility = true" class="btn btn-secondary">
            Make an Appointment
          </a>
        </div>
      </b-container>
    </section>
    <section
      class="section-showroom-features scroll-fade-in"
      v-scroll
    >
      <b-container>
        <b-row
          class="section-features-title h1 fw-300"
          align-h="center"
        >
          Experience the future!
        </b-row>
        <b-row v-if="tabletMode">
          <b-col
              cols="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
              class="section-features-list-item text-center"
            >
              <div class="section-features-list-item-img icon-tower d-flex align-items-center justify-content-center"></div>
              <div class="section-features-list-item-title">Convenient Location</div>
              <div class="section-features-list-item-text">
                Our showroom is located right in the heart of Times Square.
              </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="section-features-list-item text-center"
          >
            <div class="section-features-list-item-img icon-face-man d-flex align-items-center justify-content-center"></div>
            <div class="section-features-list-item-title">1-on-1 Attention</div>
            <div class="section-features-list-item-text">
              A knowledgeable Associate will walk you through the entire ALUR product assortment.
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="section-features-list-item text-center"
          >
            <div class="section-features-list-item-img icon-frameless d-flex align-items-center justify-content-center"></div>
            <div class="section-features-list-item-title">ALUR Close Up</div>
            <div class="section-features-list-item-text">
              Experience all ALUR glass and dividing walls in person, browse samples and plan your build out.
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="section-features-list-item text-center"
          >
            <div class="section-features-list-item-img icon-furniture d-flex align-items-center justify-content-center"></div>
            <div class="section-features-list-item-title">The Industry’s Best Products</div>
            <div class="section-features-list-item-text">
              See the most state of the art office products that perfectly complement ALUR’s award winning wall systems.
            </div>
          </b-col>
        </b-row>
        <b-row v-else>
          <slick-carousel
            :options="slickOption"
            class="mobile-section"
          >
            <template slot="content">
              <b-col
                class="section-features-list-item text-center"
              >
                <div class="section-features-list-item-img icon-tower d-flex align-items-center justify-content-center"></div>
                <div class="section-features-list-item-title">Convenient Location</div>
                <div class="section-features-list-item-text">
                  Our showroom is located right in the heart of Times Square.
                </div>
              </b-col>
              <b-col
                class="section-features-list-item text-center"
              >
                <div class="section-features-list-item-img icon-face-man d-flex align-items-center justify-content-center"></div>
                <div class="section-features-list-item-title">1-on-1 Attention</div>
                <div class="section-features-list-item-text">
                  A knowledgeable Associate will walk you through the entire ALUR product assortment.
                </div>
              </b-col>
              <b-col
                class="section-features-list-item text-center"
              >
                <div class="section-features-list-item-img icon-frameless d-flex align-items-center justify-content-center"></div>
                <div class="section-features-list-item-title">ALUR Close Up</div>
                <div class="section-features-list-item-text">
                  Experience all ALUR glass and dividing walls in person, browse samples and plan your build out.
                </div>
              </b-col>
              <b-col
                class="section-features-list-item text-center"
              >
                <div class="section-features-list-item-img icon-furniture d-flex align-items-center justify-content-center"></div>
                <div class="section-features-list-item-title">The Industry’s Best Products</div>
                <div class="section-features-list-item-text">
                  See the most state of the art office products that perfectly complement ALUR’s award winning wall systems.
                </div>
              </b-col>
            </template>
          </slick-carousel>
        </b-row>
        <b-row
          class="section-features-footer text-center"
          align-h="center"
        >
          <p>In the area? Walk-ins are always welcome! <br /> The showroom can get quite busy, so we recommend <span @click="modalVisibility = true" class="action">making an appointment</span> in advance when possible.</p>
        </b-row>
      </b-container>
    </section>
    <section
      class="section-showroom-carousel scroll-fade-in"
      v-scroll
    >
      <b-container>
        <b-row>
          <div
            v-swiper:swiper="featureSwiperOption"
            class="showroom-gallery"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in featureItems">
                <div class="position-relative">
                  <b-img
                    :src="item.src"
                    class="responsive-img"
                    style="min-height: 280px"
                  />
                </div>
              </div>
            </div>
            <div class="slider-navigation next icon-arrow-right"></div>
            <div class="slider-navigation prev icon-arrow-left"></div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
          </div>
        </b-row>
      </b-container>
    </section>
    <section class="section-showroom-spot1">
      <b-container>
        <div class="section-showroom-spot1-title h1 fw-300 text-center">
          We only work with the best
        </div>
        <b-row
          class="scroll-fade-in"
          v-scroll
        >
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
            class="img-wrapper"
          >
            <div class="section-div-1">
              <div class="section-content-img">
                <image-view
                  class="responsive-img"
                  name="speech"
                  ext="jpg"
                />
              </div>
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
            class="align-self-center"
          >
            <div class="section-div-2">
              <div class="spot-title h1">Speech Privacy <br class="d-none d-lg-block d-xl-block" />Systems</div>
              <div class="spot-text">
                Speech Privacy Systems has been improving workers’ professional environments since 1995, and we’ve been fortunate to work with most of the Fortune 100, some great agencies and hundreds of smaller businesses. During the past two decades, our primary focus has always been on helping workers like you get more out of their professional lives. We do this primarily through sound masking and white noise products that improve your work environment.
              </div>
              <a class="btn btn-primary" target="_blank" href="https://www.speechprivacysystems.com">Read more</a>
            </div>
          </b-col>
        </b-row>
        <b-row
          class="middle scroll-fade-in"
          v-scroll
        >
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
            class="align-self-center"
          >
            <div class="section-div-2">
              <h3 class="spot-title h1">HALCON</h3>
              <div class="spot-text">
                Halcon has been making well-designed, well-crafted workplace furniture for over forty years. Chairman and co-founder, Peter Conway, established HALCON in 1977 with a desire to produce the best wood furniture in the industry. HALCON's continued success is rooted firmly in a culture of quality, innovation and a commitment to long-term partnerships with clients, suppliers, and employees. Today, they are a family-owned and operated Minnesota company with a passion for excellence.
              </div>
              <a class="btn btn-primary" target="_blank" href="http://www.halconfurniture.com/">Read more</a>
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
            class="img-wrapper"
          >
            <div class="section-div-4">
              <div class="section-content-img">
                <image-view
                  class="responsive-img ml-auto"
                  name="halcon"
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
            lg="6"
            xl="6"
            class="img-wrapper"
          >
            <div class="section-div-1">
              <div class="section-content-img">
                <image-view
                  class="responsive-img"
                  name="arktura"
                  ext="jpg"
                />
              </div>
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
            class="align-self-center"
          >
            <div class="section-div-2">
              <h3 class="spot-title h1">Arktura</h3>
              <div class="spot-text">
                Arktura creates precise solutions with the flexibility to address a wide range of architectural programs. Our dedicated architects, designers and engineers will work with you, adapting the design variables in each product to bring your vision to life.
              </div>
              <a class="btn btn-primary" target="_blank" href="https://arktura.com">Read more</a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
      class="section-showroom-featuring text-center scroll-fade-in"
      v-scroll
    >
      <b-container>
        <div class="section-header h1">
          Also featuring
        </div>
        <b-row>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
            class="mb-4"
          >
            <image-view
              class="responsive-img"
              name="vivitek"
              ext="jpg"
            />
            <div class="title">
              Vivitek
            </div>
            <p class="text">
              Featuring interactive collaboration technology products.
            </p>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
          >
            <image-view
              class="responsive-img"
              name="atmos"
              ext="jpg"
            />
            <div class="title">
              Atmos Air
            </div>
            <p class="text">
              Featuring breakthrough air purification technology.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section-showroom-map fw-300">
      <b-container>
        <div class="spot-more">
          <div class="spot-more-title">Come Visit ALUR</div>
          <div class="spot-more-text">
            <p>Industry Leader in Demountable Walls, ALUR’s new flagship showroom is located in the heart of Times Square in Tower 45.</p>
            <div class="spot-more-address">ALUR NYC Showroom <br>120 W 45th Street, Ste.<br> 1500 New York, NY 10036</div>
            <a class="btn btn-primary" @click="modalVisibility = true">Schedule Visit</a>
          </div>
        </div>
      </b-container>
    </section>
    <appointment-modal
      :modalShow="modalVisibility"
      @hide="modalVisibility = false"
    />
  </div>
</template>

<script>
import ImageView from '~/components/Images/ImageView.vue'
import SlickCarousel from '~/components/Carousels/SlickCarousel.vue'
import AppointmentModal from '~/components/Modals/AppointmentModal.vue'
import ResizeMixin from '@/mixins/ResizeMixin'

export default {
  components: {
    ImageView,
    SlickCarousel,
    AppointmentModal
  },

  mixins: [ ResizeMixin ],

  data () {
    return {
      title: 'Showroom',
      modalVisibility: false,
      featureSwiperOption: {
        loop: false,
        slidesPerColumn: 'auto',
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: false,
        },
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        }
      },
      slickOption: {
        slidesToShow: 1,
        infinite: true,
        accessibility: true,
        arrows: true,
        swipe: true,
        dots: true,
        centerMode: true,
        centerPadding: 0
      },
      featureItems: [
        {
          src: require('~/assets/images/showroom/bg_callRoom_red.jpg')
        },
        {
          src: require('~/assets/images/showroom/bg_confRoom_doors.jpg')
        },
        {
          src: require('~/assets/images/showroom/bg_confRoom.jpg')
        },
        {
          src: require('~/assets/images/showroom/bg_office_standing.jpg')
        },
        {
          src: require('~/assets/images/showroom/bg_dividingwall_shelf.jpg')
        },
        {
          src: require('~/assets/images/showroom/bg_frontDoors.jpg')
        },
        {
          src: require('~/assets/images/showroom/bg_office_sitting.jpg')
        }
      ]
    }
  },

  head () {
    return {
      title: this.title
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';

.section-hero-showroom {
  display: flex;
  align-items: center;
  color: $alur-primary-color;
  background: url('../../assets/images/hero-showroom@2x.jpg') no-repeat center center;
  background-size: cover;
  height: 595px;
  .spot-location {
    font-size: 1.3rem;
    font-weight: 300;
  }
  .spot-title {
    margin-top: 0;
    margin-bottom: 45px;
    line-height: 130%;
    letter-spacing: .8px;
    font-size: 3rem;
    font-weight: 200;
  }
  p {
    margin-bottom: 30px;
    font-size: 1rem;
    font-weight: 300;
    line-height: 2;
  }
}

.section-showroom-features {
  margin: 88px 0;
  .section-features-title {
    margin-bottom: 65px;
  }
  .section-features-list-item {
    margin-bottom: 120px;
    color: $alur-dark-grey;
    &-img {
      height: 56px;
      font-size: 3.5rem;
      margin-bottom: 10px;
      text-align: center;
    }
    &-title {
      font-size: 1.25rem;
    }
    &-text {
      font-size: 1rem;
      color: $medium-grey;
      font-weight: 300;
    }
  }
  .mobile-section {
    margin-bottom: 30px;
    .section-features-list-item {
      margin-bottom: 30px;
    }
  }
  .section-features-footer {
    font-size: 1rem;
    color: $medium-grey;
    font-weight: 300;
    .action {
      cursor: pointer;
      color: $brand-primary;
    }
  }
}

.section-showroom-spot1{
  .section-showroom-spot1-title {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .row{
    margin-bottom: 88px;
  }

  .spot-title{
    font-size: 2.5rem;
    font-weight: 200;
    line-height: 1.1;
    margin-bottom: 25px;
  }
  .spot-text{
    margin-bottom: 25px;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.75;
  }
}

.section-showroom-featuring{
  margin:120px auto 60px auto;
  .section-header {
    margin-top: 20px;
    margin-bottom: 50px;
    line-height: 1.1;
    letter-spacing: .8px;
    font-size: 2.5rem;
    font-weight: 200;
  }
  img{
    border:1px solid $grey1;
    padding: 10% 20%;
    margin-bottom: 24px;
  }
  .title{
    font-size: 1.4rem;
    margin-bottom: 8px;
  }
  .text{
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.75;
  }
}

.section-showroom-map{
  background: url('../../assets/images/showroom-map@2x.jpg') no-repeat center center;
  overflow: hidden;
  background-size: cover;
  padding-top: 42px;
  padding-bottom: 42px;
  .spot-more{
    float: right;
    min-width: 300px;
    width: 40%;
    background-color: white;
    padding: 30px 40px 30px 30px;
    box-shadow: 0 20px 40px 0 rgba(0,0,0,.16);
  }
  .spot-more-title{
    font-size: 1.78rem;
    margin-bottom: 10px;
  }
  .spot-more-text{
    p{
      margin-bottom: 15px;
      font-size: 1rem;
      line-height: 1.4;
      color: $night-grey;
    }
    .spot-more-address{
      margin-bottom: 20px;
      font-weight: 400;
      line-height: 1.75;
      font-size:1rem;
    }
    .btn{
      margin-bottom: 30px;
    }
  }
}
@media only screen and (max-width: 575px) {
  section {
    .container {
      max-width: calc(100% - 32px);
    }
  }
  .section-hero-showroom {
    .spot-title {
      margin-bottom: 20px;
    }
    .spot-desc {
      line-height: 1.25;
      font-size: 0.93rem;
    }
  }
  .section-showroom-spot1 {
    .container {
      padding: 0;
      .img-wrapper {
        padding: 0;
      }
    }
  }
  .section-showroom-map {
    .spot-more-text {
      width: 100% !important;
    }
  }
}
@media only screen and (max-width: 768px) {
  .section-showroom-features {
    margin: 40px 0;
  }
  .section-showroom-spot1 {
    .row {
      margin-bottom: 40px;
    }
  }
  .section-showroom-featuring {
    margin-top: 60px;
  }
  .section-showroom-map {
    min-height: 340px;
    background-size: cover;
    padding: 0;
    overflow: unset;
    position: relative;
    margin-bottom: 374px;
    .container {
      padding: 0;
      max-width: 100%;
      position: absolute;
      top: 100%;
      .spot-more {
        width: 100%;
        box-shadow: unset;
      }
      .spot-more-text {
        width: 50%;
      }
    }
  }

}
@media only screen and (max-width: 1008px) {
  .section-showroom-spot1 {
    .middle {
      display: flex;
      .align-self-center {
        order: 2;
      }
    }
    img {
      margin-bottom: 30px;
    }
  }
}
</style>
