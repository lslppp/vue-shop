const User = {
	queryUserTel(options){
		return 'select * from user where tel = '+options.userTel+'';
	},
	queryUserPwd(options){
		return 'select * from user where (tel = '+options.userTel+') and pwd ='+options.userPwd+'';
	}
};
module.exports = User;