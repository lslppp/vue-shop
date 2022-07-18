

    import { request } from './http'

    export function fetchData(data) {
        return request({
         	// 此处配置具体详见axios官方文档 http://axios-js.com/zh-cn/docs/
            method: 'get',
            url: '/api/index/0/data/1',
            params:data
        })
    }
