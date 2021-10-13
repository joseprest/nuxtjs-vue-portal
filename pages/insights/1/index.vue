<template>
  <div>
    <section class="section-hero-insight">
      <b-container class="text-center spot">
        <p class="spot_title fw-300">Office of the Future</p>
        <p class="spot_subtitle fw-300">WORKPLACE DESIGN INSIGHTS FROM ALUR</p>
      </b-container>
    </section>
    <section class="section-posts">
      <b-container
        class="posts"
      >
        <div
          v-for="(post, i) in posts"
          :key="i"
        >
          <blog-post
            class="post-wrapper"
            :src="post.src"
            :title="post.title"
            :text="post.text"
            :actionLink="post.link"
            :className="post.className"
          />
        </div>
        <div class="posts-nav">
          <div class="posts-nav-wrap">
            <nuxt-link class="posts-nav-wrap-next icon-arrow-left mr-3" to="/insights"></nuxt-link>
            <nuxt-link class="posts-nav-wrap-next icon-arrow-right" to="/insights/2"></nuxt-link>
          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
  import BlogPost from '@/components/BlogPost.vue'

  export default {
    components: {
      BlogPost
    },

    data () {
      return {
        title: 'Insights',
        posts: [
          {
            src: require('~/assets/images/blog/demountable_walls_and_section_179_tax_depreciation_09082015.jpg'),
            title: 'Demountable Walls and Section 179 Tax Depreciation',
            text: 'A major benefit of selecting demountable walls for office build outs is that under IRS Section 179 rules demountable walls qualify for accelerated tax depreciation.',
            link: '/insights/demountable_walls_and_section_179_tax_depreciation'
          },
          {
            src: require('~/assets/images/blog/the_many_benefits_of_natural_light_09092015.jpg'),
            title: 'The Many Benefits of Natural Light',
            text: 'Not too long ago a window office was deemed a sign of prestige by co-workers confined to Dilbert-like cubicles in the office bullpen.',
            link: '/insights/the_many_benefits_of_natural_light'
          },
          {
            src: require('~/assets/images/blog/glass_wall_offices_demountable_v_constructed_10062015.jpg'),
            title: 'Glass Wall Offices: Demountable vs. Constructed',
            text: 'Glass wall offices are rapidly growing in popularity. Building owners and landlords as well as company facilities planners and HR personnel increasingly accept the advantages of modern demountable glass wall systems over stick built glazing.',
            link: '/insights/glass_wall_offices_demountable_v_constructed'
          },
          {
            src: require('~/assets/images/blog/case_of_the_incredible_shrinking_office_10062015.jpg'),
            title: 'The Case of the Incredible Shrinking Office',
            text: 'Two articles on February 23, 2015, one in The Wall Street Journal and the other in The New York Times prompt this post.',
            link: '/insights/case_of_the_incredible_shrinking_office',
          },
          {
            src: require('~/assets/images/blog/specification_tips_for_movable_glass_wall_offices_10062015.jpg'),
            title: 'Specification Tips for Movable Glass Wall Offices',
            text: 'Companies, building owners and designers planning to install demountable glass walls should prepare a list of specifications in advance of issuing RFPs to vendors.',
            link: '/insights/specification_tips_for_movable_glass_wall_offices',
            className: 'last-post'
          }
        ]
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
  .section-posts {
    .posts {
      padding-top: 40px;
    }
    .posts-nav {
      position: relative;
      margin-top: 16px;
      margin-bottom: 104px;
      text-align: center;
      &:before {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 0;
        border-top: 1px solid #e5e5e5;
        content: "";
      }
      &-wrap {
        position: relative;
        display: inline-block;
        padding-left: 16px;
        padding-right: 16px;
        background-color: $alur-primary-color;
        &-next {
          display: -ms-inline-flexbox;
          display: inline-flex;
          -ms-flex-pack: center;
          justify-content: center;
          -ms-flex-align: center;
          align-items: center;
          width: 48px;
          height: 48px;
          font-size: 36px;
          background-color: $alur-primary-color;
          color: $alur-dark-grey;
          border-radius: 50%;
          box-shadow: 0 8px 16px 0 rgba(0,0,0,.08), 0 2px 4px 0 rgba(0,0,0,.04);
          &:hover {
            background-color: $brand-primary;
            color: white;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1200px) {
    .section-posts {
      .posts {
        .post-wrapper {
          max-width: 1010px;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
  @media only screen and (max-width: 1008px) {
    .section-hero-insight {
      max-height: 540px;
    }
    .section-posts {
      .posts-nav {
        margin-bottom: 40px;
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
</style>
