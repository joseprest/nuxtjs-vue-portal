<template>
  <footer class="footer">
    <div class="footer-actions">
      <b-container>
        <b-row>
          <b-col
            class="footer-action-container"
            cols="12"
            sm="12"
            md="6"
            lg="3"
            xl="3"
          >
            <nuxt-link class="footer-action" to="/acoustical">
              <div class="footer-action-img align-self-center">
                <b-img src="~/assets/images/icons/ic-sound-privacy-primary.svg" />
              </div>
              <div class="footer-action-content align-self-end">
                <div class="footer-action-content__title">Sound Privacy</div>
                <div class="footer-action-content__text fw-200">
                  Lower noise levels and increase concentration.
                </div>
              </div>
            </nuxt-link>
          </b-col>
          <b-col
            class="footer-action-container"
            cols="12"
            sm="12"
            md="6"
            lg="3"
            xl="3"
          >
            <nuxt-link class="footer-action" to="/tax-advantages">
              <div class="footer-action-img align-self-center">
                <b-img src="~/assets/images/calendar.svg" />
              </div>
              <div class="footer-action-content align-self-end">
                <div class="footer-action-content__title">Tax Incentives</div>
                <div class="footer-action-content__text fw-200">
                  ALUR systems qualify for 100% first year tax depreciation</div>
              </div>
            </nuxt-link>
          </b-col>
          <b-col
            class="footer-action-container"
            cols="12"
            sm="12"
            md="6"
            lg="3"
            xl="3"
          >
            <a
              class="footer-action"
              href="https://www.alurwalls.com/files/ALUR_53181_DUO_Brochure_Web.pdf"
              target="_blank"
            >
              <div class="footer-action-img align-self-center">
                <b-img src="~/assets/images/Duo_Brochure.png" />
              </div>
              <div class="footer-action-content align-self-end">
                <div class="footer-action-content__title">Duo Brochure</div>
                <div class="footer-action-content__text fw-200">
                  Download our latest Duo brochure and start planning your new office design.
                </div>
              </div>
            </a>
          </b-col>
          <b-col
            class="footer-action-container"
            cols="12"
            sm="12"
            md="6"
            lg="3"
            xl="3"
          >
            <a
              class="footer-action"
              href="/files/ALUR_Brochure_for_web.pdf"
              target="_blank"
            >
              <div class="footer-action-img align-self-center">
                <b-img src="~/assets/images/alur-brochure.jpg" />
              </div>
              <div class="footer-action-content align-self-end">
                <div class="footer-action-content__title">ALUR Brochure</div>
                <div class="footer-action-content__text fw-200">
                  Download the latest ALUR brochure and start planning your new office design.
                </div>
              </div>
            </a>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="footer-nav-wrap">
      <div class="container-fluid">
        <b-row>
          <b-col
            class="brand-wrapper"
            cols="12"
            sm="12"
            md="2"
            lg="2"
            xl="2"
          >
            <nuxt-link class="footer-brand" to="/">
              <b-img src="~/assets/images/alur-logo-inverse.svg"/>
              <p>&copy; 2019 ALUR</p>
            </nuxt-link>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
          >
            <div class="row footer-menu-wrap">
              <div class="col-xl-3 col-md-6 col-sm-6 col-xs-6 footer-menu-column">
                <div class="footer-menu-title">Product</div>
                <ul class="footer-menu">
                  <li><nuxt-link to="/glass-wall">ALUR Glass Wall</nuxt-link></li>
                  <li><nuxt-link to="/duo-glass-wall">Duo Glass Wall</nuxt-link></li>
                  <li><nuxt-link to="/dividing-wall">Dividing Wall</nuxt-link></li>
                  <li><nuxt-link to="/portfolio">Install Portfolio</nuxt-link></li>
                </ul>
              </div>
              <div class="col-xl-3 col-md-6 col-sm-6 col-xs-6 footer-menu-column">
                <div class="footer-menu-title">About</div>
                <ul class="footer-menu">
                  <li><nuxt-link to="/why-alur">Why Alur</nuxt-link></li>
                  <li><nuxt-link to="/environment">Environment</nuxt-link></li>
                  <li><nuxt-link to="/insights">Insights</nuxt-link></li>
                  <li><a href="/files/ALUR-FAQs-2018.pdf" target="_blank">FAQ</a></li>
                </ul>
              </div>
              <div class="col-xl-3 col-md-6 col-sm-6 col-xs-6 footer-menu-column">
                <div class="footer-menu-title">Benefits</div>
                <ul class="footer-menu">
                  <li><nuxt-link to="/acoustical">Acoustics</nuxt-link></li>
                  <li><nuxt-link to="/tax-advantages">Tax Incentives</nuxt-link></li>
                  <li><nuxt-link to="/environment">Environment</nuxt-link></li>
                  <li><nuxt-link to="/virtual-reality">Virtual Reality</nuxt-link></li>
                </ul>
              </div>
              <div class="col-xl-3 col-md-6 col-sm-6 col-xs-6 footer-menu-column">
                <div class="footer-menu-title">Resources</div>
                <ul class="footer-menu">
                  <li><a href="/files/ALUR_Brochure_for_web.pdf" target="_blank">ALUR Brochure</a></li>
                  <li><a href="/files/ALUR_53181_DUO_Brochure_Web.pdf" target="_blank">Duo Brochure</a></li>
                  <li><a href="/files/Feature-Sheet_ALUR.pdf" target="_blank">Feature Sheet</a></li>
                  <li><a href="/files/ALUR-LEED-CI-Contribution.pdf" target="_blank">LEED Contribution</a></li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
          >
            <div class="footer-form">
              <div class="footer-form-title">Receive the latest news and product updates</div>
              <form
                class="validate"
                action="https://alurwalls.us14.list-manage.com/subscribe/post?u=0455fef32b8f6f194728524fa&amp;amp;id=6e493a21c6"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
                novalidate="novalidate"
              >
                <div class="form-group feedback">
                  <input
                    class="form-control"
                    type="email" name="EMAIL"
                    placeholder="Email Address"
                    required="required"
                  />
                  <input
                    class="btn btn-default feedback__submit"
                    type="submit"
                    value="Sign up"
                  />
                </div>
              </form>
            </div>
            <ul class="social-icons no-bullet">
              <li>
                <nuxt-link
                  to="https://www.instagram.com/alurwalls/"
                  target="_blank"
                >
                  <b-img src="~/assets/images/social-icons/instagram.svg"/>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="http://linkedin.com/company/alurwalls/"
                  target="_blank"
                >
                  <b-img src="~/assets/images/social-icons/linkedin.svg"/>
                </nuxt-link>
              </li>
            </ul>
            <p class="footer-call">Call us at: 973-446-2300</p>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="footer-copyrights">
      <div class="container container-lg">
        <div class="footer-copyrights-text"></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterView'
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';

.footer {
  .footer-actions {
    padding: 40px 0;
    background-color: $alur-primary-color1;

    a {
      color: $brand-primary;
      text-decoration: none;
    }

    .footer-action {
      display: flex;

      .footer-action-img {
        width: 90px;
        align-items: center;
        justify-content: center;
        display: flex;
      }

      .footer-action-content {
        flex: 1;
        &__title {
          margin: 10px 0;
          font-weight: 500;
        }
        &__text {
          font-size: .9rem;
        }
      }
    }
  }

  .footer-brand {
    img {
      margin-bottom: 23px;
    }
  }

  .footer-nav-wrap {
    padding-top: 90px;
    color: $alur-primary-color;
    background-color: $brand-primary;

    a {
      color: $alur-primary-color;
      text-decoration: none;
      font-weight: 300;
      font-size: 13px;
    }

    .footer-menu-title {
      min-height: 50px;
      padding-top: 10px;
      margin-bottom: 10px;
      line-height: 1.2;
      font-size: 1.2rem;
      font-weight: 500;
    }

    .container-fluid {
      padding: 0 30px !important;
    }

    .footer-menu {
      line-height: 2;
      font-weight: 300;
      li{
        margin-bottom: 14px;
      }
    }
  }

  .footer-form {
    .footer-form-title {
      margin-bottom: 22px;
      font-weight: 300;
      line-height: 1.64;
    }

    .feedback {
      position: relative;

      input {
        height: 48px;
      }

      &__submit {
        position: absolute;
        right: 0;
        top: 0;
        padding: 0 45px;
        border: none;
        line-height: 34px;
        font-size: 1rem;
        letter-spacing: .4px;
        font-weight: 500;
        color: $brand-primary;
        background-color: $alur-primary-color1;
      }
    }
  }

  .social-icons li {
    display: inline-block;
    padding-top: 10px;
    padding-right: 20px;
  }
}

@media only screen and (max-width: $screen-md) {
  .footer-nav-wrap{
    padding-top: 0 !important;
  }
  .footer-action {
    .container {
      max-width: 100% !important;
      .item {
        margin-bottom: 40px;
      }
    }
  }
  .footer-action-container{
    padding: 20px 0;
  }
  .footer-menu-column{
    padding-top: 50px;
  }
  .footer-form{
    .footer-form-title{
      font-weight: 300;
      margin-top:50px;
      font-size:14px;
    }
    .footer-call{
      font-size: 14px;
    }
  }
  .brand-wrapper {
    margin-top: 3rem;
    order: 3;
  }
}
</style>
