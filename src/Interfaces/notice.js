import { isHybrid, isWeChat } from '@/utils/env'


let TOAST, ALERT, CONFIRM, PROMPT, LOADING
if (isHybrid()) {
    // 由app实现这些方法
} else if (isWeChat()) {
    // 由微信js sdk 实现这些方法
} else {
    // web 实现
    TOAST = function (message = 'toast', duration = 3000) {
        console.log(message, duration)
    }

    ALERT = function (message = 'alert', title = '默认标题', buttonName = '确定') {
        console.log(message, title, buttonName)
    }

    CONFIRM = function (message = 'confirm', title = '提示', btns = ['确定', '取消']) {
        console.log(message, title, btns)
        return new Promise(function(resolve, reject){

        })
    }

    PROMPT = function (message = 'prompt', title = '提示', btns = ['确定', '取消']) {

    }

    LOADING = {
        show(msg = '') {
            console.log('loading-show:' + msg)
        },
        hide() {
            console.log('loading-hide')
        }
    }

}
export {
    TOAST,
    ALERT,
    CONFIRM,
    PROMPT,
    LOADING
}
