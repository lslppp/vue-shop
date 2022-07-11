<template>
    <div class="container">
      <Header></Header>
      <section>
        <div class="login-tel">
          <input type="text" v-model = 'userTel' placeholder="请输入手机号" pattern="[0-9]*">
        </div>
        <div class="login-code">
          <input type="text" placeholder="请输入短信验证码" pattern="[0-9]*">
          <button 
            @click ="sendCode"
            :disabled = 'disabled'
          >{{codeMsg}}</button>
        </div>
        <div class="login-btn">登录</div>
        <div class="tab">
          <span @click = "goUserLogin">密码登录</span>
          <span>快速登录</span>
        </div>
      </section>
    <Tabbar></Tabbar>
  </div>
</template>
<script >
  import Tabbar from '@/components/common/Tabbar.vue'
  import  Header from './Header.vue'
    //import {Toast} from 'mint-ui'
    // import http from '@/common/api/request.js'

    export default{
      data(){
        return{
          disabled:false,
          userTel:'', 
          //验证规则
          rules:{
            userTel:{
              rule:/^1[23456789]\d{9}$/,
              msg:'手机好不能为空，并且是11位数字'
            }
          },
          codeNum:6,
          codeMsg:'获取短信验证码'

        }
      },
    components:{
      Header,
      Tabbar
    },
    methods:{
      sendCode(){
        // 验证
        if(!this.validate('userTel')) return;
        // //请求短信验证码接口
       //    http.$axios({
        //  url:'/api/code',
        //  method:'post',
        //  data:{
        //    phone:this.userTel
        //  }
        // }).then(res => {
        // console.log(res);

        // })

        //禁用按钮
        this.disabled = true;
        //
        let timer = setInterval(()=>{
          --this.codeNum;
          this.codeMsg = '重新发送'+this.codeNum+'';
        },1000)
        //判断停止定时器时间
        setTimeout(()=>{
          clearInterval(timer);
          this.codeNum = 6;
          this.disabled = false;
          this.codeMsg = "获取短信验证码"
        },6000)
  
      },
      goUserLogin(){
        this.$router.push('/userLogin');
      },
      validate(key){
        let bool = true;
        if(!this.rules[key].rule.test(this[key])){
          Toast(this.rules[key].msg);
          bool = false;
          return false;
        }
        return bool;
      }




    }
     }
</script>
<style scoped>
  section{
    display: flex;
      flex-direction: column;
    /*justify-content: center;*/
    align-items: center;
    background-color: #f5f5f5;
  }
  section div{
    margin: 0.45rem;
    width: 5rem;
    height: .6rem;
  }
  section input{
    box-sizing: border-box;
    padding: 0 0.22rem;
    line-height: .6rem;
    background-color: #ffff;
    border: 1px solid #ccc;
    font-size: 0.18rem;
    border-radius: 0.06rem;
  }
  .login-tel{
    margin-top: 0.1rem;
  }
  .login-tel input{
    width: 5rem;
  }
  .login-code{
    display: flex;
  }
  .login-code input{
    flex:1;
  }
  .login-code button{
    padding: 0 0.1rem;
    line-height: .6rem;
    background-color: #fa9506;
    border: 0;
    color: #fff;
    border-radius: 0.06rem;
  }
  .login-btn{
      line-height: 0.6rem;
      text-align: center;
      color: #fff;
    background-color:#fa9506;
    border-radius: 0.06rem;
    font-size: 0.36rem;
    margin: 0 0;
  }
  .tab{
    display: flex;
    justify-content: space-between;
    font-size: 0.26rem;
  }
</style>















