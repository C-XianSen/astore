<template>
    <div>
        <search-bar/>
        <div class="type-bar">
            <div v-for="(cate, index) in category" :key="index">
                <img :src="cate.image" width="60%">
                <span>{{cate.mallCategoryName}}</span>
            </div>
        </div>
        <div class="swiper-area">
            <van-swipe :autoplay="3000" class="swiper-show">
                <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
                    <img :src="banner.image" width="100%">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="recommend-area">
            <div class="recommend-title">
                网红可能推荐(〃'▽'〃)
            </div>
            <div class="recommend-body">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item, index) in hotGoods" :key="index">
                        <div class="recommend-item">
                            <img :src="item.image" width="70%">
                            <div class="good-name">{{item.name}}</div>
                            <div>
                                劲爆价：
                                <span class="good-price">￥{{item.price}}</span>
                                <br>
                                <span class="hot-price">￥{{item.mallPrice}}</span>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <floor-component :floorData="floor1" :floorTitle="floorName.floor1"></floor-component>
        <floor-component :floorData="floor2" :floorTitle="floorName.floor2"></floor-component>
        <floor-component :floorData="floor3" :floorTitle="floorName.floor3"></floor-component>
        <div class="hot-area">
            <div class="hot-title">疯狂被扫的货︿(￣︶￣)︿</div>
            <div class="hot-goods">
                <van-list>
                    <van-row gutter="20">
                        <van-col span="12" v-for="(item, index) in moreGoods" :key="index">
                            <goods-info :goodsName="item.goodsName" :goodsImage="item.image" :goodsPrice="item.mallPrice"></goods-info>
                        </van-col>
                    </van-row>
                </van-list>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  data () {
    return {
      category: [],
      hotGoods: [],
      swiperOption: {
          slidesPerView: 3
      },
      bannerPicArray: [],
      floor1: [],
      floor2: [],
      floor3: [],
      floorName: {},
      moreGoods: [],
    }
  },
  components: {
    swiper, swiperSlide
  },
  created () {
    axios({
        url: 'https://www.easy-mock.com/mock/5b85fb6cb6eb682fc7f9f013/vueshop/index',
        method: 'get'
    })
    .then(res => {
      console.log(res)
      if (res.status == 200) {
        this.category = res.data.data.category
        this.hotGoods = res.data.data.hotGoods
        this.bannerPicArray = res.data.data.slides
        this.floor1 = res.data.data.floor1
        this.floor2 = res.data.data.floor2
        this.floor3 = res.data.data.floor3
        this.floorName = res.data.data.floorName
        this.moreGoods = res.data.data.recommend
      }
    })
    .catch((err) => {

    })
  },
}
</script>

<style scoped>
.type-bar{
    background-color: #fff;
    display: flex;
    flex-wrap: nowrap;
    margin: 0.3rem;
    font-size: 0.5rem;
    font-weight: 500;
    color: #8b5757
}
.type-bar div{
    flex: 1;
}
.type-bar span{
    display: block
}
.swiper-area{
    background-color: #fff;
    width:20rem;
    clear:both;
    margin-top: .1rem
}
.swiper-show{
    margin: 1px;
    border: 1px solid rgba(161, 161, 161, 0.376)
}
.van-swipe-item{
    font-size: 0;
}
.recommend-area{
    margin-top: .3rem
}
.recommend-title{
    font-size: 0.7rem;
    font-weight: bold;
    color: #a78888;
}
.recommend-body{
    font-size: 0.5rem;
    background-color: #fff;
    font-weight: bold
}
.good-name{
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.good-price{
    text-decoration: line-through;
    color: #a1a1a1;
}
.hot-price{
    color: #f83737;
}
.hot-area{
    text-align: center;
    font-size: .7rem;
    height: 1.8rem;
    line-height: 1.8rem;
    color: #a1a1a1
}
.hot-goods{
    height: 116rem;
    overflow: hidden;
    background-color: #fff;
}
</style>
