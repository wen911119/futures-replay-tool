import { isHybrid, isWeChat } from '@/utils/env'

let storage = {}
let SETDATA, GETDATA

if (isHybrid()) {
    // 由app实现这些方法
} else if (isWeChat()) {
    // 由微信js sdk 实现这些方法
} else {
    // web 实现
    SETDATA = function (name, value) {
        localStorage[name] = value
    }
    GETDATA = function (name) {
        return localStorage[name]
    }
}

export {
    SETDATA,
    GETDATA
}

