const Replay = {
    namespaced: true,
    state() {
        return {
            points: [],
            timer: null,
            status: 'empty',
            floor: -10,
            ceil: 10,
            breakPoint: null
        }
    },
    actions: {
        PLAY({ commit, state }) {
            if (state.timer === null) {
                let temp = setInterval(() => {
                    commit('_INPUT', {
                        number: Math.floor(Math.random() * 90) + 10,
                        time: (new Date()).toLocaleTimeString()
                    })
                }, 1000)
                commit('_PLAY', temp)
            }
        }
    },
    getters: {

    },
    mutations: {
        _INPUT(state, point) {
            if (state.breakPoint === null) {
                // 第一个点作为第一个拐点
                state.breakPoint = point.number
            } else {
                // 和拐点比较
                let diff = point.number - state.breakPoint
                if (diff > state.ceil) {
                    // 做多
                    if (state.status !== 'empty') {
                        // 如果是非空状态，要先做平

                    }
                } else if (diff < state.floor) {
                    // 做空
                    if (state.status !== 'empty') {
                        // 如果是非空状态，要先做平
                    }
                }
            }
            // 更新拐点
            let _ln = state.points.length
            if (_ln >= 2) {
                let _pre = state.points[_ln - 2].number,
                    _current = state.points[_ln - 1].number,
                    _next = point.number
                if (_checkBreakPoint(_pre, _current, _next)) {
                    // 中间一个是拐点
                    state.breakPoint = _current
                }
            }
            state.points.push(point)
        },
        _PLAY(state, tid) {
            state.timer = tid
        },
        _DOSHORT(state, { now, last }) {

        },
        PAUSE(state) {
            clearInterval(state.timer)
            state.timer = null
        },
        RESET(state) {
            state.points = []
        }
    },
    modules: {

    }
}

export default Replay

// 检查拐点
function _checkBreakPoint(pre, now, next) {
    if ((pre > now && now < next) || (pre < now && now > next)) {
        return true
    }
    return false
}
