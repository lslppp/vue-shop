<template>
 <div class="ad">
   <Card>
     <span>新品发布</span>
   </Card>
   <ul>
     <li v-for = "(items,index) in adList" :key = "index">
       <h2>
         <img :src="items.imgUrl" alt="">
       </h2>
       <h3>{{items.name}}</h3>
     </li>
   </ul>
 </div>

</template>
<script>
 import Card from '@/components/homeview/Card.vue'
 export default{
  props:{
    adList:Array
  },
  components:{
      Card
  }
 };
</script>
<style scoped>
  .ad ul{
    display: flex;
    flex-wrap: wrap;
  }
  .ad ul li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  .ad ul li > div{
    padding: 0.05rem 0;
    width: 60%;
    text-align: left;
    font-size: 0.20rem;
    color: red;
  }
  .ad ul li > div span{
    font-size: 0.14rem;
  }
  .ad h3{
    padding: 0 0.16rem;
    width: 60%;
    font-size: 0.16rem;
    font-weight: 400;
    color: #222;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .ad ul li > div b{
    font-size: 0.24srem;
  }
.ad img{
  width: 1.73rem;
  height: 1.73rem;
}
 
</style>























