<template>
  <div>
    <section class="section-hero-insight">
      <b-container class="text-center spot">
        <p class="spot_title fw-300">Office of the Future</p>
        <p class="spot_subtitle fw-300">WORKPLACE DESIGN INSIGHTS FROM ALUR</p>
      </b-container>
    </section>
    <section class="section-blog">
      <b-container
        class="blog-wrapper"
      >
        <div class="post-back-link">
          <a @click="$router.go(-1)">
            <i class="icon-arrow-left"></i>
            <span>Back to posts</span>
          </a>
        </div>
        <div
          class="blog-container"
          v-html="htmlBody"
        ></div>
      </b-container>
    </section>
  </div>
</template>

<script>
  import constants from '@/constants'
  export default {
    data () {
      return {
        title: 'Insights',
        htmlBody: ''
      }
    },

    head () {
      return {
        title: this.title
      }
    },

    mounted () {
      const { slug } = this.$route.params
      this.htmlBody = constants[slug]
    }
  }
</script>

<style scoped lang="scss">
  @import '~/assets/styles/_variables.scss';
  .section-hero-insight {
    background: url('../../../assets/images/hero-blog.jpg') no-repeat center center;
    background-size: cover;
    height: 240px;
    padding-top: 60px;
    color: $alur-primary-color;
    .spot {
      &_img {
        margin-bottom: 30px;
      }
      &_title {
        font-size: 3.125rem;
      }
      &_subtitle {}
    }
  }
  .section-blog {
    .post-back-link {
      height: 32px;
      line-height: 32px;
      margin-top: 40px;
      font-size: 1.143em;
      a {
        color: $brand-primary;
        display: flex;
        align-items: center;
        i {
          border: none !important;
          padding-right: 8px;
          height: 32px;
          font-size: 24px;
          display: flex;
          align-items: center;
        }
        span {
          padding-left: 16px;
          border-left: 1px solid $brand-primary;
          font-weight: 300;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .section-hero-insight {
      max-height: 480px;
      .spot {
        &_title {
          font-size: 2.5rem;
        }
      }
    }
  }
  @media only screen and (max-width: 575px) {
    section {
      .container {
        max-width: calc(100% - 64px);
        padding: 0;
      }
    }
    .section-hero-insight {
      max-height: 320px;
      padding-top: 80px;
      .spot {
        &_img {
          width: 60px;
          margin-bottom: 15px;
        }
        &_title {
          font-size: 2rem;
        }
        &_subtitle {
          font-size: .7rem;
        }
      }
    }
  }
</style>
<style lang="scss">
  @import '~/assets/styles/_variables.scss';
  .blog-container {
    max-width: 654px;
    margin: 0 auto;
    padding-top: 40px;
    .blog-title {
      margin-top: 0;
      margin-bottom: 24px;
      font-size: 2.2rem !important;
      font-weight: 200;
      line-height: 1.4;
      color: $medium-grey;
    }
    .blog-content {
      padding: 0 0 55px;
      line-height: 1.9;
      font-weight: 300;
      color: $medium-grey;
    }
    .post-media {
      margin-bottom: 10px;
      em {
        display: block;
        margin-bottom: 25px;
        text-align: center;
      }
    }
    a {
      color: $brand-primary !important;
    }
    h2, h3 {
      padding-top: 15px;
      margin-top: 0;
      line-height: 1.4;
      font-weight: 300;
      color: $alur-dark-grey;
    }
    h2 {
      margin-bottom: 30px;
      font-size: 1.8rem;
    }
    h3 {
      margin-bottom: 25px;
      font-size: 1.4rem;
    }
    h4, h5 {
      padding-top: 10px;
      margin-top: 0;
      margin-bottom: 15px;
      line-height: 1.4;
      color: $alur-dark-grey;
    }
    h4 {
      font-size: 1.1rem;
      font-weight: 300;
    }
    h5 {
      font-size: .8rem;
      font-weight: 700;
    }
    ul {
      margin-bottom: 25px;
      font-size: 1rem;
      list-style: initial;
      padding-left: 40px;
      li {
        margin-bottom: 15px;
      }
    }
    strong {
      font-weight: 700;
    }
    p {
      margin-bottom: 25px;
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 565px) {
    .blog-container {
      .blog-title {
        font-size: 1.8rem !important;
      }
    }
  }
</style>
