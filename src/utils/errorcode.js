const errorCodeMap = {
    "10001": "用户名或密码错误",
    "10002": "请登陆"
}

const defaultMsg = '系统异常'

export function getErrorMsg(errorCode) {
    if (errorCodeMap[errorCode]) {
        return errorCodeMap[errorCode]
    } else {
        return defaultMsg
    }
}