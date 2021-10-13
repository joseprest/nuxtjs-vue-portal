<template>
    <b-modal
      ref="modal"
      hide-header
      hide-footer
      v-model="modalVisibility"
      @hide="hideModal"
      class="modal-container"
    >
      <slot name="modal-content"></slot>
    </b-modal>
</template>

<script>
export default {
  name: 'VirtualRealityModel',
  props: {
    modalShow: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      modalVisibility: false
    }
  },
  watch: {
    modalShow: function () {
      this.modalVisibility= this.modalShow
    }
  },
  methods: {
    hideModal () {
      this.$emit('hide')
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/_variables.scss';
.modal-container {
  position: relative;
  .modal-body {
    background: $alur-primary-color;
  }
  .modal-close {
    position: fixed;
    top: 40px;
    left: 40px;
    font-size: 32px;
    color: $alur-primary-color;
    cursor: pointer;
    z-index: 10;
  }
  .overview-text {
    top: 45%;
    left: 10%;
    max-width: 300px;
    background-color: white;
    border-radius: 6px;
    padding: 10px;
    font-size: .8rem;
  }
}
</style>
<style lang="scss">
@import '~/assets/styles/_variables.scss';
  .modal-container {
    .modal-body {
      background-color: white;
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
</style>
