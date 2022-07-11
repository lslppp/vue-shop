
<template>
  <main class="home">
    这是首页
    <Tabbar/>
  </main>
</template>
<script >
  import Tabbar from '@/components/common/Tabbar.vue'
  export default {
    components:{
      Tabbar
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
  }
  .Headers{
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 1.08rem;
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

</style>

