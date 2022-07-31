<template>
  <main class="home">
      <div class="Headers">
        <div class="headers-main">
          <Header></Header>
          <Lytab @select="changeTab"></Lytab> 
        </div>  
      </div>  
      <section class="wrapper" ref="wrapper" v-show='true'>
        <div>
          <div 
          v-for = '(item,index) in newData'
          :key = 'index'
           > 
             <Swiper v-if ='item.type=="swiperList"'></Swiper>
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
  import http from '@/common/api/http.js'
  import BScroll from 'better-scroll'


 // let wrapper = document.querySelector('.wrapper')
  // let scroll = new BScroll(this.$refs.wrapper, {});
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
  // mounted() {
  //     this.$nextTick(() => {
  //       this.scroll = new Bscroll(this.$refs.wrapper, {})
  //     })
  //   },
  methods:{

  async getData(){
        let res = await http.axios({
         url:'/api/index/0/data/1'
        });
    this.newData = Object.freeze(res.data);
    console.log(res);
    this.$nextTick(()=>{
       // this.getBscroll=new BScroll('.wrapper', {
       //   // pullUpLoad: true,
       //   scrollbar: true,
       //   // pullDownRefresh: true
       //   movable:true,
       //   zoom:true,
       //   click:true
       // });
       // this.getBscroll = new BSC('.wrapper',{});
       // let wrapper = document.querySelector('.wrapper');
      new BScroll(this.$refs.wrapper, {
                pullUpLoad: true,
                scrollbar: true,
                pullDownRefresh: true
       });
       // this.scroll = new BScroll(this.$refs.wrapper, {});
    });
  },
  async addData(value){
     console.log('LyTab change:', value);
     // console.log('LyTab change:');
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
        
        // this.getBscroll=new BScroll('.wrapper', {
        //    pullUpLoad: true,
        //    scrollbar: true,
        //    pullDownRefresh: true
        //  })

        // let wrapper = document.querySelector('.wrapper');
        new BScroll(this.$refs.wrapper, {
                pullUpLoad: true,
                scrollbar: true,
                pullDownRefresh: true,
                zoom:true
        });
        // this.scroll = new BScroll(this.$refs.wrapper, {});
    });

    },
   changeTab(value){
   
    // console.log('LyTab change:');
      this.addData(value);
     
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
  .swiperclass{

  }
  .headers-main{
    height: 1rem;
  }

</style>

