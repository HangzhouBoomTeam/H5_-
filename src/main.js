import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routers';
import axios from 'axios';
import VueAxios from 'vue-axios';
import wx from 'wx';
import http from './http.js';

// wx.config({
//     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//     appId: 'wxf3c0d02d1cacdab4', // 必填，公众号的唯一标识
//     timestamp: 'dasdsa', // 必填，生成签名的时间戳
//     nonceStr: '', // 必填，生成签名的随机串
//     signature: '',// 必填，签名，见附录1
//     jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQZone','onMenuShareQQ'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
// });
// wx.ready(function(){
// 	console.log('dasdas');
// });



Vue.use(VueRouter);

Vue.use(VueAxios, axios);
// 实例化VueRouter
new Vue({
	wx,
	router
}).$mount('#app');

// http.loadImg(function (param) { 
// 	console.log(param);
//  });

http.getWxToken(function (json) {  
	wx.config({
		debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: json.appId, // 必填，公众号的唯一标识
		timestamp: json.timestamp+'', // 必填，生成签名的时间戳
		nonceStr: json.nonceStr, // 必填，生成签名的随机串
		signature: json.signature,// 必填，签名，见附录1
		jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQZone','onMenuShareQQ','onMenuShareWeibo'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});
	wx.ready(function(){
	});
});
// wx.  xconfig({
	// 	debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	// 	appId: "wx373d9eb20e9e4b01", // 必填，公众号的唯一标识
	// 	timestamp:"1484923020", // 必填，生成签名的时间戳
	// 	nonceStr:"uxml1Ac60LQlRZSz", // 必填，生成签名的随机串
	// 	signature: "ef23658bdaab63c78bf3c20d7d27d85b3647cf79",// 必填，签名，见附录1
	// 	jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQZone','onMenuShareQQ'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	// });