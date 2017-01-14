import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routers';
Vue.use(VueRouter);

// 实例化VueRouter
const router = new VueRouter({
    mode: 'history',
    routes
});
new Vue({
    router
}).$mount('#app');

