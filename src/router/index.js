import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Demo',
            component: function (resolve) {
                require(['@/modules/demo/app.vue'], resolve)
            }
        },
        {
            path: '/replay',
            name: 'replay',
            component: function (resolve) {
                require(['@/modules/replay/app.vue'], resolve)
            }
        }
    ]
})
