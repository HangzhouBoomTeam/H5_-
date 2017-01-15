import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routers';
Vue.use(VueRouter);

// 实例化VueRouter
new Vue({
	router
}).$mount('#app');