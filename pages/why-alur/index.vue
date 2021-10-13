<template>
  <div>
    <section ref="stickyHeader" class="sticky-top" id="stickyHeader" data-opacity="1">
      <b-navbar class="justify-content-center nav-section py-0" v-b-scrollspy="120">
        <b-navbar-nav class="content-tabs">
          <li class="nav-link py-0"><a href="#the-way-we-see-it" class="nav-link active" v-smooth-scroll="{ offset: offsetScrollHeight }">The way we see it</a></li>
          <li class="nav-link py-0"><a href="#office-of-the-future" class="nav-link" v-smooth-scroll="{ offset: offsetScrollHeight }">Office of the future</a></li>
          <li class="nav-link py-0"><a href="#testimonials" class="nav-link" v-smooth-scroll="{ offset: offsetScrollHeight }">Testimonials</a></li>
          <li class="nav-link py-0"><a href="#benefits" class="nav-link" v-smooth-scroll="{ offset: offsetScrollHeight }">Benefits</a></li>
        </b-navbar-nav>
      </b-navbar>
    </section>
    <section class="section section-hero-why" id="the-way-we-see-it">
      <div class="container text-center">
        <div class="top-content-box">
          <div class="spot-subtitle">The way we see it.</div>
          <div class="h2 spot-title">We believe offices should be beautiful, modern and sustainable.</div>
        </div>
        <div class="bottom-content-box">
          <div class="spot-text">
            <p>ALUR is a reflection of our design philosophy, “less is more,” first conceived by architect Mies van der Rohe. We believe office walls should be beautiful, modern and sustainable. With a decades long career in demountable walls, I’ve helped furnish the evolution from built-in-place, dark and resource intensive walls to demountable and sustainable, light filled glass and solid surface walls. ALUR Walls make it possible for designers to strike the perfect balance between public places and private spaces.</p>
            <p>More than just good design, at ALUR, we strive to meet the demands of fast paced construction schedules with a focus on exceptional customer service and field support. We offer quick response rates, design assistance, including Revit VR, and 2-week lead times. And our in-house design team and installation experts are there to ensure a perfect fit, every time…we guarantee it.</p>
          </div>
          <div class="signature">
            <img src="~/assets/images/signature.png" srcset="~/assets/images/signature.png 1x, ~/assets/images/signature@2x.png 2x" class="desktop-view">
            <img src="~/assets/images/mobile-signature.png" class="mobile-view">
            <div class="signature-name">Mark Bassil</div>
            <div class="signature-position">Founder &amp; President</div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-why-spot1" id="office-of-the-future">
      <div class="container container-xl container-no-padding">
        <b-row>
          <b-col lg="6" class="text-md-center">
            <img class="section-image img-responsive" src="~/assets/images/why-1.jpg" srcset="~/assets/images/why-1.jpg 1x, ~/assets/images/why-1@2x.jpg 2x">
          </b-col >
          <b-col lg="6">
            <div class="section-text">
              <div class="h3 spot-title">Office of the future</div>
              <div class="text-large">Senior managers everywhere have typically celebrated the “private office.” Soon after moving in, though, there is a realization that their space feels cut off. The four walls, meant to provide privacy, end up creating a barrier that feels cramped and restricts contact with other colleagues.</div>
              <div class="spot-subtitle">ALUR is next-gen</div>
              <p><span>Fortune, The Wall Street Journal</span> and others have given their take on the “Workplace of the Future”.  They all agree that the next-generation of offices will feature design elements that are at the heart of ALUR”s product suite.  </p>
              <div class="spot-subtitle">The benefits</div>
              <p>The benefits are undeniable: better communication, an environment of fostered collaboration, more natural light and expansive outdoor views throughout the office. Many employees say the light and openness improve their mood. Additionally, movable glass and modular dividing walls represent huge energy and real estate cost savings.</p>
              <div class="spot-subtitle">Striking the perfect balance</div>
              <p>ALUR Walls make it possible for office designers to strike the perfect balance between “public places and private spaces.” Movable glass walls fronts allow natural light to enter the space, while high STC rated walls and sound masking helps ensure audible privacy. ALUR glass walls can accommodate a variety of frosted, patterned and graphic window films that help create visual privacy where needed. This flexibility enables creation of separate work zones for concentration and collaboration.</p>
            </div>
          </b-col >
        </b-row>
      </div>
    </section>
    <section class="section section-testimonials" id="testimonials">
      <div class="container-fluid">
        <div class="row">
          <b-col cols="12" sm="12" md="6" class="desktop-view">
            <div class="testimonials-carousel">
              <div v-swiper:swiperTestimonial="testimonialSwiper">
                <div class="swiper-wrapper testimonial-wrapper">
                  <div class="swiper-slide testimonial-slide"
                      v-for="(slide, index) in testimonialSlide"
                      :key="index"
                      >
                    <div class="testimonial-items">
                      <div class="testimonial-item-text">
                        {{slide.content}}
                      </div>
                      <div class="testimonial-item-person">
                        <b>{{slide.name}}</b>,{{slide.postName}}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-vertical-controls">
                  <div class="swiper-button-next icon-arrow-bottom swiper-button-next-testimonial"></div>
                  <div class="swiper-button-prev icon-arrow-top swiper-button-prev-testimonial"></div>
                </div>
              </div>

            </div>
          </b-col>
          <b-col cols="12" sm="12" md="6">
            <div class="bubbles">
                <div class="bubble bubble-1"><img class="img-responsive" src="~/assets/images/logos/color/bloomingdale.svg"></div>
                <div class="bubble bubble-2"><img class="img-responsive" src="~/assets/images/logos/color/freddie-mac.svg"></div>
                <div class="bubble bubble-3"><img class="img-responsive" src="~/assets/images/logos/color/goldman-sachs.svg"></div>
                <div class="bubble bubble-4"><img class="img-responsive" src="~/assets/images/logos/color/gsk.svg"></div>
                <div class="bubble bubble-5"><img class="img-responsive" src="~/assets/images/logos/color/bg_jcP.svg"></div>
                <div class="bubble bubble-6"><img class="img-responsive" src="~/assets/images/logos/color/bg_nationwide.svg"></div>
                <div class="bubble bubble-7"><img class="img-responsive" src="~/assets/images/logos/color/bg_redCross.svg"></div>
                <div class="bubble bubble-8"><img class="img-responsive" src="~/assets/images/logos/color/uber.svg"></div>
                <div class="bubble bubble-9"><img class="img-responsive" src="~/assets/images/logos/color/ubs.svg"></div>
                <div class="bubble bubble-10"><img class="img-responsive" src="~/assets/images/logos/color/united-way-1.svg"></div>
            </div>
          </b-col>
          <b-col cols="12" sm="12" md="6" class="mobile-view">
            <div class="testimonials-carousel">
              <div v-swiper:swiperTestimonialMobile="testimonialMobileSwiper">
                <div class="swiper-wrapper testimonial-wrapper">
                  <div class="swiper-slide testimonial-slide"
                      v-for="(slide, index) in testimonialSlide"
                      :key="index"
                      >
                    <div class="testimonial-items">
                      <div class="testimonial-item-text">
                        {{slide.content}}
                      </div>
                      <div class="testimonial-item-person">
                        <b>{{slide.name}}</b>,{{slide.postName}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-controls swiper-horizontal-mobile-controls">
                <div class="swiper-button-prev swiper-button-prev-mobile" slot="button-prev">
                  <fa :icon="['fas', 'angle-left']" class="icons"/>
                </div>
                <div class="swiper-button-next swiper-button-next-mobile" slot="button-next">
                  <fa :icon="['fas', 'angle-right']" class="icons"/>
                </div>
              </div>
            </div>
          </b-col>
        </div>
      </div>
    </section>
    <section class="section-3-col container container-xl section-why-spot2">
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="section-header text-center">
              <div class="h3 section-title">A turnkey build out solution that exceeds <br class="hidden-xs hidden-sm"> every expectation.</div>
              <div class="text-large">To help save time and money, ALUR Walls can be installed in a warm shell interior. Our turnkey solution includes Revit design, delivery, installation, and project management. Quick leads times mean the product can be delivered in as little as two weeks. And our professional customer service team is here to help you every step of the way in creating your perfect office.</div>
              <div class="hr-row mobile-view mt-5"></div>
              </div>
          </b-col >
        </b-row>
        <b-row class="desktop-view">
          <b-col md="4">
            <div class="img" rounded="circle">
              <svg width="36" height="48" viewBox="0 0 36 48" xmlns="http://www.w3.org/2000/svg"><title>F180B482-4BA0-4276-BB22-FD81F9C4B831</title><g fill="#FFF" fill-rule="evenodd"><path d="M2 46V2h32v33c0 6.065-4.935 11-11 11H2zm21 2H0V0h36v35c0 7.168-5.832 13-13 13z"></path><path d="M14.107 17.917c-.839 0-1.52.683-1.52 1.521 0 .839.681 1.521 1.52 1.521.84 0 1.521-.682 1.521-1.521 0-.838-.682-1.521-1.52-1.521m0 5.042a3.525 3.525 0 0 1-3.522-3.521 3.526 3.526 0 0 1 3.521-3.521 3.526 3.526 0 0 1 3.521 3.521 3.525 3.525 0 0 1-3.52 3.521M22.302 26.11c-.84 0-1.521.683-1.521 1.521 0 .84.682 1.521 1.52 1.521.84 0 1.522-.682 1.522-1.52 0-.839-.682-1.522-1.521-1.522m0 5.042a3.525 3.525 0 0 1-3.521-3.52 3.526 3.526 0 0 1 3.52-3.522 3.526 3.526 0 0 1 3.522 3.521 3.525 3.525 0 0 1-3.521 3.521M11.885 31.242l-1.414-1.414 13.37-13.37 1.414 1.414zM1.042 13.88h33v-1.926h-33zM5.042 35.88h25v-1.926h-25zM5.042 39.88h25v-1.926h-25zM5.146 5.057h-1.61v-1.14h4.61v1.14H6.508v4.86H5.146z"></path><path d="M5.396 9.667h.862v-4.86h1.638v-.64h-4.11v.64h1.61v4.86zm1.362.5H4.896v-4.86h-1.61v-1.64h5.11v1.64H6.758v4.86zM11.146 7.362l-.375-1.273c-.105-.356-.212-.8-.302-1.158h-.016c-.09.357-.18.811-.276 1.158L9.82 7.362h1.326zM9.624 8.377l-.428 1.54H7.793l1.832-6h1.781l1.86 6h-1.46l-.463-1.54H9.624z"></path><path d="M10.15 7.112h.662l-.28-.953-.06-.21-.054.207-.269.956zm1.33.5H9.491l.444-1.59c.057-.204.111-.444.164-.68.037-.164.073-.326.111-.47l.046-.19h.39l.123.418c.075.303.16.638.241.917l.47 1.595zm.511 2.055h.934l-1.705-5.5H9.808l-1.68 5.5h.877l.428-1.54h2.095l.463 1.54zm1.612.5H11.62l-.463-1.54H9.814l-.428 1.54H7.453l1.986-6.5h2.15l2.014 6.5z"></path><path d="M17.012 9.917l-.543-1.087c-.222-.418-.365-.729-.534-1.075h-.018c-.125.346-.276.657-.463 1.075l-.498 1.087h-1.55l1.737-3.035-1.674-2.965h1.558l.526 1.095c.177.365.312.659.453.997h.018c.142-.383.259-.65.41-.997l.508-1.095h1.548l-1.691 2.93 1.779 3.07h-1.566z"></path><path d="M17.166 9.667h.979l-1.635-2.82 1.547-2.68h-.956l-.441.95c-.148.341-.263.603-.402.979l-.061.163h-.34l-.082-.154a18.433 18.433 0 0 0-.447-.984l-.459-.954h-.972l1.533 2.716-1.593 2.784h.959l.558-1.224c.126-.278.235-.516.328-.773l.059-.165h.332l.21.395c.121.251.242.502.406.813l.477.954zm1.846.5h-2.155l-.612-1.226a20.084 20.084 0 0 1-.301-.591l-.134.3-.694 1.517h-2.14l1.879-3.286-1.815-3.214h2.144l.594 1.236c.082.17.156.326.225.477.063-.15.127-.297.199-.462l.58-1.251h2.14l-1.834 3.18 1.924 3.32z"></path></g></svg>
            </div>
            <div class="section-subtitle">Tax Advantages</div>
            <p>ALUR Walls are movable and thus, considered furniture. As such, ALUR products can utilize a normal 7 year depreciation schedule as opposed to 39 years used for dry-wall and construction used in traditional office build outs.</p><a class="section-link link-inverse" href="/tax-advantages">Learn more <fa :icon="['fas', 'angle-right']" class="icons"/></a>
          </b-col>
          <b-col md="4">
            <div class="img">
              <svg width="47" height="47" viewBox="0 0 47 47" xmlns="http://www.w3.org/2000/svg"><title>DABB2304-55FE-476D-BC2F-00AAA6256678</title><g fill="#FFF" fill-rule="evenodd"><path d="M.857 7.946l6.06 38.136 3.99-.634-.259-1.63-2.359.374L2.746 9.316l2.36-.374-.26-1.631z"></path><path d="M35.797 2.392l.26 1.631 3.153-.501 5.541 34.876-33.288 5.29L5.921 8.812l19.819-3.15-.26-1.63L4.032 7.44l6.06 38.137 36.55-5.81-6.06-38.136z"></path><path d="M23.877 14.19l-1.028-6.463 1.63-.26 1.028 6.463z"></path><path d="M21.076 12.157l-.259-1.63L27.28 9.5l.26 1.63zM32.1 17.3l-1.026-6.464 1.63-.258 1.026 6.462z"></path><path d="M29.3 15.267l-.26-1.63 6.463-1.027.26 1.63zM27.724 5.347l-.26-1.63 6.463-1.028.26 1.632z"></path><path d="M31.136.714l-1.63.26 1.026 6.462 1.631-.26z"></path></g></svg>
            </div>
            <div class="section-subtitle">Industry Leading Product &amp; Design</div>
            <p>ALUR is an industry-best product with an award winning design. ALUR offers state-of-the-art features and unsurpassed quality. All ALUR products are fully warranted against defects in workmanship and materials, and come with a limited lifetime warranty.</p>

          </b-col>
          <b-col md="4">
            <div class="img">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
                <path fill="#FFFFFF" d="M24,0C10.767,0,0,10.767,0,24s10.767,24,24,24s24-10.767,24-24S37.233,0,24,0z M8.441,39.539l0.785-0.255	c2.696-0.876,5.463-1.494,8.259-1.873l-0.005,0.01c2.041,0.993,4.234,1.496,6.518,1.496c0.007,0,0.014,0,0.021,0	c2.174,0,4.359-0.488,6.323-1.413l-0.047-0.101c2.814,0.379,5.6,0.999,8.313,1.881l0.909,0.295C35.536,43.545,30.05,46,24,46	C17.93,46,12.426,43.528,8.441,39.539z M11.084,24c0-7.123,5.794-12.917,12.916-12.917s12.917,5.794,12.917,12.918	c0.003,.909-0.431,3.826-1.25, 545c-1.605-0.341-3.224-0.616-4.851-0.816C31.394,27.758,32,26.182,32,23.823 	c0-5.294-2.208-7.058-2.208-7.058s-2.208,1.764-2.208,7.058c0,2.184,0.521,3.698,1.056,4.684c-1.076-0.09-2.153-0.146-3.232-0.174
                c0.568-0.986,1.093-2.449,1.093-4.51c0-5.294-2.583-8.823-2.583-8.823S21.5,18.529,21.5,23.823c0,2.058,0.523,3.52,1.091,4.507
                c-1.03,0.023-2.06,0.066-3.087,0.146c0.55-0.986,1.08-2.491,1.08-4.653c0-5.294-2.292-7.058-2.292-7.058S16,18.529,16,23.823
                c0,2.336,0.618,3.906,1.212,4.881c-1.633,0.194-3.257,0.468-4.869,0.805C11.53,27.788,11.081,25.91,11.084,24z M39.715,32.644
                l-1.443,4.439c-9.314-2.822-19.394-2.822-28.709,0l-1.443-4.439C18.369,29.521,29.464,29.521,39.715,32.644z M39.585,39.512
                l2.654-8.16l-0.952-0.31c-1.204-0.392-2.423-0.731-3.648-1.039c0.829-1.884,1.281-3.944,1.278-6.003
                c0-8.225-6.691-14.917-14.917-14.917c-8.225,0-14.916,6.692-14.916,14.916c-0.003,2.057,0.43,4.09,1.249,5.968
                c-1.272,0.315-2.536,0.669-3.786,1.075l-0.952,0.31l2.568,7.896C4.351,35.289,2,29.916,2,24C2,11.869,11.869,2,24,2s22,9.869,22,22
                C46,30.047,43.547,35.53,39.585,39.512z"></path>
              </svg>
            </div>
            <div class="section-subtitle">Environmentally Conscious</div>
            <p>ALUR Walls are movable, sustainable and reusable. And ALUR qualifies for LEED® credits for new and existing buildings.</p><a class="section-link link-inverse" href="/environment">Learn more <fa :icon="['fas', 'angle-right']" class="icons"/></a>

          </b-col>
        </b-row>
        <b-row class="mobile-view">
          <b-col cols="12">
            <div v-swiper:listSwipers="swiperOptions">
              <div class="swiper-wrapper documents-carousel-wrap">
                <div class="swiper-slide solution-slide"
                  v-for="(slide, index) in solutionSlides"
                  :key="index"
                  >
                  <div class="img" v-html="slide.icon" rounded="circle">
                    {{slide.icon}}
                  </div>
                  <div class="section-subtitle">{{slide.subtitle}}</div>
                  <p>{{slide.content}}</p>
                </div>
              </div>
            </div>
            <div class="swiper-controls">
              <div class="swiper-pagination swiper-pagination-bullets swiper-pagination-mobile-swiper-list"></div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section section-documents bg-lightgray" id="benefits">
        <div class="container container-lg">
          <div class="row">
            <b-col cols="12" lg="4">
              <ul class="documents-menu" role="tablist">
                <li class="documents-menu-item" :class="activeBenefitsTab=='incentiveSlides' ? ' active' : ''" role="presentation"><span class="documents-menu-item-link" @click="activeBenefitsTab='incentiveSlides'" aria-controls="programs" role="tab" data-toggle="tab"><b-img src='~/assets/icons/news.svg' class="icons"/><span>Incentive Programs</span></span></li>
                <li class="documents-menu-item" :class="activeBenefitsTab=='broucherSlides' ? ' active' : ''"  role="presentation"><span class="documents-menu-item-link" @click="activeBenefitsTab='broucherSlides'" aria-controls="reports" role="tab" data-toggle="tab"><b-img src='~/assets/icons/file.svg' class="icons"/><span>Brochures &amp; Reports</span></span></li>
                <li class="documents-menu-item" :class="activeBenefitsTab=='insightSlides' ? ' active' : ''" role="presentation"><span class="documents-menu-item-link" @click="activeBenefitsTab='insightSlides'" aria-controls="insights" role="tab" data-toggle="tab"><b-img src='~/assets/icons/binoculars.svg' class="icons"/><span>Insights</span></span></li>
                <li class="documents-menu-item" :class="activeBenefitsTab=='newsSlides' ? ' active' : ''" role="presentation"><span class="documents-menu-item-link" @click="activeBenefitsTab='newsSlides'" aria-controls="news" role="tab" data-toggle="tab"><b-img src='~/assets/icons/loudspeaker.svg' class="icons"/><span>In the news</span></span></li>
              </ul>
            </b-col>
            <b-col cols="12" lg="8">
              <div class="documents-carousel-cover tab-content">
                <div class="documents-carousel" id="programs">
                  <div v-swiper:mySwiper="swiperOption">
                    <div class="swiper-wrapper documents-carousel-wrap">
                      <div class="swiper-slide"
                        v-for="(slide, index) in slides"
                        :key="index"
                        >
                        <b-img
                          :src="slide.src"
                          class="responsive-img"
                        />
                        <div class="document-carousel-content">
                          <div>
                            <div class="documents-carousel-title">
                              {{slide.title}}
                            </div>
                            <div class="documents-carousel-descr">
                              {{slide.content}}
                            </div>
                          </div>
                          <div class="documents-link-outer">
                            <b-link :href="slide.link" class="documents-carousel-link btn btn-primary">Get Started</b-link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="swiper-controls">
                    <div class="swiper-button-prev swiper-button-prev-benefits" slot="button-prev">
                      <fa :icon="['fas', 'angle-left']" class="icons"/>
                    </div>
                    <div class="swiper-pagination swiper-pagination-bullets swiper-pagination-benefits"></div>
                    <div class="swiper-button-next swiper-button-next-benefits" slot="button-next">
                      <fa :icon="['fas', 'angle-right']" class="icons"/>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </div>
        </div>
      </section>
    <section class="section section-why-spot5">
      <b-container class="container-xl">
        <div class="h3 spot-title text-center">Why ALUR is better</div>
        <b-row class="listContainer desktop-view">
          <b-col md="6" class="listItem">
            <h3 class="title">Demountable</h3>
            <p class="descriptionText">ALUR Glass Walls can be reused</p>
          </b-col>
          <b-col md="6" class="listItem">
            <h3 class="title">No Permits Needed</h3>
            <p class="descriptionText">ALUR Walls do not require permits in most states</p>
          </b-col>
          <b-col md="6" class="listItem">
            <h3 class="title">Turnkey Pricing</h3>
            <p class="descriptionText">Pricing includes delivery, installation and project management</p>
          </b-col>
          <b-col md="6" class="listItem">
            <h3 class="title">Qualify for LEED Points</h3>
            <p class="descriptionText">ALUR Walls can contribute up to 16 LEED® points</p>
          </b-col>
          <b-col md="6" class="listItem">
            <h3 class="title">Minimalist Design</h3>
            <p class="descriptionText">Minimal framing and square design is simple, elegant and resource efficient</p>
          </b-col>
          <b-col md="6" class="listItem">
            <h3 class="title">Superior Quality</h3>
            <p class="descriptionText">ALUR Walls are a manufactured system ensuring consistent fit and finish</p>
          </b-col>
          <b-col md="6" class="listItem">
            <h3 class="title">Optimal Sound Privacy</h3>
            <p class="descriptionText">ALUR Glass Wall come standard with four-sided door seals to prevent sound loss</p>
          </b-col>
          <b-col md="6" class="listItem">
            <h3 class="title">Frameless Glass Doors</h3>
            <p class="descriptionText">ALUR Glass Wall comes standard with full height frameless & postless glass doors</p>
          </b-col>
          <b-col md="6" class="listItem">
            <h3 class="title">Exceptional Customer Service</h3>
            <p class="descriptionText">Quick response rates, design assistance, short lead times and in-house installation experts</p>
          </b-col>
          <b-col md="6" class="listItem">
            <h3 class="title">Clear Polycarbonate Joints</h3>
            <p class="descriptionText">ALUR Glass Wall crystalline polycarbonate joint is 93% clear and will not discolor or shrink</p>
          </b-col>
          <b-col md="6" class="listItem">
            <h3 class="title">Tax Depreciation</h3>
            <p class="descriptionText">Demountable walls are classified as furniture by the IRS and may qualify for 100% first year depreciation. For more information, refer to www.Section179.org.</p>
          </b-col>
          <b-col md="6" class="listItem">
            <h3 class="title">Multiple Finish Options</h3>
            <p class="descriptionText">ALUR offers clear anodized aluminum, polished aluminum and white, black and bronze PVDF resin frame options to suit your design needs</p>
          </b-col>
          <b-col md="6" class="listItem">
            <h3 class="title">Functional Design Options</h3>
            <p class="descriptionText">ALUR Dividing Wall features built-in options, including furniture hanging rails, tackable/acoustical, markerboard, fabric and high pressure laminate tiles</p>
          </b-col>
          <b-col md="6" class="listItem">
            <h3 class="title">Design Innovation</h3>
            <p class="descriptionText">ALUR Glass Wall tongue-and-grove joint design provides a smooth glass-to-glass connection, minimizes deflection, and allows film to be applied directly over joint</p>
          </b-col>
          <b-col md="6" class="listItem">
            <h3 class="title">Scratch & Fingerprint Resistant Framing</h3>
            <p class="descriptionText">ALUR Glass Wall comes standard in a scratch resistant bead-blasted clear anodized aluminum finish that will not show fingerprints and is lighter in color for a more modern look</p>
          </b-col>
        </b-row>
        <b-row class="mobile-view listContainer">
          <b-col cols="12">
            <slick-carousel :options="slickOption">
              <template slot="content">
                <div v-for="(slide, index) in lists" :key="index">
                  <b-col class="listItem">
                    <h3 class="title">{{slide.listHeading}}</h3>
                    <p class="descriptionText">{{slide.listText}}</p>
                  </b-col>
                </div>
              </template>
            </slick-carousel>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div class="section-why-spot1-video">
      <video class="section-video" autoplay="" loop="" muted="" poster="../../assets/images/glass-wall/alur-spot1-bg.jpg">
        <source src="~/assets/video/vid_alurOfficeChat.mp4" type="video/mp4">
       </video>
    </div>
  </div>
</template>

<script>
import SlickCarousel from '~/components/Carousels/SlickCarousel.vue'
export default {
  scrollToTop: true,
  components: {
    SlickCarousel,
  },
  computed: {
    slides() {
      switch(this.activeBenefitsTab) {
        case "broucherSlides":
          return this.broucherSlides;
        case "insightSlides":
          return this.insightSlides;
        case "newsSlides":
          return this.newsSlides;
        default:
          return this.incentiveSlides;
      }
    }
  },
  mounted() {
    this.updateOffsetScrollHeight()
    window.onresize = () => {
      this.updateOffsetScrollHeight()
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  methods: {
    updateOffsetScrollHeight() {
      this.offsetScrollHeight = -(document.getElementById('stickyHeader').offsetHeight + 100)
    }
  },
  data(){
    return{
      title: 'Why ALUR?',
      activeBenefitsTab: 'incentiveSlides',
      offsetScrollHeight: -100,
      slickOption:{
        infinite: false,
        dots: true,
        slidesPerRow: 1,
        rows: 4,
        adaptiveHeight: true
      },
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
      testimonialSlide:[
        {
        content: '“The combination of ALUR’s minimal design & low iron glass option was a perfect fit for our corporate headquarters. We love the clean lines of ALUR, which align with our own design aesthetic. The ALUR team worked closely with us to create extra wide sliding doors & fixed glass panels, thereby reducing the number of seams and maximizing the amount of light entering the space.”',
        name: 'Ben Conway',
        postName: 'President of HALCON'
        },
        {
          content: '“ALUR’s black frame option added just the right amount of cool factor to our high tech company’s new downtown office. The result was a hip, connected-feeling space for all our employees, while still providing privacy where needed through the use of the dividing walls. Just what we were looking for!”',
          name: 'Nathan Forster',
          postName: 'CEO of Harrisun'
        },
        {
          content: '“We wanted to build a space that attracted the best talent and also a space that clients wouldn’t forget. ALUR played a huge part in that process.”',
          name: 'Mark Martin',
          postName: 'CFO of Coyne PR'
        },
        {
          content: '“We wanted a modern and attractive working environment while incorporating a conservative and stable image. ALUR walls met our needs perfectly by creating a warm and inviting, light filled space that also helped bring the facility together into a more integrated whole.”',
          name: 'Gina Busar',
          postName: 'President of Traveling Coaches'
        }
      ],
      incentiveSlides: [
        {
          src: require('~/assets/images/benefits/tax-depreciation.jpg'),
          title: 'Tax Advantages',
          content: 'Learn how ALUR solutions can help you save every April 15th.',
          link: '/tax-advantages'
        },
        {
          src: require('~/assets/images/benefits/env.jpg'),
          title: 'Environmental Benefits',
          content: 'Earn up to 16 LEED® points',
          link: '/environment'
        },
        {
          src: require('~/assets/images/benefits/bg_accoustics.jpg'),
          title: 'Acoustical Solutions',
          content: 'Lower noise levels and increase concentration.',
          link: '/acoustical'
        },
        {
          src: require('~/assets/images/benefits/bg_vr.jpg'),
          title: 'Virtual Reality Program',
          content: 'Walk through your projects with just one click.',
          link: '/vr'
        },
      ],
      broucherSlides: [
        {
          src: require('~/assets/images/benefits/brochure.jpg'),
          title: 'ALUR Brochure',
          content: 'Check out the most recent brochure for our beautiful award-wining wall system.',
          link: '/files/ALUR_Brochure_for_web.pdf'
        },
        {
          src: require('~/assets/images/benefits/brochure-duo.jpg'),
          title: 'Duo Brochure',
          content: ' Check out the most recent brochure for our beautiful award-wining wall system.',
          link: '/files/ALUR_53181_DUO_Brochure_Web.pdf'
        },
        {
          src: require('~/assets/images/benefits/features.jpg'),
          title: 'ALUR Features',
          content: 'Learn more about some of ALUR’s unique design features.',
          link: '/files/Feature_Sheet_ALUR.pdf'
        },
        {
          src: require('~/assets/images/benefits/faq.jpg'),
          title: 'ALUR FAQs',
          content: ' Peruse answers to some of the most frequently asked questions about our wall system.',
          link: '/files/ALUR-FAQs-2018.pdf'
        },
        {
          src: require('~/assets/images/benefits/leed-contribution.jpg'),
          title: 'ALUR LEED® Contribution',
          content: 'Learn how our product contributes to LEED® points.',
          link: '/files/ALUR-LEED-CI-Contribution.pdf'
        },
      ],
      insightSlides: [
        {
          src: require('~/assets/images/benefits/blog1.jpg'),
          title: 'Increase Usable Floor Space',
          content: 'As pointed out in our post on the incredible shrinking office the increasing cost of floor space in growing market areas is causing companies to reduce the amount of square footage allotted to each employee.',
          link: '/insights/increase_usable_floor_space'
        },
        {
          src: require('~/assets/images/benefits/blog2.jpg'),
          title: 'Solutions for the Modern Workplace',
          content: 'Solutions for the Modern Workplace In pursuit of the perfect office, MAI has created an integrated modular design concept that is inherently flexible and sustainable.',
          link: '/insights/solutions_for_the_modern_workplace'
        },
        {
          src: require('~/assets/images/benefits/blog3.jpg'),
          title: 'How to Build Points toward LEED® Certification',
          content: 'Now in its 10th year the United States Green Building Council’s LEED® (Leadership in Energy & Environmental Design) standards define a building’s energy efficiency and, as importantly, low-impact and nontoxic construction guidelines.',
          link: '/insights/how_to_build_points_toward_leed_certification'
        },
        {
          src: require('~/assets/images/benefits/blog4.jpg'),
          title: 'A Sound Solution to Sound Control',
          content: 'Over the past few years a substantial amount of ink has been expended debating the impact of office design on employee productivity.',
          link: '/insights/a_sound_solution_to_sound_control'
        },
        {
          src: require('~/assets/images/benefits/blog5.jpg'),
          title: 'The Workplace as a Recruiting Tool',
          content: 'Recruiting and retaining highly talented knowledge workers in today’s competitive technology industry job market is no longer assured by offering attractive salaries and benefit packages.',
          link: '/insights/the_workplace_recruiting_tool'
        },
      ],
      newsSlides: [
        {
          src: require('~/assets/images/benefits/news1.jpg'),
          title: 'Visit our showroom at NEOCON',
          content: 'Stop by our permanent showroom in Suite 10-115 during NEOCON, June 12-14, at the Merchandise Mart in Chicago  ',
          link: ''
        },
      ],
      solutionSlides: [
        {
          icon: ` <svg width="36" height="48" viewBox="0 0 36 48" xmlns="http://www.w3.org/2000/svg"><title>F180B482-4BA0-4276-BB22-FD81F9C4B831</title><g fill="#FFF" fill-rule="evenodd"><path d="M2 46V2h32v33c0 6.065-4.935 11-11 11H2zm21 2H0V0h36v35c0 7.168-5.832 13-13 13z"></path><path d="M14.107 17.917c-.839 0-1.52.683-1.52 1.521 0 .839.681 1.521 1.52 1.521.84 0 1.521-.682 1.521-1.521 0-.838-.682-1.521-1.52-1.521m0 5.042a3.525 3.525 0 0 1-3.522-3.521 3.526 3.526 0 0 1 3.521-3.521 3.526 3.526 0 0 1 3.521 3.521 3.525 3.525 0 0 1-3.52 3.521M22.302 26.11c-.84 0-1.521.683-1.521 1.521 0 .84.682 1.521 1.52 1.521.84 0 1.522-.682 1.522-1.52 0-.839-.682-1.522-1.521-1.522m0 5.042a3.525 3.525 0 0 1-3.521-3.52 3.526 3.526 0 0 1 3.52-3.522 3.526 3.526 0 0 1 3.522 3.521 3.525 3.525 0 0 1-3.521 3.521M11.885 31.242l-1.414-1.414 13.37-13.37 1.414 1.414zM1.042 13.88h33v-1.926h-33zM5.042 35.88h25v-1.926h-25zM5.042 39.88h25v-1.926h-25zM5.146 5.057h-1.61v-1.14h4.61v1.14H6.508v4.86H5.146z"></path><path d="M5.396 9.667h.862v-4.86h1.638v-.64h-4.11v.64h1.61v4.86zm1.362.5H4.896v-4.86h-1.61v-1.64h5.11v1.64H6.758v4.86zM11.146 7.362l-.375-1.273c-.105-.356-.212-.8-.302-1.158h-.016c-.09.357-.18.811-.276 1.158L9.82 7.362h1.326zM9.624 8.377l-.428 1.54H7.793l1.832-6h1.781l1.86 6h-1.46l-.463-1.54H9.624z"></path><path d="M10.15 7.112h.662l-.28-.953-.06-.21-.054.207-.269.956zm1.33.5H9.491l.444-1.59c.057-.204.111-.444.164-.68.037-.164.073-.326.111-.47l.046-.19h.39l.123.418c.075.303.16.638.241.917l.47 1.595zm.511 2.055h.934l-1.705-5.5H9.808l-1.68 5.5h.877l.428-1.54h2.095l.463 1.54zm1.612.5H11.62l-.463-1.54H9.814l-.428 1.54H7.453l1.986-6.5h2.15l2.014 6.5z"></path><path d="M17.012 9.917l-.543-1.087c-.222-.418-.365-.729-.534-1.075h-.018c-.125.346-.276.657-.463 1.075l-.498 1.087h-1.55l1.737-3.035-1.674-2.965h1.558l.526 1.095c.177.365.312.659.453.997h.018c.142-.383.259-.65.41-.997l.508-1.095h1.548l-1.691 2.93 1.779 3.07h-1.566z"></path><path d="M17.166 9.667h.979l-1.635-2.82 1.547-2.68h-.956l-.441.95c-.148.341-.263.603-.402.979l-.061.163h-.34l-.082-.154a18.433 18.433 0 0 0-.447-.984l-.459-.954h-.972l1.533 2.716-1.593 2.784h.959l.558-1.224c.126-.278.235-.516.328-.773l.059-.165h.332l.21.395c.121.251.242.502.406.813l.477.954zm1.846.5h-2.155l-.612-1.226a20.084 20.084 0 0 1-.301-.591l-.134.3-.694 1.517h-2.14l1.879-3.286-1.815-3.214h2.144l.594 1.236c.082.17.156.326.225.477.063-.15.127-.297.199-.462l.58-1.251h2.14l-1.834 3.18 1.924 3.32z"></path></g></svg>`,
          subtitle: 'Tax Advantages',
          content: 'ALUR Walls are movable and thus, considered furniture. As such, ALUR products can utilize a normal 7 year depreciation schedule as opposed to 39 years used for dry-wall and construction used in traditional office build outs.',
        },
        {
          icon: '<svg width="47" height="47" viewBox="0 0 47 47" xmlns="http://www.w3.org/2000/svg"><title>DABB2304-55FE-476D-BC2F-00AAA6256678</title><g fill="#FFF" fill-rule="evenodd"><path d="M.857 7.946l6.06 38.136 3.99-.634-.259-1.63-2.359.374L2.746 9.316l2.36-.374-.26-1.631z"></path><path d="M35.797 2.392l.26 1.631 3.153-.501 5.541 34.876-33.288 5.29L5.921 8.812l19.819-3.15-.26-1.63L4.032 7.44l6.06 38.137 36.55-5.81-6.06-38.136z"></path><path d="M23.877 14.19l-1.028-6.463 1.63-.26 1.028 6.463z"></path><path d="M21.076 12.157l-.259-1.63L27.28 9.5l.26 1.63zM32.1 17.3l-1.026-6.464 1.63-.258 1.026 6.462z"></path><path d="M29.3 15.267l-.26-1.63 6.463-1.027.26 1.63zM27.724 5.347l-.26-1.63 6.463-1.028.26 1.632z"></path><path d="M31.136.714l-1.63.26 1.026 6.462 1.631-.26z"></path></g></svg>',
          subtitle: 'Industry Leading Product & Design',
          content: 'ALUR is an industry-best product with an award winning design. ALUR offers state-of-the-art features and unsurpassed quality. All ALUR products are fully warranted against defects in workmanship and materials, and come with a limited lifetime warranty.',
        },
        {
          icon: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
                <path fill="#FFFFFF" d="M24,0C10.767,0,0,10.767,0,24s10.767,24,24,24s24-10.767,24-24S37.233,0,24,0z M8.441,39.539l0.785-0.255	c2.696-0.876,5.463-1.494,8.259-1.873l-0.005,0.01c2.041,0.993,4.234,1.496,6.518,1.496c0.007,0,0.014,0,0.021,0	c2.174,0,4.359-0.488,6.323-1.413l-0.047-0.101c2.814,0.379,5.6,0.999,8.313,1.881l0.909,0.295C35.536,43.545,30.05,46,24,46	C17.93,46,12.426,43.528,8.441,39.539z M11.084,24c0-7.123,5.794-12.917,12.916-12.917s12.917,5.794,12.917,12.918	c0.003,.909-0.431,3.826-1.25, 545c-1.605-0.341-3.224-0.616-4.851-0.816C31.394,27.758,32,26.182,32,23.823 	c0-5.294-2.208-7.058-2.208-7.058s-2.208,1.764-2.208,7.058c0,2.184,0.521,3.698,1.056,4.684c-1.076-0.09-2.153-0.146-3.232-0.174
                c0.568-0.986,1.093-2.449,1.093-4.51c0-5.294-2.583-8.823-2.583-8.823S21.5,18.529,21.5,23.823c0,2.058,0.523,3.52,1.091,4.507
                c-1.03,0.023-2.06,0.066-3.087,0.146c0.55-0.986,1.08-2.491,1.08-4.653c0-5.294-2.292-7.058-2.292-7.058S16,18.529,16,23.823
                c0,2.336,0.618,3.906,1.212,4.881c-1.633,0.194-3.257,0.468-4.869,0.805C11.53,27.788,11.081,25.91,11.084,24z M39.715,32.644
                l-1.443,4.439c-9.314-2.822-19.394-2.822-28.709,0l-1.443-4.439C18.369,29.521,29.464,29.521,39.715,32.644z M39.585,39.512
                l2.654-8.16l-0.952-0.31c-1.204-0.392-2.423-0.731-3.648-1.039c0.829-1.884,1.281-3.944,1.278-6.003
                c0-8.225-6.691-14.917-14.917-14.917c-8.225,0-14.916,6.692-14.916,14.916c-0.003,2.057,0.43,4.09,1.249,5.968
                c-1.272,0.315-2.536,0.669-3.786,1.075l-0.952,0.31l2.568,7.896C4.351,35.289,2,29.916,2,24C2,11.869,11.869,2,24,2s22,9.869,22,22
                C46,30.047,43.547,35.53,39.585,39.512z"></path>
              </svg>`,
          subtitle: 'Environmentally Conscious',
          content: 'ALUR Walls are movable, sustainable and reusable. And ALUR qualifies for LEED® credits for new and existing buildings.',
        }
      ],
      lists: [
        {
          listHeading: 'Demountable',
          listText: 'ALUR Glass Walls can be reused'
        },
        {
          listHeading: 'No Permits Needed',
          listText: 'ALUR Walls do not require permits in most states'
        },
        {
          listHeading: 'Turnkey Pricing',
          listText: 'Pricing includes delivery, installation and project management'
        },
        {
          listHeading: 'Qualify for LEED Points',
          listText: 'ALUR Walls can contribute up to 16 LEED® points'
        },
        {
          listHeading: 'Minimalist Design',
          listText: 'Minimal framing and square design is simple, elegant and resource efficient'
        },
        {
          listHeading: 'Superior Quality',
          listText: 'ALUR Walls are a manufactured system ensuring consistent fit and finish'
        },
        {
          listHeading: 'Optimal Sound Privacy',
          listText: 'ALUR Glass Wall come standard with four-sided door seals to prevent sound loss'
        },
        {
          listHeading: 'Frameless Glass Doors',
          listText: 'ALUR Glass Wall comes standard with full height frameless & postless glass doors'
        },
        {
          listHeading: 'Exceptional Customer Service',
          listText: 'Quick response rates, design assistance, short lead times and in-house installation experts'
        },
        {
          listHeading: 'Clear Polycarbonate Joints',
          listText: 'ALUR Glass Wall crystalline polycarbonate joint is 93% clear and will not discolor or shrink'
        },
        {
          listHeading: 'Tax Depreciation',
          listText: 'Demountable walls are classified as furniture by the IRS and may qualify for 100% first year depreciation. For more information, refer to www.Section179.org.'
        },
        {
          listHeading: 'Multiple Finish Options',
          listText: 'ALUR offers clear anodized aluminum, polished aluminum and white, black and bronze PVDF resin frame options to suit your design needs'
        },
        {
          listHeading: 'Functional Design Options',
          listText: 'ALUR Dividing Wall features built-in options, including furniture hanging rails, tackable/acoustical, markerboard, fabric and high pressure laminate tiles'
        },
        {
          listHeading: 'Design Innovation',
          listText: 'ALUR Glass Wall tongue-and-grove joint design provides a smooth glass-to-glass connection, minimizes deflection, and allows film to be applied directly over joint'
        },
        {
          listHeading: 'Scratch & Fingerprint Resistant Framing',
          listText: 'ALUR Glass Wall comes standard in a scratch resistant bead-blasted clear anodized aluminum finish that will not show fingerprints and is lighter in color for a more modern look'
        },
      ],
      testimonialSwiper: {
        loop: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next-testimonial',
          prevEl: '.swiper-button-prev-testimonial'
        }
      },
      testimonialMobileSwiper: {
        loop: true,
        slidesPerView: '1',
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next-mobile',
          prevEl: '.swiper-button-prev-mobile'
        }
      },
      swiperOption: {
        loop: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination-benefits',
          dynamicBullets: false,
        },
        navigation: {
          nextEl: '.swiper-button-next-benefits',
          prevEl: '.swiper-button-prev-benefits'
        },
        on: {
          slideChange() {
            console.log('onSlideChangeEnd', this);
          },
          tap() {
            console.log('onTap', this);
          }
        }
      },
      swiperOptions: {
        loop: true,
        slidesPerView: '1',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination-mobile-swiper-list',
          dynamicBullets: false,
        }
      }
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
a {
  transition: all .3s ease;
}
.container-lg {
    max-width: 1010px;
}
.container-xl {
    width: 100%;
    max-width: 1292px;
}
.container-no-padding {
    padding-left: 0;
    padding-right: 0;
}
.hr-row {
  width: 100%;
  height: 1px;
  background-color: #a8a8a8;
}
.nav-section {
  min-height: 62px;
  color: $alur-primary-color;
  background-color: $brand-primary;
  .navbar-nav {
    @media screen and (max-width: 767px) {
      flex-wrap: wrap;
    }
    &.content-tabs {
      li:not(:last-child) {
        margin-right: 42px;
      }
      li a {
        font-size: 0.9rem;
      }
    }

    .nav-item {
      margin-right: 42px;
      padding-left: 0;
      padding-right: 0;
      a.nav-link {
        padding: 0;
        color: $alur-primary-color;
        // width: 125px;
        height: 18px;
        font-family: "Akkurat";
        font-size: 1rem;
        line-height: 1rem;
      }
    }
    .nav-link {
      color: $dark-grey;
      position: relative;
      @media screen and (max-width: 767px) {
        margin-right: 0 !important;
        flex: 0 0 50%;
        text-align: center;
      }
      &:hover, &:focus {
        color: $alur-primary-color;
        background-color: transparent;
      }
      a {
        line-height: 42px;
      }
      &.active {
        color: $alur-primary-color;
        &:after{
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          transition: background-color .3s ease;
          content: "";
          background-color: $alur-primary-color;
        }
        a {
          opacity: 1;
          color: $alur-primary-color;
        }
      }
    }
  }
}
.section-hero-why {
  padding-top: 135px;
  padding-bottom: 100px;
  color: $alur-primary-color;
  background: url('../../assets/images/bg_why_hero.jpg') no-repeat center center;
  background-size: cover;
  @media screen and (max-width: 767px) {
    padding-top: 0;
    background: none;
    padding-bottom: 0;
  }
  .spot-subtitle {
    margin: 0 auto;
    font-size: 1rem;
    @media screen and (max-width: 767px) {
      font-size: 0.9rem;
      line-height: 2rem;
    }
  }
  .spot-text {
    max-width: 980px;
    margin: 0 auto;
    p {
      font-size: 1.05rem;
      letter-spacing: -0.2px;
      line-height: 2.1rem;
      color: $alur-primary-color;
      @media screen and (max-width: 767px) {
        color: $alur-dark-grey;
        font-weight: 300;
      }
    }
  }

  .container {
    text-align: left;
    max-width: 1010px;
    @media screen and (max-width: 767px) {
      padding: 0;
      .top-content-box {
        background: url(/_nuxt/assets/images/bg_why_hero.jpg) no-repeat center center;
        background-size: cover;
        padding-top: 242px;
        padding-bottom: 50px;
        padding-left: 15px;
        padding-right: 15px;
      }
      .bottom-content-box {
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 30px;
        padding-bottom: 30px;
      }
    }
    .spot-title {
      margin-top: 20px;
      margin-bottom: 440px;
      font-size: 3rem;
      letter-spacing: 0.88px;
      line-height: 64px;
      transition-delay: 1s;
      font-weight: 200;
      @media screen and (max-width: 767px) {
        margin-bottom: 40px;
        font-size: 1.6rem;
        letter-spacing: 0.46px;
        line-height: 2.1rem;
        font-weight: 700;
        margin-top: 0;
      }
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
  .signature {
    padding-top: 20px;
    transition-delay: 2.5s;
    img {
        margin: 0 auto 10px;
    }
    .signature-name {
      font-size: 1.5rem;
      line-height: 1.67;
      @media screen and (max-width: 767px) {
        font-size: 1.25rem;
        font-weight: 700;
        color: black;
      }
    }
    .signature-position {
      font-size: 1rem;
      font-weight: 300;
      line-height: 2.5;
      letter-spacing: -.3px;
      color: black;
    }
  }
}
.section-why-spot1 {
  width: 100%;
  max-width: 1292px;
  margin: 0 auto 20px auto;
  padding-top: 120px;
  @media screen and (max-width: 767px) {
    padding-top: 20px;
    .container-no-padding {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  .section-image {
    box-shadow: -40px 40px 0 0 $alur-grey-color1;
    max-width: 100%;
    height: auto;
    @media screen and (max-width: 767px) {
      box-shadow: -15px 15px 0 0 $alur-grey-color1;
      margin-left: 15px;
      padding-right: 15px;
    }
  }
  .section-text {
    margin-left: 80px;
    padding-top: 40px;
    padding-bottom: 110px;
    padding-right: 20px;
    max-width: 500px;
    @media screen and (max-width: 1009px) {
      padding-top: 80px;
      max-width: 100%;
    }
    @media screen and (max-width: 767px) {
      padding-top: 40px;
      margin-left: 0;
      padding-right: 0;
      padding-bottom: 0;
    }
    .spot-title {
      margin-bottom: 15px;
      color: $brand-primary;
      font-size: 2.5rem;
      line-height: 48px;
      @media screen and (max-width: 767px) {
        font-size: 1.75rem;
        letter-spacing: -0.34px;
        line-height: 28px;
      }
    }
    .text-large {
      margin-bottom: 10px;
      font-size: 1.05rem;
      font-weight: 300;
      line-height: 34px;
      @media screen and (max-width: 767px) {
        font-size: 1rem;
        line-height: 30px;
      }
    }
    .spot-subtitle {
      margin-bottom: 10px;
      padding-top: 30px;
      font-size: 1.5rem;
      line-height: 34px;
      letter-spacing: -.4px;
      color: $brand-primary;
      @media screen and (max-width: 767px) {
        font-size: 1.25rem;
        letter-spacing: -0.24px;
        line-height: 28px;
      }
    }
    p {
      color: $alur-dark-grey;
      font-size: 1rem;
      font-weight: 300;
      letter-spacing: -0.16px;
      line-height: 32px;
      span{
        color: $brand-primary;
        text-decoration: underline;
      }
    }
  }
}
.section-why-spot2 {
  margin-bottom: 80px;
  padding-top: 65px;
  padding-bottom: 70px;
  color: $alur-primary-color;
  background-color: #555;
  background-image: url('../../assets/images/bg_why-2.jpg');
  .container {
    max-width: 1010px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 0;
    padding-top: 40px;
    padding-bottom: 60px;
  }
  .section-header {
      max-width: 761px;
      margin: 0 auto 85px auto;
      @media screen and (max-width: 767px) {
        margin-bottom: 20px;
      }
      .section-title {
        margin-bottom: 1.25rem;
        font-weight: 200;
        line-height: 1.2;
        letter-spacing: .2px;
        font-size: 2.5rem;
        margin-top: 1.25rem;
        @media screen and (max-width: 767px) {
          font-size: 1.75rem;
          font-weight: 300;
          line-height: 40px;
        }
      }
      .text-large {
        opacity: 0.88;
        color: $alur-primary-color;
        font-size: 1.05rem;
        font-weight: 300;
        letter-spacing: -0.27px;
        line-height: 30px;
        @media screen and (max-width: 767px) {
          font-size: 1rem;
          letter-spacing: -0.24px;
        }
      }
  }
  .img {
    background-color: $alur-dark-grey;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    margin-bottom: 20px;
    border-radius: 50%;
    @media screen and (max-width: 767px) {
      margin: 0 auto;
    }
    svg {
      -ms-flex: none;
      flex: none;
      max-width: 36px;
      max-height: 36px;
      * {
        fill: $alur-grey-color1 !important;
      }
    }
  }
  .solution-slide{
    text-align: center;
  }
  .section-subtitle {
    margin-bottom: 10px;
    font-size: 1.25rem;
    @media screen and (max-width: 767px) {
      font-weight: 700;
      letter-spacing: -0.24px;
      line-height: 20px;
    }
  }
  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.38;
    letter-spacing: -.1px;
    color: $medium-grey;
    @media screen and (max-width: 767px){
      color: $alur-primary-color;
    }
  }
  .section-link {
    margin-top: 15px;
  }
  a.link-inverse {
    color: $alur-primary-color;
    text-decoration: none;
    font-size: 0.85rem;
    &:focus, &:hover {
      color: $alur-light-blue;
      text-decoration: none;
    }
  }
  .swiper-pagination {
    position: unset;
    margin-top: 20px;
    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      border-radius: 3px;
      background: $alur-primary-color;
      margin-left: 6px;
      margin-right: 6px;
    }
  }
}
.section-why-spot5 {
  padding-top: 55px;
  padding-bottom: 70px;
  background-color: $alur-primary-color;
  @media screen and (max-width: 767px) {
    padding-top: 40px;
    padding-bottom: 40px;
    /*.swiper-wrapper {
      display: block;
    }*/
  }
  .spot-title {
    margin-bottom: 50px;
    color: $alur-dark-grey;
    font-size: 2.75rem;
    font-weight: 300;
    line-height: 48px;
    @media screen and (max-width: 767px) {
      font-size: 1.56rem;
      line-height: 40px;
      margin-bottom: 20px;
    }
  }
  .listContainer {
    max-width: 1010px;
    margin: 0 auto;
    .listItem {
      text-align: left;
      position: relative;
      padding-left: 64px;
      padding-right: 30px;
      margin: 22.5px 0;
      &::before{
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        border: 2px solid $alur-grey-color1;
        background-color: #f8fcff;
        background-image: url('../../assets/images/check.png');
        background-repeat: no-repeat;
        background-position: center;
        left: 0;
        border-radius: 50%;
      }
      .title {
        color: $alur-light-grey;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: -0.15px;
        line-height: 16px;
        margin-bottom: 0;
        @media screen and (max-width: 767px) {
          font-size: 1rem;
          line-height: 16px;
        }
      }
      .descriptionText{
        color: $alur-light-grey;
        font-size: 1.25rem;
        font-weight: 300;
        letter-spacing: -0.3px;
        line-height: 30px;
        margin-bottom: 0;
        @media screen and (max-width: 767px) {
          font-size: 1rem;
          letter-spacing: -0.24px;
          line-height: 20px;
          width: 250px;
        }
      }
    }
    .swiper-pagination {
      position: unset;
      .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        border-radius: 3px;
        background: $brand-primary;
        margin-left: 3px;
        margin-right: 3px;
      }
    }

  }
}
.section-why-spot1-video {
  position: relative;
  -webkit-clip-path: inset(0);
  clip-path: inset(0);
  width: 100%;
  height: 515px;
  .section-video {
    width: 100%;
    height: 515px;
    object-fit: cover;
    background-color: $alur-dark-grey;
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }
}
.section-testimonials{
  margin: 0 auto 120px auto;
  overflow: hidden;
  margin-bottom: 80px;
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: $brand-primary;
  color: $alur-primary-color;
  .container-fluid {
    margin-left: 141px;
    padding-left: 0;
    padding-right: 0;
    @media screen and (max-width: 767px) {
      padding-left: 15px;
      padding-right: 15px;
      margin-left: 0;
    }
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 0;
    .container {
      max-width: 100%;
    }
    .order-1 {
      padding-bottom: 200px;
    }
  }
  .bubbles {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10;
    @media screen and (max-width: 767px) {
      height: 600px;
    }
    .bubble {
      position: absolute;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      -ms-flex-pack: center;
      justify-content: center;
      border-radius: 50%;
      background-color: $alur-primary-color;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,.08);
      z-index: 2;
      transition: all .5s;
      img {
        max-width: 90%;
      }
      &.bubble-1 {
        width: 120px; height: 120px; top: 70px; left: 290px; animation: pulse 4s ease 3s infinite normal none running;
        @media screen and (max-width: 767px) {
          width: 80px;
          height: 80px;
          top: 8%;
          left: 50%;
        }
      }
      &.bubble-2 {
        width: 95px; height: 95px; top: 35px; left: 485px; animation: pulse 4s ease 7s infinite normal none running;
        @media screen and (max-width: 767px) {
          width: 60px;
          height: 60px;
          top: 0;
          left: 82%;
        }
      }
      &.bubble-3 {
        width: 95px; height: 95px; top: 220px; left: 155px; animation: pulse 4s ease 1s infinite normal none running;
        @media screen and (max-width: 767px) {
          width: 60px;
          height: 60px;
          top: 24%;
          left: 26%;
        }
      }
      &.bubble-4 {
        width: 104px; height: 104px; top: 267px; left: 404px; animation: pulse 4s ease 6s infinite normal none running;
        @media screen and (max-width: 767px) {
          width: 70px;
          height: 70px;
          top: 32%;
          left: 70%;
        }
        img{
          @media screen and (max-width: 767px){
            max-width: 65%;
          }
        }
      }
      &.bubble-5 {
        width: 128px; height: 128px; top: 325px; left: 10px; animation: pulse 4s ease 6s infinite normal none running;
        @media screen and (max-width: 767px) {
          width: 80px;
          height: 80px;
          top: 42%;
          left: 0;
        }
      }
      &.bubble-6 {
        width: 144px; height: 144px; top: 7px; left: 0px; animation: pulse 4s ease 4s infinite normal none running;
        @media screen and (max-width: 767px) {
          width: 90px;
          height: 90px;
          top: 0;
          left: 0;
        }
      }
      &.bubble-7 {
        width: 112px; height: 112px; top: 550px; left: 40px; animation: pulse 4s ease 1s infinite normal none running;
        @media screen and (max-width: 767px) {
          width: 70px;
          height: 70px;
          top: 70%;
          left: 10%;
        }
        img{
          @media screen and (max-width: 767px){
            max-width: 65%;
          }
        }
      }
      &.bubble-8 {
        width: 144px; height: 144px; top: 375px; left: 210px; animation: pulse 4s ease 4s infinite normal none running;
        @media screen and (max-width: 767px) {
          width: 90px;
          height: 90px;
          top: 45%;
          left: 40%;
        }
      }
      &.bubble-9 {
        width: 128px; height: 128px; top: 648px; left: 230px; animation: pulse 4s ease 6s infinite normal none running;
        @media screen and (max-width: 767px) {
          width: 80px;
          height: 80px;
          top: 78%;
          left: 45%;
        }
      }
      &.bubble-10 {
        width: 112px; height: 112px; top: 515px; left: 404px; animation: pulse 4s ease 2s infinite normal none running;
        @media screen and (max-width: 767px) {
          width: 70px;
          height: 70px;
          top: 65%;
          left: 75%;
        }
        img{
          @media screen and (max-width: 767px){
            max-width: 65%;
          }
        }
      }
    }
  }
  .testimonials-carousel {
    overflow: hidden;
    @media screen and (max-width: 767px) {
      .swiper-container {
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
    @media screen and (min-width: 768px) {
      &:before{
        top: 0;
        background-image: linear-gradient(180deg,$brand-primary,rgba(30,48,110,.001));
      }
      &::after,&::before{
        position: absolute;
        left: 0;
        display: block;
        width: 100%;
        height: 244px;
        content: "";
        z-index: 5;
      }
      &:after {
        bottom: 0;
        background-image: linear-gradient(0deg,$brand-primary,rgba(30,48,110,.001));
      }
    }
  .testimonial-wrapper{
    height: 806px;
    @media screen and (max-width: 767px) {
      height: auto;
    }
    .testimonial-slide{
      height: auto;
      .testimonial-items{
        height: auto;
        padding-left: 73px;
        @media screen and (max-width: 767px) {
          padding-left: 0;
          padding-right: 15px;
          text-align: center;
        }
        .testimonial-item-text {
          padding-top: 20px;
          font-size: 1.2rem;
          font-weight: 300;
          line-height: 1.67;
          letter-spacing: -.3px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .testimonial-item-person{
          color: $alur-primary-color;
          padding-top: 28px;
          padding-bottom: 28px;
          border-bottom: 1px solid hsla(0,0%,100%,.2);
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: -.3px;
          @media screen and (max-width: 767px) {
            border: none;
          }
        }
      }
    }
    }
  }

}
.bg-lightgray {
  background-color: $alur-primary-color1;
}
.section-documents {
  padding-top: 80px;
  padding-bottom: 40px;
  @media screen and (max-width: 767px) {
    padding-top: 40px;
  }
  .documents-menu {
    margin-right: 50px;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-top: 0;
    @media screen and (max-width: 1009px) {
      margin: auto 100px;
    }
    @media screen and (max-width: 767px) {
      margin: auto 42px;
    }
    .documents-menu-item {
      margin: 38px 0;
      @media screen and (max-width: 767px) {
        margin: 20px 0;
      }
      &:first-child {
        margin-top: 12px !important;
      }
      &.active, &:hover {
        .documents-menu-item-link {
          border-radius: 4px;
          background-color: $alur-primary-color;
          box-shadow: 0 12px 24px 0 rgba(0,0,0,.08), 0 1px 2px 0 rgba(0,0,0,.08);
        }
      }
      .documents-menu-item-link {
        display: block;
        padding: 12px 20px;
        line-height: 32px;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: -.4px;
        background-color: #e3e5ea;
        color: $brand-primary;
        cursor: pointer;
        transition: all .3s ease;
        i, span {
          vertical-align: middle;
        }
        i {
          display: inline-block;
          margin-right: 26px;
          font-size: 2.2rem;
        }
      }
    }



    .icons{
      margin-right: 26px;
    }
  }
  .documents-carousel-cover {
    padding-bottom: 80px;
    .documents-carousel {
      border-radius: 4px;
      background-color: $alur-primary-color;
      box-shadow: 0 12px 24px 0 rgba(0,0,0,.08);
      opacity: 1;
      height: auto;
      .documents-carousel-wrap {
        display: -ms-flexbox;
        display: flex;
        position: relative;
        height: 100%;
        width: 100%;

      }
      .documents-carousel-img{
        width: 100%;
      }
      .document-carousel-content{
        position: relative;
        padding: 25px 20px;
        min-height: 45px;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: -.4px;
        color: $medium-grey;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        @media screen and (max-width: 767px) {
          display: block;
          .documents-link-outer {
            text-align: right;
          }
        }
        .documents-carousel-text{
          position: relative;
          padding: 25px 40px;
        }
        .documents-carousel-title{
          min-height: 48px;
          margin-bottom: 10px;
          padding-right: 50px;
          font-size: 1.5rem;
          font-weight: 200;
          line-height: 1;
          letter-spacing: -.3px;
          color: black;
          display: flex;
          -ms-flex-align: center;
          align-items: center;
          @media screen and (max-width: 767px) {
            font-size: 1.25rem;
            letter-spacing: -0.25px;
            line-height: 24px;
            min-height: auto;
            padding-right: 0;
          }
        }
        .documents-carousel-descr {
          min-height: 45px;
          padding-right: 50px;
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: -.4px;
          color: $medium-grey;
          @media screen and (max-width: 767px) {
            font-size: 1rem;
            font-weight: 300;
            letter-spacing: -0.41px;
            line-height: 19px;
            min-height: auto;
            padding-right: 0;
            margin-bottom: 14px;
          }
        }
        .documents-carousel-link{
          flex: none;
          min-width: 150px;
          margin-left: auto;
          @media screen {
            font-size: 0.9rem;
            font-weight: 700;
            letter-spacing: 0.44px;
            line-height: 15px;
          }
        }
      }
      .swiper-slide {
        img.responsive-img {
          border-radius: 5px 5px 0 0;
        }
      }
      .swiper-controls {
        position: absolute;
        bottom: 15px;
        left: 0;
        right: 0;
        text-align: center;
      }
      .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
        opacity: 0;
      }
      .swiper-button-next, .swiper-button-prev {
        font-size: 1.6rem;
        position: static;
        display: inline-block;
        width: 48px;
        height: auto;
        margin-top: 0;
        transform: none;
        vertical-align: middle;
        background: transparent;
        border: 0;
        &.swiper-button-disabled {
          opacity: .35;
          cursor: auto;
          pointer-events: none;
        }
      }
      .swiper-button-prev {
        left: 40px;
      }
      .swiper-pagination {
        position: static;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        transition: .3s;
        transform: translateZ(0);
        z-index: 10;
        .swiper-pagination-bullet {
          margin: 0 5px;
          background-color: $brand-primary;
        }
        .swiper-pagination-bullet-active {
          background-color: $brand-primary;
          opacity: 1;
        }
      }
    }
  }
}

.swiper-vertical-controls {
  .swiper-button-next {
    transform: translateY(80%);
    margin-top: 4px;
  }
  .swiper-button-next, .swiper-button-prev {
    background: none;
    left: 0;
    right: auto;
    z-index: 1000;
    border: 1px solid hsla(0,0%,100%,.2);
    outline: none;
    border-radius: 50%;
    transition: all .3s ease;
    padding: 0;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    line-height: 40px;
    font-size: 1.8rem;                                                                                               cursor: pointer;
  }
}
.swiper-horizontal-mobile-controls {
  .swiper-button-next {
    margin-left: 40px;
  }
  .swiper-button-prev {
    margin-left: -40px;
  }
  .swiper-button-next, .swiper-button-prev {
    background: none;
    left: 50%;
    right: auto;
    top: auto;
    z-index: 1000;
    border: 1px solid hsla(0,0%,100%,.2);
    outline: none;
    border-radius: 50%;
    transition: all .3s ease;
    padding: 0;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    line-height: 40px;
    font-size: 1.5rem;                                                                                               cursor: pointer;
    margin-top: 0;
    transform: translateX(-50%);
  }
}

</style>
