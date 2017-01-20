<template>
  <div id="app">
     <div class=" back-quare background" height="100%">
        <div class="five-mao">
          <i class="line-img"> <i class="cicle"></i></i>
         
        </div>

        <div class="red-back card">
        </div>
        <div class="yellow-back card">
          <img class="right-img" src="./assets/right.png" alt="" width="30px" height="20px">
          <img class="left-img" src="./assets/left.png" alt="" width="40px" height="40px">
            <div class="guess">
                      <!--<img src="./assets/2017.png"  >-->
                <i class="guess-img">

                </i>
            </div>
            <div class="meet">
              <i class="meet-img"></i>
            </div>
            <div class="name-input" >
                <input type="text" name="name" maxlength="5" value="" placeholder="请输入姓名" v-model="name">
            </div>
            
            <!-- <p class="tip">tips:</p> -->
             <!--<p class="tip-detail">1.名字最长5个字哦</p> -->
            <div class="start-btn">
                <span class="start-btn-img" @click="startGuess"><span class="start-span">开始预测</span></span>
            </div>
            <i class="run-img"></i>
        </div>
        <div>
          
        </div>
    </div>

  </div>
</template>

<script>
import wenan from "./wenan";
import http from "./http.js";
import wx from 'wx';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function setCookie(cname,cvalue,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
export default {
  data () {
    return {
      name: ''
    }
  },
  methods:{
    
    startGuess(){
      
      http.get('guessInput*startGuess');
      window.isMe=true
      if(this.name.length === 0 || this.name.length > 5) {
          return ;
      }
      var w = wenan[getRandomIntInclusive(0,wenan.length-1)]
      var poss = w.name
      var gps = w.gps.join()
      var quote = w.quotes[getRandomIntInclusive(0,w.quotes.length-1)]
      var now =new Date()
      var time = now.getFullYear() +'年'+ getRandomIntInclusive(2,12)+'月'
      console.log(quote);
      wx.onMenuShareTimeline({
        title: this.name +'  2017  年将会在'+poss +'有一次神秘奇遇', // 分享标题
        link: window.location.host+'/?name='+this.name+'&poss='+poss+'&gps='+gps+'&time='+time, // 分享链接
        imgUrl: 'http://i1.jiuyan.info/2017/01/20/35EA232F-C7A6-4AE5-A009-8BD0C3476915.jpg?v=2', // 分享图标
        success: function () { 
            // 用户确认分享后执行的回调函数
        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
        } 
      });

      wx.onMenuShareAppMessage({
          title: this.name +'  2017  年将会在'+poss +'有一次神秘奇遇', // 分享标题
          desc: '听说这事宇宙最准占卜，猛戳进入 >>', // 分享描述
          link: window.location.host+'/?name='+this.name+'&poss='+poss+'&gps='+gps+'&time='+time, // 分享链接
          imgUrl: 'http://i1.jiuyan.info/2017/01/20/35EA232F-C7A6-4AE5-A009-8BD0C3476915.jpg?v=2', // 分享图标
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function () { 
              // 用户确认分享后执行的回调函数
          },
          cancel: function () { 
              // 用户取消分享后执行的回调函数
          }
      });

      var _ig = this.$route.query._ig || 'unknown';
      setCookie('name',this.name,100)
      this.$router.push({
                    name: 'my',
                    query:{name:this.name,poss,text:quote,gps,time,_ig}
                });

    }
  },
  mounted(){

// http.getWxToken(function (json) {  
// 	wx.config({
// 		debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
// 		appId: json.appId, // 必填，公众号的唯一标识
// 		timestamp: json.timestamp, // 必填，生成签名的时间戳
// 		nonceStr: json.nonceStr, // 必填，生成签名的随机串
// 		signature: json.signature,// 必填，签名，见附录1
// 		jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQZone','onMenuShareQQ'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
// 	});
// 	wx.ready(function(){
// 		alert('haha');
// 	});
// });
wx.onMenuShareTimeline({
        title: '听说这事宇宙最准占卜，猛戳进入你的奇遇', // 分享标题
        link: window.location.host, // 分享链接
        imgUrl: 'http://i1.jiuyan.info/2017/01/20/35EA232F-C7A6-4AE5-A009-8BD0C3476915.jpg?v=2', // 分享图标
        success: function () { 
            // 用户确认分享后执行的回调函数
        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
        } 
      });
 wx.onMenuShareAppMessage({
          title:'2017 你的奇遇', // 分享标题
          desc: '听说这事宇宙最准占卜，猛戳进入 >>', // 分享描述
          link:  'http://'+window.location.host, // 分享链接
          imgUrl: 'http://i1.jiuyan.info/2017/01/20/35EA232F-C7A6-4AE5-A009-8BD0C3476915.jpg?v=2', // 分享图标
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function () { 
              // 用户确认分享后执行的回调函数
          },
          cancel: function () { 
              // 用户取消分享后执行的回调函数
          }
      });
console.log(wx);
  }
}

</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
 height: 100%;
  width: 100%;
}
@media screen and (max-width: 330px) {
    html {
      font-size: 12px;
    }
}
@media (min-width: 331px) and (max-width: 380px) {
    html {
      font-size: 15px;
    }
}
@media (min-width: 381px) and (max-width: 500px) {
    html {
      font-size: 20px
    }
}
*{
  box-sizing: border-box;
}
body{
  height: 100%;
  position: relative;
  min-height: 616px;
  margin: 0 0;
}
.background {
  height: 100%;
  width: 100%;
  background-color: #fff;
  
}
.back-quare {
  
  background-size: 20rem 20rem;
  border: solid 1px #f8f8f8;
  background-image:
     -webkit-repeating-linear-gradient(0deg, #eee, #eee 1px, transparent 0px, transparent 12px),
     -webkit-repeating-linear-gradient(90deg, #eee, #eee 1px, transparent 0px, transparent 12px);
}
.five-mao {
  width: 100%;
  height: 100%;
  background-image: url(./assets/5mao.png);
  background-size: 100% 100%;
  position: relative;
  z-index: 1;
  margin: 0 auto;
}
.line-img {
  margin: -1px 50%-3px;
  width: 2px;
  height: 80px;
  background-color: #000;
  /*background-image: url(./assets/line.png);
  background-size: 100% 100%;*/
  display: block;
  position: relative;
}
.cicle {
  position: absolute;
  padding: 3px;
  bottom: -1px;
  left: -4px;
  background-color: #F8B619;
  border-radius: 6px;
  border: solid 2px #000;
  display: inline-block;
}
.run-img {
  width: 33%;
  height: 25%;
  background-image: url(./assets/run.png);
  background-size: 100% 100%;
  display: inline-block;
  bottom: -90px;
  position: absolute;
  z-index: 3;
}
.card {
  width: 75%;
  height: 70%;
  border: solid 3px #000;
  border-radius: 2%;
  position: absolute;
  top: 60px;
  left: 12.5%;
}
.red-back {
  background-color: #F6414A;
  
  transform:rotate(5deg);
-ms-transform:rotate(5deg); 	/* IE 9 */
-moz-transform:rotate(7deg); 	/* Firefox */
-webkit-transform:rotate(5deg); /* Safari 和 Chrome */
-o-transform:rotate(7deg); 
  
}
.yellow-back {
  background-color: #F7FC18;
  /*border: solid 2px #000;*/
}



input:focus::-webkit-input-placeholder { color:transparent; }
input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */
input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */
input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */
.right-img {
  position: absolute;
  top: 15%;
  right: -10%;
}
.guess {
    width: 100%;
    height:15%;
    margin-top: 10%;
    /*padding: 20% 0 0 20%;*/
    /*margin: 10% 25% 2% 25%;;*/
    /*background-size: 30px 30px;
    background-image: url('./assets/guess.png');*/
}
.meet {
    width: 100%;
    height:18%;
    margin-top: -10px;
    /*margin-top: 10%;*/
}
.meet-img {
  background-image: url(./assets/qiyu.png) ;
  background-repeat: no-repeat;
  background-position-x : center;
  background-size: 90% 100%;
  width: 100%;
  height: 100%;
  display: inline-block;
}
.guess-img {
  background-image: url(./assets/2017.png) ;
  background-repeat: no-repeat;
  background-position-x : center;
  background-size: 70% 100%;
  width: 100%;
  height: 100%;
    display: inline-block;

  /*width: 100%;
  height: 100%;*/

}
.left-img {
   position: absolute;
  top: -5%;
  left: 5%;
}

.name-input {
  height: 10%;
  margin-top: 20%;
  text-align: center;
}
.name-input input  {
  height: 100%;
  border: solid 3px #000;
  border-radius: 10px;
  width: 75%;
  font-size: 20px;
  text-align: center;
  z-index: 9;
  position: relative;
}
nput::-ms-input-placeholder{text-align: center;color: #000}
input::-webkit-input-placeholder{text-align: center; color: #000}
input:focus{
  outline: none;
}

.tip {
  margin:  10% 12.5% 0 12.5%;
  font-weight: bold;
}
.tip-detail {
  color: #A7A428;
  margin: 2px 12.5%;
  font-size: 14px;
}
.start-btn {
     height: 50px;
    bottom: -25px;
    width: 100%;
    text-align: center;
    z-index: 2;
    position: absolute;

}
.start-span {
  display: inline-block;
  margin-top: 11px;

}
.start-btn-img {
  background-image: url(./assets/start.png);
  background-repeat: no-repeat;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 100%;
  width: 144px;
  height: 50px;
  background-size: 100% 100%;
  /*padding: 10px 20px;*/
  background-color:inherit;
    /*border: solid 2px #000;
    border-radius: 20px;
    box-shadow:0 5px #4471E6;
    background-color: #F7FD18;*/

}
</style>
