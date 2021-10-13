<template>
  <section class="section section-border-bottom section-clients">
    <div class="container container-lg">
      <b-row>
        <b-col sm="12">
          <div class="section-title">YOU’RE IN GOOD COMPANY</div>
            <div
              v-if="tabletMode"
              class="clients-carousel desktop-view"
              v-swiper:options="clientLogoOptions"
            >
              <div class="swiper-wrapper ">
                <div class="clients-item swiper-slide "
                    v-for="(slide, index) in clientLogos"
                    :key="index"
                    >
                  <b-img class="img-responsive" :src="slide.src"/>
                </div>
              </div> 
            </div>
            <b-row
              v-else
              class="mobile-view mb-4"
            >
              <b-col
                class="client-logo d-flex align-items-center justify-content-center"
                cols="6"
                v-for="(slide, index) in clientLogos"
                :key="index"
              >
                <b-img class="img-responsive" :src="slide.src"/>
              </b-col>
            </b-row>
          <p>Headquartered in Pine Brook, New Jersey, ALUR has nationwide distribution and showrooms across the United States.</p>
          <p>For answers to common questions <a class="blue" href="/get-started">contact us</a> or call <a class="blue" href="tel:+19734462300">973.446.2300</a></p>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
import ResizeMixin from '@/mixins/ResizeMixin'
export default {
  name: 'ClientsSection',

  mixins: [ ResizeMixin ],

  data () {
    return {
      clientLogos: [
        {
          src:  require("~/assets/images/logos/gray/etrade.svg")
        },
        {
          src:  require("~/assets/images/logos/gray/esteeLauder.svg")
        },
        {
          src:  require("~/assets/images/logos/gray/uber.svg")
        },
        {
          src:  require("~/assets/images/logos/gray/dell.svg")
        },
        {
          src:  require("~/assets/images/logos/gray/freddieMac.svg")
        },
        {
          src:  require("~/assets/images/logos/gray/accenture.svg")
        },
      ],
      clientLogoOptions: {
        slidesPerView: '6'
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
.container-xl {
  width: 100%;
  max-width: 1292px;
}
.section-border-bottom {
  border-bottom: 4px solid $alur-primary-color;
}
.container-lg {
  max-width: 1010px;
}
.container-sm {
  max-width: 654px;
}
.bg-lightgray {
  background-color: $alur-primary-color1;
}
.section-clients {
    padding-top: 65px;
    padding-bottom: 50px;
    text-align: center;
    @media screen and (max-width: 767px) {
      padding-top: 60px;
    }
    .section-title {
        margin-bottom: 20px;
        font-size: 0.82rem;
        letter-spacing: -0.4px;
        color: $alur-light-grey;
    }
    .clients-carousel {
      margin-bottom: 50px;
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
    .client-logo {
      margin: 10px 0;
    }
    p {
      margin-bottom: 24px;
      font-size: 0.9rem;
      font-weight: 300;
      letter-spacing: -0.4px;
      color: $alur-light-grey;
      @media screen and (max-width: 767px) {
         margin-bottom: 15px;
      }
      a.blue {
        color: $brand-primary;
      }
    }
}
</style>
