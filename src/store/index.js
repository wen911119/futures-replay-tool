import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import theme from './modules/theme'
import list from './modules/list'
import search from './modules/search'
import goods from './modules/goods'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {

    },
    actions: {},
    getters: {},
    mutations: {},
    modules: {
        home,
        theme,
        list,
        search,
        goods
    },
    strict: debug
})