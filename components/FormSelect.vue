<template>
  <div :class="'form-select ' + customClass">
    <b-dropdown :text="getText" class="m-md-2">
      <b-dropdown-item
        v-for="(option, i) in options"
        :key="i"
        @click="clicked(option)"
      >{{option}}</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: 'FormSelect',
  data () {
    return {
      text: ''
    }
  },
  props: {
    title: {
      type: String,
      default: () => ''
    },
    options: {
      type: Array,
      default: () => []
    },
    selectedVal: {
      type: String,
      default: () => ''
    },
    customClass: {
      type: String,
      default: () => ''
    }
  },
  computed:{
    getText () {
      if(this.selectedVal){
        return this.selectedVal
      }else{
         return !this.text ? this.title : this.text
      }
     
    }
  },
  methods: {
    // getText () {
    //   return !this.text ? this.title : this.text
    // },
    clicked (val) {
      this.text = val
      this.$emit('changed', val)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/_variables.scss';

.form-select {
  .b-dropdown {
    margin: 0 !important;
    width: 100%;
    border: 1px solid #ced4da;
    border-radius: 4px;
    &:focus,
    &:active {
      border-color: $alur-light-blue !important;
    }
    .dropdown-toggle {
      font-size: 1rem !important;
      color: $alur-dark-grey !important;
      font-weight: 300 !important;
      opacity: 0.9;
      text-align: left;
      &:after {
        content: '\003e';
        margin-left: auto;
        width: 10px;
        height: 10px;
        border: none;
        background-repeat: no-repeat;
        position: absolute;
        top: 40%;
        right: 5%;
        transform: rotate(90deg);
      }
      &:hover,
      &:focus {
        background-color: transparent !important;
        box-shadow: unset !important;
      }
    }
  }
  .dropdown-menu {
    width: 100%;
    margin-top: 10px;
    padding: 0 !important;
    .dropdown-item {
      padding-top: 10px !important;
      padding-bottom: 10px !important;
      &:hover {
        transform: unset;
        color:$alur-primary-color !important;
        background-color: $alur-light-blue !important;
      }
    }
  }
  &.no-opacity {
    .b-dropdown {
      .dropdown-toggle {
        color: $alur-grey-color2 !important;
        opacity: 1 !important;
        background-color: $alur-primary-color !important;
      }
    }
  }
}
</style>
