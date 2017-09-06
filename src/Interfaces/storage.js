import { isHybrid, isWeChat } from '@/utils/env'

let storage = {}

if (isHybrid()) {
    // 由app实现这些方法
} else if (isWeChat()) {
    // 由微信js sdk 实现这些方法
} else {
    // web 实现
    storage.set = function (name, value) {
        localStorage[name] = value
    }
    storage.get = function (name) {
        return localStorage[name]
    }
}

export default {
    storage: storage,
    install: function (Vue) {
        Object.defineProperties(Vue.prototype, {
            $storage: {
                get() {
                    return storage
                }
            }
        })
    }
}
