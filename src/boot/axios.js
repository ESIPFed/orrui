import axios from 'axios'

const $axios = axios.create({
  // ORR API
  baseURL: 'http://cor.esipfed.org/ont/api/v0'
})

export default ({ Vue }) => {
  Vue.prototype.$axios = $axios
}

export { $axios }
