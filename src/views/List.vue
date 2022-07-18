<template>
  <div class="list">
    <header v-show = "isShow">
      <i class="iconfont icon-fanhui"></i>
      <div class="search-main">
        <i class="iconfont icon-fangdajing1"></i>
        <form action="" onsubmit="return false">
          <input placeholder="搜索您喜欢...">
        </form>
      </div>
        <div class="search-btn">
          <img src="/images/home.png">
        </div>
      </header>
      <!-- // class="active1" -->

    <section>
      <div class="list-l" ref ="left">
        <ul class="l-item">
          <li 
            v-for = '(item,index) in leftData'
             :key = 'index' 
             :class='{active1:index == currentIndex}'
             @click ='goScroll(index)'
           >{{item.name}}</li>
        </ul>
      </div>
      <div class="list-r wrapper1" ref="right">
        <div>
          <ul 
           class="shop-list"
           v-for ='(item,index) in rightData'
           :key = 'index'
           >
          <li
            v-for ='(k,i) in item'
            :key = 'i'
          >
            <h2>{{k.name}}</h2>
            <ul class="r-conent">
              <li
                v-for ="(j,l) in k.list"
               :key ='l'
               >
      
                <img :src="j.imgUrl" alt="">
                <span>{{j.name}}</span>
              </li>
            </ul>
          </li>
          </ul>
        </div>
        
      </div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
  
  import Tabbar from '@/components/common/Tabbar.vue'
   import http from '@/common/api/http.js'
   import BScroll from 'better-scroll'
   // import axios from 'axios'
   import BSC from '@better-scroll/core'
  export default{
    name:"List",
    data(){
      return{
        isShow:true,
        leftData:[],//左侧滑动数据
        rightData:[],//右侧滑动数据
        getBscroll:'',//右侧滑动
        allHeight:[],//存储右侧每块高度值
        scrollY:''//滚动距离
      }
    },
    computed:{
      currentIndex(){
        return this.allHeight.findIndex((item,index)=>{
          return this.scrollY >=item && this.scrollY < this.allHeight[index + 1];
        })
      }
    },
    components:{
      Tabbar
    },
    async created(){
      let res = await http.$axios({
        url:'/api/goods/list',
      });
      let leftArrar = [];
      let rightArrar = [];
      res.forEach(v =>{
        leftArrar.push({
          id:v.id,
          name:v.name
        })
        rightArrar.push(v.data);
      })
      
      this.leftData =leftArrar;
      this.rightData = rightArrar;
      // console.log(this.rightData);
       this.$nextTick(()=>{
        //左侧滑动
        new BSC(this.$refs.left,{
          // click:true
        });
        //右侧滑动
           // this.getBscroll=new BScroll('.wrapper1', {
           // // pullUpLoad: true,
           //   // scrollbar: true,
           // // pullDownRefresh: true
           //   // movable:true,
           //   // zoom:true,
             // click:true
           //    });
            this.getBscroll = new BSC('.wrapper1',{
              // click:true,
              probeType:3,
              bounce:false
            });

             //统计右侧每块高度
            let height = 0;
            this.allHeight.push(height);
            let uls = this.$refs.right.getElementsByClassName('shop-list');

            //将dom对象转换成真正的数组
            Array.from(uls).forEach(i=>{
              height += i.clientHeight;
              this.allHeight.push(height)
            })
            //得到右侧滚动的值
             this.getBscroll.on('scroll',(pos)=>{
              this.scrollY = Math.abs(pos.y)
              if(Math.abs(pos.y) >=50){
                this.isShow =false;
              }
              else{
                this.isShow = true;
              }
              console.log(pos)
             })
         });

    },
    methods:{
      goScroll(index){
        // console.log(this.allHeight,index)
        this.getBscroll.scrollTo(0,-this.allHeight[index],300)
      }
    }
 //  created(){
 //    this.getDatas();
 //  },
 //  methods:{
 //  async getDatas(){
 //    let res = await http.$axios({
 //      url:'/api/goods/list'
 //    });
 //    this.leftData = Object.freeze(res);
 //    this.rightData = Object.freeze(res.data);
 // //    res.forEach(v =>{
  // //   leftData.push({
  // //         id:v.id,
  // //         name:v.name
  // //   })
  // // })
 //    console.log(res);
    // this.$nextTick(()=>{
    //    this.getBscroll=new BScroll('.wrapper1', {
    //      // pullUpLoad: true,
    //      // scrollbar: true,
    //      // pullDownRefresh: true
    //      movable:true,
    //      zoom:true
    //    });
    //    this.getBscroll = new BSC('.wrapper1',{});
    // });
 //   }
 //  }
}
</script>
<style>
  .list{
      display: flex;
      flex-direction: column;
      overflow: hidden;
      width: 100%;
      height: 100vh;
     }
   header{
    display: flex;
    /*flex-direction: column; */
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1.5rem;
    background-color: #fa9506;
    /*color: #red;*/
   }
   .search-return{
    padding: 0 0.25rem 0.15rem 0.25rem;
   }
   .search-btn{
    padding: 0 0.25rem;
   }
   .search-return i{
    font-size: 0.65rem;
   }
   .search-main {
    display: flex;
    align-items: center;
    width: 60%;
    height: 0.75rem;
    border-radius: 0.8rem;
    padding:;
    background-color: #fff;
    padding: 0 0.3rem;
   }
     .search-main i{
        font-size: 0.4rem;
        color: #ccc;
     }
     .search-main form{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
     }
     .search-main form input {
      font-size: 0.2rem;
     }
   .search-btn img{
    display: flex;
    align-items: center;
    width: 0.75rem;
    height: 0.75rem;

   }
   .active1{
    border-left: 5px solid #b54f4a;
    color: #b54f4a;
   }
     section{
    display: flex;
   }
   .list-l{
    width: 1.7rem;
    background-color: #ffff;
    overflow: hidden;
    border-right: 1px solid #cccc;
   }
   .l-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
   }
    .list-l li{
      width: 100%;
      line-height: 0.6rem;
      text-align: center;
      font-size: 0.28rem;
      /*height: 0.6rem;*/
    }
    .list-r{
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .shop-list{
      text-align: center;
    }
    .shop-list h2{
      font-size: 0.4rem;
      font-weight: 400;
    }
    .r-conent{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
     .r-conent li{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0.2rem;
     }
     .r-conent li img{
      width: 1.5rem;
      height: 1.5rem;
     }
       .r-conent li span{
        font-size: 0.24rem;
       }
       .iconfont{
        font-size: 0.7rem;
       }
</style>