<!DOCTYPE html>
<template>
	<div class="dailyrecommend">
		<Card>
		</Card>
		<ul>
			<li  class="liclass" 
			v-for='(item,index) in recommendList'
			:key = 'index'>
			<!-- 	<h2>
					<img :src="item.imgUrl" alt = "">
				</h2> -->
				<div class="priceparent">
					<h3>{{item.name}}</h3>
					<p>{{item.content}}</p>
					<div class="price">
						<span>¥</span>
						<b>{{item.price}}</b>
					</div>
				</div>
				<div class="lineclass"></div>
			</li>
		</ul>
	</div>
</template>
<script>
	import Card from '@/components/homeview/Card.vue'
	export default{
		props:{
			recommendList:Array
		},
		components:{
			Card
		}
	};
</script>
<style scoped>
	.liclass{
      position: relative;
      /*text-align: center;*/
	}
    h2{
	text-align: center;
	width: 38%;
	margin-top: 0.2rem;
	position: relative;
	/*display: inline-block !important;*/
     margin-block-start: 0em !important;
     margin-block-end: 0em !important;
	}
	img{
		position: relative;
		margin-top: 0.4rem;
		width: 40%;
		height: 40%;
	}
	.priceparent{
		width: 50%;
		position: absolute;
		right: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		padding: 0.4rem;
		text-align: left;
	}
	h3{
		font-size: 0.2rem;
	}
	p{
		font-size: 0.16rem;
	}
	.price{
		margin-top: 0.5rem;
		font-size: 0.18rem;
		color: red;
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
















