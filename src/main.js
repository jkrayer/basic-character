import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false

const vue = new Vue({
  render: h => h(App),
}).$mount('#app')