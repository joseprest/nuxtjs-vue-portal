import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { state } from './state'

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    actions,
    mutations
  })
}

export default createStore
