import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'
import sweetalert2 from 'sweetalert2'


// Vue.config.productionTip = false
Vue.use

new Vue({
  router,
  store,
  sweetalert2,
  mounted() {
    this.$store.dispatch('authenticate')
  },
  render: function (h) { return h(App) }
}).$mount('#app')
