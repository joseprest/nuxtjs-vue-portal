<template>
  <div>
    <section class="section-hero-insight">
      <b-container class="text-center spot">
        <b-img
          class="spot_img"
          src="~/assets/images/alur-logo-icon.svg"
        />
        <p class="spot_title fw-300">Office of the Future</p>
        <p class="spot_subtitle fw-300">WORKPLACE DESIGN INSIGHTS FROM ALUR</p>
      </b-container>
    </section>
    <section class="section-blog-featured">
      <b-container>
        <b-row class="post-featured">
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="6"
            class="post-featured_img"
          >
            <b-img
              src="~/assets/images/blog/featured.jpg"
              class="responsive-img"
              style="height: 100%"
            />
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="6"
            class="post-featured_content"
          >
            <div class="post-featured_content-label text-danger mb-2">FEATURED POST</div>
            <div class="post-featured_content-title mb-3">Increase Usable Floor Space</div>
            <div class="post-featured_content-text mb-5">As pointed out in our post on the incredible shrinking office the increasing cost of floor space in growing market areas is causing companies to reduce the amount of square footage allotted to each employee. But in order to attract qualified personnel
              in an increasing competitive labor market, companies must offer what are called amenities…</div>
            <nuxt-link class="btn btn-primary btn-md" to="/insights/increase_usable_floor_space"><span>READ MORE</span></nuxt-link>
          </b-col>
        </b-row>
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
            <nuxt-link class="posts-nav-wrap-next icon-arrow-right" to="/insights/1"></nuxt-link>
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
            src: require('~/assets/images/blog/solutions_for_the_modern_workplace_09092015.jpg'),
            title: 'Solutions for the Modern Workplace',
            text: 'Solutions for the Modern Workplace In pursuit of the perfect office, MAI has created an integrated modular design concept that is inherently flexible and sustainable.',
            link: '/insights/solutions_for_the_modern_workplace'
          },
          {
            src: require('~/assets/images/blog/how_to_build_points_toward_leed_certification_09092015.jpg'),
            title: 'How to Build Points toward LEED Certification',
            text: 'Now in its 10th year the United States Green Building Council’s LEED (Leadership in Energy & Environmental Design) standards define a building’s energy efficiency and, as importantly, low-impact and nontoxic construction guidelines.',
            link: '/insights/how_to_build_points_toward_leed_certification'
          },
          {
            src: require('~/assets/images/blog/a_sound_solution_to_sound_control_09092015.jpg'),
            title: 'A Sound Solution to Sound Control',
            text: 'Over the past few years a substantial amount of ink has been expended debating the impact of office design on employee productivity.',
            link: '/insights/a_sound_solution_to_sound_control'
          },
          {
            src: require('~/assets/images/blog/the_workplace_recruiting_tool_09092015.jpg'),
            title: 'The Workplace as a Recruiting Tool',
            text: 'Recruiting and retaining highly talented knowledge workers in today’s competitive technology industry job market is no longer assured by offering attractive salaries and benefit packages.',
            link: '/insights/the_workplace_recruiting_tool',
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
    background: url('../../assets/images/hero-blog.jpg') no-repeat center center;
    background-size: cover;
    height: 670px;
    padding-top: 135px;
    padding-bottom: 110px;
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
  .section-blog-featured {
    .post-featured {
      max-width: 1010px;
      margin: -200px auto 90px;
      width: 100%;
      background-color: $alur-primary-color;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 40px 40px 0 rgba(0,0,0,.13);
      &_img {
        padding: 0;
      }
      &_content {
        padding: 48px;
        &-label {
          font-size: .8rem;
          font-weight: 500;
          letter-spacing: 1px;
        }
        &-title {
          font-size: 2rem;
          font-weight: 200;
          line-height: 1.4;
        }
        &-text {
          font-size: 1rem;
          line-height: 1.5;
          font-weight: 300;
          color: $medium-grey;
        }
      }
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
          color:$alur-dark-grey;
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
    .section-blog-featured {
      .post-featured {
        max-width: 540px;
        margin: 40px auto 0;
        &_content {
          padding: 30px;
        }
      }
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
    .section-blog-featured {
      .post-featured {
        max-width: 480px;
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
    .section-blog-featured {
      .post-featured {
        max-width: unset;
      }
    }
  }
</style>
<style lang="scss">
</style>
