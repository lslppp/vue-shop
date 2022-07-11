<template>
  <div class="recommendtitle">
    <slot>
      <span>今日特供</span>
      <div class="lineclass"></div>
    </slot>
  </div>
</template>
<script>

</script>
<style scoped>
  .recommendtitle{
        width: 100%;
        font-size: 0.20rem !important;
        padding: 0.08rem 0 !important;
        text-align: center;
        /*background-color: #e6e6e6;*/
  }
  .recommendtitle span{
        position: relative;
        color: red;

  }
  .recommendtitle span::after{
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    display: block;
    background: #d4c0a7;
    top: 50%;
    margin-top: -3px;
    right:-0.3rem;
  }
  .recommendtitle span::before{
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #d4c0a7;
    margin-top: -3px;
    left: -0.3rem;
  }
  .lineclass{
    width:100%;
    height:1px;
    margin:0px auto;
    padding:0px;
    background-color:#D5D5D5;
    overflow:hidden;

  }
</style>




