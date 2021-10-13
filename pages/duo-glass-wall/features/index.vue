<template>
  <div>
    <sticky-header title="<strong>DUO</strong> Glass Wall" />
    <section class="section section-duo-overview-gallery">
      <b-container>
        <b-row
          class="h1 fw-300 mx-auto mb-3 text-center"
          align-h="center"
        >
          Framing to support any design.
        </b-row>
        <b-row class="mx-auto text-description text-center">
          Minimally designed, precision extruded aluminum profiles provide exceptional support and durability, while accentuating the natural beauty of glass.
        </b-row>
        <b-row>
          <slick-carousel1
            :navItems="5"
            slickFor="framing-for"
            slickNav="framing-nav"
          >
            <template slot="slider-for">
              <div
                v-for="(item, i) in overviewGalleries"
                :key="i"
                class="d-flex align-items-stretch"
              >
                <div class="position-relative w-100">
                  <image-view
                    :name="item.name"
                    ext="jpg"
                    class="responsive-img"
                  />
                </div>
              </div>
            </template>
            <template slot="slider-nav">
              <div
                v-for="(item, i) in overviewGalleries"
                :key="i"
                class="spot-wrap d-flex align-items-stretch justify-content-center"
                style="opacity: 1"
              >
                <div class="handle-item d-flex flex-column align-items-center">
                  <div class="img-wrapper mb-4">
                    <b-img
                      :src="item.handlerSrc"
                      style="width: 38px; margin: 0 auto;"
                    />
                  </div>
                  <pre class="text-center">{{item.handlerText}}</pre>
                </div>
              </div>
            </template>
          </slick-carousel1>
        </b-row>
      </b-container>
    </section>
    <section
      id="glass-link"
      class="section-duo-glass-types scroll-fade-in"
      v-scroll
    >
      <b-container>
        <b-row
          class="h1 fw-300 mb-3 text-center"
          align-h="center"
        >
          The right glass for any office
        </b-row>
        <b-row class="mx-auto text-description mb-5 text-center">
          Duo’s slim profile framing creates a modern, lighter scale look. Its recessed channels give the appearance of glass floating in space.
        </b-row>
        <b-row>
          <div class="wrapper mx-auto glass-img">
            <image-view
              name="bg_glassType_laminated"
              ext="png"
              class="img-left scroll-fade-in"
              v-scroll.animation
            />
            <image-view
              name="bg_glassType_tempered"
              ext="png"
              class="img-right scroll-fade-in"
              v-scroll.animation
            />
            <div
              class="desc-left scroll-fade-in"
              v-scroll.animation
            >Laminated <br>(Clear & Low-Iron)</div>
            <div
              class="desc-right scroll-fade-in"
              v-scroll.animation
            >Tempered <br>(Clear & Low-Iron)</div>
          </div>
        </b-row>
      </b-container>
    </section>
    <section
      class="section-duo-examples-gallery scroll-fade-in"
      v-scroll
    >
      <b-container>
        <b-row
          class="h5 fw-500 mb-5 section-title"
          align-h="center"
        >Examples of DUO Glass</b-row>
        <b-row>
          <slick-carousel :options="duoOptions">
            <template slot="content">
              <div
                v-for="(duo, key) in duoExamples"
                :key="key"
                class="spot-wrap pr-4 d-flex align-items-stretch"
              >
                <img
                  class="img-responsive"
                  :src="duo.src"
                  style="opacity: 1;"
                  alt="DUO Example"
                />
              </div>
            </template>
          </slick-carousel>
        </b-row>
      </b-container>
    </section>
    <section
      id="door-link"
      class="section-product section-product-doors scroll-fade-in"
      v-scroll
    >
      <b-row
        class="h1 fw-300 mx-auto mb-3 product-title d-flex align-items-center"
        align-h="center"
      >
        <div
          class="scroll-fade-up"
          v-scroll.fadeup
        >DUO DOORS</div>
      </b-row>
      <b-container>
        <div v-if="desktopMode">
          <b-row>
            <b-col
              cols="4"
              v-for="(d, i) in doors"
              :key="i"
            >
              <card-carousel
                :cardTitle="d.productTitle"
                :cardText="d.productText"
                :cardDesc="d.productDesc"
                :slides="d.products"
                @view="showModal"
                colorTheme="#3E9C98"
              />
            </b-col>
          </b-row>
        </div>
        <div v-else>
          <b-row>
            <slick-carousel :options="productSlideOption">
              <template slot="content">
                <div
                  v-for="(d, i) in doors"
                  :key="i"
                  class="spot-wrap pl-2 pr-2"
                  style="max-width: 365px"
                >
                  <card-carousel
                    :cardTitle="d.productTitle"
                    :cardText="d.productText"
                    :cardDesc="d.productDesc"
                    :slides="d.products"
                    @view="showModal"
                  />
                </div>
              </template>
            </slick-carousel>
          </b-row>
        </div>
      </b-container>
    </section>
    <section
      class="section-product section-product-hardware scroll-fade-in"
      v-scroll
    >
      <b-row
        class="h1 fw-300 mx-auto mb-3 product-title d-flex align-items-center"
        align-h="center"
      >
        <div
          class="scroll-fade-up"
          v-scroll.fadeup
        >DUO HARDWARE</div>
      </b-row>
      <b-container>
        <div v-if="desktopMode">
          <b-row>
            <b-col
              cols="4"
              v-for="(h, i) in hardware"
              :key="i"
            >
              <card-carousel
                :cardTitle="h.productTitle"
                :cardText="h.productText"
                :slides="h.products"
                @view="showModal"
              />
            </b-col>
          </b-row>
        </div>
        <div v-else>
          <b-row>
            <slick-carousel :options="productSlideOption">
              <template slot="content">
                <div
                  v-for="(h, i) in hardware"
                  :key="i"
                  class="spot-wrap pl-2 pr-2"
                  style="max-width: 365px"
                >
                  <card-carousel
                    :cardTitle="h.productTitle"
                    :cardText="h.productText"
                    :slides="h.products"
                    @view="showModal"
                  />
                </div>
              </template>
            </slick-carousel>
          </b-row>
        </div>
      </b-container>
    </section>
    <section
      class="section-duo-spot1-video mt-4 d-xs-none d-sm-none d-md-block d-lg-block scroll-fade-in"
      v-scroll
    >
      <video
        autoplay
        loop
        muted
      >
        <source src="~assets/video/vid_alurFeet.mp4">
      </video>
    </section>
    <section
      class="section-spot1 d-xs-block d-sm-block d-md-none d-lg-none scroll-fade-in"
      v-scroll
    >
      <b-container class="row h1 fw-300 mx-auto section-title d-flex align-items-center justify-content-center mb-0">
        <b-row>vivamus alur ultricie</b-row>
      </b-container>
    </section>
    <carousel-modal
      :modalShow="modalVisibility"
      :images="imageSrc"
      @hide="hideModal"
    />
  </div>
</template>

<script>
  import StickyHeader from '~/components/common/StickyHeader.vue'
  import SlickCarousel1 from '~/components/Carousels/SlickCarousel1.vue'
  import SlickCarousel from '~/components/Carousels/SlickCarousel.vue'
  import ImageView from '~/components/Images/ImageView.vue'
  import CardCarousel from '~/components/Carousels/CardCarousel.vue'
  import CarouselModal from '~/components/Modals/CarouselModal.vue'
  import ResizeMixin from '@/mixins/ResizeMixin'

  export default {
    components: {
      StickyHeader,
      SlickCarousel1,
      ImageView,
      CardCarousel,
      SlickCarousel,
      CarouselModal
    },

    mixins: [ ResizeMixin ],

    data () {
      return {
        title: 'Duo Glass Wall Features',
        modalVisibility: false,
        imageSrc: [],
        overviewGalleries: [
          {
            name: 'Anodized_Finish_HQ',
            handlerSrc: require('~/assets/images/duo/slide1-thumb.jpg'),
            handlerText: 'Anodized\nAluminum'
          },
          {
            name: 'Black_Main_Render_HQ',
            handlerSrc: require('~/assets/images/duo/slide2-thumb.jpg'),
            handlerText: 'Black PVDF'
          },
          {
            name: 'Bronze_Finish_HQ',
            handlerSrc: require('~/assets/images/duo/slide3-thumb.jpg'),
            handlerText: 'Bronze PVDF'
          },
          {
            name: 'White_Finish_HQ',
            handlerSrc: require('~/assets/images/duo/slide4-thumb.jpg'),
            handlerText: 'White PVDF'
          },
          {
            name: 'DarkGreen_Finish_HQ',
            handlerSrc: require('~/assets/images/duo/slide5-thumb.jpg'),
            handlerText: 'Custom\nMatched PVDF'
          }
        ],
        duoExamples: [
          {
            src: require('~/assets/images/duo/example-1.jpg')
          },
          {
            src: require('~/assets/images/duo/example-2.jpg')
          },
          {
            src: require('~/assets/images/duo/example-3.jpg')
          },
          {
            src: require('~/assets/images/duo/example-4.jpg')
          },
          {
            src: require('~/assets/images/duo/example-1.jpg')
          },
          {
            src: require('~/assets/images/duo/example-2.jpg')
          },
          {
            src: require('~/assets/images/duo/example-3.jpg')
          },
          {
            src: require('~/assets/images/duo/example-4.jpg')
          }
        ],
        doors: [
          {
            productTitle: 'Double Glazed Pivot Door',
            productText: 'The double glazed pivot door features 4-sided sound seals, including a bottom brush seal.',
            productDesc: 'An optional integrated door closer is also available.',
            products: [
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedPivotDoor_01.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedPivotDoor_02.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedPivotDoor_03.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedPivotDoor_04.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedPivotDoor_05.jpg'),
              }
            ]
          },
          {
            productTitle: 'Double Glazed Pocket Sliding Door',
            productText: 'The double glazed sliding door features a unique pocket-style design and includes 4-sided door seals, including bottom brush seal.',
            products: [
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedDoublePocketSlidingDoor_01.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedDoublePocketSlidingDoor_02.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedDoublePocketSlidingDoor_03.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedDoublePocketSlidingDoor_04.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedDoublePocketSlidingDoor_05.jpg'),
              }
            ]
          },
          {
            productTitle: 'Wood Pivot Door',
            productText: 'The wood offset pivot door features 3-sided sound seals.',
            products: [
              {
                src: require('~/assets/images/products/duo-doors-slides/Wood_Pivot_Door_01.jpg'),
              }
            ]
          },
          {
            productTitle: 'Double Glazed Double Pivot Doors',
            productText: 'The double glazed double pivot door features a unique pocket-style design and includes 3-sided door seals, including bottom brush seal.',
            products: [
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedPivot_Double_Door_01.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedPivot_Double_Door_02.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedPivot_Double_Door_04.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedPivot_Double_Door_05.jpg'),
              }
            ]
          },
          {
            productTitle: 'Double Glazed Double Pocket Sliding Door',
            productText: 'The double glazed double sliding door features a unique pocket-style design and includes 3-sided door seals, including bottom brush seal.',
            products: [
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedPocketSlidingDoor_01.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedPocketSlidingDoor_02.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedPocketSlidingDoor_03.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-doors-large/DoubleGlazedPocketSlidingDoor_04.jpg'),
              }
            ]
          },
          {
            productTitle: 'Single Glazed Hinged Door',
            productText: 'The single glazed hinged door is designed to fit in the Duo door frame system. Features 4-sided door seals, including bottom brush seal.',
            products: [
              {
                src: require('~/assets/images/products/duo-doors-slides/Duo_SingleGlazed_HingedDoor_01.jpg'),
              }
            ]
          },
          {
            productTitle: 'Duo Single Glazed Sliding Door',
            productText: 'The single glazed sliding door is designed to fit in the Duo door frame system. Features 4-sided door seals, including bottom brush seal.',
            products: [
              {
                src: require('~/assets/images/products/duo-doors-large/Duo_SingleGlazed_SlidingDoor_01.jpg'),
              }
            ]
          }
        ],
        hardware: [
          {
            productTitle: 'Cylindrical Lever Set',
            productText: 'The cylindrical lever set for double glazed doors is available in locking and non-locking options. Accepts industry standard Best style 7-pin SFIC. Master key and keyed alike feature.',
            products: [
              {
                src: require('~/assets/images/products/duo-hardware-large/Cylindrical-Lever-Set_01.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-hardware-large/Cylindrical-Lever-Set_02.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-hardware-large/Cylindrical-Lever-Set_03.jpg'),
              }
            ]
          },
          {
            productTitle: '18" Non-Locking Ladder Pull',
            productText: 'The 18” pull is available in non-locking option only and available in brushed stainless, black and bronze finishes.',
            products: [
              {
                src: require('~/assets/images/products/duo-hardware-large/18in-Non-Locking-Ladder-Pull_01.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-hardware-large/18in-Non-Locking-Ladder-Pull_02.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-hardware-large/18in-Non-Locking-Ladder-Pull_03.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-hardware-large/18in-Non-Locking-Ladder-Pull_04.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-hardware-large/18in-Non-Locking-Ladder-Pull_05.jpg'),
              }
            ]
          },
          {
            productTitle: 'Top Aligned Ladder Pull',
            productText: 'Available in locking and non-locking options. Features ADA compliant hardware and thumb turns. Accepts industry standard Best style 7-pin SFIC.',
            products: [
              {
                src: require('~/assets/images/products/duo-hardware-large/Top-Aligned-Ladder-Pull_01.jpg'),
              },
              {
                src: require('~/assets/images/products/duo-hardware-large/Top-Aligned-Ladder-Pull_02.jpg'),
              }
            ]
          },
          {
            productTitle: 'Integrated Door Closer',
            productText: 'The integrated overhead closer for double glazed pivot doors is concealed within the top of the door frame and available in 90 degree hold open and no hold open options.',
            products: [
              {
                src: require('~/assets/images/products/duo-hardware-large/Integrated-Door-Closer.jpg'),
              }
            ]
          },
          {
            productTitle: 'Soft Brake for Sliding Door',
            productText: 'The dual action soft braking mechanism operates on opening and closing functions of double glazed sliding doors.',
            products: [
              {
                src: require('~/assets/images/products/duo-hardware-large/Soft-Brake-for-Sliding-Door.jpg'),
              }
            ]
          }
        ],
        duoOptions: {
          slidesToShow: 4,
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
        },
        productSlideOption: {
          slidesToShow: 3,
          infinite: true,
          accessibility: true,
          adaptiveHeight: true,
          edgeFriction: 0.30,
          dots: true,
          swipe: true,
          variableWidth: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 400,
              settings: {
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
    },
    mounted () {
      const hash = this.$route.hash
      if (hash) {
        setTimeout(() => this.scrollFix(hash), 1)
      }
    },
    methods: {
      showModal (data) {
        this.modalVisibility = true
        this.imageSrc = data
      },
      hideModal () {
        this.modalVisibility = false
      },
      scrollFix (hashbang) {
        location.href = hashbang
      }
    }
  }
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
  .section {
    margin: 88px 0;

    .overview-text {
      width: 300px;
      text-align: left;
      background-color: white;
      padding: 10px;
      font-size: 0.9rem;
      border-radius: 6px;
    }
  }
  .section-duo-overview-gallery {
    .text-description {
      width: 70%;
      margin-bottom: 70px;
      text-align: center;
      letter-spacing: -.3px;
      font-size: 1.1rem;
      color: $alur-light-grey;
    }
    .row {
      .framing-nav {
        .slick-current {
          .spot-wrap {
            .handle-item {
              .img-wrapper {
                border: 2px solid $alur-green;
                border-radius: 50%;
                padding: 3px;
              }
              pre {
                display: block;
              }
            }
          }
        }
        .handle-item {
          cursor: pointer;
          padding-top: 10px;
          .img-wrapper {
            img {
              border-radius: 50%;
            }
          }
          pre {
            color: $alur-green;
            font-weight: 700;
            display: none;
          }
        }
      }
    }
  }
  .section-product {
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
  .section-product-doors {
    .product-title {
      background-image: url('../../../assets/images/duo/duo-product-doors.jpg');
    }
  }
  .section-product-hardware {
    .product-title {
      background-image: url('../../../assets/images/duo/duo-product-hardware.jpg');
    }
  }
  .section-duo-examples-gallery {
    background-color: $alur-grey-color;
    padding: 80px 0;
    .section-title {
      color: $alur-green;
      letter-spacing: .4px;
    }
  }
  .section-duo-glass-types {
    margin-top: 120px;
    .text-description{
      width: 60%;
      margin: 0 auto;
      text-align: center;
    }
    .wrapper {
      position: relative;
      .img-left {
        transform: translate3d(55px,0,0);
        opacity: 1;
      }
      .img-right {
        transform: translate3d(-55px,0,0);
        opacity: 1;
      }
      div {
        position: absolute;
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.33;
        letter-spacing: .4px;
        white-space: nowrap;
        &:before {
          position: absolute;
          height: 0;
          border-bottom: 1px solid $alur-dark-grey;
          content: "";
        }
      }
      .desc-left {
        top: 52%;
        left: -16%;
        text-align: right;
        &:before {
          top: 50%;
          left: 110%;
          width: 180px;
        }
      }
      .desc-right {
        top: 34%;
        left: 95%;
        text-align: left;
        &:before {
          top: 50%;
          right: 110%;
          width: 180px;
        }
      }
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
  .section-spot1 {
    background-image: url('../../../assets/images/duo/duo-spot2-bg.jpg');
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
  @media only screen and (max-width: 1200px) {
    .section-product {
      margin-bottom: 40px;
      .slick-slide {
        opacity: 1 !important;
        .spot-wrap {
          max-width: 365px !important;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .section {
      margin-bottom: 48px;
    }
    .container {
      max-width: calc(100% - 16px) !important;
      .text-description {
        width: 100%;
        margin-bottom: 40px !important;
      }
    }
    .section-product {
      .product-title {
        min-height: 264px;
        background-position: bottom center;
      }
    }
    .section-duo-overview-gallery,
    .section-duo-glass-types {
      margin-top: 48px;
    }
    .section-duo-glass-types {
      margin-top: 48px;
      .glass-img{
        margin-top: 30px;
      }
      .wrapper {
        .desc-left {
          top: -7%;
          left: 20%;
          text-align: center;
          font-size: 1rem;
          color: $alur-green;
          &:before {
            width: 0;
            height: 200px;
            left: 54%;
            top: 120%;
          }
        }
        .desc-right {
          font-size: 1rem;
          color: $alur-green;
          top: -7%;
          left: 60%;
          text-align: center;
          &:before {
            width: 0;
            height: 180px;
            left: 45%;
            top: 120%;
          }
        }
        div:before {
          border-left: 1px solid rgba(31, 78, 76, 0.5);
        }
      }
    }
  }
  @media only screen and (max-width: 663px) {
    .section-duo-glass-types {
      .wrapper {
        .img-left {
          width: 240px;
          transform: translate3d(43px, 0, 0);
        }
        .img-right {
          width: 256px;
          transform: translate3d(-43px, 0, 0);
        }
        .desc-left {
          top: -7%;
          left: 20%;
          &:before {
            height: 160px;
          }
        }
        .desc-right {
          top: -7%;
          left: 60%;
          text-align: center;
          &:before {
            height: 140px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 515px) {
    .section-duo-glass-types {
      .wrapper {
        .img-left {
          width: 200px;
          transform: translate3d(35px, 0, 0);
        }
        .img-right {
          width: 214px;
          transform: translate3d(-35px, 0, 0);
        }
        .desc-left {
          top: -9%;
          left: 12%;
          &:before {
            height: 160px;
          }
        }
        .desc-right {
          top: -9%;
          left: 56%;
          text-align: center;
          &:before {
            height: 140px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 433px) {
    .section-duo-glass-types {
      .wrapper {
        .img-left {
          width: 140px;
          transform: translate3d(25px, 0, 0);
        }
        .img-right {
          width: 149px;
          transform: translate3d(-25px, 0, 0);
        }
        .desc-left {
          top: -11%;
          left: 2%;
          &:before {
            height: 120px;
          }
        }
        .desc-right {
          top: -11%;
          left: 55%;
          text-align: center;
          &:before {
            height: 110px;
          }
        }
        div {
          font-size: .7rem;
        }
      }
    }
  }
</style>
<style lang="scss">
  .framing-nav {
    width: 60% !important;
    margin: 0 auto;
  }
  @media only screen and (max-width: 768px) {
    .framing-nav {
      width: 90% !important;
    }
  }
  @media only screen and (max-width: 508px) {
    .framing-nav {
      .handle-item {
        pre {
          font-size: .8rem;
        }
      }
    }
  }
</style>
