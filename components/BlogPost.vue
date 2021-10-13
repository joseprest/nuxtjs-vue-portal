<template>
  <b-row :class="['post', className]">
    <b-col
      cols="12"
      sm="12"
      md="12"
      lg="4"
      class="post_img"
    >
      <b-img
        :src="src"
        class="responsive-img"
      />
    </b-col>
    <b-col
      cols="12"
      sm="12"
      md="12"
      lg="8"
      class="post_content"
    >
      <div class="post_content-title">{{title}}</div>
      <div class="post_content-text">{{text}}.</div>
      <nuxt-link class="post_content-link" :to="actionLink">Read more</nuxt-link>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    src: {
      type: String,
      default: () => ''
    },
    title: {
      type: String,
      default: () => ''
    },
    text: {
      type: String,
      default: () => ''
    },
    actionLink: {
      type: String,
      default: () => ''
    },
    className: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
.post {
  margin: 0;
  padding: 40px 0;
  border-bottom: 1px solid $alur-grey;
  display: flex;
  align-items: center;
  &_img {
    padding: 0;
  }
  &_content {
    padding: 30px 135px 30px 40px;
    &-title {
      margin-bottom: 16px;
      font-size: 2rem;
      font-weight: 200;
      line-height: 1.4;
      color: $medium-grey;
    }
    &-text {
      margin-bottom: 24px;
      line-height: 1.6;
      color: $medium-grey;
      font-size: 1.2rem;
      font-weight: 200;
    }
    &-link {
      color: $brand-primary;
    }
  }
}
.last-post {
  border-bottom: none;
}
@media only screen and (max-width: 1008px) {
  .post {
    max-width: 540px;
    margin: 0 auto;
    padding-bottom: 0;
    &_content {
      padding: 30px 0;
      &-title {
        font-size: 1.8rem;
        color: $alur-dark-grey;
      }
      &-text {
        margin-bottom: 24px;
        line-height: 1.6;
        color: $medium-grey;
        font-size: 1.2rem;
        font-weight: 200;
      }
      &-link {
        color: $brand-primary;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .post {
    margin: 0 auto;
    max-width: 480px;
    padding-bottom: 0;
  }
}
@media only screen and (max-width: 567px) {
  .post {
    max-width: unset;
  }
}
</style>
