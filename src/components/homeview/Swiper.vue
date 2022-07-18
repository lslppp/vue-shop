<template>
  <swiper
    :pagination="{
      type: 'progressbar',
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper">
    <swiper-slide v-for = '(item,index) in swiperList'
    :key = 'index'>
      <img :src="item.imgUrl" alt="">
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation} from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
      swiperList:[
           {id:0,imgUrl:'./images/recommend.jpeg'},
           {id:1,imgUrl:'./images/recommend2.jpeg'},
           {id:2,imgUrl:'./images/recommend3.jpeg'},
           {id:3,imgUrl:'./images/recommend4.jpeg'}           
         ]
    };
  },
};
</script>
<style scoped>
 .swiper {
  position: relative;
  height: 2rem;
  width: 100%;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 0.14rem;
  }
  .swiper-slide img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  div.swiper-slide.swiper-slide-active{
    width: 100%;
  }
.swiper-button-prev, .swiper-button-next{
  top: 50%;
}
.swiper-button-prev:after, .swiper-button-next:after{
  font-size: 0.60rem;
}
.swiper-wrapper li:last-of-type{
    margin-right: 20px;
}
</style>
