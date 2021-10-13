<template>
  <b-container>
    <b-row
      class="title h1"
      align-h="center"
    >
      {{featuresTitle}}
    </b-row>
    <b-row align-v="center">
      <b-col
        class="item-col"
        v-for="(item, i) in featuresList"
        :key="i"
      >
        <b-img :src="item.svg" />
        <div>
          <pre>{{item.text}}</pre>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'FeaturesListGlassWalls',

  props: {
    featuresTitle: {
      type: String,
      default: () => ''
    },
    featuresList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';

.container {
  text-align: center;
  .title {
    color: $alur-dark-grey;
    font-weight: 300;
    margin-bottom: 0;
    padding: 60px 0;
  }
  .item-col {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 20%;
    max-width: 20%;
    margin-bottom: 30px;
    pre{
      font-size: 1.1rem;
      color: $alur-light-grey;
      font-weight: 300;
    }

    img {
      margin-bottom: 10px;
    }
    p {
      color: $alur-light-grey;
      font-size: 1.25rem;
      font-weight: 300;
    }
  }
}
@media only screen and (max-width: $screen-md) {
  .container {
    max-width: calc(100% - 16px) !important;

    .item-col {
      flex: 0 0 50% !important;
      max-width: 50% !important;
      p {
        font-size: 1rem !important;
      }
    }
  }
}
</style>
