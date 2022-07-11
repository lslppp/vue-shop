<template>
  <ul class="icons">
    <li 
       v-for = "(items,index) in iconsList" 
       :key ='index'
       @click='switchTab(items.path)'
        >
<!-- :class='$route.path.includes(item.path) ? "active":""' -->
        <!-- <img :src="items.imgUrl" alt=""> -->
        <span >{{items.title}}</span>
    </li>
  </ul>

</template>
<script>
 export default{
   props:{
      iconsList:Array
    },
    methods:{
    switchTab(path){
      if( this.$route.path == path) return;
      this.$router.replace( path );
      }
    }
 
  }
</script>
<style scoped>
  .icons{
    display: flex;
    justify-content: space-around;
    background-color: #e6e6e6;
  }
  .icons li{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icons img{
    width: 0.4rem;
    height: 0.4rem;
  }
  .icons span{
    padding: 0.05rem 0 !important; 
    font-size: 0.18rem;
  }
   .active{
    /*border-left: 5px solid #b54f4a;*/
    color: red;
   }
</style>























