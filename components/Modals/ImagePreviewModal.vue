<template>
  <div class="modal-container">
    <b-modal
      ref="modal"
      hide-header
      hide-footer
      v-model="modalVisibility"
      size="lg"
      @hide="hideModal"
    >
      <slot name="modal-content"></slot>
      <div
        class="close-btn"
        @click="hideModal"
      ></div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ImagePreviewModal',
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

  .modal {
    &:after {
      content: unset;
    }
  }
  .close-btn {
    position: absolute;
    left: 20px;
    top: 5%;
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 50%;
    z-index: 1000;
    &:after {
      position: absolute;
      -webkit-transform: translate3d(0, -50%, 0) rotate(45deg);
      transform: translate3d(0, -50%, 0) rotate(45deg);
      display: block;
      text-align: center;
      font-size: 2rem;
      font-weight: 400;
      content: "+";
      color: $brand-primary;
      cursor: pointer;
      top: 50%;
      left: 6px;
    }
  }
  .overview-text {
    top: 100%;
    left: 0;
    max-width: 100%;
    background-color: white;
    padding: 20px;
    font-size: 1rem;
  }
}
</style>
