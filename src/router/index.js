import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Demo',
            component: function (resolve) {
                require([`@/modules/demo/${_TEMPLATE_}/app.vue`], resolve)
            }
        }
    ]
})