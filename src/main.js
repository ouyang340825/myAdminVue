// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/*import HelloWorld from '@/components/HelloWorld'*/
import Layout from '@/components/Layout'
import VueResource from 'vue-resource';
import ElementUI from 'element-ui'
Vue.config.productionTip = false
Vue.use(VueResource,ElementUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
