import { ElLoading } from 'element-plus'
import axios from 'axios'
export default{
	common:{
		method:'GET',
		data:{},
		params:{}
	},
	axios(options={}){
		options.method =options.method || this.common.method;
		options.data = options.data || this.common.data;
		options.params = options.params || this.common.params;
		//请求前显示加载中....
		// Indicator.open('加载中...');
       const loadingInstance = ElLoading.service({text:"加载中"});
		return axios(options).then(v=>{
			let data = v.data.data;
            return new Promise((res,rej)=>{
            	if(!v) return rej();
            	//关闭加载中
            	setTimeout(()=>{
            		loadingInstance.close();
            	},500);
            	res(data);
            }) 
			
		})


	}
}



// //引入 axios
// import { ElLoading } from 'element-plus'
// import axios from "axios";
// import { ElMessage } from 'element-plus';


// const servers = axios.create({
//   // AccessControlAllowOrigin: *,
//   baseURL: 'http://10.10.30.23:3001',
//   timeout: 5000
// });
// // //请求前显示加载中....
// // const loadingInstance = ElLoading.service({text:"加载中"});
// // 数据请求拦截
// servers.interceptors.request.use((config) => {

//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// // 返回响应数据拦截
// servers.interceptors.response.use((res) => {
//   const data = res.data.data;
//   // 状态码为 2xx 范围时都会调用该函数，处理响应数据
//   if (res.status === 200) {
//     // const code = data.code;
//     // //关闭加载中
//     //         	setTimeout(()=>{
//     //         		loadingInstance.close();
//     //         	},500);
//     return Promise.resolve(data);

//   }
// }, (error) => {
//   if (error.response.status) {
//     // 状态码超过 2xx 范围时都会调用该函数，处理错误响应
//     switch (error.response.status) {
//       case 404:
//         ElMessage({
//           type: 'error',
//           message: '请求路径找不到！',
//           showClose: true
//         });
//         break;
//       case 502:
//         ElMessage({
//           type: 'error',
//           message: '服务器内部报错！',
//           showClose: true
//         });
//         break;
//       default:
//         break;
//     }
//   }
//   return Promise.reject(error);
// });
// //这是一位大佬指点的方法，更加简单
// export default servers;
// // 这是我原来的写法。
// // post 请求方法
// // export const post = (url, params) => {
// //  return new Promise((resolve, reject) => {
// //    http.post(url, params).then(res => {
// //      resolve(res);
// //    }).catch(error => {
// //      reject(error);
// //   })
// //  });
// //}
// // get 请求方法
// //export const get = (url) => {
// //  return new Promise((resolve, reject) => {
// //    http.get(url).then(res => {
// //      resolve(res);
// //    }).catch(error => {
// //      reject(error);
// //    })
// //  });
// //}



// import axios from 'axios'
// import qs from 'qs'

// axios.defaults.timeout = 5000; //响应时间
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
// axios.defaults.baseURL = 'http://10.10.30.23:3001'; //配置接口地址
// //POST传参序列化(添加请求拦截器)
// axios.interceptors.request.use((config) => {
//     //在发送请求之前做某件事
//     if (config.method === 'post') {
//         config.data = qs.stringify(config.data);
//     }
//     return config;
// }, (error) => {
//     console.log('错误的传参')
//     return Promise.reject(error);
// });

// //返回状态判断(添加响应拦截器)
// axios.interceptors.response.use((res) => {
//     //对响应数据做些事
//     if (!res.data.success) {
//         return Promise.resolve(res);
//     }
//     return res;
// }, (err) => {
//     if (err.response.status == 504 || err.response.status == 404) {
//         console.log("服务器被吃了⊙﹏⊙∥")
//     } else if (err.response.status == 403) {
//         console.log("权限不足,请联系管理员!")
//     } else {
//         console.log("未知错误")
//     }
//     return Promise.reject(err);
// });

// export function post(params) {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(params.url, params.data)
//       .then(
//         res => {
//           params.success(res);
//         },
//         err => {
//           reject(err.data)
//         }
//       )
//       .catch(err => {
//         reject(err.data)
//       })
//   })
// }
// export function get(params) {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(params.url, params.data)
//       .then(res => {
//         params.success(res);

//       })
//       .catch(err => {
//         reject(err.data)
//       })
//   })
// }


// export default axios;







