<template>
	<header>
		<div>
			<i class="iconfont icon-fanhui"></i>
		</div>
		<div>
			<slot>
				<span>登录</span>
			</slot>
			
		</div>
		<div>
			<i class="iconfont icon-kefu"></i>
		</div>
	</header>
</template>
<script >
	
</script>
<style scoped>
	header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		color: #fff;
		background-color: #fa9506;

	}
	header span{
		font-size: 0.38rem;

	}
	header i{
		padding: 0 0.25rem;
		font-size: 0.5rem;
	}
</style>