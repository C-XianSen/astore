<template>
    <div class="goods-info">
        <div class="goods-image">
            <img :src="goodsImage" width="90%">
        </div>
        <div class="goods-name">{{goodsName}}</div>
        <div class="goods-price">￥{{goodsPrice}}</div>
    </div>
</template>

<script>
export default {
  name: 'goods-info',
  props: ['goodsImage', 'goodsName', 'goodsPrice'],
  data () {
    return {
      
    }
  }
}
</script>

<style>
.goods-name{
    padding: 0 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
