<template>
  <div class="tabbar">
    <ul>
      <li
        v-for='(item,index) in routerList'
        :key='index'
        @click='switchTab(item.path)'
      >
        <img :src="$route.path.includes(item.path) ? item.selected :item.active" alt="">
        <span :class='$route.path.includes(item.path) ? "active":""'>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  // name: "Tabbar",
  data(){
    return{
      routerList:[
        {
          title:'首页',
          path:'/homeview',
          active:'/images/home.png',
          selected:'/images/home-select.png',
        },
        {
          title:'分类',
          path:'/list',
          active:'/images/list.png',
          selected:'/images/list-select.png',
        },
        {
          title:'购物车',
          path:'/cart',
          active:'/images/cart.png',
          selected:'/images/cart-select.png',
        },
        {
          title:'我的',
          path:'/my',
          active:'/images/my.png',
          selected:'/images/my-select.png',
        },
      ]
    }
  },
  methods:{
    switchTab(path){
      if( this.$route.path == path) return;
      this.$router.replace( path );
    }
  }
}
</script>
<style >
  .tabbar{
    width: 100%;
    height: 1rem;
    background-color: #fff;
    border-top: 1px solid #cccc;
    padding-top: 0.08rem;
  }
.tabbar ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
}
.tabbar ul li{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tabbar ul li img{
  width: 0.5rem;
  height: 0.5rem;
}
.tabbar ul li span{
 font-size: 0.3rem;
}
.active{
  color: #e06a06;
}
</style>