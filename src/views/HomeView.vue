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
          <Swiper></Swiper>
          <div 
          v-for = '(item,index) in newData'
          :key = 'index'
           >
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
        </div>       
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
  import BSC from '@better-scroll/core'
  import http from '@/common/api/http.js'


  export default {
    name: "HomeView",
    data(){
     return {
       tabsValue: '0',
       getBscroll:'',
       addBscroll:'',
       newData:[]
      };
    },
    components:{
      Tabbar,
      Header,
      Lytab,
      dailyrecommend,
      Swiper,
      Icons,
      Like,
      Ad
    },
    created(){
    this.getData();
  },
  methods:{

  async getData(){
        let res = await http.axios({
         url:'/api/index/0/data/1'
        });
    this.newData = Object.freeze(res.data);
    console.log(this.newData);
    this.$nextTick(()=>{
       this.getBscroll=new BScroll('.wrapper', {
         // pullUpLoad: true,
         // scrollbar: true,
         // pullDownRefresh: true
         movable:true,
         zoom:true,
         click:true
       });
       this.getBscroll = new BSC('.wrapper',{});
    });
  },
  async addData(value){
      let res = await http.axios({
        url:'/api/index/'+value+'/data/1'
      });
      if (res.constructor !=Array) {
        this.newData = res.data;
       
      }
      else{
        this.newData = res;
      }
     // console.log('change:',this.newData);
      this.$nextTick(()=>{
        this.getBscroll=new BScroll('.wrapper', {
           pullUpLoad: true,
           scrollbar: true,
           pullDownRefresh: true
   })
    });

    },
   changeTab(value){
      this.addData(value);
     // console.log('LyTab change:', value);
    }
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
    margin-top: -0.3999rem;
  }
  .Headers{
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 1rem;
  }
  .wrapper{
    margin-top: 1rem;
    height: 1rem;
    flex: 1;
    overflow: hidden;
  }
  .ly-tabs .ly-tab-item {
  padding: 3px 12px 8px 12px !important;
  font-size: 0.18rem;
  text-align: center;
}
  .swiperclass{

  }
  .headers-main{
    height: 1rem;
  }

</style>

