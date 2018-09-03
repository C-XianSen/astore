<template>
    <div class="search-bar">
        <van-row gutter="5">
            <van-col span="3"><img :src="locatIcon" width="70%" class="location-icon"></van-col>
            <van-col span="18"><input type="text" class="search-input" placeholder="说不定一搜入魂呢 0.0"></van-col>
            <van-col span="3"><img :src="searchIcon" width="50%"></van-col>
        </van-row>
    </div>
</template>

<script>
export default {
  name: 'search-bar',
  data () {
    return {
      locatIcon: require('../../assets/images/location.png'),
      searchIcon: require('../../assets/images/search.png')
    }
  }
}
</script>

<style scoped>
input::-webkit-input-placeholder{
    color: #5f5f5f;
    font-size: 12px;
}
.search-bar{
    height: 2.2rem;
    background-color: #a1a1a1;
    line-height:2.2rem;
    overflow: hidden;
}
.search-input{
    width:100%;
    height: 1.3rem;
    border-top:0px;
    border-left:0px;
    border-right:0px;
    border-bottom: 1px solid 1px !important;
    border-bottom-color: #b8b8b8;
    background-color: #a1a1a1;
    color:rgb(0, 0, 0);
}
.location-icon{
    padding-top: .3rem;
    padding-left: .3rem;
}
</style>
