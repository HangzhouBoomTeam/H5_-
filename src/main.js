import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routers';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueRouter);
// var instance = axios.create({
//   baseURL: 'http://stats1.jiuyan.info/',
//   timeout: 1000,
//   withCredentials: false,
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
// 	'Access-Control-Allow-Headers' : 'X-Requested-With',
// 	'Access-Control-Allow-Methods' : 'GET',
// 	'Access-Control-Allow-Origin':'*'
//   }
// });
// axios.defaults.headers['Access-Control-Allow-Origin'] = 'http://localhost:8080';
// // axios.defaults.headers['Access-Control-Allow-Origin'] = 'http://stats1.jiuyan.info/itugo_deleven.html';
// axios.defaults.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS, HEAD';

Vue.use(VueAxios, axios);
// 实例化VueRouter
new Vue({
	router
}).$mount('#app');