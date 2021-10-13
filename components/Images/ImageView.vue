<template>
  <b-img
    :src="src.a"
    :srcset="`${src.a} 1x, ${src.b} 2x`"
  />
</template>

<script>
export default {
  name: 'ImageView',

  props: {
    name: {
      type: String,
      default: () => ''
    },
    ext: {
      type: String,
      default: () => ''
    }
  },

  computed: {
    src () {
      return {
        a: require(`~/assets/img/${this.name}.${this.ext}`),
        b: require(`~/assets/img/${this.name}@2x.${this.ext}`)
      }
    }
  }
}
</script>

<style scoped>

</style>
