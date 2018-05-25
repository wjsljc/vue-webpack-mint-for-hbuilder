import Vue from 'vue'
import App from './App'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import './assets/css/index.styl'
import 'assets/js/vconsole.min.js'

import router from './router'

Vue.use(Mint);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
