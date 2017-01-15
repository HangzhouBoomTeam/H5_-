import VueRouter from 'vue-router'
import MyResult from "./MyResult.vue";
import App from "./App.vue";

const router = new VueRouter({
    mode: 'hash',
    routes: [{
        name: 'home',
        path: '/',
        component: App
    }, {
        name: 'my',
        path: '/my',
        component: MyResult
    }]
})

export default router;