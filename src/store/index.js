import Vue from 'vue'
import Vuex from 'vuex'
import demo from './modules/demo/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {

    },
    actions: {},
    getters: {},
    mutations: {},
    modules: {
        demo
    },
    strict: debug
})