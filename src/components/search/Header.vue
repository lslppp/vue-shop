<template>
	<header>
		<div class="search-return" @click="goBack">
			<i class="iconfont icon-fanhui"></i>
		</div>
		<div class="search-main">
			<i class="iconfont icon-fangdajing1"></i>
			<form action="" onsubmit="return false" @keyup.enter='goSearchList'>
				<input placeholder="搜索您喜欢的宝宝贝贝..." v-model = 'searchValue'>
			</form>
		</div>
	    <div class="search-btn" @click="goSearchList">搜索</div>
	</header>

</template>
<script>
   export default{
   	data(){
   		return{
   			searchValue:this.$route.query.key||'',
   			searchArr:[]
   		}
   	},
   	methods:{
   		goBack(){
   			this.$router.back();
   		},
   		goSearchList(){

   			//如果搜索的关键字是空，则return
   			if(!this.searchValue) return ;
   			//判断之间有没有搜索的本地存储 
   			if(!localStorage.getItem('searchList')){
   				//no
   				localStorage.setItem('searchList',[]);
   			}
   			else{
   				this.searchArr = JSON.parse(localStorage.getItem('searchList'));
   			}
   			//add data
   			this.searchArr.unshift(this.searchValue);

   			//delete the same data using es6
   			let newArr = new Set(this.searchArr);

   			//add local database's data
   			localStorage.setItem('searchList',JSON.stringify(Array.from(newArr)));
   			
   			// console.log(this.searchValue);
   			//路径没有变化，不跳转页面
   			if(this.searchValue ===this.$route.query.key) return;
   			//goto the view
   			this.$router.push({
   				name:"list",
   				query:{
   					key:this.searchValue
   				}
   			})
   		}
   	}
   }	
	
</script>
<style scoped>
	 header{
	 	display: flex;
	 	/*flex-direction: column; */
	 	justify-content: space-between;
	 	align-items: center;
	 	width: 100%;
	 	height: 1.5rem;
	 	background-color: #fa9506;
	 	/*color: #red;*/
	 }
	 .search-return{
	 	padding: 0 0.25rem 0.15rem 0.25rem;
	 }
	 .search-btn{
	 	padding: 0 0.25rem;
	 }
	 .search-return i{
	 	font-size: 0.65rem;
	 }
	 .search-main {
	 	display: flex;
	 	align-items: center;
	 	width: 60%;
	 	height: 0.75rem;
	 	border-radius: 0.8rem;
	 	padding:;
	 	background-color: #fff;
	 	padding: 0 0.3rem;
	 }
     .search-main i{
        font-size: 0.4rem;
        color: #ccc;
     }
     .search-main form{
     	display: flex;
     	justify-content: center;
     	align-items: center;
     	width: 100%;
     }
     .search-main form input {
     	font-size: 0.2rem;
     }
	 .search-btn{
	 	font-size: 0.36rem;
	 }
	

</style>