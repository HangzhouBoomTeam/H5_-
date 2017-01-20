
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