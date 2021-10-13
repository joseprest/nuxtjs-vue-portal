<template>
  <div>
    <sticky-header title="ALUR Dividing Wall" />
    <section class="section section-dividing-overview-gallery text-center">
      <b-container>
        <b-row
          class="h1 fw-300"
          align-h="center"
        >
          Beautiful walls require beautiful finishes.
        </b-row>
        <b-row class="finishes-gallery w-100 position-relative">
          <div
            v-show="finishingCardClicked"
            ref="preview"
            style="transition: all .3s ease-out"
          >
            <div
              v-swiper:swiper="swiperOption"
              class="finishes-gallery-preview"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in finishingCardItems">
                  <div class="position-relative">
                    <b-img
                      :src="item.cardSrc"
                      class="responsive-img"
                      style="min-height: 280px"
                    />
                    <p class="card-title position-absolute text-center w-100">{{item.cardTitle}}</p>
                  </div>
                  <div
                    class="swiper-close icon-close position-absolute"
                    @click.prevent="finishingCardClicked = false"
                  ></div>
                </div>
              </div>
              <div class="swiper-pagination swiper-pagination-bullets"></div>
              <div class="slider-navigation next icon-arrow-right"></div>
              <div class="slider-navigation prev icon-arrow-left"></div>
            </div>
          </div>
          <slick-carousel
            v-show="!finishingCardClicked"
            :options="slideOptions"
          >
            <template slot="content">
              <b-col
                v-for="(items, i) in finishesCards"
                :key="i"
                class="gallery-item"
                @click="previewFinishingCards(items)"
              >
                <div
                  class="item-img-cover"
                >
                  <div
                    :style="{backgroundImage: 'url(' + items[0].cardSrc + ')'}"
                    class="item-img position-absolute"
                  ></div>
                </div>
                <div class="position-absolute content">
                  <div class="title">
                    <b-img
                      :src="items[0].cardLogo"
                      class="logo"
                    />
                    <pre>{{items[0].cardTitle}}</pre>
                  </div>
                  <div class="footer">
                    <pre>{{items[0].cardText}}</pre>
                    <b-button
                      class="mb-3 fw-700 d-none d-md-block d-lg-block d-xl-block"
                      @click="previewFinishingCards(items)"
                    >
                      {{items[0].cardAction}}
                    </b-button>
                  </div>
                </div>
              </b-col>
            </template>
          </slick-carousel>
        </b-row>
        <b-row class="desc text-center mb-4 w-100">
          Tap to interact and view examples of each finishing option
        </b-row>
      </b-container>
    </section>
    <section class="section section-duo-leaflet">
      <b-container>
        <b-row
          class="d-flex justify-content-center align-items-center scroll-fade-in"
          v-scroll
        >
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="7"
            xl="7"
            class="text-right content"
          >
            <image-view
              class="responsive-img"
              name="leaflet-d-4"
              ext="jpg"
            />
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="5"
            xl="5"
            class="text-left mt-3 desc"
          >
            <div class="h4">Create division without separation.</div>
            <div class="section-desc w-75">Define the boundary and function of your offices and conference rooms without separating them from the rest of the floor.</div>
          </b-col>
        </b-row>
        <b-row
          class="d-flex justify-content-center align-items-center scroll-fade-in"
          v-scroll
        >
          <pop-color
            :mode="false"
            :previewImage="previewImage"
          />
        </b-row>
        <b-row
          class="d-flex justify-content-center align-items-center scroll-fade-in"
          v-scroll
        >
          <framing-design :mode="false" />
        </b-row>
      </b-container>
    </section>
    <section
      class="section feature-list-glass-wall scroll-fade-in"
      v-scroll
    >
      <b-container>
        <b-row
          class="h1 fw-300 mx-auto mb-3 title"
          align-h="center"
        >
          Even more reasons to choose ALUR
        </b-row>
        <b-row align-v="center">
          <b-col
            cols="6"
            sm="6"
            md="4"
            lg="4"
            xl="4"
            v-for="(item, i) in featuresList"
            :key="i"
          >
            <div class="mb-3 d-flex justify-content-center align-items-center">
              <b-img :src="item.svg" />
            </div>
            <div>
              <pre>{{item.text}}</pre>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
      class="section-benefits scroll-fade-in"
      v-scroll
    >
      <b-container>
        <b-row>
          <b-col
            cols="12"
            sm="12"
            md="5"
            lg="5"
            xl="5"
            class="title">Products benefits</b-col>
          <b-col
            cols="12"
            sm="12"
            md="7"
            lg="7"
            xl="7"
          >
            <accordion
              :list="productsBenefits"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
      class="section-environment position-relative"
    >
      <environment />
    </section>
    <section
      class="section section-duo-faq scroll-fade-in"
      v-scroll
    >
      <b-container>
        <b-row
          class="h1 fw-300 mx-auto mb-3 product-title d-flex align-items-center text-center"
          align-h="center"
        >
          Frequently asked questions
        </b-row>
        <b-row align-h="center">
          <b-col
            cols="12"
            sm="12"
            md="7"
            lg="7"
            xl="7"
          >
            <accordion
              :list="faqs"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section-duo-spot1-video mt-4 d-xs-none d-sm-none d-md-block d-lg-block">
      <video
        autoplay
        loop
        muted
      >
        <source src="~assets/video/vid_alurWhiteBoard.mp4">
      </video>
    </section>
    <image-preview-modal
      :modalShow="modalVisibility"
      @hide="modalVisibility = false"
    >
      <template slot="modal-content">
        <div
          class="position-relative w-100"
        >
          <b-img
            :src="modalContent"
            class="responsive-img"
            style="min-height: 280px"
          />
        </div>
      </template>
    </image-preview-modal>
  </div>
</template>

<script>
import StickyHeader from '~/components/common/StickyHeader.vue'
import FramingDesign from '~~/components/common/FramingDesign.vue'
import Environment from '~~/components/common/Environment.vue'
import PopColor from '~~/components/common/PopColor.vue'
import ImageView from '~/components/Images/ImageView.vue'
import Accordion from '~/components/Accordion.vue'
import SlickCarousel from '~/components/Carousels/SlickCarousel.vue'
import ImagePreviewModal from '~/components/Modals/ImagePreviewModal.vue'
import ResizeMixin from '@/mixins/ResizeMixin'

export default {
  components: {
    StickyHeader,
    ImageView,
    FramingDesign,
    Accordion,
    Environment,
    PopColor,
    SlickCarousel,
    ImagePreviewModal
  },

  mixins: [ ResizeMixin ],

  data () {
    return {
      title: 'Dividing Glass Wall Features',
      modalContent: '',
      modalVisibility: false,
      finishingCardClicked: false,
      finishingCardItems: [],
      featuresList: [
        {
          svg: require('~/assets/images/icons/ic-seismic-approved-primary.svg'),
          text: 'Seismic approved for use\nin California'
        },
        {
          svg: require('~/assets/images/icons/ic-lead-times-blue.svg'),
          text: '2-week Lead Time\nQuick Ship'
        },
        {
          svg: require('~/assets/images/icons/ic-tax-blue.svg'),
          text: 'Qualifies for 100% first year tax\ndepreciation for a savings of 36%!'
        },
        {
          svg: require('~/assets/images/icons/ic-leed-blue.svg'),
          text: 'Qualifies for LEED Points'
        },
        {
          svg: require('~/assets/images/icons/ic-vr-primary.svg'),
          text: 'AutoDesk Revit Software with\nVR (virtual reality) 3D Capability'
        },
        {
          svg: require('~/assets/images/icons/ic-warranty-blue.svg'),
          text: 'Limited Lifetime Warranty'
        }
      ],
      productsBenefits: [
        {
          heading: 'Sound Transmission',
          visibility: true,
          body: '<p class="accordion-text">ALUR’s Dividing Wall provides a 42 STC (Sound Transmission Class). A high rating such as this is optimal to prevent sound transmission between offices.</p>',
          id: 'sound-transmission'
        },
        {
          heading: 'Multiple Frame Finishes',
          body: '<div class="accordion-text">' +
            '<p>Standard:' +
            '  <ul class="order-list">' +
            '    <li>Anodized bead blasted aluminum</li>' +
            '  </ul><br/>' +
            '  <p>Premium:</p>' +
            '  <ul class="order-list">' +
            '    <li>Black PVDF Resin</li>' +
            '    <li>Bronze PVDF Resin</li>' +
            '    <li>White PVDF Resin</li>' +
            '    <li>Polished Aluminum</li>' +
            '  </ul><br/>' +
            '  <p>Custom:</p>' +
            '  <ul class="order-list">' +
            '    <li>Custom Color PVDF Resin</li>' +
            '  </ul>' +
            '  <br/>' +
            '</p>' +
            '</div>',
          id: 'multiple-frame'
        },
        {
          heading: 'Multiple Tile Finishes',
          body: '<div class="accordion-text">' +
            '  <ul class="order-list">' +
            '     <li>Thermofused Melamine (TFM) in white and gray</li>' +
            '     <li>Markerboard in standard and magnetic</li>' +
            '     <li>High Pressure Laminate available in Wilsonart decorative laminates or COM</li>' +
            '     <li>Fabric in tackable and acoustical, fabric wrapped and COM</li>' +
            '  </ul>' +
            '</div>',
          id: 'multiple-tile'
        },
        {
          heading: 'Seismic Tested',
          body: '<p class="accordion-text">Approved for use in California. View IAPMO Evaluation for' +
              '<a href="/files/Alur-glass-IAPMO.pdf" target="_blank"> ALUR Glass Wall </a> and' +
              '<a href="/files/Dividing-wall-IAPMO.pdf" target="_blank"> ALUR Dividing Wall </a>' +
            '</p>',
          id: 'seismic-tested'
        },
        {
          heading: 'Qualify for LEED® Points',
          body: '<div class="accordion-text">' +
            '  <ul class="order-list">' +
            '     <li>ALUR Glass and Dividing Walls are movable, sustainable and reusable.</li>' +
            '     <li>All products qualify for LEED® credits for new and existing buildings.</li>' +
            '  </ul>' +
            '</div>',
          id: 'qualify-points'
        },
        {
          heading: 'VR Renderings',
          body: '<p class="accordion-text">View renderings in 3D virtual reality. Uses AutoDesk® Revit Software. Free VR glasses available with every installation.</p>',
          id: 'vr-renderings'
        },
        {
          heading: 'Lifetime Warranty',
          body: '<p class="accordion-text">Limited Lifetime Warranty. For support, please <a href="/get-started" target="_blank"> contact us </a> or call us at 973-446-2300.</p>',
          id: 'sound-compression-seals'
        }
      ],
      faqs: [
        {
          heading: 'Is ALUR demountable?',
          visibility: true,
          body: '<p class="accordion-text">ALUR is a demountable wall system. One if the key advantages of the ALUR is that it is a complete system vs an ad hoc set of aluminum extrusions and glazing with silicone “wet” joints.  This is a very important distinction from what is typically referred to as stick built and storefront glass walls. Demountable walls also qualify for accelerated tax depreciation.</p>',
          id: 'alur-demountable'
        },
        {
          heading: 'Is Dividing Wall available in both horizontal and vertical tiles?',
          body: '<p class="accordion-text">Yes. The ALUR Dividing Wall was developed for both functional and aesthetic excellence. The “vertical” application is for dividing space only and is not intended to hang components. This eliminates the need for a space between tiles for hanging tracks, resulting in a more unified appearance and tighter fit between tiles to reduce sound transmission. The “horizontal” application has a built-in track that accepts hang-on components and also serves as an architectural reveal (no vertical seams) to separate various functional and decorative tile options. The horizontal tracks also provide additional rigidity when hanging wall-mounted components.</p>',
          id: 'dividing-glass-wall'
        },
        {
          heading: 'What is the STC for Dividing Wall?',
          body: '<p class="accordion-text">ALUR’s Dividing Wall provides a 42 STC (Sound Transmission Class). A high rating such as this is optimal to prevent sound transmission between offices.</p>',
          id: 'dividing-glass-wall-polycarbonate'
        },
        {
          heading: 'How does Dividing Wall compare to cost of drywall?',
          body: '<p class="accordion-text">The initial cost is higher than drywall, but comparable to glass storefront assemblies that include doors and hardware. When comparing costs, it is important to consider all the trades that will be affected by installing completed walls at the same time as the furniture (as opposed to typical construction costs). This includes painters who will have fewer corners and less trim. Also, carpets, floor bases and ceilings will have fewer stops or cuts. Demolition, sanding and other debris producing actions will be reduced. In addition, ALUR is categorized as furniture by the IRS and therefore qualifies for accelerated depreciation in most cases. Check with your accountant for details.</p>',
          id: 'dividing-drywall'
        }
      ],
      finishesCards: [
        [
            {
              cardTitle: 'Thermofused \nMelamine (TFM)',
              cardLogo: require('~/assets/images/bg_thmb_finish_thermoMela.jpg'),
              cardSrc: require('~/assets/images/finishes-solid/bg_product_divindg_wallFinish_TM_1.jpg'),
              cardText: 'Available in:\n White & Gray',
              cardAction: 'View Photos'
            },
            {
              cardSrc: require('~/assets/images/finishes-solid/bg_product_divindg_wallFinish_TM_2.jpg'),
            },
            {
              cardSrc: require('~/assets/images/finishes-solid/bg_product_divindg_wallFinish_TM_3.jpg'),
            },
            {
              cardSrc: require('~/assets/images/finishes-solid/bg_product_divindg_wallFinish_TM_4.jpg'),
            }
        ],
        [
            {
              cardTitle: 'Markerboard',
              cardLogo: require('~/assets/images/bg_thmb_finish_markerBoard.jpg'),
              cardSrc: require('~/assets/images/bg_product_divindg_wallFinish_Marker_1.jpg'),
              cardText: 'Available in:\n Standard & Magnetic',
              cardAction: 'View Photos'
            },
            {
              cardSrc: require('~/assets/images/bg_product_divindg_wallFinish_Marker_2.jpg'),
            }
        ],
        [
            {
              cardTitle: 'High Pressure \nLaminate',
              cardLogo: require('~/assets/images/bg_thmb_finish_laminate.jpg'),
              cardSrc: require('~/assets/images/finishes-solid/bg_product_divindg_wallFinish_laminate_1.jpg'),
              cardText: 'Available in:\n Wilsonart & COM',
              cardAction: 'View Photos'
            },
            {
              cardSrc: require('~/assets/images/finishes-solid/bg_product_divindg_wallFinish_laminate_2.jpg'),
            },
            {
              cardSrc: require('~/assets/images/finishes-solid/bg_product_divindg_wallFinish_laminate_3.jpg'),
            }
        ],
        [
            {
              cardTitle: 'Fabric',
              cardLogo: require('~/assets/images/bg_thmb_finish_fabric.jpg'),
              cardSrc: require('~/assets/images/finishes-solid/bg_product_divindg_wallFinish_fabric_1.jpg'),
              cardText: 'Available in:\n Acoustical & Fabric Wrap',
              cardAction: 'View Photos'
            },
            {
              cardSrc: require('~/assets/images/finishes-solid/bg_product_divindg_wallFinish_fabric_2.jpg'),
            },
            {
              cardSrc: require('~/assets/images/finishes-solid/bg_product_divindg_wallFinish_fabric_3.jpg'),
            },
            {
              cardSrc: require('~/assets/images/finishes-solid/bg_product_divindg_wallFinish_fabric_4.jpg'),
            },
            {
              cardSrc: require('~/assets/images/finishes-solid/bg_product_divindg_wallFinish_fabric_5.jpg'),
            }
        ]
      ],
      slideOptions: {
        slidesToShow: 4,
        infinite: true,
        accessibility: true,
        swipe: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              dots: true,
              arrows: false
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              dots: true,
              arrows: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              dots: true,
              arrows: false
            }
          }
        ]
      },
      swiperOption: {
        loop: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: false,
        },
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        }
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
  },
  methods: {
    previewImage (item) {
      this.modalContent = item.overviewSrc
      this.modalVisibility = true
    },
    previewFinishingCards (items) {
      this.finishingCardClicked = true
      this.finishingCardItems = items
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
    margin: 88px 0;
  }
  .section-dividing-overview-gallery {
    margin-bottom: 0;
    .finishes-gallery {
      margin: 0;
      width: 100%;
      .gallery-item:hover {
        .item-img-cover {
          .item-img {
            max-width: 300px;
            transform: scale(1, 1.1);
            -ms-transform: scale(1, 1.1);
            -webkit-transform: scale(1, 1.1);
            filter: blur(0px);
            opacity: 1;
            transition: all .3s ease;
            background-color: $alur-dark-grey;
            border-radius: 6px;
          }
        }
      }
      .gallery-item {
        padding-left: 0;
        height: 540px;
        width: 315px !important;
      }
      .item-img-cover {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all .3s ease;
        background-color: $alur-dark-grey;
        border-radius: 6px;
        overflow: hidden;
        cursor: pointer;

        .item-img {
          width: 100%;
          height: 100%;
          max-width: 285px;
          background-position: 50%;
          opacity: .72;
          filter: blur(13px);
          background-size: cover;
        }
      }
      .content {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        pre {
          color: white;
        }
        .title {
          position: absolute;
          bottom: 50%;
          left: 0;
          width: 100%;
          transform: translateY(50%);
          font-size: 1.6rem;
          line-height: 1.42;
          transition: all .3s ease;
          .logo {
            display: block;
            width: 68px;
            height: 68px;
            border: 2px solid white;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 24px;
            box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .13), 0 0 4px 0 rgba(0, 0, 0, .17);
            transition: opacity .3s ease;
            border-radius: 50%;
          }
          pre {
            display: flex;
            min-height: 56px;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
          }
        }
        .footer {
          position: absolute;
          bottom: 32px;
          left: 0;
          width: 100%;
          button {
            margin: 0 auto;
          }
        }
      }
    }
    .desc {
      display: none;
      margin: 0;
      color: $alur-grey-color2;
      font-size: 14px;
      font-weight: 300;
      line-height: 24px;
      padding: 0 40px;
    }
    .finishes-gallery-preview {
      margin-top: 60px;
      margin-bottom: 80px;
      max-height: 540px;
      .card-title {
        color: $alur-primary-color;
        bottom: 30%;
      }
    }
  }
  .section-duo-leaflet {
    margin-top: 0;
    background-color: $alur-primary-color1;
    padding: 120px 0;
    .section-desc {
      font-size: 1rem;
      font-weight: 300;
      line-height: 2.13;
      letter-spacing: -.2px;
    }
    .img-responsive{
      width: 100%;
    }
    .container {
      .row:nth-child(2) {
        margin: 120px 0;
      }
    }
  }
  .feature-list-glass-wall{
    text-align: center;
    margin-top: 120px;
    .h1{
      margin-bottom: 56px !important;
    }
    pre{
      color: $alur-light-grey;
      font-size: 1.1rem;
      font-weight: 300;
      margin-bottom: 60px;
    }
  }
  .section-product {
    margin-bottom: 40px;
    .product-title {
      min-height: 515px;
      background-color: $alur-dark-grey;
      background-position: bottom;
      background-size: cover;
      &:before,
      &:after {
        content: "";
        display: table;
      }
      div {
        text-transform: uppercase;
        letter-spacing: 12px;
        color: hsla(0,0%,100%,.75);
        text-align: center;
        transition: all 1.5s ease;
      }
    }
    .container {
      &:before,
      &:after {
        content: "";
        display: table;
      }
      .row {
        margin-top: -90px;
      }
    }
  }
  .section-environment {
    background-image: url('../../../assets/images/bg-product-environment.jpg');
    max-height: 700px;
    background-color: $alur-light-blue;
    background-position: bottom;
  }
  .section-benefits {
    padding: 80px 0;
    background-color: $alur-primary-color1;
    .title {
      font-size: 1.3rem;
      line-height: 100px;
      color: $alur-dark-grey;
    }
  }
  .section-duo-spot1-video {
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
    .section-duo-leaflet {
      padding: 48px 0;
      .container{
        width: 100% !important;
        padding: 0;
        margin: 0;
        max-width: 100% !important;
      }
      .h4, .section-desc{
        padding-left: 16px;
        padding-right: 16px;
        width: 100% !important;
      }
      .row:nth-child(2) {
        margin: 48px 0 !important;
      }
    }
    .feature-list-glass-wall{
      margin-top: 48px;
      .h1 {
        margin-bottom: 48px !important;
      }
      pre {
        font-size: .9rem;
        margin-bottom: 40px;
      }
    }
    .section-benefits {
      padding: 0;
    }
    .section-duo-faq {
      margin-top: 48px;
      margin-bottom: 0;
    }
    .section-environment {
      background-image: linear-gradient(#375798, #b5dbe3);
      background-position: top;
      min-height: 1450px;
    }
    .section-product {
      .product-title {
        min-height: 264px;
        background-position: bottom center;
      }
    }
    .section-dividing-overview-gallery {
      .container {
        max-width: calc(100% - 16px);
        padding: 0;
        .h1{
          margin-bottom: 5px;
        }
        .finishes-gallery {
          .gallery-item:hover {
            .item-img-cover {
              .item-img {
                max-width: 210px;
              }
            }
          }
          .gallery-item {
            height: 315px;
            width: 220px !important;
          }
          .item-img {
            max-width: 190px;
          }
          .content {
            .title {
              .logo {
                width: 56px;
                height: 56px;
                margin-bottom: 0;
              }
              pre {
                font-size: 1.25rem;
                line-height: 1.25;
              }
            }
            .footer {
              bottom: 5px;
            }
          }
        }
        .desc {
          display: block;
        }
        .finishes-gallery-preview {
          margin-top: 30px;
          margin-bottom: 30px;
          .card-title {
            color: $alur-primary-color;
            bottom: 10%;
          }
          .slider-navigation {
            display: none;
          }
        }
      }
    }
  }
</style>
<style lang="scss">
  .finishes-gallery {
    .carousel {
      overflow: hidden;
      padding: 60px 0;
    }
    .slick-list {
      overflow: unset;
    }
    .slick-dots {
      bottom: -50px;
    }
    .slick-dotted {
      margin-bottom: 50px;
    }
  }
  @media only screen and (max-width: 768px) {
    .finishes-gallery {
      .carousel {
        padding: 30px 0;
      }
    }
  }
</style>
