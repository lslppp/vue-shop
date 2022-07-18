import axios from "axios";

const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "没有访问权限",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  405: "请求行中指定的请求方法不能被用于请求相应的资源。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

/*
  @Description: 创建axios实例
 */
const service = axios.create({
  // baseURL: "",
  timeout: 30000, // 请求超时时间
});

/*
  @Description: request拦截器
 */
service.interceptors.request.use(
  (config) => {
    // 此处可在请求发起前对请求进行处理例如添加Token操作
    if (config.method === "get") {
      const t = new Date().getTime(); //为get请求添加时间戳，防止缓存问题
      config.params.t = t;
    }
    return config;
  },
  (err) => {
    // 请求发生错误时可在此处处理
    Promise.reject(err);
  }
);

/*@Description: response拦截器*/
service.interceptors.response.use(
  (response) => {
    // 此处可在统一处理请求回的数据
    return response;
  },
  (err) => {
    // 请求发生错误时可在此处处理
    Promise.reject(err);
  }
);

/* @Description: 二次封装axios
 */
export const request = (params) => {
  return new Promise((resolve, reject) => {
    service(params)
      .then((response) => {
        const errorText = codeMessage[response.status] || "未知请求错误";
        if (response.status === 200) {
          /* TODO:在实际业务中此处可根据与后端的约定状态码处理返回数据 */
          resolve(response.data);
          // if (response.data.code === 0) {
          //   resolve(response.data.data);
          // } else {
          //   reject(response.data.data);
          // }
        } else {
          reject(errorText);
          const error = new Error(errorText);
          error.name = `${response.status}`;
          throw error;
        }
      })
      .catch((err) => {
        reject(err && err.response ? codeMessage[err.response.status] : err);
      });
  });
};

/*@Description: 原始未封装的axios
 */
export const originalRequest = (params) => {
  return service(params);
};
