import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //es6 간단등록
  store,
}).$mount('#app')
