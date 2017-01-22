
'use strict';

import Vue from 'vue';

const get =  function (param,successCallback,failCallbak) { 
    var url = location.protocol+"//stats1.jiuyan.info/itugo_deleven.html?action=promo*forecast2017*2017Guess*";
    // Vue.axios.setHeader("Access-Control-Allow-Origin", "*");
    console.log(param);
    Vue.axios.get(url+param)
                .then(function (response) {
                    console.log(response);
                    if(response.status === 200 ){
                        if(successCallback) {
                            successCallback(response.data);
                        }
                    } else {
                        if(failCallbak) {
                            failCallbak(error);
                        }
                    } 
                })
                .catch(function (error) {
                    if(failCallbak) {
                        failCallbak(error);
                    }
                });
};

var loadImage = function loadImage( callback) {
        var url = location.protocol+"//chat.in66.com/webview/webview-common/get-weixin-jssdk-config?redirectUrl=http://chat.in66.com/webview/webview-common/get-weixin-jssdk-config";

    var img = new Image(); //创建一个Image对象，实现图片的预下载
    img.src = url;
   img.crossOrigin = "Anonymous";
    if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
                console.log(img);

        callback.call(img);
        return; // 直接返回，不用再处理onload事件
    }

    img.onload = function () { //图片下载完毕时异步调用callback函数。
        console.log(img);
        callback.call(img);//将回调函数的this替换为Image对象
    };
};


const getWxToken =  function (successCallback,failCallbak) { 
    var url = location.protocol+"//chat.in66.com/webview/webview-common/get-weixin-jssdk-config?redirectUrl=http://chat.in66.com/webview/webview-common/get-weixin-jssdk-config";
    console.log(location.protocol);
    // Vue.axios.setHeader("Access-Control-Allow-Origin", "*");


    Vue.axios.get(url)
                .then(function (response) {
                    console.log(response);
                    if(response.status === 200 ){
                        if(successCallback) {
                            successCallback(response.data.data);
                        }
                    } else {
                        if(failCallbak) {
                            failCallbak(error);
                        }
                    } 
                })
                .catch(function (error) {
                    if(failCallbak) {
                        failCallbak(error);
                    }
                });
}
exports.get = get;
exports.getWxToken = getWxToken;
exports.loadImg = loadImage;