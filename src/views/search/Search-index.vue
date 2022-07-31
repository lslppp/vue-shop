<template>
  <div class="search-index">
    <Header></Header>
    <section>
      <div class="search-history" v-if = 'searchArr.length'>
        <h2>
          <i class="iconfont icon-shijian"></i>
          <span>历史搜索</span>
          <span @click='deleteStorage'>清空历史记录</span>
          </h2>
        <ul>
          <li v-for = '(item,index) in searchArr'
          :key = 'index'
                    @click = 'goSearchList(item)'
          >{{item}}</li>
        </ul>
      </div>
      <div  class ="search-no" v-else >暂无搜索记录...</div>
    <!--  <div>
        <h1>推荐商品</h1>
        <Like></Like>
      </div> -->
    </section>
    <Tabbar></Tabbar>
  </div>
  
</template>
<script>
  import Header from '@/components/search/Header.vue'
  // import Like from '@/components/homeview/Like.vue' 
  import Tabbar from '@/components/common/Tabbar.vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  export default {
    data(){
      return{
        searchArr:[]
      }
    },
    components:{
      Tabbar,
        Header
        // Like
    },
    created(){
      this.searchArr = JSON.parse( localStorage.getItem('searchList'))||[];
    },
    methods:{
      deleteStorage(){
        ElMessageBox.confirm(
          '确定执行此操作?',
          'Warning',
      {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }).then(() => {
            ElMessage({
              type: 'success',
              message: 'Delete completed',
            });
            //delete local data
            localStorage.removeItem('searchList');
            //redenr data 
            this.searchArr = [];
      }).catch(() => {
            ElMessage({
              type: 'info',
              message: 'Delete canceled',
            })
          return;
      });
    },
      //   .then(res =>{
      //     if (res == 'confirm') {
      //       //delete local data
      //       localStorage.removeItem('searchList');
      //       //redenr data 
      //       this.searchArr = [];
      //     }
      //     else return;
      //     // console.log(res);
      //   });
      // },
            goSearchList(item){
                this.$router.push({
                    name:"list",
                    query:{
                      key:item
                    }
                })
            }
    }
    
  }
</script>
<style >
  .search-index{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
   section{
    background-color: #f4f4f4;
   }
   .search-history h2{
    font-weight: 400;
    font-size: 0.36rem;
    padding: 0.15rem 0 0 0.15rem;
   }
   .search-history h2 span:last-child{
    position: absolute;
    right: 0.15rem;

   }
    .search-history h2 i{
        color: red;
        padding-right: 0.05rem;
        font-size: 0.38rem;
    }
    .search-history  ul{
      display: flex;
      flex-direction: row !important;
      flex-wrap: wrap;
      padding: 0.2rem 0;
    }
     .search-history ul li{
      /*display: flex;*/
      font-size: 0.4rem;
      border: 1px solid #ccc;
      padding: 0.03rem 0.06rem;
      margin:0.15rem;
     }
     .search-no{
      font-size: 0.26rem;
        margin:0.15rem;
     }

</style>