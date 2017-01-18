
'use strict';

import Vue from 'vue';

const get =  function (param,successCallback,failCallbak) { 
    var url = "http://stats1.jiuyan.info/itugo_deleven.html?action=promo*forecast2017*2017GuessPrint*";
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
}

exports.get = get;