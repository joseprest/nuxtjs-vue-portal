<template>
  <b-modal
    ref="modal"
    hide-header
    hide-footer
    v-model="modalVisibility"
    class="modal-container"
    @hide="$emit('hide')"
  >
    <b-row>
      <b-col cols="6" class="">
        <b-img
          class="responsive-img modal-img"
          src="~/assets/images/showroom-modal.jpg" />
      </b-col>
      <b-col
        cols="12" md="6" class="form-container"
        v-show="step === 'contact'"
      >
        <div class="spot-label">VISIT ALUR</div>
        <div class="spot-title">Enter your contact <br>information</div>
        <div class="spot-form">
          <b-form-group
            label="Enter your name"
            label-for="firstName"
          >
            <b-row>
              <b-col cols="6">
                <b-form-input
                  id="firstName"
                  v-model="firstName"
                  name="firstName"
                  placeholder="First Name" />
              </b-col>
              <b-col cols="6">
                <b-form-input
                  id="lastName"
                  v-model="lastName"
                  name="lastName"
                  placeholder="Last Name" />
              </b-col>
            </b-row>
          </b-form-group>
          <b-form-group
            label="Enter your email"
            label-for="email"
          >
            <b-form-input id="email" name="email" v-model="email" :type="'email'" placeholder="Email address"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Enter your mobile phone number"
            label-for="phoneNumber"
          >
            <b-form-input id="phoneNumber" name="phoneNumber" v-model="phoneNumber" placeholder="Mobile phone number"></b-form-input>
          </b-form-group>
          <div class="footer">
            <div class="form-group">
              <p>Continue and select day and time to visit ALUR.</p>
            </div>
            <b-button variant="primary" id="vrFormStep1Toggler" @click="nextStep">Continue</b-button>
          </div>
        </div>
      </b-col>
      <b-col
        v-show="step === 'schedule'"
        cols="12" md="6" class="form-container"
      >
        <div class="spot-label">VISIT ALUR</div>
        <div class="spot-title">When do you want to visit<br>ALUR?</div>
        <div class="spot-form">
          <b-form-group
            label="Choose a showroom to visit:"
            label-for="showroom"
          >
            <div class="position-relative icon-group">
              <div class="input-icon-group-prepend">
                <div class="icon-pin"></div>
              </div>
              <form-select
                id="showroom"
                title="NYC"
                class="form-dropdown"
                :options="showroomOptions"
                @changed="showroomSelected"
              />
            </div>
          </b-form-group>
          <b-form-group
            label="Choose a day to visit:"
            label-for="visitDate"
          >
            <div class="position-relative icon-group">
              <div class="input-icon-group-prepend">
                <div class="icon-date"></div>
              </div>
              <div class="input-icon-group-append">
                <div class="icon-arrow-bottom"></div>
              </div>
              <date-picker
                v-model="visitDate"
                :config="options"
              ></date-picker>
            </div>
          </b-form-group>
          <b-form-group
            label="Choose a time to visit:"
            label-for="visitTime"
          >
            <div class="position-relative icon-group">
              <div class="input-icon-group-prepend">
                <div class="icon-time"></div>
              </div>
              <form-select
                id="visitTime"
                class="form-dropdown"
                title="9:00 AM - 10:00 AM"
                :options="timeOptions"
                @changed="visitTimeSelected"
              />
            </div>
          </b-form-group>
          <div class="footer">
            <div class="form-group">
              <p>After receiving your request, an ALUR associate will<br>respond via email to confirm your visit. </p>
            </div>
            <b-button variant="primary" @click="handleSubmit">Schedule Visit</b-button>
          </div>
        </div>
      </b-col>
      <b-col
        v-show="step === 'success'"
        cols="12"
        md="6"
        class="form-container"
      >
        <div class="spot-form">
          <div class="spot-title text-center">
            <div class="subtitle">Request sent!</div>We’ll be in touch soon.
          </div>
          <div class="footer text-center">
            <p>We received your request. If you have questions that require immediate assistance, please call us at 973.446.2300.</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
import FormSelect from '~/components/FormSelect.vue'
import { mapActions } from 'vuex'

export default {
  name: 'AppointmentModal',
  components: {
    FormSelect
  },
  props: {
    modalShow: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      modalVisibility: false,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      location: 'NYC',
      showroomOptions: ['NYC', 'Chicago', 'LA'],
      timeOptions: [
        '9:00 AM - 10:00 AM',
        '10:00 AM - 11:00 AM',
        '11:00 AM - 12:00 AM',
        '12:00 PM - 1:00 PM',
        '1:00 PM - 2:00 PM',
        '2:00 PM - 3:00 PM',
        '3:00 PM - 4:00 PM',
        '4:00 PM - 5:00 PM'
      ],
      visitDate: new Date(),
      visitTime: '9:00 AM - 10:00 AM',
      step: 'contact',
      options: {
        format: 'DD / MM / YYYY',
        useCurrent: false,
        icons: {
          previous: 'icon-arrow-left',
          next: 'icon-arrow-right'
        }
      }
    }
  },
  watch: {
    modalShow: function () {
      this.modalVisibility= this.modalShow
    }
  },
  methods: {
    ...mapActions({
      submitAppointmentForm: 'submitAppointmentForm'
    }),
    nextStep () {
      this.step = 'schedule'
    },
    handleSubmit () {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        location: this.location,
        date: this.visitDate,
        timeslot: this.visitTime
      }
      this.submitAppointmentForm(formData)
        .then(() => {
          this.step = 'success'
        })
        .catch(err => {
          alert(err.message)
        })
    },
    showroomSelected (val) {
      this.location = val
    },
    visitTimeSelected (val) {
      this.visitTime = val
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/styles/_variables.scss';
  .modal-img {
    height: 100%;
    padding: 0;
    border-top-left-radius:6px;
    border-bottom-left-radius:6px;
    @media only screen and (max-width: 767px) {
      display: none;
    }
  }
  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 34px;
    .spot-label {
      margin-bottom: 6px;
      font-weight: 400;
      letter-spacing: 1px;
      color: $night-grey;
    }
    .spot-title {
      margin-bottom: 20px;
      font-size: 2em;
      font-weight: 300;
      line-height: 1.2;
      letter-spacing: 1px;
      color: $alur-dark-grey;
      .subtitle {
        color: $brand-primary !important;
      }
      @media only screen and (max-width: 543px) {
        font-size: 1.5rem;
      }
    }
    .spot-form {
      max-width: 325px;
      color: $medium-grey;
      @media only screen and (max-width: 575px) {
        max-width: 100%;
      }
    }
    .footer {
      padding-top: 15px;
      p {
        font-size: .8rem;
      }
    }
    input {
      height: 40px;
      padding: 6px 12px;
      box-shadow: none;
    }
    input::placeholder{
      font-weight: 300;
    }
    .icon-group {
      display: flex;
      align-items: center;
      .input-icon-group-prepend,
      .input-icon-group-append {
        position: absolute;
        z-index: 100;
        font-size: 1.2rem;
      }
      .input-icon-group-prepend {
        color: $alur-dark-grey;
        left: 10px;
      }
      .input-icon-group-append {
        right: 20px;
        font-size: 1.2rem;
      }
      .form-dropdown {
        width: 100%;
      }
    }
  }
</style>
<style lang="scss">
@import '~/assets/styles/_variables.scss';
  .modal-container {
    .modal-body {
      background-color: white;
      border-radius:6px;
    }
    .modal-dialog {
      max-width: 100%;
      @media only screen and (min-width: 575px) {
        max-width: 365px;
      }
      @media only screen and (min-width: 768px) {
        max-width: 760px;
      }
      @media only screen and (min-width: 1200px) {
        max-width: 960px;
      }
    }
  }
  .icon-group {
    .btn.btn-secondary.dropdown-toggle,
    input.form-control {
      padding-left: 35px !important;
      opacity: .8;
      font-weight: 200;
    }
  }

</style>
