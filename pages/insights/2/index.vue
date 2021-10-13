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
            <nuxt-link class="posts-nav-wrap-next icon-arrow-left" to="/insights/1"></nuxt-link>
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
            src: require('~/assets/images/blog/demountable_glass_walls_promote_collaboration_and_socialization_10062015.jpg'),
            title: 'How Demountable Glass Walls Promote Collaboration and Socialization',
            text: 'Attitudes regarding the value of the open office concept are undergoing changes being led by the realization that collaboration is essential to a company’s success.',
            link: '/insights/demountable_glass_walls_promote_collaboration_and_socialization'
          },
          {
            src: require('~/assets/images/blog/costs_down_productivity_up_10062015.jpg'),
            title: 'Costs down, Productivity up with Demountable Glass Wall Offices',
            text: 'By: Mark Bassil, President and Founder of Modular Architectural Interiors (MAI) At MAI, we believe companies, landlords, building managers and workers can all benefit from demountable glass wall offices such as MAI’s ALUR line. Before we begin, I should offer a bit of a caveat. When I speak of costs I’m referring to long-term costs',
            link: '/insights/costs_down_productivity_up'
          },
          {
            src: require('~/assets/images/blog/cost_saving_tenant_improvement_solutions_for_commercial_real_estate_landlords_09082015.jpg'),
            title: 'Cost Saving TI Solutions for Commercial Real Estate Landlords',
            text: 'Transforming warm shells or outdated office space into a tenant ready office can be a real challenge for commercial building owners and landlords, especially in markets with a surplus of unleased office space.',
            link: '/insights/cost_saving_tenant_improvement_solutions_for_commercial_real_estate_landlords'
          },
          {
            src: require('~/assets/images/blog/an_economic_case_for_tenant_ready_space_09082015.jpg'),
            title: 'An Economic Case for Tenant Ready Space',
            text: 'Empty floor space whether in new or older commercial office buildings is not producing rental revenue.',
            link: '/insights/an_economic_case_for_tenant_ready_space',
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
