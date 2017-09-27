import { isHybrid, isWeChat } from '@/utils/env.js'
import { LOADING } from './notice.js'
import { GETDATA } from './storage.js'
import { getErrorMsg } from '@/utils/errorcode.js'
import axios from 'axios'

let GET, POST
if (isHybrid()) {
    // 由app实现这些方法
} else if (isWeChat()) {
    // 由微信js sdk 实现这些方法
} else {
    // web 实现
    //添加一个请求拦截器
    axios.interceptors.request.use(function (config) {
        //在请求发出之前进行一些操作
        let token = GETDATA('token')
        config.headers.token = token
        return config;
    }, function (err) {
        //Do something with request error
        return Promise.reject(error);
    });
    //添加一个响应拦截器
    // axios.interceptors.response.use(function (res) {
    //     if (res.data.code === 0 || res.data.status === 0) {
    //         return res.data.data;
    //     } else {
    //         console.log('错误码：' + res.data.code)
    //         return Promise.reject('系统异常');
    //     }
    //     //在这里对返回的数据进行处理
    // }, function (err) {
    //     //Do something with response error
    //     return Promise.reject(error);
    // })

    GET = function (url, params, loading = true) {
        loading && LOADING.show()
        return new Promise(async function (resolve, reject) {
            try {
                let ret = await axios.get(url, {
                    params: params
                })
                loading && LOADING.hide()
                if (ret.code == 0) {
                    resolve(ret.data)
                } else {
                    reject(getErrorMsg(ret.code))
                }
            } catch (e) {
                console.log('get', url, e)
                reject('网络异常')
            }
        })
    }

    POST = function (url, params, loading = true) {
        loading && LOADING.show()
        return new Promise(async function (resolve, reject) {
            try {
                let ret = await axios.post(url, params)
                loading && LOADING.hide()
                if (ret.code == 0) {
                    resolve(ret.data)
                } else {
                    reject(getErrorMsg(ret.code))
                }
            } catch (e) {
                console.log('post', url, e)
                reject('网络异常')
            }
        })
    }
}


export {
    GET,
    POST
}
