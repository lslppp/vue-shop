<template>
  <div class="container">
    <header>
      <div class="header-returns" v-show = 'isShow'>
        <div @click = 'goBack'> 
          <i class="iconfont icon-fanhui">
          </i>
        </div>
        <div>
          <i class="iconfont icon-kefu"></i>
        </div>
      </div>
      <div class="header-bar" v-show = '!isShow' :style="styleOption">
        <div @click = 'goBack'>
          <i class="iconfont icon-fanhui">
          </i>
        </div>
        <div>
          <span>商品详情</span>
          <span>商品评价</span>
        </div>
        <div>
          <i class="iconfont icon-kefu"></i>
        </div>
      </div>

    </header>

        <section ref ="wrapper2">
          <div >
              <div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide 
            v-for = '(item,index) in swiperList'
            :key = 'index'>
              <img :src="item.imgUrl" alt="">
            </swiper-slide>
           
            <div class="swiper-pagination" slot="pagination"></div>
           <!--  <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
          </swiper>
        </div>
        <div>
          <div class="goods-name">
            <h1>{{goods.name}}</h1>
            <div class="contents">性价比首选</div>
          </div>
        </div>
        <div class="goods-price">
          <div class="oprice">
            <span>¥</span>
            <b>{{goods.price}}</b>
          </div>
          <div class="pprice">
            <span>价格:</span>
            <del>{{goods.price}}</del>
          </div>
        </div>
        <div>
          <img style = 'width: 100%;height: 5rem;':src="goods.imgUrl">
          <img style = 'width: 100%;height: 5rem;':src="goods.imgUrl">

        </div>    
      </div>
        </section>

    <footer>
      <div class="add-cart">加入购物车</div>
            <div>立即购买</div>
    </footer>
  </div>
</template>
<script >
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  // import 'swiper/css/swiper.css';
  import http from '@/common/api/http.js'
  import Tabbar from '@/components/common/Tabbar.vue'
  import BScroll from 'better-scroll'
  export default{
    name:"Detail",
    data() {
        return {
          id:0,
          goods:{},
          styleOption:{},
          BetterScroll:'',
          isShow:true,
          scrollY:'',
          swiperOption: {
             spaceBetween: 20,
             autoplay:{delay:3000,},
             // loop:true,
             speed:1000,
             // paginationClickable:true,
             pagination: {
                 el: '.swiper-pagination',
                 // clickable: true,
                 type:'fraction'
             }
          },
          swiperList:[
             {
               imgUrl:'./images/recommendList1.jpeg'
             },
             {
               imgUrl:'/images/recommend2.jpeg'
             },
             {
               imgUrl:'/images/recommend3.jpeg'
             }
          ]
        }
      },
      components: {
          Tabbar,
          Swiper,
          SwiperSlide
      },
      created(){
        this.id = this.$route.query.id;
        this.getData();
      },
      activated(){

        if( this.$route.query.id != id){  
         this.getData();
         id = this.$route.query.id;
        }
        
      },
      mounted(){     

           this.BetterScroll=new BScroll(this.$refs.wrapper2, {  
               probeType:3,
               bounce:false,
               click:true        
               });    

           this.BetterScroll.on('scroll',(pos)=>{

                this.scrollY = Math.abs(pos.y)
                let posY = Math.abs(pos.y);
                let opacity = posY / 180;
                opacity = opacity >1 ? 1 : opacity;

                this.styleOption = {
                    opacity:opacity
                }

                if (posY >= 50) {
                  this.isShow = false;
                }
                else{
                  this.isShow = true;
                }

             })
       },
       methods:{
        async getData(){
          let id = this.$route.query.id;
          
          let res = await http.$axios({
            url:'/api/goods/id',
            params:{
              id
            }
          })
          this.goods = res;
        },
        goBack(){
          this.$router.back();
        }
       }
  }
</script>
<style scoped>

  header{
    position: fixed;
    left: 0;
    top: 0;
    z-index:999;
    width: 100%;
    height: 1rem; 
  }
  .header-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1rem;
    background-color: #fff;
    /*background-color: rgba(0, 0, 0,0.3);*/
    font-size: 0.36rem;
  }
  .header-bar i{
    padding: 0 0.15rem;
  }
  .header-returns{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1.2rem;
    
  } 
  .header-returns div{
    margin: 0 0.4rem;
    width: 1rem;
    line-height: 0.85rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
  .header-returns i{
    font-size: 0.5rem;
    color: #fff;
  }



  .goods-name{
    padding: 0.3rem 0.2rem;
    border-bottom: 1px solid #ccc;
  }
   h1{
    font-size: 0.6rem;
    font-weight: 500;
   }
   .contents{
    padding: 0.03rem 0;
    font-size: 0.4rem;
    color: #9999;
   }
   .goods-price{
    padding: 0.3rem 0.2rem;
   }
   .oprice{
    color: red;
   }
   .oprice span{
    font-size: 0.4rem;
   }
   .oprice b{
    font-size: 0.7rem;
    font-weight: 600;
   }
   .pprice{
    color: #99999;
    font-size: 0.4rem;
   }

   .swiper {
    position: relative;
    height:100%;
    width: 100%;
    overflow: hidden;
    }
    .swiper-slide {
      display: flex;
      justify-content: center;
      text-align: right;
      font-weight: bold;
    }
    
    .swiper-pagination{
      text-align: right;
      width: 100%;
      font-size: 0.4rem;
      color: #ffff;

    }
    .swiper-slide img{
      height: 5rem;
      /*line-height: 100%;*/
      width: 100%;
      object-fit: cover;
      /*object-fit: fill;*/
      /*object-fit: contain;*/
      /*object-fit: inherit;*/
      /*object-fit: unset;*/
      /*object-fit: scale-down;*/
    }
     div.swiper-slide.swiper-slide-active{
      width: 100%;
    }
    
    .swiper-wrapper li:last-of-type{
        margin-right: 0.2rem;
    }
      .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
        left: -0.3rem;
      }
  
      footer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        border-top: 1px solid #cccc;
        background-color: #fff;
        
      }
      footer div{
        font-size: 0.5rem;
        width: 50%;
        line-height: 1rem;
        text-align: center;
        color: #fff;
        background-color: red;
      }
      .add-cart{
        background-color: #ff9500;
      }


</style>