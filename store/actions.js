import axios from 'axios'
import config from './config'
import { Base64 } from 'js-base64'

export default {
  getFeaturedInstallations: async ({ commit }) => {
    const auth = 'Basic ' + Base64.encode(config.appSecret)
    const url = `${config.bendEndpoint}/custom/get-featured-installations`
    const response = await axios.post(url, JSON.stringify({}), {
      headers: { Authorization: auth }
    })

    commit('getFeaturedInstallations', response.data)
  },

  getInstallations: async ({ commit }) => {
    const auth = 'Basic ' + Base64.encode(config.appSecret)
    const url = `${config.bendEndpoint}/custom/get-installations`
    const response = await axios.post(url, JSON.stringify({}), {
      headers: { Authorization: auth }
    })
    commit('getInstallations', response.data)
  },
  submitTakeTour: async ({ commit }, params) => {
    const auth = 'Basic ' + Base64.encode(config.appSecret)
    const url = `${config.bendEndpoint}/custom/send-vr-link`
    await axios.post(url, params, {
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
        commit('submitTakeTour', response.data)
      })
      .catch(function (error) {
        commit('submitTakeTour', error.response)
      });
  },
  submitAppointmentForm: ({ commit }, params) => {
    const auth = 'Basic ' + Base64.encode(config.appSecret)
    const url = `${config.bendEndpoint}/custom/process-appointment-request`
    return axios.post(url, params, {
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json'
      }
    })
  }
}
