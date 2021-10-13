<template>
  <section class="section section-form">
    <b-form @submit="handleSubmit" method="post" class="container container-sm" id="gettingStartedForm" validate="validate">
      <b-row v-if="getStartedForm">
        <b-col cols="12">
          <div class="h2 form-title-2 get-started" v-if="formSubTitle != ''">{{formTitle}}</div>
          <div class="form-small-title get-started" v-if="formTitle != ''">{{formSubTitle}}</div>
        </b-col>
      </b-row>
      <b-row v-if="!getStartedForm">
        <b-col cols="12">
          <div class="form-small-title" v-if="formTitle != ''">{{formTitle}}</div>
          <div class="h2 form-title-2" v-if="formSubTitle != ''">{{formSubTitle}}</div>
        </b-col>
      </b-row>
      <b-row class="input">
        <b-col cols="12" md="6">
          <b-form-group>
            <b-form-input
              name="firstName"
              class="form-control input-lg"
              placeholder="First Name*"
              v-model="firstName"
              required />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <b-form-input
              name="lastName"
              class="form-control input-lg"
              placeholder="Last Name*"
              v-model="lastName"
              required />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="input">
        <b-col cols="12">
          <b-form-group>
            <b-form-input
              name="email"
              type="email"
              class="form-control input-lg"
              placeholder="Email Address*"
              v-model="email"
              required />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="input">
        <b-col cols="12">
          <b-form-group>
            <b-form-input
              class="form-control input-lg"
              name="phoneNumber"
              type="number"
              placeholder="Mobile Phone Number*"
              v-model="phoneNumber"
              required></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="input">
        <b-col cols="12">
          <b-form-group>
            <b-form-input
              class="form-control input-lg"
              name="businessName"
              type="text"
              placeholder="Business Name"
              v-model="businessName" />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="input">
        <b-col cols="12" md="4">
          <b-form-group>
            <b-form-input
              class="form-control input-lg"
              name="website"
              type="text"
              placeholder="Website"
              v-model="website" />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="4">
          <b-form-group>
            <form-select
              title="User Profile"
              :options="profileOptions"
              @changed="profileSelected"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="4">
          <b-form-group>
            <form-select
              title="Subject"
              :options="subjectOptions"
              @changed="subjectSelected"
            />
          </b-form-group>
        </b-col>
      </b-row >
      <b-row>
        <b-col cols="12">
          <div class="form-group form-actions">
            <b-button block variant="primary" id="gettingStartedSubmit" type="submit" >Continue</b-button>
          </div>
        </b-col>
      </b-row >
    </b-form>
  </section>
</template>

<script>
import axios from 'axios'
import config from '~/store/config'
import { Base64 } from 'js-base64'
import FormSelect from '~/components/FormSelect.vue'

export default {
  name: 'ChatFormAcoustic',
  components: {
    FormSelect
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      businessName: '',
      website: '',
      selectedSubject: '',
      selectedProfile: '',
      profileOptions: ['Architect', 'Designer', 'Dealer', 'Tenant', 'Landlord', 'Other'],
      subjectOptions: ['General Inquiry', 'Customer Service', 'Press/Media']
    }
  },
  props: {
    formTitle: {
      type: String,
      default: () => ''
    },
    formSubTitle: {
      type: String,
      default: () => ''
    },
    customHeadingHtml: {
      type: String,
      default: () => ''
    },
    getStartedForm: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    handleSubmit(evt) {
      evt.preventDefault()
      const auth = 'Basic ' + Base64.encode(config.appSecret)
      const url = `${config.bendEndpoint}/custom/process-inquiry`
      axios.post(url, JSON.stringify(
        {
          firstName:this.firstName,
          lastName: this.lastName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          businessName: this.businessName,
          website: this.website,
          userProfile: this.selectedProfile,
          subject: this.selectedSubject
        }),
        {
        headers: {
          Authorization: auth,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        window.location.href = '/thanks';
      }).catch(function (error) {
       alert('An error occurred. Please email us at info@alurwalls.com.');
      })
    },
    profileSelected (val) {
      this.selectedProfile = val
    },
    subjectSelected (val) {
      this.selectedSubject = val
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
.container-sm {
    max-width: 654px;
}
.section-form {
  padding-top: 30px;
  @media screen and (max-width: 767px) {
    padding-top: 0;
  }
  .input{
    @media screen and (max-width: 767px) {
      padding: 0 15px;
    }
  }
  .form-actions {
    margin-top: 1.5rem;
  }
  .row {
      margin-left: -8px;
      margin-right: -8px;
  }
 [class*="col-"] {
      padding-left: 8px;
      padding-right: 8px;
  }
  .form-small-title {
    font-size: 1.25rem;
    color: $alur-light-grey;
    text-align: center;
    margin-top: 80px;
    &.get-started {
      margin-bottom: 40px;
      font-size: 1.1rem;
      font-weight: 300;
      line-height: 1.7rem;
      letter-spacing: -.3px;
      margin-top: 0;
      text-align: left;
      @media screen and (max-width: 767px){
        font-size: 0.95rem;
      }
    }
    @media screen and (max-width: 767px) {
      margin-top: 48px;
      line-height: 19px;
      font-size: 16px;
    }
  }
  .form-title, .form-title-2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    margin-top: 20px;
    font-weight: 300;
    line-height: 1.16;
    text-align: center;
    padding-bottom: 80px;
    &.get-started {
      text-align: left;
      padding-bottom: 0;
      @media screen and (max-width: 767px) {
         margin-top: 30px;
        margin-bottom: 10px;
      }
    }
    @media screen and (max-width: 767px) {
      font-size: 1.75rem;
      margin-top: 9px;
      padding-bottom: 40px;
      margin-bottom: 0px;
    }
  }
  .input-group-lg, .input-lg {
    height: 48px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33333;
    border-radius: 4px;
    font-size: 1rem;
    color: $alur-dark-grey;
    font-weight: 200;
    &:focus {
      box-shadow: none;
      border-color: $alur-light-blue;
    }
    .form-control,.input-group-addon, .input-group-btn, .btn{
      height: 48px;
      padding: 10px 16px;
      font-size: 18px;
      line-height: 1.33333;
      border-radius: 4px;
      font-size: 1rem;
      color: $alur-dark-grey;
      font-weight: 200;
      &:focus {
        box-shadow: none;
        border-color: $alur-light-blue;
      }
    }
  }
  .btn.form-control,
  .form-control {
      &:focus {
          border-color: $alur-light-blue;
      }
  }
}
</style>
