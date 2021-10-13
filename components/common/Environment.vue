<template>
  <div>
    <b-container class="environment">
      <b-row
        class="h1 fw-300 mx-auto mb-3 d-flex align-items-center text-center"
        align-h="center"
      >
        Build a better office for a better environment.
      </b-row>
      <b-row
        class="sub-title fw-200"
        align-h="center"
      >
        ALUR is committed to improving the indoor built environment and minimizing the impact on the natural <br>ecosystem through sustainable design and thoughtful choice and sourcing of materials.
      </b-row>
      <b-row
        align-h="center"
        class="mb-3 mt-3"
      >
        <b-col
          cols="12"
          sm="12"
          md="12"
          lg="4"
          xl="4"
          class="section-part pt-3 pb-3"
        >
          <div class="h5 pb-2">
            Locally Sourced Glass
          </div>
          <div class="content">
            All of ALUR glass is sourced directly from local manufacturers to keep costs low and reduce our carbon footprint.
          </div>
        </b-col>
        <b-col
          cols="12"
          sm="12"
          md="12"
          lg="4"
          xl="4"
          class="section-part pt-3 pb-3"
        >
          <div class="h5 pb-2">
            Qualifies for LEED® Points
          </div>
          <div class="content">
            ALUR Walls may contribute up to 16 LEED points in the categories of Energy & Atmosphere, Materials & Resources, and Indoor Environment Quality.
          </div>
        </b-col>
        <b-col
          cols="12"
          sm="12"
          md="12"
          lg="4"
          xl="4"
          class="section-part pt-3 pb-3"
        >
          <div class="h5 pb-2">
            Demountable & Reusable
          </div>
          <div class="content">
            Walls can be repositioned to suit the changing needs of modern workspace, maximizing sustainability while avoiding construction debris and minimizing waste.
          </div>
        </b-col>
      </b-row>
      <b-row
        align-h="center"
        class="action"
      >
        <nuxt-link to="/environment" class="btn btn-secondary">View More</nuxt-link>
      </b-row>
    </b-container>
    <b-row
      v-if="!tabletMode"
      class="environment-img w-100"
    >
      <b-img
        src="~/assets/images/alur_illustration@2x.png"
        class="responsive-img"
      />
    </b-row>
  </div>
</template>

<script>
import ResizeMixin from '@/mixins/ResizeMixin'

export default {
  name: 'Environment',

  mixins: [ ResizeMixin ]
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
.environment {
  padding: 80px 0;
  color: white;
  .sub-title {
    font-size: 1rem;
    line-height: 1.76;
    opacity: .72;
    letter-spacing: -.3px;
    text-align: center;
  }
  .section-part {
    text-align: center;
    .content {
      font-size: .8rem;
      opacity: .72;
      line-height: 2.72;
      letter-spacing: -.2px;
    }
  }
  .action {
    margin-bottom: 280px;
    a {
      min-width: 195px;
      font-weight: 700;
      padding: 14px 20px !important;
    }
  }
}
@media only screen and (max-width: 768px) {
  .environment {
    padding: 40px 0;
    .action {
      margin-bottom: 0 !important;
      a {
        background-color: $brand-primary !important;
        color: white !important;
      }
    }
  }
  .environment-img {
    margin: 0 !important;
    img {
      max-height: 538px;
    }
  }
}
</style>
