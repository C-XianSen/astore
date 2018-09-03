// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button, Row, Col, Tabbar, TabbarItem, Swipe, SwipeItem, List} from 'vant'
import SearchBar from './components/common/Search-bar.vue'
import floorComponent from './components/common/floor-component.vue'
import goodsInfo from './components/common/goods-info.vue'

Vue.use(Button).use(Row).use(Col).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(List)
Vue.component(SearchBar.name, SearchBar)
Vue.component(floorComponent.name, floorComponent)
Vue.component(goodsInfo.name, goodsInfo)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
