import Vue from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
