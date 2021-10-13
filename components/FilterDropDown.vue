<template>
  <div class="filter-group">
    <b-dropdown>
      <template slot="button-content">
        {{text}}<i class="icon-arrow-bottom"></i>
      </template>
      <b-form-checkbox-group
        v-model="selected"
        @input="selectCheckBox(text)"
      >
        <div
          v-for="(opt, key) in options"
          :key="key"
        >
          <b-form-checkbox
            v-if="opt" :value="opt.value"
          >{{opt.text}}</b-form-checkbox>
          <b-dropdown-divider v-else />
        </div>
      </b-form-checkbox-group>
    </b-dropdown>
  </div>
</template>

<script>
import { camelCase } from 'lodash'

export default {
  name: 'FilterDropDown',
  props: {
    options: {
      type: Array,
      default: () => []
    },
    text: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    selectCheckBox (val) {
      let updateData = {}
      val = camelCase(val)
      updateData[val] = this.selected
      this.$store.commit('addFilterData', updateData)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/_variables.scss';
  .filter-group {
    .btn.dropdown-toggle {
      background-color: transparent !important;
      color: $alur-grey-color2 !important;
      font-weight: 400 !important;
      line-height: 1.42857 !important;
      font-size: 0.9rem !important;
      padding: 0 !important;
      margin-right: 20px;
      box-shadow: none;
      outline: none;
      &:active,
      &:focus {
        box-shadow: none !important;
      }
      &:after {
        display: none;
      }
      .icon-arrow-bottom {
        border: none;
        color: $grey1;
        opacity: .7;
      }
    }
    .dropdown.show {
      .btn.dropdown-toggle {
        color: $brand-primary !important;
        .icon-arrow-bottom {
          color: $brand-primary !important;
        }
      }
    }
    .dropdown-menu {
      min-width: 248px;
      padding: 8px;
      margin-top: 0;
      border: 0 !important;
      border-radius: 6px !important;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.16) !important;
      transform: translate3d(0px, 33px, 0px) !important;
      .custom-checkbox {
        display: block;
        padding: 10px 0;
        margin-left: 40px;
        margin-right: 20px;
        label {
          padding-left: 10px;
          outline: none;
          font-size: 0.875rem;
        }

        &:hover {
          .custom-control-label::before {
            border: 2px solid $brand-primary !important;
          }
        }
      }
      .custom-control-input:checked ~
      .custom-control-label::before {
        border-color: $brand-primary !important;
        background-color: $brand-primary !important;
      }
    }
  }

</style>
