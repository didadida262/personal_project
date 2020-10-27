import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true

// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

import i18n from './i18n'

Vue.use(VueFullPage);
Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(ElementUI);
Vue.use(VueI18n)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
