<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide 
    v-for = '(item,index) in swiperList'
    :key = 'index'>
      <img :src="item.imgUrl" alt="">
    </swiper-slide>
   
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css';
  export default {
    name: 'swipervue',
    title: 'Pagination',
    props:{
      swiperList:Array
    },
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
           spaceBetween: 20,
           autoplay:{delay:3000,},
           loop:true,
           speed:1000,
           paginationClickable:true,
           pagination: {
               el: '.swiper-pagination',
               clickable: true,
           },
           navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
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