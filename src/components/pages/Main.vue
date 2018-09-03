<template>
    <div>
        <div class="main-div">
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
        <van-tabbar v-model="active" @click.native="changeTabbar(active)">
            <van-tabbar-item icon="shop">首页</van-tabbar-item>
            <van-tabbar-item icon="records">列表</van-tabbar-item>
            <van-tabbar-item icon="cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="contact">会员中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  data () {
    return{
      active: 0
    }
  },
  methods: {
    changeTabbar (active) {
      // console.log(active)
      switch (active) {
        case 0:
          this.$router.push('/')
          // console.log('home')
          break
        case 1:
          this.$router.push('/storerecords')
          // console.log('records')
          break
        case 2:
          this.$router.push('/storecart')
          // console.log('cart')
          break
        case 3:
          this.$router.push('/storecontact')
          // console.log('contact')
          break
      }
    }
  }
}
</script>

<style scoped>
.main-div{
  margin-bottom: 50px;
}
</style>
