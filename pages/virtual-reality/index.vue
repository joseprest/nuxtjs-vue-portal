<template>
  <div>
    <section class="section section-hero-vr">
      <b-container class="container-xl">
        <p>Virtual Reality Program</p>
        <div class="spot-title">Walk through your projects <br>with just one click!</div>
        <div class="spot-action"><b-btn class="btn btn-md btn-default"  @click="showModal" data-toggle="modal" data-target="#vrModal"><span>Take a 3D Tour</span></b-btn></div>
      </b-container >
    </section>
    <section class="section section-border-bottom section-vr-spot1 bg-lightgray">
      <b-container class="container-lg text-center">
        <div class="h3 spot-title">Immerse yourself in a scale model of <br class="d-none d-lg-block">your project.</div>
        <div class="spot-video">
          <video autoplay="" loop="" width="375" height="210">
            <source src="~assets/files/iphone-pano-frameless.webm" type="video/webm">
            <source src="~assets/files/iphone-pano-frameless.mp4" type="video/mp4">
          </video><img src="images/vr-phone-shell.png" srcset="~assets/images/vr-phone-shell.png 1x, ~assets/images/vr-phone-shell@2x.png 2x">
        </div>
        <div class="spot-subtitle"> 360° Panoramas of Your Space</div>
        <p>Virtual Reality (VR) technology has advanced rapidly in the past few years and in no other industry is this more <br class="d-none d-lg-block">relevant than in the design industry. Architects and clients can experience a realistic virtual prototype of a space on <br class="d-none d-lg-block">their mobile device before the order is placed and it’s built.</p><b-btn class="btn btn-md btn-primary" data-toggle="modal" data-target="#vrModal" ><span>Get Sample Project</span></b-btn>
      </b-container>
    </section>
    <section class="section section-border-bottom section-vr-spot2">
      <b-container class="container-xl">
        <b-row class="row-same-height">
          <b-col cols="12" md="6" class="order-2 order-md-1 " >
            <div class="section-text">
              <div class="h3 spot-title">Free VR goggles ship <br >with every project!</div>
              <p>VR headsets such as Goggle Cardboard can deliver impressive results using just your smartphone. Our true to scale renderings and complimentary goggles allow you to walk your clients through projects using a mobile device. Our VR applications work seamlessly with Autodesk Revit, producing a static 360° view that will move along with the VR device. In addition, full-screen renderings can be done in a browser.</p>
            </div>
          </b-col>
          <b-col cols="12" md="6"  class="order-1 order-md-2 img-container"><img class="img-responsive" src="~assets/images/vr-1.jpg" srcset="~assets/images/vr-1.jpg 1x, ~assets/images/vr-1@2x.jpg 2x">
          </b-col>
        </b-row>
      </b-container >
    </section>
    <chat-form-acoustic :formTitle="chatSectionTitle" :formSubTitle="chatSectionSubTitle" />
    <clients-section  />
    <virtual-reality-model
      :modalShow="modalVisibility"
      @hide="modalVisibility = false"
    >
      <template slot="modal-content">
        <div
          class="position-relative w-100"
        >
          <b-row class="row-same-height">
            <b-col cols="6" md="6" class="desktop-view">
              <img class="modal-img-bg modal-img-bg-left" src="~/assets/images/vr-modal.jpg" srcset="~/assets/images/vr-modal.jpg 1x, ~/assets/images/vr-modal@2x.jpg 2x">
            </b-col>
            <b-col cols="12" md="6" class="vertical-center">
              <div class="section-showroom-spot3 show" v-if="vrFormStep1" id="vrFormStep1">
                <div class="spot-label">ALUR VR PROGRAM</div>
                <div class="spot-title">Explore an ALUR project <br>in VR.</div>
                <div class="spot-form">
                  <b-form-group
                    id="fieldset-1"
                    label="Send to my mobile phone number"
                    label-for="vrPhoneNumber"
                  >
                    <b-form-input id="vrPhoneNumber" v-model="vrPhoneNumber" name="vrPhoneNumber" placeholder="Mobile phone number"></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="fieldset-1"
                    label="Send to my Email"
                    label-for="vrEmail"
                  >
                    <b-form-input id="vrEmail"   name="vrEmail" v-model="vrEmail" :type="'email'" placeholder="Email address"></b-form-input>
                  </b-form-group>
                  <div class="form-footer">
                    <div class="form-group">
                      <p>*Virtual Reality goggles are required for viewing.</p>
                    </div>
                    <b-button  variant="primary" id="vrFormStep1Toggler" @click="handleSubmit">SEND DEMO</b-button>
                  </div>
                </div>
              </div>
              <div class="section-showroom-spot3 hidden" v-if="vrFormStep2"  id="vrFormStep2">
                  <div class="spot-title text-center">
                    <div class="text-primary">Sent!</div>Go grab your VR goggles!
                  </div>
                  <div class="spot-form text-center">
                    <div class="form-footer">
                      <p>We received your request. If you have questions that require immediate assistance, please call us at 973.446.2300.</p>
                    </div>
                  </div>
                </div>
            </b-col>
          </b-row>
        </div>
      </template>
    </virtual-reality-model>
  </div>
</template>

<script>
import  ChatFormAcoustic  from "~/components/common/ChatFormAcoustic.vue"
import ClientsSection from "~/components/common/ClientsSection.vue"
import VirtualRealityModel from "~/components/Modals/VirtualRealityModel.vue"
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios'
import config from '~/store/config'
import { Base64 } from 'js-base64'

export default {
  components: {
    ChatFormAcoustic,
    ClientsSection,
    VirtualRealityModel
  },
  data(){
    return{
      title: 'Virtual Reality',
      activeBenefitsTab: 'incentiveSlides',
      offsetScrollHeight: -100,
      modalVisibility: false,
      vrFormStep2: false,
      vrFormStep1: true,
      slideOptions: {
        slidesToShow: 1,
        infinite: true,
        accessibility: true,
        adaptiveHeight: true,
        arrows: true,
        edgeFriction: 0.30,
        swipe: true,
        dots: true,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 1,
              vertical: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 1
            }
          }
        ]
      },
      vrEmail:'',
      vrPhoneNumber:'',
      chatSectionTitle:"Let's chat!",
      chatSectionSubTitle:"Imagine the perfect office."
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  computed: {
    ...mapGetters(['takeTour']),
  },
  methods: {
    ...mapActions({
      submitTakeTour: 'submitTakeTour'
    }),
    handleSubmit(evt) {
      evt.preventDefault()
      const auth = 'Basic ' + Base64.encode(config.appSecret)
      const url = `${config.bendEndpoint}/custom/send-vr-link`
      if(this.vrEmail.length>0 && this.vrPhoneNumber.length>0 ){
         this.submitTakeTour({  email:this.vrEmail, phoneNumber: this.vrPhoneNumber });
      }
      axios.post(url, JSON.stringify(
        {
          email: this.vrEmail,
          phoneNumber: this.vrPhoneNumber,
        }),
        {
        headers: {
          Authorization: auth,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        this.vrFormStep2 = true
        this.vrFormStep1 = false
      }).catch(function (error) {
       alert('An error occurred.');
      })
    },
    vrFormSubmit() {
      if(this.vrEmail.length>0 && this.vrPhoneNumber.length>0 ){
         this.submitTakeTour({  email:this.vrEmail, phoneNumber: this.vrPhoneNumber });
      }
      this.vrFormStep2 = true
      this.vrFormStep1 = false
    },
    showModal() {
      this.modalVisibility = true
    }

  }
}

</script>


<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
@media screen and (max-width: 767px) {
  .desktop-view {
    display: none !important;
  }
}
@media screen and (min-width: 768px) {
  .mobile-view {
    display: none !important;
  }
}
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
// hero VR
.section-hero-vr {
  padding-left: 15px;
  text-align: left;
  min-height: 540px;
  height: 1px;
  display: flex;
  align-items: center;
  color: $alur-primary-color;
  background-color: #dddcdc;
  background-image: url('../../assets/images/bg_hero_vr.jpg');
  background-size: cover;
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url('../../assets/images/bg_hero_vr@2x.jpg');
  }
  @media screen and (max-width: 767px) {
    background-repeat: no-repeat;
    background-origin: border-box;
    background-position: 50% 0;
  }

  .spot-title {
      font-size: 3rem;
      line-height: 1.33;
      letter-spacing: 0.9px;
      @media screen and (max-width: 767px) {
        font-size: 1.75rem;
      }
  }

  p {
    margin-bottom: 20px;
    font-size: 1.25rem;
    line-height: 1.7;
    letter-spacing: 0.9px;

    i {
        font-size: 40px;
        margin-right: 10px;
        vertical-align: middle;
    }

    span {
        vertical-align: middle;
    }
  }

  .spot-action {
    margin-top: 45px;

    .btn {
      span {
        font-size: 1rem;
        font-weight: 600;
      }
      border-radius: 6px;
      box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.17), 0 1px 2px 0 rgba(0, 0, 0, 0.16);
    }
  }
}
.section-vr-spot1 {
	padding-top: 75px;
	padding-bottom: 100px;
	background-color: $alur-primary-color;
  @media screen and (max-width: 767px) {
    padding-top: 48px;
    padding-bottom: 48px;
    border-bottom: none;
  }
	.spot-title {
    margin-bottom: 50px;
    font-size: 2.5rem;
    font-weight: 200;
    font-family: akkurat,sans-serif;
    @media screen and (max-width: 767px) {
      font-size: 1.75rem;
      margin-bottom: 18px;
      font-weight: 300;
    }
	}

	.spot-subtitle {
		margin-bottom: 30px;
		font-size: 1.5rem;
    line-height: 1.42;
    @media screen and (max-width: 767px) {
      font-size: 1.25rem;
    }
	}

	.spot-video {
    position: relative;
		margin-bottom: 25px;
    img {
      position: relative;
      @media screen and (max-width: 767px) {
        max-width: 100%;
      }
    }
    video {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      @media screen and (max-width: 767px) {
        max-height: 95%;
      }
    }
	}

	p {
		margin-bottom: 45px;
		font-size: 1rem;
		font-weight: 300;
		line-height: 2;
    letter-spacing: -0.4px;
    @media screen and (max-width: 767px) {
      margin-bottom: 30px;
      line-height: 25px;
    }
	}

	.spot-link {
		font-size: 0.8rem;
  }
  .btn-primary {
    color: $alur-primary-color;
    background-color: $brand-primary;
    border-color: $brand-primary;
    transition: all .3s ease;
  }
  .btn-md {
    padding: 14px 20px !important;
    border-radius: 4px;
    span{
      font-size: 1rem;
      line-height: 1.2;
      letter-spacing: .4px;
    }

  }
}
.section-vr-spot2 {
  padding-top: 140px;
  @media screen and (max-width: 767px) {
    padding-top: 0px;
  }
  .spot-title {
    font-size: 2.5rem;
    font-weight: 200;
  }
  .img-container{
    text-align: right;
    img {
      @media screen and (max-width: 767px) {
         max-width: 100%;
      }
    }
    @media screen and (max-width: 767px) {
      text-align: center;
      padding: 0;
    }
  }
    .col-sm-6 {
      &:last-child{
        text-align: right;
      }
    }

    .section-text {
      margin-left: 80px;
      padding-top: 60px;
      padding-right: 20px;
      max-width: 500px;
      @media screen and (max-width: 767px) {
        margin-left: 0;
        padding-top: 30px;
        padding-right: 0;
        max-width: inherit;
      }
    }

    .spot-title {
      margin-bottom: 32px;
      @media screen and (max-width: 767px) {
        font-size: 1.5rem;
        font-weight: 300;
        letter-spacing: -0.29px;
        line-height: 28px;
        margin-bottom: 22px;
      }
    }

    p {
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.8;
      letter-spacing: -0.3px;
    }
}
.section-clients {
    padding-top: 65px;
    padding-bottom: 50px;
    text-align: center;

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
    }

    p {
        margin-bottom: 24px;
        font-size: 0.9rem;
        font-weight: 300;
        letter-spacing: -0.4px;
        color: $alur-light-grey;
    }
}

.bg-lightgray {
    background-color: $alur-primary-color1;
}
.modal-img-bg {
  width: 100%;
}
.row-same-height {
  .vertical-center {
    display: flex;
    align-items: center;
  }
}
.section-showroom-spot3 {
  padding: 34px;
  @media screen and (max-width: 767px) {
    padding: 60px 22px ;
  }
  .text-primary {
    color: $brand-primary !important;
  }
  label {
    font-size: 1rem !important;
    font-weight: 300 !important;
  }
  .spot-label {
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 1px;
    color:$night-grey;
  }
  .spot-title {
    margin-bottom: 20px;
    font-size: 1.75em;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: 1px;
    color: $alur-dark-grey;
    @media screen and (max-width: 767px) {
      font-size: 1.5em;
      font-weight: 400;
    }
  }
  .spot-form {
    width: 325px;
    color: $medium-grey;
    @media screen and (max-width: 767px) {
      max-width: 325px;
      width: auto;
    }
    .form-group {
       p {
        font-size: 0.9rem;
      }
    }
    label {
      margin-bottom: 12px;
      font-size: 1rem;
      font-weight: 300;
    }
    .form-control{
      font-size: 1rem;
      font-weight: 300;
      &:focus {
        box-shadow: none;
        border-color: $alur-light-blue;
      }
    }
  }
  .form-footer {
    padding-top: 15px;
    p {
      font-size: 1em;
      font-weight: 300;
      line-height: 32px;
    }
    .btn {
      height: 40px;
      width: 200px;
      border-radius: 2px;
      font-weight: 400;
      &:focus {
        box-shadow: none;
        background-color: $dark-blue;
        border-color: #03040a;
      }
    }
  }
}
</style>
