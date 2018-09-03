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
          path: '/storerecords',
          name: 'StoreRecords',
          component: StoreRecords
        },
        {
          path: '/storecart',
          name: 'StoreCart',
          component: StoreCart
        },
        {
          path: '/storecontact',
          name: 'StoreContact',
          component: StoreContact
        }
      ]
    },
  ]
})
