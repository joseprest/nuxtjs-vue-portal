<template>
  <div>
    <section class="section section-hero-acoustical">
      <b-container>
        <div class="spot-subtitle">
          Acoustical Solutions
        </div>
        <div class="spot-title">
          Design a collaborative, open <br class="d-none d-md-block d-lg-block d-xl-block">and QUIET space.
        </div>
        <div class="spot-link">
          <nuxt-link to="/portfolio#section-take-a-tour" class="btn btn-secondary">
            Take a 3D Tour
          </nuxt-link>
        </div>
      </b-container>
    </section>
    <section class="section section-acoustical-spot section-acoustical-spot1">
      <b-container>
        <div class="spot-header text-center">
          <div class="h1 spot-title">
            Lower noise levels and increase concentration.
          </div>
          <p>With the vast majority of office spaces now designed to encourage people to communicate and work with <br>others, there are far greater potential for distractions and interruptions.</p>
        </div>
        <b-row class="text">
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
            class="align-self-center"
          >
            <div class="spot-subtitle">Noise pollution is a serious<br>productivity killer.</div>
            <p>In today’s workplace, one of the top worker complaints is the inability to concentrate due to noise levels. But noise doesn’t just impact employee effectiveness; it can be a major distraction and source of frustration and stress, which in turn can impact wellbeing. At ALUR, we’re committed to creating design solutions that help optimize acoustic comfort without sacrificing worker interaction in the workplace.</p>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
            class="mb-3"
          >
            <div class="image-container">
              <div class="section-content-img">
                <image-view
                  class="responsive-img"
                  name="acoustic-spot1"
                  ext="jpg"
                />
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section section-features">
      <b-container>
        <b-row
          class="h1 fw-300 section-features-title text-center"
          align-h="center"
        >
          We design all our solutions to be acoustically comfortable
        </b-row>
        <b-row v-if="tabletMode">
          <b-col
            cols="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
            class="section-features-list-item text-center"
          >
            <div class="section-features-list-item-img icon-sound-absorption d-flex align-items-center justify-content-center"></div>
            <div class="section-features-list-item-title">Sound Absorption</div>
            <div class="section-features-list-item-text">
              Absorptive surfaces reduce reverberation<br />and echoing
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
            class="section-features-list-item text-center"
          >
            <div class="section-features-list-item-img icon-sound-privacy d-flex align-items-center justify-content-center"></div>
            <div class="section-features-list-item-title">Sound Blocking</div>
            <div class="section-features-list-item-text">
              Reduces the transmission of sound from <br />office to office
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
            class="section-features-list-item text-center"
          >
            <div class="section-features-list-item-img icon-sound-masking d-flex align-items-center justify-content-center"></div>
            <div class="section-features-list-item-title">Sound Masking</div>
            <div class="section-features-list-item-text">
              White or pink noise reduces speech <br/>intelligibility
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
                <div class="section-features-list-item-img icon-sound-absorption d-flex align-items-center justify-content-center"></div>
                <div class="section-features-list-item-title">Sound Absorption</div>
                <div class="section-features-list-item-text">
                  Absorptive surfaces reduce reverberation<br />and echoing
                </div>
              </b-col>
              <b-col
                class="section-features-list-item text-center"
              >
                <div class="section-features-list-item-img icon-sound-privacy d-flex align-items-center justify-content-center"></div>
                <div class="section-features-list-item-title">Sound Blocking</div>
                <div class="section-features-list-item-text">
                  Reduces the transmission of sound from <br />office to office
                </div>
              </b-col>
              <b-col
                class="section-features-list-item text-center"
              >
                <div class="section-features-list-item-img icon-sound-masking d-flex align-items-center justify-content-center"></div>
                <div class="section-features-list-item-title">Sound Masking</div>
                <div class="section-features-list-item-text">
                  White or pink noise reduces speech <br/>intelligibility
                </div>
              </b-col>
            </template>
          </slick-carousel>
        </b-row>
      </b-container>
    </section>
    <section class="section section-acoustical-spot section-acoustical-spot2">
      <b-container>
        <b-row class="text">
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
            class="align-self-center"
          >
            <div class="spot-subtitle">Exclusive sound masking <br>by Speech Privacy Systems</div>
            <p>Speech Privacy Systems has been improving workers’ professional environments since 1995, and we’ve been fortunate to work with most of the Fortune 100, some great agencies and hundreds of smaller businesses. During the past two decades, our primary focus has always been on helping workers like you get more out of their professional lives. We do this primarily through sound masking and white noise products that improve your work environment.</p>
            <a class="btn btn-primary" target="_blank" href="/showroom">See it in our NYC Showroom</a>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
            class="mb-3"
          >
            <div class="image-container">
              <div class="section-content-img">
                <image-view
                  class="responsive-img"
                  name="bg-acoustic"
                  ext="jpg"
                />
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section section-acoustical-spot3">
      <b-container>
        <div class="h1 spot-title">Keep the watercooler conversations <br class="d-none d-lg-block d-xl-block">at the watercooler (not in your office).</div>
        <div class="spot-content">
          <b-row v-if="tabletMode">
            <b-col cols="6">
              <div class="spot-index spot-index-1">
                <div class="spot-index-value">42</div>
                <div class="spot-index-desc">STC</div>
              </div>
              <div class="spot-subtitle">ALUR Dividing Wall</div>
              <p class="spot-footer">Provides a 42 STC rating where a high rating is optimal to prevent sound transmission between offices.</p>
            </b-col>
            <b-col cols="6">
              <div class="spot-index">
                <div class="spot-index-value">38</div>
                <div class="spot-index-desc">STC</div>
              </div>
              <div class="spot-index">
                <div class="spot-index-value">36</div>
                <div class="spot-index-desc">STC</div>
              </div>
              <div class="spot-subtitle">ALUR Glass Wall</div>
              <p class="spot-footer">Provides a 36 STC (1/2” tempered glass rating) and 38 STC (1/2” laminated glass rating) for office fronts where a high rating is less critical, but still important for overall sound control.</p>
            </b-col>
          </b-row>
          <b-row v-else>
            <slick-carousel
              :options="slickOption"
              class="mobile-section"
            >
              <template slot="content">
                <b-col>
                  <div class="spot-index spot-index-1">
                    <div class="spot-index-value">42</div>
                    <div class="spot-index-desc">STC</div>
                  </div>
                  <div class="spot-subtitle">ALUR Dividing Wall</div>
                  <p class="spot-footer">Provides a 42 STC rating where a high rating is optimal to prevent sound transmission between offices.</p>
                </b-col>
                <b-col>
                  <div class="spot-index">
                    <div class="spot-index-value">38</div>
                    <div class="spot-index-desc">STC</div>
                  </div>
                  <div class="spot-index">
                    <div class="spot-index-value">36</div>
                    <div class="spot-index-desc">STC</div>
                  </div>
                  <div class="spot-subtitle">ALUR Glass Wall</div>
                  <p class="spot-footer">Provides a 36 STC (1/2” tempered glass rating) and 38 STC (1/2” laminated glass rating) for office fronts where a high rating is less critical, but still important for overall sound control.</p>
                </b-col>
              </template>
            </slick-carousel>
          </b-row>
        </div>
        <div class="spot-footer">
          Sound transmission class (STC) measured in decibels (dB) is the best method for rating sound attenuation <br class="d-none d-lg-block d-xl-block">characteristics of wall systems. The higher the STC rating, the higher the sound attenuation properties of the system. At <br class="d-none d-lg-block d-xl-block">STC 30, normal speech is audible but unintelligible; at 35 loud speech is audible but unintelligible; and at 42 loud <br class="d-none d-lg-block d-xl-block">speech is just a murmur.
        </div>
      </b-container>
    </section>
    <chat-form-acoustic :formTitle="chatSectionTitle" :formSubTitle="chatSectionSubTitle" />
    <clients-section  />
  </div>
</template>

<script>
import  ChatFormAcoustic  from '~/components/common/ChatFormAcoustic.vue'
import ClientsSection from '~/components/common/ClientsSection.vue'
import ImageView from '~/components/Images/ImageView.vue'
import SlickCarousel from '~/components/Carousels/SlickCarousel.vue'
import ResizeMixin from '@/mixins/ResizeMixin'

export default {
  components: {
    ChatFormAcoustic,
    ClientsSection,
    ImageView,
    SlickCarousel
  },

  mixins: [ ResizeMixin ],

  data () {
    return {
      title: 'Acoustical',
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
      },
    }
  },

  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';
.section-hero-acoustical{
  text-align: left;
  display: flex;
  align-items: center;
  color: $alur-primary-color;
  background: url('../../assets/images/hero-acoustic@2x.jpg') no-repeat center center;
  background-size: cover;
  min-height: 540px;
  .spot-subtitle {
    margin-bottom: 24px;
    font-size: 1.5rem;
    line-height: 1.7;
    letter-spacing: .9px;
  }
  .spot-title {
    margin-bottom: 40px;
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: .9px;
  }
  .btn {
    box-shadow:0 1px 8px 0 rgba(0,0,0,.17), 0 1px 2px 0 rgba(0,0,0,.16);
  }
}
.section-acoustical-spot{
  overflow: hidden;
  padding-top: 90px;
  padding-bottom: 100px;
  .spot-header{
    margin-bottom: 110px;
    .spot-title{
      margin-bottom: 20px;
      font-weight: 200;
      line-height: 1.1;
      font-size: 2.5rem;
    }
    p{
      font-size: 1.1rem;
      font-weight: 300;
      color: $alur-light-grey;
      line-height: 1.76;
    }
  }
  .text{
    text-align: left;
    .spot-subtitle{
      margin-bottom: 25px;
      font-size: 1.5rem;
      line-height: 1.42;
    }
    p{
      font-size: 0.9rem;
      font-weight: 300;
      line-height: 2.13;
    }
    .btn{
      margin-top: 20px;
    }
  }
  .section-content-img{
    float: right;
    margin-left: 2%;
    img{
      width: 100%;
    }
  }
}
.section-acoustical-spot2{
  img{
    box-shadow: 40px 40px 0 0 $alur-grey-color1;
  }
}
.section-features {
  padding-bottom: 10px;
  background: #a5a8b5 url('~assets/images/bg-features-black.jpg') 50% no-repeat;
  background-size: cover;
  color: $alur-primary-color;
  padding-top: 100px;
  margin: 88px 0;
  .section-features-title {
    margin-bottom: 90px;
  }
  .section-features-list-item {
    margin-bottom: 80px;
    color: $alur-primary-color;
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
}
.section-acoustical-spot3 {
  padding-top: 55px;
  min-height: 630px;
  padding-bottom: 80px;
  text-align: center;
  background-position: 50%;
  position: relative;
  background-size: cover;
  color: white;
  background: url('../../assets/images/acoustical-spot3@2x.jpg');
  .spot-title {
    margin-bottom: 85px;
    line-height: 1.2;
    font-weight: 200;
  }
  .spot-content {
    margin-bottom: 70px;
    p {
      font-size: 16px;
      font-weight: 300;
      line-height: 1.5;
    }
  }
  .spot-index {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 104px;
    height: 104px;
    margin-left: 6px;
    margin-right: 6px;
    background-color: $alur-grey-color1;
    color: white;
    letter-spacing: -1px;
    font-weight: 500;
    border-radius: 50%;
    &.spot-index-1 {
        background-color: $alur-light-green;
    }
   }
  .spot-index-value {
    font-size: 2.75rem;
    line-height: 1;
    margin-top: 10px;
  }
  .spot-index-desc {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 300;
  }
  .spot-subtitle {
    margin-top: 35px;
    margin-bottom: 8px;
    font-size: 1.429em;
    font-weight: 400;
    line-height: 1.2;
  }
  .spot-footer {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: -0.4px;
    color: $medium-grey;
  }
}
@media only screen and (max-width: 1008px) {
  .section-hero-acoustical {
    .spot-title {
      font-size: 3rem;
    }
  }
  .section-acoustical-spot {
    .row {
      display: flex;
      .align-self-center {
        order: 2;
      }
      .section-content-img {
        width: 100%;
        img {
          box-shadow: unset;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .section-hero-acoustical {
    .spot-title {
      font-size: 2rem;
    }
  }
  .section-acoustical-spot {
    padding: 48px 0;
    .spot-header {
      margin-bottom: 30px;
    }
  }
  .section-features {
    margin: 0;
  }
  .section-acoustical-spot3 {
    .spot-title,
    .spot-content {
      margin-bottom: 40px;
    }
  }
}
@media only screen and (max-width: 575px) {
  section {
    .container {
      max-width: calc(100% - 32px);
      padding: 0;
    }
  }
  .section-hero-acoustical {
    min-height: 378px;
    .spot-title {
      font-size: 1.75rem;
    }
    .spot-subtitle {
      font-size: 1rem;
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
</style>
<style lang="scss">

</style>
