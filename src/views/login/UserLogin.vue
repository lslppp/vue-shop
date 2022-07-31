<template>
    <div class="container">
      <Header></Header>
      <section>
        <div class="login-tel">
          <input type="text" v-model = "userTel" placeholder="请输入手机号" pattern="[0-9]*">
        </div>
        <div class="login-code">
          <input type="text"  v-model = "userPwd"  placeholder="请输入密码" >
        </div>
        <div class="login-btn" @click='login'>登录</div>
        <div class="tab">
          <span @click = "goLogin">短信登录</span>
          <span>找回密码</span>
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
  import http from '@/common/api/http.js'
  import { ElMessage } from 'element-plus'
    export default{
      data(){
        return{
          userTel:'',
          userPwd:'',
          //验证规则
          rules:{
            userTel:{
              rule:/^1[23456789]\d{9}$/,
              msg:'手机好不能为空，并且是11位数字'
            },
            //密码验证
            userPwd:{
              rule:/^\w{6,12}$/,
              msg:'密码不能为空，并且要求6～12位'
            }
          }

        }
      },
    components:{
      Header,
      Tabbar
    },
    methods:{
      login(){
        if(!this.validate('userTel')) return;
        if(!this.validate('userPwd')) return;
        http.axios({
          url:'/api/login',
          method:'post',
          data:{
            userTel:this.userTel,
            userPwd:this.userPwd
          }
        }).then(res => {
          //提示信息
          ElMessage(res.msg);
          //登录失败
          if (!res.success) return;
          //登录成功后跳转页面
          else{
             this.$router.push('/HomeView');
          }

          console.log(res);

        })

      },
      goLogin(){
        this.$router.push('/login');
      },
      validate(key){
        let bool = true;
        if(!this.rules[key].rule.test(this[key])){
         ElMessage(this.rules[key].msg);
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








