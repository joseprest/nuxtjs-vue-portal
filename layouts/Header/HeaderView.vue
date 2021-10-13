<template>
  <div>
    <b-navbar
      class="desktop-header"
      ref="desktopNav"
    >
      <b-navbar-brand href="/" class="d-none d-lg-block d-xl-block desktop-logo">
        <b-img src="~/assets/images/alur-logo.svg" />
      </b-navbar-brand>
      <div class="d-none d-lg-block d-xl-block w-100 desktop-nav">
        <b-nav fill>
          <b-navbar-nav class="ml-left nav-dropdown-wrapper">
            <b-nav-item-dropdown class="nav-bar-title" text="Glass Walls">
              <b-dropdown-item href="/glass-wall/">The ALUR System</b-dropdown-item>
              <b-dropdown-divider />
              <b-dropdown-item href="/duo-glass-wall/">
                The Duo System
                <sup>NEW</sup>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <b-navbar-nav>
            <b-nav-item href="/dividing-wall/">Dividing Walls</b-nav-item>
            <b-nav-item href="/portfolio">Install Portfolio</b-nav-item>
            <b-nav-item href="/why-alur">Why ALUR?</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item href="/showroom">Showroom</b-nav-item>
              <b-nav-item href="/get-started">Contact</b-nav-item>
              <span href="#" class="phone">973-446-2300</span>
              <b-nav-item
                class="pr-0"
                href="//resources.alurwalls.com/login"
              >Log in</b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-nav>
      </div>
    </b-navbar>
    <b-navbar
      class="d-xs-block d-sm-block d-md-block d-lg-none position-relative w-100 mobile-header"
      ref="mobileNav"
    >
      <b-navbar-brand href="/" class="mobile-logo">
        <b-img src="~/assets/images/alur-logo-mobile.svg" />
      </b-navbar-brand>
      <a
        v-b-toggle.collapse1
        class="d-icon"
      >
        Browse
      </a>
      <b-navbar-brand
        href="#"
        class="float-right ml-auto"
      >
        <b-img src="~/assets/images/alur-close.svg" />
      </b-navbar-brand>
      <b-collapse
        id="collapse1"
        class="position-absolute w-100"
      >
        <div class="item">
          <div class="parent accordion-item" role="tab">
            <a href="#" v-b-toggle.accordion1>Glass Walls</a>
          </div>
          <b-collapse id="accordion1" visible>
            <ul class="child">
              <li><a href="/glass-wall/">The ALUR System</a></li>
              <li><a href="/duo-glass-wall/">The Duo System <sup>NEW</sup></a></li>
            </ul>
          </b-collapse>
        </div>
        <div class="item">
          <div class="parent">
            <a href="/dividing-wall/">Dividing Walls</a>
          </div>
        </div>
        <div class="item">
          <div class="parent">
            <a href="/portfolio">Install Portfolio</a>
          </div>
        </div>
        <div class="item">
          <div class="parent">
            <a href="/why-alur">Why ALUR?</a>
          </div>
        </div>
        <div class="item">
          <div class="parent accordion-item" role="tab">
            <a href="#" v-b-toggle.accordion2>More</a>
          </div>
          <b-collapse id="accordion2">
            <ul class="child">
              <li><a href="/showroom">Showroom</a></li>
              <li><a href="/get-started">Contact Us</a></li>
              <li><a href="#" class="phone">&nbsp;973-446-2300</a></li>
              <li><a href="//resources.alurwalls.com/login">Log in</a></li>
            </ul>
          </b-collapse>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'HeaderView'
}
</script>

<style lang="scss">
@import '~/assets/styles/_variables.scss';
.phone {
  display: flex;
  align-items: center;
  &:before {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 3px;
    background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath fill='%23555555' d='M12,9v2.334C12,11.703,11.703,12,11.334,12C5.073,12,0,6.926,0,0.667C0,0.297,0.297,0,0.667,0H3c0.37,0,0.667,0.297,0.667,0.667c0,0.83,0.133,1.633,0.38,2.383c0.073,0.229,0.02,0.494-0.164,0.677L2.416,5.197c0.963,1.887,2.503,3.43,4.395,4.389l1.467-1.469C8.46,7.934,8.723,7.881,8.953,7.953c0.75,0.246,1.551,0.381,2.381,0.381    C11.703,8.334,12,8.631,12,9z'/%3E%3C/svg%3E") center center no-repeat;
    content: "";
  }
}

.desktop-header {
  background-color: $alur-primary-color;
  padding: 0 !important;
  z-index: 9999;
  box-shadow:0 1px 8px 0 rgba(0, 0, 0, 0.08), 0 0 4px 0 rgba(0, 0, 0, 0.08);
  ul {
    li {
      .nav-link{
        color: $alur-light-grey !important;
      }
      padding: 16px 12px;
      a, span {
        font-size: 15px;
        padding: 0;
      }
    }
    li:last-of-type{
      padding-right: 0;
    }
  }
  .phone {
    padding-right: 16px;
  }
  .desktop-logo {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 16px;
  }
  .desktop-nav {
    padding-right: 16px;
  }
}
.mobile-header {
  background-color: $alur-primary-color;
  padding: 0 !important;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.08);

  .mobile-logo {
    background-color: $brand-primary;
    padding: 7px 10px;
  }
  .d-icon {
    color: $brand-primary !important;
    position: relative;
    font-size: 1rem;

    &:after {
      content: '';
      border: solid $brand-primary;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 4px;
      bottom: 0px;
      right: -17px;
      position: absolute;
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }

    &.collapsed {
      &::after {
        bottom: 6px;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
      }
    }
  }

  #collapse1 {
    background-color: $alur-primary-color;
    z-index: 9999;

    a {
      color: $brand-primary !important;
      font-weight: 500;
    }

    .item {
      border-bottom: 1px solid $alur-grey;
      padding: 0 30px;
      background-color: $alur-primary-color1;
      a {
        width: 100%;
        display: inline-block;
        text-decoration: none;
        padding: 20px 0;
      }
      .child {
        padding: 0 30px;
        a {
          color: $alur-light-grey !important;
          font-weight: 300 !important;
        }
      }
    }
  }
}
.nav-bar-title {
  padding-right: 10px !important;
  a.nav-link:after {
    content: '';
    border: solid rgb(210, 210, 210);
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px;
    bottom: 25px;
    right: 0;
    opacity: 0.8;
    position: absolute;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  span {
    color: $alur-light-grey !important;
    font-weight: 500 !important;
  }
}
.nav-bar-title.show {
  a.nav-link:after {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    bottom: 22px;
  }
}
.dropdown-menu {
 box-shadow: 0 2px 4px 0 rgba(0,0,0,.08)!important;
 border-radius: 0 !important;
 border: none !important;
}
.dropdown-menu-left{
  left: 10px;
  top: 50px;

}
.dropdown-item {
  color: $alur-dark-grey !important;
  padding: 3px 20px !important;
  font-weight: 300 !important;
  &:hover, &:active, &:focus {
    color: $brand-primary !important;
    transition: all .3s ease;
    transform: translate3d(10px,0,0);
    background-color: transparent !important;
    outline: transparent;
  }
}
@media screen and (max-width: $screen-xl)  {
  .desktop-header {
    ul {
      li {
        padding-right: 8px;
      }
    }
    .phone {
      padding-right: 8px;
    }
  }
}
</style>
