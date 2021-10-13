import vMediaQuery from 'v-media-query'
import Vue from 'vue'

const breakpoints = {
  xs: 0,
  sm: 567,
  md: 768,
  lg: 992,
  xl: 1200
}

Vue.use(vMediaQuery, {
  variables: breakpoints
})
