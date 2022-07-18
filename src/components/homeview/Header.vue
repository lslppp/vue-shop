<template>
	<header>
		<h1>
			<img src="@/assets/images/logo.png" alt=""/>
			<span>MyStore</span>
		</h1>
		<div class="search" @click = 'goSearch'>
			<i class="iconfont icon-fangdajing1"></i>
			<span>搜索...</span>
		</div>
		<div class="kefu">
			<i class="iconfont icon-kefu"></i>
		</div>
	</header>
</template>
<script>
	export default{
		methods:{
			goSearch(){
				this.$router.push('/search')
			}
		}
	}
</script>
<style scoped>
	header{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		background-color: #409EFF;
		width: 100% ;
		height: 1rem;
	}
	header h1{
		width: 1rem;
		height: 1rem;
		font-size: 0.23rem;
	    color: #fff;
	    margin-left: 0.25rem;
	}
	header h1 img{
	  width: 65%;
	  height: 65%;
	  z-index: 99;
	}
	.search{
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 4.7rem;
		height: 0.65rem;
		background-color: #fff;
		border-radius: 0.4rem;
	}
	.search i{
		padding: 0 0.15rem;
		color: #ccc;
		font-size: 0.25rem;
	}
	.search span{
		color: #ccc;
		font-size: 0.2rem;
	}
	.kefu{
		margin-top: -0.3rem;
	}
	.kefu i{
		font-size: 0.6rem;
		color: #fff;
		}
	
</style>