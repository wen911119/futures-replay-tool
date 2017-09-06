import { isHybrid, isWeChat } from '@/utils/env'


let toast, alert, confirm, prompt, loading
if (isHybrid()) {
    // 由app实现这些方法
} else if (isWeChat()) {
    // 由微信js sdk 实现这些方法
} else {
    // web 实现
    toast = function (message = 'toast', duration = 3000) {
        console.log(message, duration)
    }

    alert = function (message = 'alert', title = '默认标题', buttonName = '确定') {
        console.log(message, title, buttonName)
    }

    confirm = function (message = 'confirm', title = '提示', btns = ['确定', '取消']) {
        console.log(message, title, btns)
    }

    prompt = function (message = 'prompt', title = '提示', btns = ['确定', '取消']) {

    }

    loading = {
        show(msg = '') {
            console.log('loading-show:' + msg)
        },
        hide() {
            console.log('loading-hide')
        }
    }

}
export default {
    Toast: toast,
    Alert: alert,
    Confirm: confirm,
    Prompt: prompt,
    Loading: loading,
    install: function (Vue) {
        Object.defineProperties(Vue.prototype, {
            $toast: {
                get() {
                    return toast
                }
            },
            $alert: {
                get() {
                    return alert
                }
            },
            $confirm: {
                get() {
                    return confirm
                }
            },
            $prompt: {
                get() {
                    return prompt
                }
            },
            $Loading: {
                get() {
                    return loading
                }
            }
        })
    }
}
