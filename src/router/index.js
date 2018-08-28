import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/pages/Main.vue'
import StoreHome from '../components/pages/StoreHome.vue'
import StoreRecords from '../components/pages/StoreRecords.vue'
import StoreCart from '../components/pages/StoreCart.vue'
import StoreContact from '../components/pages/StoreContact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          name: 'StoreHome',
          component: StoreHome
        },
        {
          path: '/StoreRecords',
          name: 'StoreRecords',
          component: StoreRecords
        },
        {
          path: '/StoreCart',
          name: 'StoreCart',
          component: StoreCart
        },
        {
          path: '/StoreContact',
          name: 'StoreContact',
          component: StoreContact
        }
      ]
    },
  ]
})
