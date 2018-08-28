// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button, Row, Col, Tabbar, TabbarItem} from 'vant'
import SearchBar from './components/common/Search-bar.vue'

Vue.use(Button).use(Row).use(Col).use(Tabbar).use(TabbarItem)
Vue.component(SearchBar.name, SearchBar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
