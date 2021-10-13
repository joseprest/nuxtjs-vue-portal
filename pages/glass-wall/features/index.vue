<template>
  <div>
    <sticky-header title="ALUR Glass Wall" />
    <section class="section section-alur-overview-gallery text-center">
      <b-container>
        <b-row>
          <div class="h1 fw-300 mx-auto mb-3">
            The right glass for any office
          </div>
          <div class="mx-auto text-description">
            Minimally designed, precision extruded aluminum profiles provide exceptional support and durability, while accentuating the natural beauty of glass.
          </div>
        </b-row>
        <b-row>
          <slick-carousel1
            :navItems="5"
            slickFor="overview-for"
            slickNav="overview-nav"
          >
            <template slot="slider-for">
              <div
                v-for="(item, i) in overviewGalleries"
                :key="i"
                class="d-flex align-items-stretch"
              >
                <div
                  class="position-relative w-100"
                  @click="previewImage(item)"
                >
                  <b-img
                    :src="item.overviewSrc"
                    class="responsive-img"
                    style="min-height: 280px;"
                  />
                  <div
                    class="position-absolute overview-text"
                    :style="item.style"
                  >{{item.overviewText}}</div>
                  <div
                    class="position-absolute tab-icon"
                  >
                    <b-img
                      src="~/assets/icons/Stroke_2.svg"
                    />
                  </div>
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
                <div class="handle-item d-flex justify-content-center flex-column">
                  <div class="image-wrapper">
                    <b-img
                      :src="item.handlerSrc"
                      class="mb-4"
                      style="width: 48px; margin: 0 auto;"
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
      class="section section-alur-key-features-gallery scroll-fade-in"
      v-scroll
    >
      <b-container>
        <b-row>
          <div class="h1 fw-300 mx-auto mb-5">
            The key features
          </div>
        </b-row>
        <b-row>
          <slick-carousel1
            :navItems="4"
            slickFor="feature-for"
            slickNav="feature-nav"
          >
            <template slot="slider-for">
              <div
                v-for="(feature, i) in keyFeatures"
                :key="i"
                class="d-flex align-items-stretch"
              >
                <div
                  class="position-relative"
                  @click="previewImage(feature)"
                >
                  <div>
                    <b-img
                      :src="feature.featureSrc"
                      class="responsive-img"
                      style="min-height: 280px"
                    />
                  </div>
                  <div
                    class="position-absolute overview-text"
                    :style="feature.style"
                  >{{feature.featureText}}</div>
                  <div
                    class="position-absolute tab-icon" style="display: none"
                  >
                    <b-img
                      src="~/assets/icons/Stroke_2.svg"
                    />
                  </div>
                </div>
              </div>
            </template>
            <template slot="slider-nav">
              <div
                v-for="(feature, i) in keyFeatures"
                :key="i"
                class="spot-wrap d-flex align-items-stretch justify-content-center"
                style="opacity: 1"
              >
                <div class="d-flex justify-content-center flex-column">
                  <div class="handle-img d-flex align-items-center justify-content-center mb-4 mx-auto">
                    <b-img
                      :src="feature.handlerSrc"
                    />
                  </div>
                  <pre class="text-center">{{feature.handlerText}}</pre>
                </div>
              </div>
            </template>
          </slick-carousel1>
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
            lg="5"
            xl="5"
            class="text-left mt-3 desc"
          >
            <div class="h4">Build the perfect office</div>
            <div class="section-desc w-75">ALUR glass walls transform what was once hidden into an inspiration of form and function.</div>
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
            class="text-right content"
          >
            <image-view
              class="responsive-img"
              name="leaflet-4"
              ext="jpg"
              style="min-height: 280px"
            />
          </b-col>
        </b-row>
        <b-row
          class="d-flex justify-content-center align-items-center scroll-fade-in"
          v-scroll
        >
          <framing-design />
        </b-row>
        <b-row
          class="d-flex justify-content-center align-items-center scroll-fade-in"
          v-scroll
        >
          <pop-color
            :previewImage="previewImage"
          />
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
        >ALUR DOORS</div>
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
                :slides="d.products"
                @view="showModal"
              />
            </b-col>
          </b-row>
        </div>
        <div v-else>
          <b-row>
            <slick-carousel :options="slideOption">
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
        >ALUR HARDWARE</div>
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
            <slick-carousel :options="slideOption">
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
      class="section-spot1 d-xs-block d-sm-block d-md-none d-lg-none scroll-fade-in"
      v-scroll
    >
      <b-container class="row h1 fw-300 mx-auto section-title d-flex align-items-center justify-content-center mb-0">
        <b-row>vivamus alur ultricie</b-row>
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
    <section class="section-environment position-relative">
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
    <carousel-modal
      :modalShow="modalVisibility"
      :images="imageSrc"
      @hide="modalVisibility = false"
    />
    <image-preview-modal
      :modalShow="modalVisibility1"
      @hide="modalVisibility1 = false"
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
          <div
          class="position-absolute overview-text"
          >{{modalText}}</div>
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
import SlickCarousel1 from '~/components/Carousels/SlickCarousel1.vue'
import ImageView from '~/components/Images/ImageView.vue'
import CardCarousel from '~/components/Carousels/CardCarousel.vue'
import Accordion from '~/components/Accordion.vue'
import SlickCarousel from '~/components/Carousels/SlickCarousel.vue'
import CarouselModal from '~/components/Modals/CarouselModal.vue'
import ImagePreviewModal from '~/components/Modals/ImagePreviewModal.vue'
import ResizeMixin from '@/mixins/ResizeMixin'

export default {
  components: {
    StickyHeader,
    SlickCarousel1,
    ImageView,
    FramingDesign,
    CardCarousel,
    Accordion,
    Environment,
    PopColor,
    CarouselModal,
    SlickCarousel,
    ImagePreviewModal
  },

  mixins: [ ResizeMixin ],

  data () {
    return {
      title: 'ALUR Glass Wall Features',
      modalVisibility: false,
      modalVisibility1: false,
      modalContent: '',
      modalText: '',
      imageSrc: [],
      overviewGalleries: [
        {
          overviewSrc: require('~/assets/images/alur/right-glass-1.jpg'),
          overviewText: 'Clear glass, available in tempered and laminated, has increased resistance to breakage and is nearly colorless, with a faint green edge.',
          style: {
            top: 220 + 'px',
            left: 180 + 'px'
          },
          handlerSrc: require('~/assets/images/alur/slide-1-thumb.jpg'),
          handlerText: 'Clear glass'
        },
        {
          overviewSrc: require('~/assets/images/alur/right-glass-2.jpg'),
          overviewText: 'Available in tempered and laminated, this glass is made with very low amounts of iron, resulting in a clearer (less green) appearance.',
          style: {
            top: 280 + 'px',
            left: 580 + 'px'
          },
          handlerSrc: require('~/assets/images/alur/slide-2-thumb.jpg'),
          handlerText: 'Low iron'
        },
        {
          overviewSrc: require('~/assets/images/alur/right-glass-3.jpg'),
          overviewText: 'Featuring an opaque white PVB-based interlayer, this glass has a uniform color and light transmittance of approximately 8 percent.',
          style: {
            top: 200 + 'px',
            left: 150 + 'px'
          },
          handlerSrc: require('~/assets/images/alur/slide-3-thumb.jpg'),
          handlerText: 'Polar white\nlaminated'
        },
        {
          overviewSrc: require('~/assets/images/alur/right-glass-4.jpg'),
          overviewText: 'Made by adding color pigments to the raw materials, this glass provides privacy by reducing amount of light transmitted.',
          style: {
            top: 250 + 'px',
            left: 510 + 'px'
          },
          handlerSrc: require('~/assets/images/alur/slide-4-thumb.jpg'),
          handlerText: 'Tinted'
        },
        {
          overviewSrc: require('~/assets/images/alur/right-glass-5.jpg'),
          overviewText: 'Creates visual privacy while maintaining a high level of light transmittance. Can be applied to entire glass surface or in a custom pattern or design.',
          style: {
            top: 180 + 'px',
            left: 550 + 'px'
          },
          handlerSrc: require('~/assets/images/alur/slide-5-thumb.jpg'),
          handlerText: 'Acid etched'
        }
      ],
      keyFeatures: [
        {
          featureSrc: require('~/assets/images/bg-prod-glass-key-features-frameless.jpg'),
          featureText: 'Minimal framing design eliminates vertical posts and mullions, creating the impression of a vast expanse of unsupported glass.',
          style: {
            top: 220 + 'px',
            left: 150 + 'px'
          },
          handlerSrc: require('~/assets/images/icons/ic-frameless-blue.svg'),
          handlerText: 'Frameless\nGlass Design'
        },
        {
          featureSrc: require('~/assets/images/bg-prod-glass-key-features-half-inch.jpg'),
          featureText: '½" thick glass provides superior strength and sound attenuation.',
          style: {
            top: 300 + 'px',
            left: 600 + 'px'
          },
          handlerSrc: require('~/assets/images/icons/ic-half-thick-blue.svg'),
          handlerText: '½" Thick Tempered or\nLaminated Glass'
        },
        {
          featureSrc: require('~/assets/images/bg-prod-glass-key-features-sound.jpg'),
          featureText: 'Standard ½" thick glass provides a 36-38 STC (Sound Transmission Class). Sound seals come standard in all framing and doors, minimizing sound transference.',
          style: {
            top: 340 + 'px',
            left: 860 + 'px'
          },
          handlerSrc: require('~/assets/images/icons/ic-sound-privacy-primary.svg'),
          handlerText: 'Superior Sound\nAttenuation'
        },
        {
          featureSrc: require('~/assets/images/bg-prod-glass-key-features-glass-to-glass.jpg'),
          featureText: 'Tongue and grove joint design provides smooth glass to glass connection, optimal sound seal and minimal deflection.  I, L, T, Y & flexible multi-angle joints facilitate a wide variety of configurations.',
          style: {
            top: 300 + 'px',
            left: 280 + 'px'
          },
          handlerSrc: require('~/assets/images/icons/ic-joints-blue.svg'),
          handlerText: 'Clear Glass-to-\nGlass Joint'
        }
      ],
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
      doors: [
        {
          productTitle: 'Glass Pivot Door',
          productText: 'The glass pivot door features 4-sided sound seals, including vertical door seals, top frame seal and bottom brush seal. An optional auto-patch closer may also be used.',
          products: [
            {
              src: require('~/assets/images/products/alur-doors-large/glassPivotDoor/glassPivotDoor_01.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassPivotDoor/glassPivotDoor_02.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassPivotDoor/glassPivotDoor_03.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassPivotDoor/glassPivotDoor_04.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassPivotDoor/glassPivotDoor_05.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassPivotDoor/glassPivotDoor_06.jpg'),
            }
          ]
        },
        {
          productTitle: 'Glass Sliding Single Door',
          productText: 'The single sliding door includes vertical door seals, top frame seal and bottom brush seal. Features a concealed sliding door track with no exposed hardware.',
          products: [
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingSingleDoor/glassSlidingSingleDoor_01.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingSingleDoor/glassSlidingSingleDoor_02.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingSingleDoor/glassSlidingSingleDoor_03.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingSingleDoor/glassSlidingSingleDoor_04.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingSingleDoor/glassSlidingSingleDoor_05.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingSingleDoor/glassSlidingSingleDoor_06.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingSingleDoor/glassSlidingSingleDoor_07.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingSingleDoor/glassSlidingSingleDoor_08.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingSingleDoor/glassSlidingSingleDoor_09.jpg'),
            }
          ]
        },
        {
          productTitle: 'Glass Sliding Double Door',
          productText: 'The double sliding door includes vertical door seals, top frame seal and bottom brush seal. Features a concealed sliding door track with no exposed hardware.',
          products: [
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingDoubleDoor/glassSlidingDoubleDoor_01.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingDoubleDoor/glassSlidingDoubleDoor_02.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingDoubleDoor/glassSlidingDoubleDoor_03.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingDoubleDoor/glassSlidingDoubleDoor_04.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingDoubleDoor/glassSlidingDoubleDoor_05.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingDoubleDoor/glassSlidingDoubleDoor_06.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingDoubleDoor/glassSlidingDoubleDoor_07.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassSlidingDoubleDoor/glassSlidingDoubleDoor_08.jpg'),
            }
          ]
        },
        {
          productTitle: 'Glass Hinged Door',
          productText: 'This hinged door includes vertical door seals, top frame seal and bottom brush seal.',
          products: [
            {
              src: require('~/assets/images/products/alur-doors-large/glassHingedDoor/glassHingedDoor_01.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassHingedDoor/glassHingedDoor_02.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassHingedDoor/glassHingedDoor_03.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassHingedDoor/glassHingedDoor_04.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassHingedDoor/glassHingedDoor_05.jpg'),
            }
          ]
        },
        {
          productTitle: 'Wood Offset Pivot Door',
          productText: 'The wood offset pivot door features 3-sided sound seals, including vertical door seals and top frame seal.',
          products: [
            {
              src: require('~/assets/images/products/alur-doors-large/woodOffsetPivotDoor/woodOffsetPivotDoor_01.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/woodOffsetPivotDoor/woodOffsetPivotDoor_02.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/woodOffsetPivotDoor/woodOffsetPivotDoor_03.jpg'),
            }
          ]
        },
        {
          productTitle: 'Wood Sliding Door',
          productText: 'The wood sliding door features 3-sided sound seals, including vertical door seals and a top frame seal.',
          products: [
            {
              src: require('~/assets/images/products/alur-doors-large/woodSlidingDoor/woodSlidingDoor_01.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/woodSlidingDoor/woodSlidingDoor_02.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/woodSlidingDoor/woodSlidingDoor_03.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/woodSlidingDoor/woodSlidingDoor_04.jpg'),
            }
          ]
        },
        {
          productTitle: 'Extendo Telescopic Glass Doors',
          productText: 'The telescopic glass door features 2-sided, vertical sound seals.',
          products: [
            {
              src: require('~/assets/images/products/alur-doors-large/extendoTelescopicGlassDoor/extendoTelescopicGlassDoor_01.jpg'),
            }
          ]
        },
        {
          productTitle: 'Glass Double Glazed Pivot Door',
          productText: 'The double glazed pivot door is designed to fit in the ALUR system.',
          products: [
            {
              src: require('~/assets/images/products/alur-doors-large/glassDoubleGlazedPivotDoor/GlassDoubleGlazedPivotDoor_01.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassDoubleGlazedPivotDoor/GlassDoubleGlazedPivotDoor_02.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-doors-large/glassDoubleGlazedPivotDoor/GlassDoubleGlazedPivotDoor_03.jpg'),
            }
          ]
        }
      ],
      hardware: [
        {
          productTitle: 'Euro Profile Handle Set',
          productText: 'The Euro Profile handle is available in locking and non-locking options. It accepts Europrofile key cylinders only. Master key and keyed alike feature. Available in brushed stainless and matte black finish.',
          products: [
            {
              src: require('~/assets/images/products/alur-hardware-large/euroProfileHandleSet/euroProfileHandleSet_01.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/euroProfileHandleSet/euroProfileHandleSet_02.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/euroProfileHandleSet/euroProfileHandleSet_03.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/euroProfileHandleSet/euroProfileHandleSet_04.jpg'),
            }
          ]
        },
        {
          productTitle: 'Single Action Lever Set',
          productText: 'Our single action lever uses ADA compliant hardware and thumb turns. Only available in locking options and in brushed stainless.',
          products: [
            {
              src: require('~/assets/images/products/alur-hardware-large/singleActionLeverSet/singleActionLeverSet_01.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/singleActionLeverSet/singleActionLeverSet_02.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/singleActionLeverSet/singleActionLeverSet_03.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/singleActionLeverSet/singleActionLeverSet_04.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/singleActionLeverSet/singleActionLeverSet_05.jpg'),
            }
          ]
        },
        {
          productTitle: '18” Ladder Pull',
          productText: 'The 18” pull is available in non-locking option only and available in brushed stainless or matte black finish.',
          products: [
            {
              src: require('~/assets/images/products/alur-hardware-large/18LadderPull/18ladderPull_01.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/18LadderPull/18ladderPull_02.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/18LadderPull/18ladderPull_03.jpg'),
            }
          ]
        },
        {
          productTitle: 'Top Aligned Ladder Pull',
          productText: 'Available in locking and non-locking options. Features ADA compliant hardware and thumb turns. Accepts industry standard Best style 7-pin SFIC. A master key option is available.',
          products: [
            {
              src: require('~/assets/images/products/alur-hardware-large/topAlignedLadderPull/topAlignedLadderPull_01.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/topAlignedLadderPull/topAlignedLadderPull_02.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/topAlignedLadderPull/topAlignedLadderPull_03.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/topAlignedLadderPull/topAlignedLadderPull_04.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/topAlignedLadderPull/topAlignedLadderPull_05.jpg'),
            }
          ]
        },
        {
          productTitle: 'Auto-Patch Closer',
          productText: 'The hydraulic door closer for pivot door with matching top patch fitting and hold open option. Available in brushed stainless and matte black finish.',
          products: [
            {
              src: require('~/assets/images/products/alur-hardware-large/autoPatchCloser/autoPatchCloser_01.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/autoPatchCloser/autoPatchCloser_02.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/autoPatchCloser/autoPatchCloser_03.jpg'),
            }
          ]
        },
        {
          productTitle: 'Drywall Integration',
          productText: 'Drywall cover provides a flush connection between glass and drywall dividing wall.  The transit post provides a glass-to-glass connection in front of a drywall dividing wall.',
          products: [
            {
              src: require('~/assets/images/products/alur-hardware-large/drywallIntegration/drywallIntegration_01.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/drywallIntegration/drywallIntegration_02.jpg'),
            },
            {
              src: require('~/assets/images/products/alur-hardware-large/drywallIntegration/drywallIntegration_03.jpg'),
            }
          ]
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
          body: '<div class="accordion-text">' +
                '<p>Standard:' +
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
                '</p>' +
                '</div>',
          id: 'finishes'
        },
        {
          heading: 'Postless',
          body: '<p class="accordion-text">Postless option eliminates vertical posts for an exceptionally light scale look.</p>',
          id: 'postless'
        },
        {
          heading: 'Polycarbonate Joints',
          body: '<p class="accordion-text">Smooth glass to glass connection with tongue and groove joint design. 93% Clear and does not discolor or fade. It provides an optimal sound seal and minimal deflection. Meets IBC 2015 deflection standard for glass walls up to 10’ high by 4’ wide.</p>',
          id: 'polycarbonate-joints'
        },
        {
          heading: 'Sound Transmission',
          body: '<p class="accordion-text">ALUR’s standard 1⁄2” tempered glass provides a 36 STC (Sound Transmission Class). 1/2” laminated glass provides a 38 STC.</p>',
          id: 'sound-transmission'
        },
        {
          heading: 'Many Configuration Options',
          body: '<p class="accordion-text">I, L, T, Y joints and flexible multi-angle joints.</p>',
          id: 'many-configuration-options'
        },
        {
          heading: 'ADA Compliant',
          body: '<div class="accordion-text">' +
                '<p>ADA compliant hardware is available for both single and double glazed versions.' +
                '    <ul class="order-list">' +
                '        <li>Single action lever set</li>' +
                '        <li>Top locking ladder pull</li>' +
                '        <li>Includes 7-pin SFIC</li>' +
                '    </ul>' +
                '</p>' +
                '</div>',
          id: 'ada-compliant'
        },
        {
          heading: 'Onsite Framing',
          body: '<p class="accordion-text">Onsite framing provides superior fit and finish.</p>',
          id: 'onsite-framing'
        },
        {
          heading: 'Sound Compression Seals',
          body: '<p class="accordion-text">Compression seals are standard in all framing options to eliminate flanking (sound transference) paths. All doors are also fitted with compression seals to minimize sound loss.</p>',
          id: 'sound-compression-seals'
        },
        {
          heading: 'Locally Sourced',
          body: '<p class="accordion-text">All of ALUR glass is sourced from local vendors. This reduces cost, decreases size of our carbon footprint and improves lead time.</p>',
          id: 'locally-sourced'
        },
        {
          heading: 'Seismic Tested',
          body: '<div class="accordion-text">' +
                '<p>Approved for use in California. View IAPMO Evaluation for ' +
                '<a href="/glass-wall" target="_blank">ALUR Glass Wall</a> ' +
                'and ' +
                '<a href="/dividing-wall" target="_blank">ALUR Dividing Wall</a>.' +
                '</p>' +
                '</div>',
          id: 'seismic-tested'
        },
        {
          heading: 'Lifetime Warranty',
          body: '<p class="accordion-text">Limited Lifetime Warranty. For support, please contact us or call us at 973-446-2300.</p>',
          id: 'lifetime-warranty'
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
          heading: 'What is the STC of ALUR Glass Wall?',
          body: '<p class="accordion-text">The STC is between 36-39, depending on the type of glass used (i.e., tempered versus laminate versus sound control glass) based on glass ratings.</p>',
          id: 'stc-of-alur-glass-wall'
        },
        {
          heading: 'Are ALUR Glass Wall polycarbonate joints better than silicone?',
          body: '<p class="accordion-text">ALUR polycarbonate “dry joints” come in “I” (in-line), “L” (two-way), “T” (three-way), and 135° (two-way) style connectors. Unlike silicone joints, which will yellow and shrink over time, separate from the glass surface and allow sound to leak through, the ALUR polycarbonate joints are almost completely clear and will not shrink. In addition, the joints and the beveled glass edges are specially shaped to create a rigid tongue and groove design to eliminate the bowing prevalent with silicone joints. This proprietary joint design also provides an optimal glass-to-glass seal with no sound leakage and forms a structural connection to minimize glass deflection.</p>',
          id: 'alur-glass-wall-polycarbonate'
        },
        {
          heading: 'Can you match the hardware finish to the frame finish?',
          body: '<p class="accordion-text">Yes, matching hardware finishes are available in black and bronze PVDF. Our standard hardware finish is brushed stainless steel.</p>',
          id: 'hardware-finish'
        },
        {
          heading: 'What is the lead time for ALUR?',
          body: '<div class="accordion-text">' +
                '<p>The lead-time is 7 weeks for standard clear anodized finish and 8 weeks for premium PVDF finishes. Quick ship and expedited production with delivery in 3-4 weeks is also available at an additional cost. Custom finishes have minimum quantity and additional\n' +
                '    lead time requirements. Contact ALUR customer service for details.<br/>\n' +
                '    <p>Lead time starts after receipt of ALL of the following: 1) purchase order or contract, 2) signed shop drawings and 3) deposit.</p>\n' +
                '</p>' +
                '</div>',
          id: 'lead-time'
        }
      ],
      slideOption: {
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
  methods: {
    showModal (data) {
      this.modalVisibility = true
      this.imageSrc = data
    },
    previewImage (item) {
      this.modalContent = item.overviewSrc || item.featureSrc
      this.modalText = item.overviewText || item.featureText
      this.modalVisibility1 = true
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
  .section-alur-overview-gallery {
    .row {
      .text-description {
        width: 70%;
        margin-bottom: 70px;
        text-align: center;
        letter-spacing: -.3px;
        font-size: 1.1rem;
        color: $alur-light-grey;
      }

      .overview-nav {
        .slick-current {
          .spot-wrap {
            position: relative;
            &:after {
              position: absolute;
              display: block;
              height: 3px;
              width: 80px;
              bottom: 0;
              background-color: $brand-primary;
              content: '';
            }
          }
          pre {
            color:  $brand-primary;
          }
        }
        .handle-item {
          cursor: pointer;
        }
      }
      .overview-for {
        .tab-icon {
          display: none;
        }
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
  .section-alur-key-features-gallery {
    margin-top: 120px;
    .row {
      .text-description {
        width: 65%;
        margin-bottom: 70px;
      }
      .feature-nav {
        .handle-img {
          position: relative;
          background-color: white;
          box-shadow: 0 1px 8px 0 rgba(0,0,0,.17), 0 1px 2px 0 rgba(0,0,0,.16);
          border-radius: 50%;
          width: 72px;
          height: 72px;
          transition: background-color .3s ease;
        }
        .slick-current {
          .handle-img {
            background-color: $brand-primary !important;
            img {
              -webkit-filter: brightness(0) invert(1);
              filter: brightness(0) invert(1);
            }
          }
        }
        .handle-item {
          cursor: pointer;
        }
      }
    }
  }
  .section-duo-leaflet {
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
  .section-spot1 {
    background-image: url('../../../assets/images/vivamus@2x.jpg');
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
  .section-product-doors {
    .product-title {
      background-image: url('../../../assets/images/alur/alur-door-bg.jpg');
    }
  }
  .section-product-hardware {
    .product-title {
      background-image: url('../../../assets/images/alur/alur-hardware-bg.jpg');
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
  @media only screen and (max-width: 1200px) {
    .section-product {
      .slick-slide {
        opacity: 1 !important;
        .spot-wrap {
          max-width: 365px !important;
        }
      }
    }
  }
  @media only screen and (max-width: 1008px) {
    .section-duo-leaflet {
      .container {
        .row:first-child {
          .desc {
            order: 2;
          }
          .content {
            order: 1;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .section {
      margin: 40px 0;
      .container {
        max-width: calc(100% - 16px) !important;
      }
    }
    .section-alur-overview-gallery {
      .row {
        .text-description {
          width: 100%;
          margin-bottom: 40px;
        }
        .overview-text {
          display: none !important;
        }
        .overview-nav {
          .slick-current {
            .spot-wrap {
              &:after {
                display: none;
              }
              .handle-item {
                .image-wrapper {
                  border: 2px solid $brand-primary;
                }
                pre {
                  display: block;
                  font-weight: bold;
                }
              }
            }
          }
          .spot-wrap {
            .handle-item {
              .image-wrapper {
                width: 40px;
                height: 40px;
                border-radius: 6px;
                margin: 0 auto;
                padding: .5px;
                img {
                  width: 100% !important;
                }
              }
              pre {
                display: none;
              }
            }
          }
        }
      }
    }
    .section-alur-key-features-gallery {
      padding-top: 20px;
      .row {
        .overview-text {
          display: none !important;
        }
        .feature-nav {
          .handle-img {
            width: 40px;
            height: 40px;
            img {
              width: 27px !important;
            }
          }
          pre {
            display: none;
          }
          .slick-current {
            pre {
              display: block;
              font-weight: bold;
              color: $brand-primary;
            }
          }
        }
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
      }
      .row:nth-child(2) {
        margin: 48px 0 !important;
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
  }
  @media only screen and (max-width: 576px) {
    .container {
      max-width: calc(100% - 16px) !important;
    }
  }
  @media only screen and (max-width: 392px) {
    .slick-current {
      pre {
        font-size: 12px;
      }
    }
  }
</style>
<style lang="scss">
  .overview-nav,
  .feature-nav {
    width: 80% !important;
    margin: 0 auto;
  }
  @media only screen and (max-width: 540px) {
    .overview-nav,
    .feature-nav {
      width: 100% !important;
      pre {
        font-size: 14px;
        padding-top:5px;
      }
    }
  }
</style>
