<template>
  <div>
    <sticky-header title="<strong>DUO</strong> Glass Wall" />
    <section class="section section-hero-duo">
      <div class="section-hero-wrap">
        <div class="section-hero-left-2">
          <b-img src="~/assets/images/duo-wall-logo-bw.svg" class="img-wrapper"/>
          <div class="spot-title h1">Iconic. Timeless. ALUR.</div>
          <a
            class="hero-video-link d-flex align-items-center"
            href="https://my.matterport.com/show/?m=HYFgWo4mqsw&mls=1"
            target="_blank"
          >
            <div class="hero-video-icon mr-3 position-relative">
              <b-img src="~assets/images/glass-wall/matterport-thumbnail.jpg" />
            </div>
            <div class="link-text">
              <span class="fw-700">Explore the showroom</span>
              <p class="d-sm-block d-md-none">View the new Duo product line in 360º featured in our Chicago showroom.</p>
            </div>
          </a>
        </div>
        <div class="section-hero-right">
          <b-img src="~/assets/images/neocon-logo.svg" />
        </div>
      </div>
    </section>
    <section
      class="section section-duo-spot0 scroll-fade-in"
      v-scroll
    >
      <b-container>
        <b-row
          class="h1 section-features-title fw-300"
          align-h="center"
        >
          What makes Duo different?
        </b-row>
        <b-row>
          <slick-carousel :options="option1">
            <template slot="content">
              <b-col class="spot-wrap d-flex align-items-center flex-column">
                <div class="section-features-list-item-img mx-auto">
                  <b-img src="~assets/images/icons/ic-golden-ratio.svg" />
                </div>
                <div class="section-features-list-item-title fw-300">
                  <div class="title">Timeless Design</div>
                  <p>Designed using the Golden Ratio, a mathematical ratio found in nature, to create harmony between function and design.</p>
                </div>
              </b-col>
              <b-col class="spot-wrap d-flex align-items-center flex-column">
                <div class="section-features-list-item-img mx-auto">
                  <b-img src="~assets/images/icons/ic-caliper.svg" />
                </div>
                <div class="section-features-list-item-title fw-300">
                  <div class="title">Luxurious Details</div>
                  <p>Optional concealed closers for swing doors and a soft braking mechanism for sliding doors provide enhanced luxury and performance.</p>
                </div>
              </b-col>
              <b-col class="spot-wrap d-flex align-items-center flex-column">
                <div class="section-features-list-item-img mx-auto">
                  <b-img src="~assets/images/icons/ic-cup.svg" />
                </div>
                <div class="section-features-list-item-title fw-300">
                  <div class="title">Awarded</div>
                  <p>Winner of the prestigious NeoCon Gold Award for the Best Movable Wall System.</p>
                </div>
              </b-col>
            </template>
          </slick-carousel>
        </b-row>
      </b-container>
    </section>
    <section
      class="section duo-carousel-1 scroll-fade-in"
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
              class="responsive-img"
            />
          </div>
        </template>
      </slick-carousel>
    </section>
    <section
      class="section section-duo-overview-gallery scroll-fade-in"
      v-scroll
    >
      <b-container>
        <b-row
          class="h1 fw-300 mb-3 text-center"
          align-h="center"
        >
          Our signature minimalist design, <br class="d-none d-lg-block d-xl-block" /> now in a double-glazed system
        </b-row>
        <b-row
          class="text-description mx-auto text-center"
        >
          Meticulously crafted, Duo by ALUR combines refined features with enhanced sound attenuation performance, providing the privacy your space requires and the distinction you deserve.
        </b-row>
        <b-row
          class="w-100 mx-0 carousel-container"
          align-h="center"
        >
          <slick-carousel1
            v-if="tabletMode"
            :navItems="6"
            slickFor="signature-for"
            slickNav="signature-nav"
          >
            <template slot="slider-for">
              <div
                v-for="(item, i) in signatureDesigns"
                :key="i"
                class="d-flex align-items-stretch"
              >
                <div class="position-relative w-100">
                  <b-img
                    src="~assets/images/duo/slide1-main.jpg"
                    class="mb-5 responsive-img"
                  />
                  <div
                    class="position-absolute slide-info d-flex"
                    :style="item.style"
                  >
                    <div class="slide-info-content">
                      <div class="slide-info-title">{{item.desc}}</div>
                      <div class="slide-info-text">{{item.text}}</div>
                    </div>
                    <div class="slide-info-img">
                      <b-img
                        :src="item.src"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template slot="slider-nav">
              <div
                v-for="(item, i) in signatureDesigns"
                :key="i"
                class="spot-wrap d-flex align-items-stretch justify-content-center"
                style="opacity: 1"
              >
                <div class="handle-item d-flex justify-content-center flex-column">
                  <div class="image-wrapper">
                    <b-img
                      :src="item.thumb"
                      class="mb-4"
                      style="width: 48px; margin: 0 auto;"
                    />
                  </div>
                  <pre class="text-center">{{item.info}}</pre>
                </div>
              </div>
            </template>
          </slick-carousel1>
          <div
            v-else
            class="mobile-signature-container w-100"
          >
            <!--<div-->
              <!--class="mobile-signature position-relative mb-3"-->
              <!--@click="showModal"-->
            <!--&gt;-->
              <!--<div class="img-wrapper">-->
                <!--<b-img-->
                  <!--src="~assets/icons/Stroke_1.svg"-->
                <!--/>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="desc text-center">-->
              <!--Tap to learn more about DUO features on display in this scene-->
            <!--</div>-->
            <feature-preview :contents="signatureDesigns" />
          </div>
        </b-row>
      </b-container>
    </section>
    <section class="section-duo-spot3">
      <section
        class="section-duo-presentation scroll-fade-in"
        v-scroll
      >
        <b-container>
          <div class="presentation-item">
            <b-row
              class="h1 fw-300 mx-auto mb-3 title text-center"
              align-h="center"
            >
              A wall within a wall
            </b-row>
            <b-row
              align-h="center"
              class="desc text-center"
            >
              Superior sound control with double glazed panels and doors, including the industry’s first pocket style double glazed sliding door.
            </b-row>
            <b-row
              align-h="center"
              class="image"
            >
              <b-img src="~/assets/images/duo/animations/anim-1.gif" />
            </b-row>
          </div>
        </b-container>
        <b-container>
          <div class="presentation-item">
            <b-row
              class="h1 fw-300 mx-auto mb-3 title text-center"
              align-h="center"
            >
              Keep outside noise, outside
            </b-row>
            <b-row
              align-h="center"
              class="desc text-center"
            >
              Noise distractions are the number one deterrent to workplace productivity.
            </b-row>
            <b-row
              align-h="center"
              class="image"
            >
              <b-img src="~/assets/images/duo/animations/anim-2.gif" />
            </b-row>
          </div>
        </b-container>
        <b-container>
          <div class="presentation-item">
            <b-row
              class="h1 fw-300 mx-auto mb-3 title text-center"
              align-h="center"
            >
              The look that you want.<br> The privacy you need
            </b-row>
            <b-row
              align-h="center"
              class="desc text-center"
            >
              Create light-filled beautiful spaces that minimize noise distractions to enhance employee happiness and productivity.
            </b-row>
            <b-row
              align-h="center"
              class="image"
            >
              <b-img src="~/assets/images/duo/animations/anim-3.gif" />
            </b-row>
          </div>
        </b-container>
      </section>
      <section
        class="section-duo-upgrade scroll-fade-in"
        v-scroll
      >
        <b-container>
          <b-row
            class="h1 fw-300 mx-auto mb-3 title text-center"
            align-h="center"
          >
            Upgrade your office
          </b-row>
          <b-row
            align-h="center"
            class="desc text-center fw-300"
          >
            Our double glazed system can be combined with the single glazed panels and doors for<br> a more economical option.
          </b-row>
          <b-row>
            <b-col
              class="text-right section-div"
              cols="6"
            >
              <div class="title mb-5">Duo&trade; Double Glazed</div>
              <div class="content">
                <div class="mb-3 img-wrapper">
                  <b-img
                  src="~/assets/images/duo/upgrade-double.png"
                  class="responsive-img"
                />
                </div>
                <ul>
                  <li class="mb-3">Two 3/8" panes of tempered or laminated glass</li>
                  <li class="mb-3">2" airspace between panes of glass</li>
                  <li class="mb-3">Double glazed pivot and sliding doors</li>
                  <li class="mb-3">Locking and non-locking hardware options</li>
                  <li class="mb-3">ADA compliant hardware options</li>
                  <li class="mb-3">Integrated metal L and T connectors</li>
                  <li class="mb-3">Concealed glass edging</li>
                  <li class="mb-3">Ultra High Bond (UHB) glazing tape unites each pane</li>
                  <li class="mb-3">Optional concealed door closers for pivot doors</li>
                  <li class="mb-3">Optional soft braking mechanism for sliding doors</li>
                </ul>
              </div>
            </b-col>
            <b-col
              class="text-left section-div"
              cols="6"
            >
              <div class="title mb-5">Duo&trade; &nbsp;Single Glazed</div>
              <div class="content">
                <div class="mb-3 img-wrapper">
                  <b-img
                  src="~/assets/images/duo/upgrade-single.png"
                  class="responsive-img"
                />
                </div>
                <ul>
                  <li class="mb-3">Single 3/8" pane of tempered or laminated glass</li>
                  <li class="mb-3">Single glazed 1/2" thick hinged and sliding doors</li>
                  <li class="mb-3">Locking and non-locking hardware options</li>
                  <li class="mb-3">ADA compliant hardware options</li>
                  <li class="mb-3">Integrated metal L and T connectors</li>
                  <li class="mb-3">Concealed glass edging</li>
                  <li class="mb-3">Ultra High Bond (UHB) glazing tape unites each pane</li>
                </ul>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </section>
    <section class="section-design section-duo-spot1">
      <b-row
        class="h1 fw-300 mx-auto scroll-fade-in"
        v-scroll
      >Harmony in design</b-row>
    </section>
    <section class="section-duo-leaflet bg-lightblue">
      <b-container>
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
          >
            <div class="section-content-img mb-4">
              <image-view
                class="responsive-img"
                name="leaflet-5"
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
            class="align-self-center"
          >
            <div>
              <div class="section-subtitle">Form and function &mdash; <br>perfected</div>
              <div class="section-content">
                After speaking with building and business owners, designers, architects and contractors alike, we’ve responded with a product designed—and tested—for your exact needs.
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
            lg="5"
            xl="5"
            class="align-self-center section-text"
          >
            <div class="section-div-2">
              <div class="section-subtitle">A timeless design that shares the DNA of architectural icons</div>
              <div class="section-content">
                Meticulously crafted, Duo by ALUR combines refined features with enhanced sound attenuation performance, providing the privacy your space requires and the distinction you deserve. Built on the proven and highly awarded ALUR single-glazed system, every aspect of Duo encapsulates the Golden Ratio, creating an experience that is equal parts impactful and harmonious.
              </div>
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="7"
            xl="7"
            class="section-img mb-4"
          >
            <div class="section-content-img">
              <b-img
                class="d-block img-append scroll-fade-in"
                src="~/assets/images/leaflet-2b.svg"
                v-scroll.fadeRight
              />
              <image-view
                ext="png"
                name="leaflet-2a"
                class="ml-auto d-block img-ref"
              />
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
          >
            <div class="section-content-img mb-4">
              <image-view
                class="responsive-img"
                name="mark"
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
            class="align-self-center"
          >
            <div class="section-div-2">
              <div class="section-subtitle quote">"ALUR's Duo double glazed wall system represents the next generation in moveable walls with enhanced aesthetics and superior sound control."</div>
              <div class="section-content">
                <span class="mark">Mark Bassil</span><br>President & Co-Founder
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
      class="section section-duo-cards scroll-fade-in"
      v-scroll
    >
      <b-container>
        <b-row
          class="h1 fw-300 mx-auto mb-5"
          align-h="center"
        >
         Explore Duo for yourself
        </b-row>
        <b-row class="card-content">
          <b-col
            cols="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
            class="mb-3"
          >
            <b-card
              title="Duo Framing Options"
              img-src="~/assets/images/duo/card-1.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 22rem;"
              class="mb-2 text-center"
              align-h="center"
            >
              <b-card-text class="text-center">
                Available in standard clear anodized and premium PVDF resin finishes of black, bronze and white. We also offer custom frame colors to match your exact specifications.
              </b-card-text>

              <b-button
                href="/duo-glass-wall/features"
                target="_blank"
                variant="success"
                class="text-center"
              >View Products</b-button>
            </b-card>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
            class="mb-3"
          >
            <b-card
              title="Duo Glass Options"
              img-src="~/assets/images/duo/card-2.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 22rem;"
              class="mb-2 text-center"
            >
              <b-card-text
                class="text-center pb-4"
              >
                Clear or low iron tempered and laminated glass, gray and bronze tinted glass, and acid etched glass options.
              </b-card-text>

              <b-button
                href="/duo-glass-wall/features#glass-link"
                target="_blank"
                variant="success"
                class="text-center"
              >View Products</b-button>
            </b-card>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
            class="mb-3"
          >
            <b-card
              title="Duo Doors & Hardware"
              img-src="~/assets/images/duo/card-3.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 22rem;"
              class="mb-2 text-center"
            >
              <b-card-text
                class="text-center pb-4"
              >
                Glass single and double glazed glass doors and solid core wood door with locking and non-locking hardware options.
              </b-card-text>

              <b-button
                href="/duo-glass-wall/features#door-link"
                target="_blank"
                variant="success"
                class="text-center"
              >View Products</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
      class="section feature-list-glass-wall scroll-fade-in"
      v-scroll
    >
      <b-container>
        <b-row
          class="h1 fw-300 mx-auto mb-5"
          align-h="center"
        >
          We care about you. Your business. The planet.
        </b-row>
        <b-row align-v="center">
          <b-col
            class="list-item"
            cols="12"
            sm="12"
            md="3"
            lg="3"
            xl="3"
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
            class="title"
          >Products benefits</b-col>
          <b-col
            cols="12"
            sm="12"
            md="7"
            lg="7"
            xl="7"
          >
            <accordion
              :list="productsBenefits"
              colorTheme="#3E9C98"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
      class="section-duo-faq scroll-fade-in"
      v-scroll
    >
      <b-container>
        <b-row
          class="h1 fw-300 mx-auto mb-3 product-title d-flex align-items-center"
          align-h="center"
        >
          Frequently asked questions
        </b-row>
        <b-row align-h="center">
          <b-col
            cols="12"
            sm="12"
            md="10"
            lg="10"
            xl="10"
          >
            <accordion
              :list="faqs"
              colorTheme="#3E9C98"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section
      class="section-duo-spot2 section-design"
      v-if="tabletMode"
    >
      <b-row
        class="h1 fw-300 mx-auto scroll-fade-in"
        v-scroll
      >
        DUO’S SLIM PROFILE FRAMING REFLECTS ALUR’S SIGNATURE MINIMALISM
      </b-row>
    </section>
    <section
      class="section-spot1"
      v-else
    >
      <b-container class="row h1 fw-300 mx-auto section-title d-flex align-items-center justify-content-center mb-0">
        <b-row
          class="scroll-fade-in"
          v-scroll
        >vivamus alur ultricie</b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
  import StickyHeader from '~/components/common/StickyHeader.vue'
  import ImageView from '~/components/Images/ImageView.vue'
  import Accordion from '~/components/Accordion.vue'
  import SlickCarousel from '~/components/Carousels/SlickCarousel.vue'
  import SlickCarousel1 from '~/components/Carousels/SlickCarousel1.vue'
  import CarouselModal1 from '~/components/Modals/CarouselModal1.vue'
  import ResizeMixin from '@/mixins/ResizeMixin'
  import FeaturePreview from '~/components/common/FeaturePreview.vue'

  export default {
    components: {
      StickyHeader,
      ImageView,
      Accordion,
      SlickCarousel,
      SlickCarousel1,
      CarouselModal1,
      FeaturePreview
    },
    mixins: [ ResizeMixin ],
    data() {
      return {
        title: 'DUO Glass Wall',
        modalVisibility: false,
        slides: [
          {
            src: require('~/assets/images/duo/duo-slider/18161-0010-F.jpg')
          },
          {
            src: require('~/assets/images/duo/duo-slider/18161-0016-F.jpg')
          },
          {
            src: require('~/assets/images/duo/duo-slider/18161-0050-F.jpg')
          },
          {
            src: require('~/assets/images/duo/duo-slider/18161-0075-F.jpg')
          },
          {
            src: require('~/assets/images/duo/duo-slider/18161-0181-F.jpg')
          },
          {
            src: require('~/assets/images/duo/duo-slider/18161-0262-F.jpg')
          },
          {
            src: require('~/assets/images/duo/duo-slider/18161-0263-F.jpg')
          }
        ],
        signatureDesigns: [
          {
            info: 'Double Glazed Pocket\nSliding Door',
            text: 'An industry first feature',
            desc: 'Double Glazed Pocket Sliding Door',
            src: require('~/assets/images/duo/slide1-info.jpg'),
            thumb: require('~/assets/images/duo/sslide1-thumb.jpg'),
            style: {
              top: 40 + '%',
              left: 10 + '%'
            }
          },
          {
            info: 'Corner\nMetal Trim',
            text: 'Secures glass & protects against damage',
            desc: 'Corner Metal Trim',
            src: require('~/assets/images/duo/slide2-info.jpg'),
            thumb: require('~/assets/images/duo/sslide2-thumb.jpg'),
            style: {
              bottom: 20 + '%',
              right: 5 + '%'
            }
          },
          {
            info: 'Concealed\nCloser',
            text: 'Automatic closer with hold open feature',
            desc: 'Concealed Closer',
            src: require('~/assets/images/duo/slide3-info.jpg'),
            thumb: require('~/assets/images/duo/sslide3-thumb.jpg'),
            style: {
              top: 10 + '%',
              left: 18 + '%'
            }
          },
          {
            info: 'Recessed\nChannels',
            text: 'Create the appearance of glass floating in space',
            desc: 'Recessed Channels',
            src: require('~/assets/images/duo/slide4-info.jpg'),
            thumb: require('~/assets/images/duo/sslide4-thumb.jpg'),
            style: {
              bottom: 10 + '%',
              right: 15 + '%'
            }
          },
          {
            info: 'Drywall\nEnd Post',
            text: 'Slim profile wall post with recessed channels',
            desc: 'Drywall End Post',
            src: require('~/assets/images/duo/slide5-info.jpg'),
            thumb: require('~/assets/images/duo/sslide5-thumb.jpg'),
            style: {
              bottom: 20 + '%',
              left: 10 + '%'
            }
          },
          {
            info: 'Offset\nPivot Door',
            text: 'Concealed hinges for minimalist look',
            desc: 'Offset Pivot Door',
            src: require('~/assets/images/duo/slide6-info.jpg'),
            thumb: require('~/assets/images/duo/sslide6-thumb.jpg'),
            style: {
              top: 60 + '%',
              left: 3 + '%'
            }
          }
        ],
        productsBenefits: [
          {
            heading: 'Materials',
            visibility: true,
            body: '<p class="accordion-text">Aluminum frames are durable and scratch resistant and available in a variety of frame finishes. Locally sourced glass is available in clear or low iron tempered and laminated glass, gray and bronze tinted glass, and acid etched glass.</p>',
            id: 'materials'
          },
          {
            heading: 'Finishes',
            body: '<div class="accordion-text">' + '<p>Standard:' +
              '  <ul class="order-list">' +
              '    <li>Clear anodized aluminum</li>' +
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
              '    <li>PVDF Resin to match any color specification</li>' +
              '  </ul>' +
              '  <br/>' +
              '</p>' + '</div>',
            id: 'finishes'
          },
          {
            heading: 'Sound Transmission',
            body: '<p class="accordion-text">The STC is between 41-52, depending on the type of glass used (i.e., tempered versus laminate) based on glass only ratings for Duo in a double glazed application with 2" airspace.</p>',
            id: 'sound-transmission'
          },
          {
            heading: 'ADA Compliant',
            body: '<div class="accordion-text">' + '<p>ADA compliant hardware is available for both single and double glazed versions.' +
              '<ul class="order-list">' +
              '<li>Single action lever set</li>' +
              '<li>Top locking ladder pull</li>' +
              '<li>Includes 7-pin SFIC</li>' +
              '</ul>' +
              '</p>' + '</div>',
            id: 'ada-compliant'
          },
          {
            heading: 'Locally Sourced',
            body: '<p class="accordion-text">All of ALUR glass is sourced from local vendors with reduces cost, decreases size of our carbon footprint and improves lead time.</p>',
            id: 'locally-sourced'
          },
          {
            heading: 'Lifetime Warranty',
            body: '<p class="accordion-text">Limited Lifetime Warranty. For more details, please contact us or call us at 973-446-2300.</p>',
            id: 'lifetime-warranty '
          }
        ],
        faqs: [
          {
            heading: 'What is the difference between Duo double glazed and single glazed versions?',
            visibility: true,
            body: '<p class="accordion-text">The double glazed version is composed of two panes of glass separated by a 2" airspace. The single glazed version has the same framing but contains a single pane of glass only. For the single glazed version, the glass panel is installed on the outer channel of the frame and there is a custom cover piece that fits over the inner channel.</p>',
            id: 'alur-demountable'
          },
          {
            heading: 'What is the STC rating of the Duo double glazed system?',
            body: '<p class="accordion-text">The STC is between 41-52, depending on the type of glass used (i.e., tempered versus laminate) based on glass only ratings for Duo in a double glazed application with 2" airspace.</p>',
            id: 'stc-of-alur-glass-wall'
          },
          {
            heading: 'What is the lead time for Duo?',
            body: '<p class="accordion-text">The lead-time is 7 weeks for standard clear anodized finish and 8 weeks for premium PVDF finishes. Expedited production with delivery in 3-4 weeks is also available at an additional cost. Custom finishes have minimum quantity and additional lead time requirements. Contact ALUR customer service for details.</p>' +
              '<p class="accordion-text">Lead time starts after receipt of ALL of the following: 1) purchase order or contract, 2) signed shop drawings and 3) deposit.</p>',
            id: 'alur-glass-wall-polycarbonate'
          },
          {
            heading: 'Can you match the hardware finish to the frame finish?',
            body: '<p class="accordion-text">Yes, matching hardware finishes are available in black and bronze PVDF. Our standard hardware finish is brushed stainless steel.</p>',
            id: 'hardware-finish'
          }
        ],
        featuresList: [
          {
            svg: require('~/assets/images/icons/tax-green.svg'),
            text: 'Accelerated Tax\nDepreciation'
          },
          {
            svg: require('~/assets/images/icons/ic-fast-shipping-primary.svg'),
            text: 'Fast Shipping'
          },
          {
            svg: require('~/assets/images/icons/ic-leed-primary.svg'),
            text: 'Qualifies for LEED'
          },
          {
            svg: require('~/assets/images/icons/ic-warranty-primary.svg'),
            text: 'Lifetime Warranty'
          }
        ],
        slideOptions: {
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
        },
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
        }
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {hid: 'description', name: 'description', content: ''}
        ]
      }
    },

    methods: {
      showModal () {
        this.modalVisibility = true
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
    margin-bottom: 80px;
  }
  .section-hero-duo {
    background-image: url('~assets/images/hero-duo-glass.jpg');
    min-height: 602px;
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
      .section-hero-right{
        img{
          width: 80%;
          padding-top:20%;
          float: right;
        }
      }
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
        span{
          font-size: 1.3rem;
        }
        .hero-video-link {
          &:hover {
            opacity: .6;
          }
          .hero-video-icon {
            border-radius: 4px;
            min-width: 48px;
            min-height: 48px;
            overflow: hidden;
            &:before {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate3d(-50%,-50%,0);
              display: inline-block;
              width: 48px;
              height: 48px;
              margin-right: 20px;
              vertical-align: middle;
              background-color: white;
              border-radius: 50%;
              background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%233E9C98' d='M5.99,19.236c-1.026,0-1.963-0.521-2.504-1.391c-0.293-0.468-0.445-1.007-0.445-1.558V3.712\a     c0-1.625,1.322-2.948,2.947-2.948c0.551,0,1.089,0.154,1.557,0.445L17.65,7.497c1.381,0.858,1.806,2.681,0.947,4.062\a     c-0.238,0.381-0.564,0.707-0.945,0.944L7.546,18.79C7.078,19.082,6.54,19.236,5.99,19.236z M5.988,2.729\a     c-0.541,0-0.982,0.441-0.982,0.983v12.577c0,0.184,0.051,0.361,0.148,0.52c0.277,0.443,0.902,0.596,1.354,0.314l10.105-6.288\a     c0.127-0.08,0.236-0.188,0.316-0.315c0.284-0.459,0.144-1.066-0.316-1.354L6.508,2.878C6.352,2.779,6.172,2.729,5.988,2.729z'/%3E%3C/svg%3E");
              background-repeat: no-repeat;
              background-position: 50%;
              background-size: 20px;
              content: "";
            }
          }
          span {
            color: white;
          }
        }
      }
    }
  }
  .section-duo-spot0 {
    text-align: center;
    padding: 40px 0;
    .section-features-title {
      margin-bottom: 72px;
    }
    .section-features-list-item-img {
      border: 1px solid $alur-grey-color;
      border-radius: 50%;
      width: 56px;
    }
    .section-features-list-item-title {
      .title{
         font-size: 1.2rem;
         color: $alur-green;
      }
      p {
        padding-top: 12px;
        font-size:0.9rem;
        font-weight: 300;
        line-height: 1.6;
        color: $alur-dark-grey;
      }
    }
  }
  .section-duo-leaflet {
    padding: 170px 0;
    .row:nth-child(2) {
      margin: 104px -15px;
      .section-div-2 {
        max-width: 400px;
      }
      .section-content-img {
        position: relative;
        .img-append {
          position: absolute;
          bottom: 0;
          left: -5%;
        }
      }
    }
    .row {
      .section-div-1 {
        img {
          width: 100%;
        }
      }
      .section-div-4 {
        .section-content-img {
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
        color: $alur-dark-grey;
      }
      .quote{
        font-weight: 300;
      }
      .mark{
        background-color: transparent !important;
        color: $alur-green;
        font-weight: 700;
        font-size: 1rem;
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
          span {
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
  .section-duo-cards {
    padding-bottom: 80px;
    margin-top: 125px;
    position: relative;
    &:after {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate3d(-50%,0,0);
      display: block;
      width: 360px;
      height: 0;
      border-top: 1px solid $dark-grey;
      content: "";
    }
    .card {
      img {
        width: 148px;
        height: 148px;
        border-radius: 50%;
        margin: 20px auto 0;
      }
      .card-body {
        .card-title {
          color: $alur-green;
          font-size: 1.5rem;
          font-weight: 300;
          margin-bottom: 15px;
        }
        .card-text {
          flex: auto;
          margin-bottom: 30px;
          line-height: 1.6;
          letter-spacing: -.2px;
          font-size: .9rem;
          font-weight: 300;
        }
        a.btn-success{
          padding: 14px 0;
          width: 80%;
          font-size: 1rem;
          line-height: 1.2;
          letter-spacing: .4px;
        }
      }
    }
  }
  .section-duo-overview-gallery {
    margin-top: 120px;
    .text-description {
      width: 80%;
      margin-bottom: 63px;
      font-size: 1.1rem;
      font-weight: 300;
      line-height: 1.76;
      letter-spacing: -.3px;
      color: $alur-light-grey;
      max-width: 760px;
    }
    .signature-for {
      .slide-info {
        width: 380px;
        background-color: white;
        border-radius: 4px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.16);
        .slide-info-content {
          flex: auto;
          padding: 20px 25px;
          .slide-info-title {
            margin-bottom: 8px;
            font-size: 1.2rem;
            line-height: 1.47;
            letter-spacing: -.2px;
          }
          .slide-info-text {
            margin-bottom: 10px;
            font-size: .9rem;
            font-weight: 300;
            line-height: 1.5;
            letter-spacing: -.2px;
          }
        }
        .slide-info-img {
          -ms-flex: none;
          flex: none;
        }
      }
    }
    .mobile-signature-container {
      .mobile-signature {
        background: url(~assets/images/duo/slide1-main.jpg) no-repeat center center;
        background-size: cover;
        width: 100%;
        min-height: 300px;
        box-shadow: 0 1px 8px 0 rgba(0,0,0,.08), 0 0 4px 0 rgba(0,0,0,.08);
        .img-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          justify-content: center;
        }
      }
      .desc {
        color: $alur-grey-color2;
        font-size: 14px;
        font-weight: 300;
        line-height: 24px;
        padding: 0 40px;
      }
    }
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
  .section-design {
    display: flex !important;
    -ms-flex-align: center;
    align-items: center;
    min-height: 515px;
    background-color: $alur-dark-grey;
    background-position: bottom;
    background-size: cover;
    text-align: center;
    &:before,
    &:after {
      content: "";
      display: table;
    }
    .row {
      letter-spacing: 6px;
      text-transform: uppercase;
      color: hsla(0,0%,100%,.75);
      text-align: center;
    }
  }
  .section-duo-spot2 {
    background-image: url('../../assets/images/duo/duo-spot2-bg.jpg');
  }
  .section-duo-spot1 {
    background-image: url('../../assets/images/duo/duo-spot1-bg.jpg');
  }
  .section-duo-spot3 {
    background-color: $alur-grey-color;
  }
  .section-duo-presentation {
    padding-top: 80px;
    .presentation-item {
      max-width: 600px;
      margin: 0 auto 70px;
      .title {
        line-height: 1.2;
        color: $alur-green;
      }
      .desc {
        line-height: 1.76;
        letter-spacing: -.3px;
        color: $alur-dark-grey;
        font-weight: 300;
      }
      .image {
        padding: 80px 0;
        img {
          max-width: 100%;
          width: auto;
          height: 420px;
        }
      }
    }
  }
  .section-duo-upgrade {
    padding-bottom: 140px;
    padding-top: 125px;
    background-color: $alur-primary-color1;
    .desc {
      line-height: 1.76;
      letter-spacing: -.3px;
      color: $alur-dark-grey;
      padding-bottom: 80px;
    }
    .section-div:first-child {
      border-right: 1px solid $grey1;
      padding-right: 60px;
      img {
        margin-left: auto;
      }
    }
    .section-div:last-child {
      padding-left: 60px;
      img {
        margin-right: auto;
      }
    }
    .section-div {
      padding-top: 25px;
      .title {
        font-size: 1.5rem;
        line-height: 1;
        color: $alur-green;
      }
      .content {
        font-size: 1rem;
        font-weight: 300;
        img {
          max-width: 180px;
        }
      }
    }
  }
  .feature-list-glass-wall{
    margin-bottom: 120px;
    text-align: center;
    pre{
      font-weight: 300;
      font-size: 1rem;
    }
  }
  .section-duo-faq {
    text-align: center;
    padding: 80px 0;
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
  @media only screen and (max-width: 1439px) {
    .section-duo-leaflet {
      .row:nth-child(2) {
        .section-content-img {
          .img-append {
            left: -10%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1199px) {
    .section-duo-leaflet {
      .row:nth-child(2) {
        .section-div-2 {
          max-width: 350px;
        }
        .section-content-img {
          position: relative;
          .img-append {
            left: -5%;
            max-width: 120px;
          }
          .img-ref {
            max-width: 400px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1008px) {
    .section-duo-leaflet {
      padding: 48px 0;
      .row:nth-child(2) {
        margin: 48px -15px;
        .section-div-2 {
          max-width: 100%;
        }
        .section-text {
          order: 2
        }
        .section-img {
          order: 1;
          .section-content-img {
            display: flex;
            flex-direction: column;
            .img-ref {
              order: 1;
              max-width: 100%;
              width: 100%;
              margin-bottom: 20px;
            }
            .img-append {
              position: relative;
              order: 2;
              margin-left: auto;
              left: 0;
              max-width: 100%;
            }
          }
        }
      }
      .row:last-child {
        .section-div-2 {
          .section-subtitle {
            font-size: 1rem;
            margin-bottom: 10px;
            line-height: 1.7;
          }
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
    }
    .section-hero-duo {
      padding: 0;
      margin-bottom: 78px;
      background-position: center right;
      min-height: 375px;
      background-image: url('../../assets/images/hero-duo-glass.jpg');
      .section-hero-wrap {
        display: block;
        padding: 0;
        position: relative;
        .section-hero-left-2 {
          position: absolute;
          width: 100%;
          bottom: -73px;
          .spot-title {
            padding: 0 24px;
            margin: 19px 0;
            font-weight: 300;
          }
          .img-wrapper {
            max-width: 123px;
            margin: 0 24px;
          }
          .hero-video-link {
            &:hover {
              opacity: 1;
            }
            background-color: $alur-green;
            padding: 24px;
            width: 100%;
          }
          .link-text{
            width: 60%;
            span{
              font-size: 1rem;
            }
            p{
              font-size: 0.8rem;
              font-weight: 200;
              color: white;
              padding-top: 3px;
              margin-bottom: 0;
            }
          }
        }
        .section-hero-right {
          max-width: 65px;
          height: 80px;
          margin-left: auto;
          margin-right: 24px;
        }
      }
    }
    .section-duo-spot0 {
      padding-bottom: 0;
      .section-features-title {
        padding: 0 20%;
        margin-bottom: 30px;
      }
      .section-features-list-item-title{
        .title{
          font-size: 1.5rem;
        }
      }
    }
    .duo-carousel-1{
      margin: 40px auto 60px auto;
      img{
        height: 220px;
        width: auto;
        margin-bottom: 16px;
      }
    }
    .section-duo-leaflet {
      .row:nth-child(2) {
        .section-img {
          .section-content-img {
            .img-ref {
              max-height: 350px;
              width: auto;
            }
            .img-append {
              max-width: 100%;
            }
          }
        }
      }
    }
    .section-duo-overview-gallery {
      .container {
        padding: 0;
      }
      margin-top: 58px;
      .text-description {
        width: 100%;
        margin-bottom: 40px;
      }
      .carousel-container {
        .slide-info {
          display: none !important;
        }
      }
    }
    .section-duo-spot3 {
      .section-duo-presentation {
        padding: 48px 16px;
        .presentation-item {
          margin-bottom: 0;
          .desc{
            font-size: 1.2rem;
          }
          .h1{
            padding-top: 10px;
          }
          .image {
            padding: 40px 0;
            img {
              width: auto;
              max-height: 240px;
            }
          }
        }
      }
      .section-duo-upgrade {
        background-color: white;
        padding: 48px 16px;
        .desc {
          padding-bottom: 40px;
          font-size: 1.2rem;
        }
        .section-div {
          text-align: left !important;
          padding: 10px;
          &:first-child {
            border: none;
          }
          &:last-child {
            padding: 10px;
          }
          .title{
            margin-bottom: 24px !important;
            font-size: 1.4rem;
          }
          .content {
            .img-wrapper {
              background-color: $alur-primary-color1;
              border: 1px solid $grey1;
              img {
                margin: 0 auto;
              }
            }
            ul {
              list-style-type:disc;
              padding-left: 20px;
            }
          }
        }
      }
    }
    .section-duo-cards {
      margin: 48px 0;
      padding-bottom: 20px;
      .card-content {
        .text-center {
          margin: 0 auto;
        }
        .card-title{
          font-weight: 400 !important;
        }
      }
      &:after {
        width: 240px;
      }
    }
    .feature-list-glass-wall {
      .list-item{
        padding-bottom: 24px;
      }
      pre {
        font-weight: 400;
        opacity: 0.7;
        font-size: 1rem;
      }
    }
    .section-benefits,
    .section-duo-faq {
      padding-top: 48px;
      padding-bottom: 0;
    }
    .section-design {
      min-height: 264px;
    }
  }
</style>
