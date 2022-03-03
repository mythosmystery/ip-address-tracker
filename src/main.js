import Vue from 'vue'
import App from './App.vue'
import store from './plugins/store'
import 'leaflet/dist/leaflet.css'

import { fixIcon } from './utils/iconFix'

fixIcon()

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
