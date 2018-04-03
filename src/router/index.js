import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'*/
import Layout from '@/layout/Layout'
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
Vue.use(VueResource,ElementUI);

Vue.use(Router)

/*
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    }
  ]
})
