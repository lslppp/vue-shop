<template>
 <div class="like">
   <Card>
     <span>猜你喜欢</span>
   </Card>
   <ul>
     <li 
       v-for = "(items,index) in likeList" 
       :key = "index"
       @click = 'goDetail(items.id)'

       >
       <h2>
         <img v-lazy="items.imgUrl" alt="">
       </h2>
       <h3>{{items.name}}</h3>
       <div>
         <span>¥</span>
         <b>{{items.price}}</b>
       </div>
     </li>
   </ul>
 </div>

</template>
<script>
 // import {Lazyload} from 'mint-ui'
 import Card from '@/components/homeview/Card.vue'
 export default{
  props:{
    likeList:Array
  },
  components:{
      Card
  },
  methods:{
    goDetail(id){
      // alert(1);
      this.$router.push({
        //显示传值
        path:'/detail', 
        query:{
          id
        }
        //隐式传值
        // name:'Detail',
        // params:{
        //   id
        // }
      })
    }
  }
 };
</script>
<style scoped>
  .like ul{
    display: flex;
    flex-wrap: wrap;
  }
  .like ul li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  .like ul li > div{
    padding: 0.05rem 0;
    width: 60%;
    text-align: left;
    font-size: 0.20rem;
    color: red;
  }
  .like ul li > div span{
    font-size: 0.14rem;
  }
  .like h3{
    padding: 0 0.16rem;
    width: 60%;
    font-size: 0.16rem;
    font-weight: 400;
    color: #222;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .like ul li > div b{
    font-size: 0.24srem;
  }
.like img{
  width: 1.73rem;
  height: 1.73rem;
}
 
</style>























