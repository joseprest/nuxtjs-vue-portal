<template>
  <div
    class="content-nav"
    ref="stickyHeader"
  >
    <b-navbar>
      <b-nav-text class="item-1" v-html="title" />
      <b-navbar-nav class="ml-auto item-2">
        <b-nav-item
          :href="this.path"
          :class="['pr-3', {'item-active': getClass === 'overview'}]"
        >Overview</b-nav-item>
        <b-nav-item
          :href="`${this.path}features`"
          :class="['pr-3', {'item-active': getClass === 'features'}]"
        >Features</b-nav-item>
      </b-navbar-nav>
      <b-nav-form class="item-3">
        <a class="btn-default" href="/get-started">
          Get Started
        </a>
      </b-nav-form>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'StickyHeader',

  data () {
    return {
      path: ''
    }
  },

  props: {
    title: {
      type: String,
      default: () => ''
    }
  },

  computed: {
    getClass () {
      return this.$route.path.includes('features')
        ? 'features'
        : 'overview'
    }
  },

  mounted () {
    this.path = this.$route.path.replace('features', '')
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/_variables.scss';

.content-nav {
  position: relative;
  top: 0;
  left: 0;
  z-index: 1004;
  width: 100%;
  transition: all .3s ease;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,.08), 0 0 4px 0 rgba(0,0,0,.08);
  background-color: $alur-dark-grey1;
  padding: 0 24px;

  .navbar-text {
    font-size: 2rem;
    font-weight: 200;
    color: $brand-primary !important;
  }
  .navbar-nav{
    .nav-item{
      font-size: 0.9rem;
    }
    .item-active {
      a {
        color: $brand-primary !important;
        font-weight: 700;
      }
    }
    .nav-item:hover {
      color: $brand-primary !important;
    }
  }
  form{
    .btn-default{
      font-size: 0.9rem;
      &:hover, &:active, &:focus {
        background-color: $dark-blue;
      }
    }

  }
}

@media only screen and (max-width: $screen-md){
  .content-nav {
    padding: 0 !important;
    .navbar-nav{
      .nav-link{
        color: $brand-primary;
        font-weight: 400;
      }
    }
    .navbar-text {
      font-size: 1.2rem !important;
    }
    .navbar {
      flex-wrap: wrap !important;
      padding: 0 !important;
    }
    .item-1{
      padding: 16px;
    }
    .item-2 {
      order: 3;
      width: 100%;
      position: relative;
      border-top: 1px solid $dark-grey;
      .nav-item{
        padding: 16px 0 0 16px;
      }

    }
    .item-active {
      a {
        border-bottom: 4px solid $brand-primary;
      }
    }
    .item-3 {
      margin-left: auto !important;
      padding: 0 15px;
    }
  }
}
</style>
