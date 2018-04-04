// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
/*import HelloWorld from '@/components/HelloWorld'*/
import Layout from '@/components/Layout';
import VueResource from 'vue-resource';
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui';
/*import IconSvg from '@/components/IconSvg'
Vue.component('icon-svg', IconSvg)*/
Vue.use(VueResource);
Vue.use(ElementUI);

Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
