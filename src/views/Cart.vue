<template>
  <div class="container">
      <header>
        <i class="iconfont icon-fanhui"></i>
        <span class="shopcart">购物车</span>
        <span class="edit">编辑</span>
      </header>
    <section></section>
    <footer>
      <div class="checkedbox">
        <van-checkbox v-model="checked" icon-size="24px"></van-checkbox>
      </div>
      <div class="sum">
        <div class="sum1">共有
          <div class="active">
            xx
          </div>
        件商品
          </div>
        <div class="sum1" >
          <span>总计：</span>
          <span class="active">¥128.00 
                     <span class="sum2">+</span>
           0 金币</span>
        </div>
      </div>
      <div class="gopay">去结算</div>
    </footer>
  </div>
</template>
<script>
  import Tabbar from '@/components/common/Tabbar.vue'
  export default{
    data(){
        return {
           checked: true,
        };
      },
    name:"Cart",
    components:{
         Tabbar
     }
  };
</script>
<style scoped>
  header{
    display: flex;
    /*flex-direction: column; */
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 0.8rem;
    background-color: #fa9506;
    color: #fff;
   }
   .container{
    font-size: 0.24rem;
   }
   .icon-fanhui{
    font-size: 0.4rem;
    padding-left: 0.2rem;
   }
   .shopcart{
      
   }
   .edit{
    /*margin-right: 0.3rem;*/
    padding-right: 0.3rem;
   }
   footer{
    display: flex;
    flex-direction: row;
    align-items: center;
    vertical-align: middle;
    justify-content: space-between;
    height: .8rem;
    width: 100%;
    border-top: 1px solid #ccc;
    color: #fff;

   }
   .checkedbox{
    padding-left: 5%;
    /*flex: 1;*/
   }
   .sum1{
    color: #000;
    display: flex;
    flex-direction: row;
   }
   .active{
    color: red;
   }
   .sum2{
    color: #000;
   }
   .gopay{
      width: 2rem;
      line-height: .8rem;
      text-align: center;
      background-color: #fa9506 ;
   }

</style>

