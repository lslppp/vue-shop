<template>
  <div class="search-list">
    <div>
      <Header></Header>
      <ul class="search-ul">
        <li class="search-ul-li" 
        v-for = '(item,index) in searchList.data'
        :key = 'index'
        @click = 'changeTab(index)'
        >
          <div :class = 'searchList.currentIndex == index ? "active":""'>{{item.name}}</div>
          <!-- <div class="search-filter"> -->
          <div class="search-filter" v-if='index !=0 '> 
            <i 
                class="iconfont icon-shangjiantou"
                :class = 'item.status == 1 ? "active" : ""'
            >
            </i>
            <i 
                class="iconfont icon-xiajiantou"
                :class = 'item.status == 2 ? "active" : ""'
             >
             </i>
          </div>

        </li>
      </ul>
    </div>
    
    <section>
      <ul class="section-ul" v-if ='goodsList.length'>
        <li 
          v-for = '(item,index) in goodsList'
          :key = 'index'
        >
          <img :src="item.imgUrl" alt="">
          <h3>{{item.name}}</h3>
          <div class="price">
            <div>
              <span>¥</span>
              <b>{{item.price}}</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>
      </ul>
      <h1 v-else >暂无数据...</h1>
    </section>
    <Tabbar></Tabbar>
  </div>
  
</template>
<script>
  import Header from '@/components/search/Header.vue'
  import Tabbar from '@/components/common/Tabbar.vue'
  import http from '@/common/api/http.js'
  export default {
    data(){
      return{
        goodsList:[],
        searchList:{
          currentIndex:0,
          data:[
              // status:0 都不亮
              // status:1 上箭头亮
              // status:2 下箭头亮
             {name:'综合',key:'zh'},
             {name:'价格',status:0,key:'price'},
             {name:'销量',status:0,key:'number'}
          ]
        }
      }
    },
    components:{
      Tabbar,
        Header
    },
    computed:{
      orderBy(){
        //获取当前对象
        let obj = this.searchList.data[this.searchList.currentIndex];
        //针对状态，判断是升序还是降序
        let val = obj.status == '1'?'asc':'desc';
        return{
          [obj.key]:val
        }

      }

    },
    created(){
      this.getData();
    },
    methods:{
      getData(){
        http.axios({
          url:'/api/goods/shoplist',
          params:{
            searchName:this.$route.query.key,
            ...this.orderBy
          }
        }).then( res=>{
          this.goodsList = res;
          console.log(res);
        })
      },
      changeTab(index){
        this.searchList.currentIndex  = index;
        //获取对应数据的下标
        let item = this.searchList.data[index];
        //取消所有的状态值，都变成0
        this.searchList.data.forEach((v,i) =>{
          if( i !=index){
            v.status = 0;
          }
        })
        //切换点击状态　
        if (index == this.searchList.currentIndex) {
          item.status = item.status ==1 ? 2 : 1;
        }
        this.getData();
      }



    },
    watch:{
      $route(){
        this.getData();
      }
    }
    
  }
</script>
<style >
  .search-list{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

   .section-ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

  }
   .section-ul li{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    box-sizing: border-box;
    width: 50%;
    padding: 0.15rem;
    /*background-color: red;*/


   }
  .section-ul li img{
    width: 100%;
    height:20vh;   
  }
  .section-ul li h3{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #111;
    font-size: 0.24rem;
    font-weight: 400;
  }
    .section-ul li .price{
      display: flex;
      justify-content: space-between;
      padding: 0.1rem 0 0 0;
      align-items: center;
      width: 100%;
      font-size: 0.3rem;
      color: #d81e06;
    }
    .section-ul li .price div:first-child span{
        font-size: 0.22rem;
    }
    .section-ul li .price div:first-child b{
        font-size: 0.35rem;
    }
    .section-ul li .price div:last-child{
      padding: 0.06rem 0.12rem;
      color: #fff;
      background-color: #d81e06;
      font-size: 0.24rem;
      border-radius: 0.07rem;
    }

    .search-list ul{
    
    font-weight: 400;
    font-size: 0.28rem;
   
   }
   .search-ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 0.5rem;
    margin-left: 0.2rem;
      padding: 0.1rem 0.1rem 0rem 0.1rem;
    

   }
   .search-ul-li{
    display: flex;
    flex-direction: row;
    align-items: center;
   }
   .search-filter{
    display: flex;
    flex-direction: column;
    size: 0.2rem;

   }
   .active{
    color: red;
   }
   h1{
     font-weight: normal;
     font-size: 18px;
   }

</style>