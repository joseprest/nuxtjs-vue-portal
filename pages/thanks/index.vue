<template>
  <div>
    <b-container class="container-xl">
      <div class="section-hero-thanks">
        <b-row>
          <b-col cols="12">
            <div class="section-title">
              <div class="text-primary">Thanks!</div>We’ll be in touch soon.
            </div>
            <p>We received your inquiry. If you have questions that require immediate <br>assistance, please call us toll free  <b-link href="tel:+18666341001" >866-634-1001</b-link> .</p>
          </b-col>
        </b-row>
      </div>
      </b-container>
    <clients-section  />
  </div>
</template>

<script>
import ClientsSection from "~/components/common/ClientsSection.vue";

export default {
  components: {
    ClientsSection
  },
  data(){
    return{
      title: 'Thanks',
    }
  },
  head () {
    return {
      title: this.title
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
.section-hero-thanks {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 15px;
  padding-top: 40px;
  padding-bottom: 10px;
  min-height: 700px;
  background-color: #f4f4f8;
  @media screen and (max-width: 767px) {
    padding-left: 10px;
    padding-right: 10px;
    min-height: 400px;
  }
  .section-title {
    margin-bottom: 30px;
    font-size: 3.75rem;
    font-weight: 300;
    line-height: 1.33;
    letter-spacing: .9px;
    text-align: center;
    @media screen and (max-width: 767px) {
      font-size: 1.6rem;
      font-weight: 400;
       margin-bottom: 15px;
    }
  }
  .text-primary {
    color: $brand-primary !important;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: -.4px;
    text-align: center;
    color: $alur-light-grey;
    @media screen and (max-width: 767px) {
      font-size: 1rem;
      padding: 20px;
    }
  }
  a {
    color: $brand-primary !important;
  }
}

.bg-lightgray {
    background-color: $alur-primary-color1;
}

</style>
