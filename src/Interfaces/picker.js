import { isHybrid, isWeChat } from '@/utils/env'


let datetimePicker, cityPicker, actionSheet, picker
if (isHybrid()) {
    // 由app实现这些方法
} else if (isWeChat()) {
    // 由微信js sdk 实现这些方法
} else {
    // web 实现
    datetimePicker = function (ts = Date.now(), type = 'minute') {
        // type='year' 
        // 2017
        // type='month'
        // 2017-09
        // type='day'
        // 2017-09-05
        // type = 'hour'
        // 2017-09-05-09
        // type = 'monute'
        // 2017-09-05-09-15
        // type = 'second'
        // 2017-09-05-09-15-31
        console.log(message, type)
        // 返回时间戳        
    }

    cityPicker = function (where = {}, level = 4, title = '请选择地区') {
        // where = {
        //     province:{
        //         name:'安徽省',
        //         id:'12'
        //     },
        //     city:{
        //         name:'池州市',
        //         id:'122'
        //     },
        //     county:{
        //         name:'青阳县',
        //         id:'1223'
        //     },
        //     town:{
        //         name:'蓉城镇',
        //         id:'12236'
        //     }
        // }
        // level = 3
        // 返回 where 值
    }
    actionSheet = function (options = ['飞机', '火车'], cancel = '取消') {
        console.log(options, cancel)
        // 返回索引
    }
    picker = function (options = [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        console.log(options)
        // 返回索引
    }
}
export default {
    DatetimePicker: datetimePicker,
    CityPicker: cityPicker,
    ActionSheet: actionSheet,
    Picker: picker,
    install: function (Vue) {
        Object.defineProperties(Vue.prototype, {
            $DatetimePicker: {
                get() {
                    return datetimePicker
                }
            },
            $CityPicker: {
                get() {
                    return cityPicker
                }
            },
            $ActionSheet: {
                get() {
                    return actionSheet
                }
            },
            $Picker: {
                get() {
                    return picker
                }
            }
        })
    }
}
