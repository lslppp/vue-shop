<template>
  <main class="home">
       <div class="Headers">
      <div class="headers-main">
        <Header v-if = 'true'></Header>
        <Lytab v-if = 'true'></Lytab>
    
      </div>  
    </div>  
    <section class="wrapper">
      <div>
<!--         <div 
          v-for = '(item,index) in newData'
          :key = 'index'
        >
          <Swiper 
             v-if ='item.type=="swiperList"'
             :swiperList ='item.data'
          ></Swiper>
          <Icons 
             v-if ='item.type=="iconsList"'
             :iconsList ='item.data'
          ></Icons>
          <dailyrecommend 
             v-if ='item.type=="recommendList"'
             :recommendList ='item.data'
          ></dailyrecommend>
          <Like 
             v-if ='item.type=="likeList"'
             :likeList ='item.data'
             ></Like>
          <Ad 
             v-if ='item.type=="adList"'
             :adList = 'item.data'
             ></Ad>
        </div> -->
        
      </div>
    </section>
    <Tabbar/>
  </main>
</template>
<script>
  import Tabbar from '@/components/common/Tabbar.vue'
  import Header from '@/components/homeview/Header.vue' 
  import Lytab from '@/components/homeview/Ly-tab.vue'
  import dailyrecommend from '@/components/homeview/Dailyrecommend.vue'
  import Swiper from '@/components/homeview/Swiper.vue'
  import Icons from '@/components/homeview/Icons.vue'
  import Like from '@/components/homeview/Like.vue'
  import Ad from '@/components/homeview/Ad.vue'
  import BScroll from 'better-scroll'

  // import http from '@/common/api/request.js'
  import BSC from '@better-scroll/core'
  export default {
    components:{
      Tabbar,
      Header,
      Lytab,
      dailyrecommend,
      Swiper,
      Icons,
      Like,
      Ad
    }
};

</script>

<style>
  .home{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: 100vh;
  }
  .Headers{
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 1.08rem;
  }
  .wrapper{
    margin-top: 2rem;
    height: 1rem;
    flex: 1;
    overflow: hidden;
  }
  .ly-tabs .ly-tab-item {
  padding: 3px 12px 8px 12px !important;
  font-size: 0.18rem;
  text-align: center;
}

</style>

