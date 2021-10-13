<template>
  <main id="main">
  <div>
    <b-navbar
      class="justify-content-center nav-section"
      ref="navSticky"
      v-if="selectedRegion"
    ><div class="container-fluid">
          <div class="content-nav-wrap">
            <div class="section-title content-nav-title">Sales Rep Locator</div>
            <div class="section-select region-select">
              <form-select
                title="Select Region"
                :options="regions"
                @changed="selectRegion"
                :selectedVal="selectedRegion"
                customClass="no-opacity"
              />
            </div>
          </div>
        </div>
    </b-navbar>
    <div v-if="!selectedRegion">
      <section class="section section-hero-get-started">
        <div class="section-hero-get-started-wrap">
          <b-container>
            <div class="section-title">Find your sales representative</div>
            <div class="section-select region-select">
              <form-select
                title="Select Region"
                :options="regions"
                @changed="selectRegion"
                customClass="no-opacity"
              />
            </div>
          </b-container>
        </div>
        <div class="section-footer">OR</div>
      </section>
      <chat-form-acoustic :formTitle="chatSectionTitle" :formSubTitle="chatSectionSubTitle" :getStartedForm="true" />
    </div>
    <div v-if="selectedRegion">
      <section class="section section-reps">
        <b-container class="container-xl">
          <b-row>
            <b-col cols="12">
              <div class="section-title">
                <h3>Contact your local sales rep today!</h3>
              </div>
              <b-container fluid>
                <b-row>
                  <p class="countDisplay mobile-view">Showing {{totalRecord}} results</p>
                  <b-col id="v-for-object" cols="12"   class="reps-wrap ">
                    <b-col cols="12" class="salesreps">
                      <div v-for="value in listData" :key="value.states" class="repInfo row" id="Connecticut">
                        <b-col cols="12" class="rep-title">{{value.states}}</b-col>
                        <b-col cols="12" class="rep-content" id="RepConnecticut">
                          <b-row>
                            <b-col cols="12" md="4" lg="4">
                              <strong>{{value.company}}</strong><br>
                              {{value.addressLine_1}}<br> {{value.addressLine_2}}

                            </b-col>
                            <b-col cols="12" md="4" lg="2" v-for="(userValue, index) in value.user" :key="userValue.repName" class="rep-name dropdown repeatable">
                              <div class="desktop-view">
                                <b-dropdown id="dropdown-1" menu-class="my-custom" :text="userValue.repName" class="rep-dropdown">
                                  <div class="rep-header">
                                    <div class="rep-header-text">
                                      <div class="rep-title">{{userValue.repName}}</div>
                                    </div>
                                  </div>
                                  <p v-if="userValue.phone">{{userValue.phone}}</p>
                                  <p v-if="userValue.cell">{{userValue.cell}}</p>
                                  <p style="margin-bottom: 0;">
                                    <a :href="userValue.email">{{userValue.email}}</a>
                                  </p>
                                </b-dropdown>
                              </div>
                              <div class="mobile-view">
                                <b-button v-b-toggle="'collapse-'+userValue.repName.replace(' ', '')+'-'+index" class="custom-dropdown-btn">{{userValue.repName}}</b-button>
                                <b-collapse :id="'collapse-'+userValue.repName.replace(' ', '')+'-'+index" class="mt-2 details-view">
                                  <b-card>
                                    <b-row>
                                      <b-col cols="12">
                                        <p style="margin-bottom: 0;" v-if="userValue.phone">{{userValue.phone}}</p>
                                        <p style="margin-bottom: 0;" v-if="userValue.cell">{{userValue.cell}}</p>
                                        </b-col>
                                      <b-col cols="12"><p><a :href="userValue.email">{{userValue.email}}</a></p></b-col>
                                    </b-row>
                                  </b-card>
                                </b-collapse>
                              </div>
                            </b-col>
                            <b-col>

                            </b-col>
                          </b-row>
                        </b-col>
                      </div>
                    </b-col>
                  </b-col>
                </b-row>
              </b-container>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
    <clients-section  />
    <footer class="footer contact-nav">
      <div class="container">
        <div class="row row-same-height text-center">
          <b-col
            cols="12"
            sm="6"
            md="3"
            lg="3"
            xl="3"
            class="text-center text-md-left mb-4"
          >
            <div>
              <div class="contact-nav-title">Corporate HQ</div>
              <div class="contact-nav-text">10A Bloomfield Avenue <br >Suite A-2 <br >Pine Brook, NJ 07058 <br >Phone: 973.446.2300 <br >Fax: 973.446.2399</div>
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            md="3"
            lg="3"
            xl="3"
            class="text-center text-md-left mb-4"
          >
            <div>
              <div class="contact-nav-title">New York Showroom</div>
              <div class="contact-nav-text">120 W 45th Street <br >Suite 1500 <br >New York, NY 10036</div>
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            md="3"
            lg="3"
            xl="3"
            class="text-center text-md-left mb-4"
          >
            <div>
              <div class="contact-nav-title">Chicago Showroom</div>
              <div class="contact-nav-text">222 Merchandise Mart Plaza <br >10th Floor, Suite 10-115 <br >Chicago, IL 60654</div>
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            md="3"
            lg="3"
            xl="3"
            class="text-center text-md-left mb-4"
          >
            <div>
              <div class="contact-nav-title">Rodenbeck Showroom</div>
              <div class="contact-nav-text">700 South Flower Street <br >Suite 760 <br >Los Angeles, CA 90017</div>
            </div>
          </b-col>
        </div>
      </div>
    </footer>
  </div>
  </main>
</template>

<script>
import  ChatFormAcoustic  from "~/components/common/ChatFormAcoustic.vue"
import ClientsSection from "~/components/common/ClientsSection.vue"
import axios from 'axios'
import { userInfo } from 'os';
import FormSelect from '~/components/FormSelect.vue'
export default {
  components: {
    ChatFormAcoustic,
    ClientsSection,
    FormSelect
  },
  data() {
    return {
      title: 'Get Started',
      chatSectionTitle: 'Contact Us',
      chatSectionSubTitle: 'Please let us know who you are and more about your interest in using ALUR for your next project.',
      selectedRegion: null,
      regions: [
        'Northeast',
        'West',
        'South',
        'Midwest',
        'Southwest'
      ],
      repList:[],
      listData:{}
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  mounted(e) {
   axios.get('https://resources.alurwalls.com/replist.json').then( (response) => {
      this.repList = response.data;
    }).catch( (error) => {
      console.log(error)
    })
  },
  computed:{
      totalRecord:function (e) {
        return this.listData && Object.keys(this.listData) && Object.keys(this.listData).length>0? Object.keys(this.listData).length:0

      }
  },
  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    selectRegion(val) {
      this.selectedRegion = val
      let updateListItems=[];
      this.repList.map((val,key)=>{
          if(val.region === this.selectedRegion){
            updateListItems.push(val)
          }
      })
      var myState={ };
      let myList=[];
      for (let index = 0; index < updateListItems.length; index++) {
        myState[updateListItems[index].states] = updateListItems[index];
        var tempArr=[];
        for (let y = 0; y < updateListItems.length; y++) {
          if( updateListItems[index].states === updateListItems[y].states){
            tempArr.push({repName:updateListItems[y].repName,email:updateListItems[y].email,phone:updateListItems[y].phone,cell:updateListItems[y].cell})
          }
          else{

          }

        }
        myState[updateListItems[index].states].user=tempArr;
        tempArr=[];
      }
      this.listData=myState;
    },
    handleScroll (event) {
      const navHeight = this.$parent.$parent.$children[0].$refs.desktopNav.clientHeight ||
        this.$parent.$parent.$children[0].$refs.mobileNav.clientHeight
      const ref = this.$refs.navSticky
      if (ref) {
        const scrollTop = window.scrollY
        if (scrollTop > navHeight) {
          ref.style.position = 'fixed'
        } else {
          ref.style.position = 'relative'
        }
      }
    }
  }
}
</script>

<style lang="scss">
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
.nav-section {
  background-color: $brand-primary;
  padding-top: 0;
  padding-bottom: 0;
  min-height: 62px;
  width: 100%;
  top: 0;
  z-index: 2000;
  @media screen and (max-width: 767px) {
    padding-top: 15px;
    padding-bottom: 18px;
  }
  .content-nav-wrap {
    min-height: 62px;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 1px;
    padding-left: 35px;
    padding-right: 35px;
    @media screen and (max-width: 767px) {
      height: auto;
      flex-wrap: wrap;
      padding-left: 10px;
      padding-right: 10px;
      justify-content: center;
    }
  }
  .content-nav-title {
    font-size: 1.5rem;
    font-weight: 200;
    color: $alur-primary-color;
    @media screen and (max-width: 767px) {
      padding-bottom: 10px;
      width: 100%;
      text-align: center;
    }
  }
  .region-select {
    width: 378px;
    @media screen and (max-width: 767px) {
    max-width: 378px;
    width: 100%;
      .dropdown-toggle {
        padding-bottom: 0px !important;
        padding-top: 0px !important;
      }
    }
    .btn-secondary{
      padding: 10px 20px !important;
    }
    .form-control {
      color: $alur-dark-grey;
    }

  }


}
.section-hero-get-started {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: .3s ease all;

    .section-hero-get-started-wrap {
        display: flex;
        align-items: center;
        min-height: 464px;
        padding-top: 20px;
        padding-bottom: 30px;
        background-position: center center;
        background-size: cover;
        background-color: $alur-light-grey;
        background-image: url(../../assets/images/get-started-hero.jpg);
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            background-image: url(../../assets/images/get-started-hero@2x.jpg);
        }
    }
    .section-title {
        margin-bottom: 30px;
        font-size: 2.5rem;
        line-height: 1.6;
        letter-spacing: .9px;
        text-align: center;
        color: $alur-primary-color;
        @media screen and (max-width: 767px) {
          font-size: 1.75rem;
          margin-bottom: 18px;
          font-weight: 400;
          letter-spacing: 0.62px;
        }
    }

    .section-select {
        max-width: 378px;
        margin: 0 auto;
    }

    .section-footer {
      line-height: 56px;
      font-size: 1.6rem;
      font-weight: 600;
      letter-spacing: 0.4px;
      text-align: center;
      color: $alur-grey-color2;
      box-shadow: 0 1px 0 0 $grey1;
      background-color: $alur-primary-color;
      @media screen and (max-width: 767px) {
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.44px;
      }
    }
  }

.contact-nav {
  margin-bottom: 80px;
  background: transparent;
  color: inherit;
  @media screen and (max-width: 767px) {
    margin-bottom: 50px;
  }
  .contact-nav-title {
      margin-bottom: 15px;
      font-size: 1rem;
      line-height: 1.25;
      letter-spacing: -0.2px;
  }
  .contact-nav-text {
      font-size: 0.8rem;
      font-weight: 300;
      line-height: 1.69;
      letter-spacing: -0.1px;
      @media screen and (max-width: 767px) {
        font-size: 0.88rem;
      }
  }
}

.section-reps {
  padding-top: 28px;
  padding-bottom: 36px;
  @media screen and (max-width: 767px) {
    padding-top: 25px;
    padding-bottom: 0px;
  }
  .rep-dropdown {
    @media screen and (max-width: 767px) {
      display: block;
      width: 100%;
    }
  }
  .countDisplay{
    color: $alur-grey-color2;
    font-family: Akkurat;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 8px;
    padding-left: 15px;
  }
  .section-title {
    padding-top: 28px;
    margin-bottom: 24px;
    font-size: 4rem;
    font-weight: 300;
    text-align: center;
    h3 {
      font-size: 2.5rem;
      font-weight: 300;
      text-align: center;
     @media screen and (max-width: 767px) {
        font-size: 1.75rem;
        margin-bottom: 58px;
        font-weight: 300;
        padding: 0 16px;
      }
    }


  }
  .salesreps {
    padding: 0;
  }
  .reps-wrap {
    border-top: 1px solid #e5e5e5;
    margin-top: 50px;
    @media screen and (max-width: 767px) {
      margin-top: 0px;
    }
  }

  .repInfo {
    padding-top: 25px;
    padding-bottom: 40px;
    border-bottom: 1px solid #e5e5e5;
    @media screen and (max-width: 767px) {
      padding-top: 30px;
      padding-bottom: 28px;
    }
  }

  .rep-title {
    margin-bottom: 16px;
    font-size: 1.25rem;
    line-height: 1;
    @media screen and (max-width: 767px) {
      line-height: 1.4;
    }
  }
  .rep-content {
    line-height: 1.7;
    color: $alur-grey-color2;
    font-size: 0.88rem;
  }

  [data-toggle="dropdown"] {
    cursor: pointer;
    &:hover, &[aria-expanded="true"] {
      color: $brand-primary;
    }
  }
  .rep-name.dropdown.repeatable {
    @media screen and (max-width: 767px) {
      .custom-dropdown-btn {
        width: 100%;
        text-align: left;
        background: none !important;
        border: none !important;
        box-shadow: none !important;
        padding-left: 0 !important;
        position: relative;
        font-size: 14px !important;
        letter-spacing: -0.24px;
        font-weight: 400 !important;
        color: $alur-grey-color2 !important;
        padding-top: 8px !important;
        padding-bottom: 8px !important;
        &:after {
          display: inline-block;
          margin-left: 0.255em;
          content: '\e802';
          font-family: alur;
          font-style: normal;
          font-weight: 400;
          display: inline-block;
          text-decoration: inherit;
          width: 1em;
          text-align: center;
          font-variant: normal;
          text-transform: none;
          line-height: 1em;
          border: none;
          vertical-align: middle;
          position: absolute;
          right: 0;
        }
        &[aria-expanded="true"] {
          color: $brand-primary  !important;
          font-weight: 700  !important;
          &:after {
            transform: rotate(180deg);
          }
        }
      }
      .details-view {
        .card {
          border: none;
          box-shadow: none;
          .card-body{
            padding: 0;
            p {
              a {
                 color: $brand-primary;
              }
            }
          }
        }
      }
    }
    .b-dropdown {
      .dropdown-menu{
        padding: 16px;
      }
      .dropdown-toggle {
        font-size: 0.87rem;
        font-weight: 400 !important;
        color: $alur-grey-color2 !important;
        &:focus, &:active, &:hover {
          border: none;
          background-color: transparent !important;
          background: transparent;
          box-shadow: none;
        }
        &[aria-expanded="true"] {
          color: $brand-primary !important;
        }
        &:after {
          display: inline-block;
          margin-left: 0.255em;
          content: '\e802';
          font-family: alur;
          font-style: normal;
          font-weight: 400;
          display: inline-block;
          text-decoration: inherit;
          width: 1em;
          text-align: center;
          font-variant: normal;
          text-transform: none;
          line-height: 1em;
          border: none;
          vertical-align: middle;
          @media screen and (max-width: 767px) {
            position: absolute;
            right: 0;
          }
        }
      }

    }
  }

  .dropdown-menu {
    min-width: 240px;
    padding: 16px !important;
    line-height: 1.33;
    font-size: 0.88rem !important;
    border: 1px solid rgba(0, 0, 0, 0.15) !important;
    border-radius: 0.25rem !important;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175) !important;;
    .rep-header {
      display: flex;
      align-items: flex-start;
      margin-bottom: 8px;
      // padding: 8px;
      // border-bottom: 2px solid #e6e6e6;

      img {
          flex: none;
          width: 40px;
          height: 40px;
          margin-right: 16px;
          border-radius: 50%;
      }

      .rep-title {
          margin-bottom: 5px;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.2px;
          color: black;
      }

      .rep-company {
        margin-bottom: 8px;
        font-size: 0.8rem;
        line-height: 1.33;
        letter-spacing: -0.2px;
        color: $alur-light-grey;
      }
    }
    p {
      margin-bottom: 10px;
      a {
        color: $brand-primary;
      }
    }
  }
}
.section-clients {
  @media screen and (max-width: 767px) {
    padding-top: 48px !important;
    padding-bottom: 38px !important;
  }
}
@media screen and (max-width: 767px) {
 .container-xl {
    margin-left: 0;
    margin-top: 0;
    padding-left: 0;
    padding-right: 0;
    max-width: 100%;
 }
}
</style>
