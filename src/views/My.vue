<template>
  <div class="container">
    <header>
      <div class="login" @click ="goLogin">登录/注册</div>
    </header>
    <section>
      <ul>
        <li>地址管理</li>
      </ul>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
  import Tabbar from '@/components/common/Tabbar.vue'
  export default{
    name:"My",
    components:{
      Tabbar 
    },
    methods:{
      goLogin(){
        this.$router.push('/login');
      }
    }

  };

</script>
<style scoped>
  header{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2rem;
    background-color:  #fa9506;;
  }
  .login{
    width: 1.8rem;
    height: 0.5rem;
    font-size: 0.28rem;
    color: #fff;
    background-color: #f53324;
    border-radius: 0.08rem;
    line-height: .5rem;
    vertical-align: middle;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)

  }
  
   section ul li{
    padding: 0.24rem;
    font-size:0.26rem;
   }
</style>


