<template>
    <div  class="background back-quare">
      <p class="long-tip"><i class="arrow"></i>长按图片可保存预测结果</p>
      <div class="cards">
        <div class="card-my footest"></div>
        <div class="card-my middle"></div>
         <div class="card-my copy">
            <img src="" id="show_img" style="width: 100%">
        <div class="look-more" @click="seeMore"><span>查看更多的奇遇</span></div>

        </div>
        <div class="card-my" style="pointer-events:none;border:none" >
          <div id="template" class="inner_top" style="     border: solid 3px #000; 
     border-radius: 2%; ">
            <p class="date"><span >{{day}}</span></p>

            <p class="later">{{name}}<span class="will">将会在</span></p>
            <p class="one">一</p>
            <p class="address"><i class="address-img"></i>{{poss}}</p>
            <p class="wedding">{{text}}</p>
            <!-- <p class="find_fun">上蕉蕉聊天App,发现各地小伙伴的巧妙见闻</p> -->
            <img src="./assets/down.png" class="down_bottom">
              <div src="" class="qr_bottom" id="qrcode"></div>
            <div></div>
        </div>

      </div>
        <div class="card_cover">
            <div class="bt_cover">
            </div>
        </div>

        <div class="btns" v-if="isMe">
            <div class="btn" @click="playAgain">
              <i class="again-img"></i>再玩一次
            </div>
            <div class="btn"  @click="share">
              <i class="share-img"></i>分享出去
            </div>
        </div>
<div v-if="show_tip" @click="hide"
style="position: fixed;top:0;left:0;width: 100%;height:100%;z-index:2200;background-color:rgba(0,0,0,.7)
        ;">
        <img src="./assets/here_share.png" style="padding: 20px;width: 100%">
        </div>
        <div class="i-want" v-if="!isMe" @click="mePlay">
            <span >我也要测</span>
        </div>
        <!--<div class="footer">
           <i class="logo"></i>
            <span>上香蕉聊天App,发现各地小伙伴的巧妙趣闻！</span>
            <a :href="down_url">点击下载-></a>
        </div>-->
        <div class="footer-down">
          <a class="down-a" :href="down_url"></a>
        </div>
        <input type="hidden" id="shareTitle" value="2017你的奇遇">
          <input type="hidden" id="shareDesc" value="听说这是宇宙最准占卜，猛戳进入>>">
          <input type="hidden" id="shareLink" :value="my_url">
          <input type="hidden" id="shareImgSrc" :value="my_url">
          <input type="hidden" id="shareCallback" value="http://stats1.jiuyan.info/onepiece/promo_forecast_channelName_pageName.html?_ig=share_pageName">
    </div>
</template>
<script>
import http from "./http.js";
var touchFunc = function(obj,type,func) {
    //滑动范围在5x5内则做点击处理，s是开始，e是结束
    var init = {x:5,y:5,sx:0,sy:0,ex:0,ey:0};
    var sTime = 0, eTime = 0;
    type = type.toLowerCase();
  
    obj.addEventListener("touchstart",function(){
        sTime = new Date().getTime();
        init.sx = event.targetTouches[0].pageX;
        init.sy = event.targetTouches[0].pageY;
        init.ex = init.sx;
        init.ey = init.sy;
        if(type.indexOf("start") != -1) func();
    }, false);
  
    obj.addEventListener("touchmove",function() {
        event.preventDefault();//阻止触摸时浏览器的缩放、滚动条滚动
        init.ex = event.targetTouches[0].pageX;
        init.ey = event.targetTouches[0].pageY;
        if(type.indexOf("move")!=-1) func();
    }, false);
  
    obj.addEventListener("touchend",function() {
        var changeX = init.sx - init.ex;
        var changeY = init.sy - init.ey;
        if(Math.abs(changeX)>Math.abs(changeY)&&Math.abs(changeY)>init.y) {
            //左右事件
            if(changeX > 0) {
                if(type.indexOf("left")!=-1) func();
            }else{
                if(type.indexOf("right")!=-1) func();
            }
        }
        else if(Math.abs(changeY)>Math.abs(changeX)&&Math.abs(changeX)>init.x){
            //上下事件
            if(changeY > 0) {
                if(type.indexOf("top")!=-1) func();
            }else{
                if(type.indexOf("down")!=-1) func();
            }
        }
        else if(Math.abs(changeX)<init.x && Math.abs(changeY)<init.y){
            eTime = new Date().getTime();
            //点击事件，此处根据时间差细分下
            if((eTime - sTime) > 300) {
                if(type.indexOf("long")!=-1) func(); //长按
            }
            else {
                if(type.indexOf("click")!=-1) func(); //当点击处理
            }
        }
        if(type.indexOf("end")!=-1) func();
    }, false);
};

var listenLongPress =  function () { 
    var show_img = document.getElementById('show_img');
    console.log(show_img);
        touchFunc(document.getElementById('show_img'),'long',function () {  
             http.get('guessResult*saveImage');
         });
 }
export default {
  
    data () {
      return {
        name:'',
        down_url:'',
        poss:'',text:'',isMe:false,day:'',gps:'',show_tip:false,channel:'',
        my_url:window.location.href
      }
    },
     mounted(){
          this.getData();
          this.isMe = window.isMe || false;
          if(!this.isMe) {
                wx.onMenuShareTimeline({
                  title: this.name +'  2017  年将会在 '+this.poss +' 有一次神秘奇遇', // 分享标题
                  link:window.location.host+'/?name='+this.name+'&poss='+this.poss+'&gps='+this.gps+'&time='+this.time, // 分享链接
                  imgUrl: 'http://i1.jiuyan.info/2017/01/20/35EA232F-C7A6-4AE5-A009-8BD0C3476915.jpg?v=2', // 分享图标
                  success: function () { 
                      // 用户确认分享后执行的回调函数
                  },
                  cancel: function () { 
                      // 用户取消分享后执行的回调函数
                  } 
                });

                wx.onMenuShareAppMessage({
                    title: this.name +'  2017  年将会在 '+this.poss +' 有一次神秘奇遇', // 分享标题
                    desc: '听说这事宇宙最准占卜，猛戳进入 >>', // 分享描述
                    link: window.location.host+'/?name='+this.name+'&poss='+this.poss+'&gps='+this.gps+'&time='+this.day, // 分享链接
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
          }
          console.log(this.isMe);
          var u = navigator.userAgent;
          var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
          console.log('and'+isAndroid);
          if (isAndroid) {
            this.down_url = "http://chat.in66.com/download/?_ig=android"
          }else{
            this.down_url = "http://chat.in66.com/download/?_ig=ios"
          }
          this.down_url = this.down_url+"&channel="+this.channel
          new QRCode(document.getElementById('qrcode'),{text:'https://chat.in66.com/pages/promo/forecast.html?_ig=promo_forecast&channel='+this.channel,width:150,height:150})
          setTimeout(()=>{
            var off = document.getElementById('template').getBoundingClientRect()
            var w = window.innerWidth*0.8;
          var h = w
          console.log(w,h);
          // if (w>h) {h=w*1.3}
          var canvas = document.createElement('canvas');
          canvas.width = 5*w;
          canvas.height = 5*h;
          canvas.style.width = w + 'px';
          canvas.style.height = h + 'px';
          var context = canvas.getContext('2d');
          context.scale(5,5);
          context.translate(-off.left,-off.top)
          html2canvas(document.getElementById('template'),{canvas:canvas}).then(function(canvas){
            console.log(canvas);
               var dataUrl = canvas.toDataURL();
               self.src = dataUrl
               // document.getElementById('template').remove()
               document.getElementById('show_img').src = dataUrl
               listenLongPress();
          })
        },500)
          
     
     },
     methods: {
       getData (){
         console.log();
         console.log(this.$route.query);
          let name = this.$route.query.name;
          this.poss = this.$route.query.poss || '';
          this.text = this.$route.query.text || '';
          this.day = this.$route.query.time || '';
          this.gps = this.$route.query.gps || '';
          this.channel = this.$route.query.channel || 'unknown';
          if(name) {
              this.name = name;
          } else  {

          }
       },
       playAgain(){
         if(this.isMe) {
            http.get('guessResult*playAgain');
         } else {
            http.get('guessResult*iWantPlay');
         }
          this.$router.replace({
            name:'home'
          });
       },
       share(){
          http.get('guessResult*share');
          this.show_tip =true
       },
       hide(){
          this.show_tip =false
       },
       seeMore(){
        window.location.href=`https://chat.in66.com/pages/peel_hot/list.html?_ig=forecast_jump&location=${this.poss}&location_gps=${this.gps}`
        http.get('guessResult*lookMore');
       },
       mePlay(){
         http.get('guessResult*iWantPlay');
         this.$router.replace({
            name:'home'
          });
       }
     }
};

</script>

<style>
.down-a {
  width: 30%;
  height: 100%;
  display: inline-block;
  float: right;
}
#qrcode img{
  width: 40px;
  height: 40px;
}
.footer-down {
  width: 100%;
  height: 55px;
  background-image: url(./assets/download.png);
  background-size: 100%;
  position: fixed;
  bottom: 0px;
  background-repeat: no-repeat;
}
.i-want {
  border: solid 2px #000;
  padding: 13px 0 ;
  border-radius: 25px;
  font-weight: bold;
  display: block;
  line-height: 100%;
  text-align: center;
  width: 230px;
  margin: 0 auto;
  bottom: -5%;
  position: absolute;
    bottom: 22%;
    left: 0;right: 0;
    width: 230px;

}
.down_bottom{
      width: 60%;
    position: absolute;
    bottom: 5px;
    left: 7%;
}
.qr_bottom{
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 5px;
    right: 5px
}
#myResult {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
 height: 100%;
  width: 100%;
  font-weight: bold;
}
body{
  height: 100%;
}
.long-tip {
  margin: 8% 0 2% 10%;
  font-weight: bold;
  font-size: 14px;
}
.arrow {
  background-image: url(./assets/arrow.png);
  width: 16px;
  height: 11px;
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle;
  /*background-size: 100% 100%;*/
}
.cards {
  width: 100%;
  height: 50%;
}
.card_cover{
   width: 80vw;
  height: 80vw;
  position: absolute;
  top: 80px;
  pointer-events:none;
  left: 10%;
   pointer-events:none;
       border: solid 3px transparent;
   background-size: 100% 100%;

}
.card_cover2{
   width: 80vw;
  height: 50vw;
  position: absolute;
  top: 80px;
  left: 10%;
       border: solid 3px transparent;
   background-size: 100% 100%;

}
.bt_cover{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 55px;
  width: 100%;
  background-color: #F7FD18;
  background-image: url(./assets/ghost.png);
  background-size: 100% auto;
  background-position: bottom;
}
.card-my {
  width: 80vw;
  height: 80vw;
  border: solid 3px #000;
  /*border-radius: 2%;*/
  position: absolute;
  top: 80px;
  left: 10%;
}
.find_fun{
  font-size: 12px;
  position: absolute;
  bottom: 4px;
  text-align: center;
  left: 0;
  right: 0;
  margin: 0px;
}
.background {
  height: 100%;
  /*width: 100%;*/
  background-color: #fff;
  
}
.back-quare {
  
  background-size: 20rem 20rem;
  border: solid 1px #f8f8f8;
  background-image:
     -webkit-repeating-linear-gradient(0deg, #eee, #eee 1px, transparent 0px, transparent 12px),
     -webkit-repeating-linear-gradient(90deg, #eee, #eee 1px, transparent 0px, transparent 12px);
}

.top {
  
}
.inner_top{
  background-color: #F7FD18 ;
  background-image: url(./assets/ghost.png);
  background-size: 100% 100%;
  pointer-events:none;
  width: 100%;
  height: 100%;
  position: absolute;
}
.copy{
  border: none;
}
.middle {
  background-color: #F6414A;
   transform:rotate(5deg);
-ms-transform:rotate(5deg);   /* IE 9 */
-moz-transform:rotate(7deg);  /* Firefox */
-webkit-transform:rotate(5deg); /* Safari 和 Chrome */
-o-transform:rotate(7deg);  
}
.footest {
  background-color: #3A62C7;
transform:rotate(3deg);
-ms-transform:rotate(3deg);   /* IE 9 */
-moz-transform:rotate(3deg);  /* Firefox */
-webkit-transform:rotate(3deg); /* Safari 和 Chrome */
-o-transform:rotate(3deg);  
}
.date {
                margin: 5% 0 6% 6%;
                /*width: 78px;*/
                
                }
            .date span {
                padding: 5px 15px;
                border: solid 1px #000;
                border-radius: 16px;
                font-size: 12px;
                background-color: #F7FC18;
                font-weight: bold;
            }
            .later {
                margin: 5% 0 2% 5%;
                font-weight: bold;
                font-size: 32px;
            }
            .later span {
                margin-left: 3px;
                font-size: 14px;
            }
            .one {
                margin: -5% 0 0.3rem 5%;
                color: #4471E6;
                font-size: 32px;
                height: 2rem;
            }

            .address-img {
                width: 30px;
                height: 30px;
                background-image: url(./assets/address.png);
                background-size: 100% 100%;
                display: inline-block;
                margin-right: 5px;
            }
            .address {
              text-align: center;
                margin: 0% 0 4% 5%;
                color: #4471E6;
                font-weight: bold;
                color: #000;
                font-size: 1.5rem;
            }
            .wedding {
              text-align: center;
                margin: 0% 0 2% 5%;
                color: #4471E6;
                font-weight: bold;
                font-size: 1.3rem;
            }
.look-more {
    margin: 0 auto;
    text-align: center;
    width: 230px;
    position: absolute;
    bottom: -26px;
    left: 0;
    right: 0;
    z-index: 200;
}
.look-more span {
  background-color: #F7FD18;
  border: solid 2px #000;
  padding: 10px 14px ;
  border-radius: 25px;
  font-weight: bold;
  display: block;
}
.footer {
  position: absolute;
  bottom:20px;
  font-size: 12px;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    vertical-align: middle;
}
.footer span {
  margin: 0 0;
  color: #9b9b9b;
}
.footer a {
  color: #517CE8;
  text-decoration: none;
  display: block;
}
.logo {
  width: 40px;
  height: 40px;
  background-image: url(./assets/logo.png);
  background-size: 100% 100%;
  display: inline-block;
  vertical-align: middle;
  overflow: auto;
  margin:0 10px 0 15px;
  float: left;
}
.btns {
  position: absolute;
  height: 50px;
  bottom: 23%;
  width: 100%;
  text-align: center;
}
.btn{
  display: inline-block;
  background-color: #fff;
  border: solid 2px #000;
  border-radius: 25px;
  font-weight: bold;
  font-size: 14px;
  padding:  10px 30px;
}

.again-img {
   width: 15px;
  height: 15px;
  background-image: url(./assets/refresh.png);
  background-size: 100% 100%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
      margin-bottom: 3px;
}
.share-img {
  width: 15px ;
  height: 15px;
  background-image: url(./assets/share.png);
  background-size: 100% 100%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
    margin-bottom: 3px;

}
</style>