import { isHybrid, isWeChat } from '@/utils/env.js'
import { Loading } from './notice.js'
import { getErrorMsg } from '@/utils/errorcode.js'
import axios from 'axios'

let get, post
if (isHybrid()) {
    // 由app实现这些方法
} else if (isWeChat()) {
    // 由微信js sdk 实现这些方法
} else {
    // web 实现
    //添加一个请求拦截器
    axios.interceptors.request.use(function (config) {
        //在请求发出之前进行一些操作
        let token = localStorage.getItem('token')
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

    get = function (url, params, loading = true) {
        loading && Loading.show()
        return new Promise(async function (resolve, reject) {
            try {
                let ret = await axios.get(url, {
                    params: params
                })
                loading && Loading.hide()
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

    post = function (url, params, loading = true) {
        loading && Loading.show()
        return new Promise(async function (resolve, reject) {
            try {
                let ret = await axios.post(url, params)
                loading && Loading.hide()
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


export default {
    Get: get,
    Post: post,
    install: function (Vue) {
        Object.defineProperties(Vue.prototype, {
            $Get: {
                get() {
                    return get
                }
            },
            $Post: {
                get() {
                    return post
                }
            }
        })
    }
}
