<template>
    <div>
        <div class="floor">
            <div class="floor-title">ヾ(✿ﾟ▽ﾟ)ノ{{floorTitle}}</div>
            <div class="floor-anomaly">
                <div>
                    <div class="floor-one">
                        <img :src="floorData1.image" width="100%">
                    </div>
                    <div>
                        <img :src="floorData2.image" width="100%">
                    </div>
                </div>
                <div class="floor-two">
                    <img :src="floorData0.image" width="100%">
                </div>
            </div>
            <div class="floor-rule">
                <div v-for="(item, index) in floorData.slice(3)" :key="index">
                    <img :src="item.image" width="100%">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'floor-component',
  props: ['floorData','floorTitle'],
  data () {
    return {
      floorData0: {},
      floorData1: {},
      floorData2: {}
    }
  },
  watch: {
    floorData: function (val) {
    // console.log(this.floorData)
    this.floorData0 = this.floorData[0]
    this.floorData1 = this.floorData[1]
    this.floorData2 = this.floorData[2]
    }
  }
}
</script>

<style>
.floor-title{
    text-align: center;
    font-size: 0.9rem;
    height: 1.8rem;
    line-height: 1.8rem;
    color: #a1a1a1;
}
.floor-anomaly{
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
}
.floor-anomaly div{
    width: 10rem;
    box-sizing: border-box;
}
.floor-one{
    border-bottom: 1px solid #ddd;
}
.floor-two{
    border-left: 1px solid #ddd;
}
.floor-rule{
    display: flex;  
    flex-direction: row;
}
.floor-rule div{
    box-sizing: border-box;
    width: 10rem;
    border-bottom: 1px solid #ddd;
}
.floor-rule div:nth-child(2){
    border-left: 1px solid #ddd;
}
</style>
