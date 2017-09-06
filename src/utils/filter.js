// 将时间戳格式化为需要的字符串
export function timestampFilter(ts, fmt) {
    if (!ts) return ''
    typeof (ts) === 'object' || (ts = new Date(+ts))
    var o = {
        "M+": ts.getMonth() + 1, //月份
        "d+": ts.getDate(), //日
        "h+": ts.getHours(), //小时
        "m+": ts.getMinutes(), //分
        "s+": ts.getSeconds(), //秒
        "q+": Math.floor((ts.getMonth() + 3) / 3), //季度
        "S": ts.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (ts.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

// 将数字用分割符分割
// 用于数字千分位逗号分隔显示；用于银行卡四位空格风格等
export function numberFilter(num, split = 3, symbol = ',') {
    // todo
    return num
}
