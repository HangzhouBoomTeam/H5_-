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
        <div class="card-my" style="pointer-events:none;" >
          <div id="template" class="inner_top">
            <p class="date"><span >{{day}}</span></p>

            <p class="later">{{name}}<span class="will">将会在</span></p>
            <p class="one">一</p>
            <p class="address"><i class="address-img"></i>{{poss}}</p>
            <p class="wedding">{{text}}</p>
            <!-- <p class="find_fun">上蕉蕉聊天App,发现各地小伙伴的巧妙见闻</p> -->
            <img src="./assets/down.png" class="down_bottom">
              <img src="./assets/qr.png" class="qr_bottom">
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
            <i >我也要测</i>
        </div>
        <div class="footer">
           <i class="logo"></i>
            <span>上香蕉聊天App,发现各地小伙伴的巧妙趣闻！</span>
            <a :href="down_url">点击下载-></a>
        </div>
    </div>
</template>
<script>
import http from "./http.js";

export default {
  
    data () {
      return {
        name:'',
        down_url:'',
        poss:'',text:'',isMe:false,day:'',gps:'',show_tip:false
      }
    },
     mounted(){
          this.getData();
          this.isMe = window.isMe || false
          console.log(this.isMe);
          var u = navigator.userAgent;
          var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
          console.log('and'+isAndroid);
          if (isAndroid) {
            this.down_url = "http://chat.in66.com/download/?_ig=android"
          }else{
            this.down_url = "http://chat.in66.com/download/?_ig=ios"
          }
          setTimeout(()=>{
            var w = window.innerWidth*0.8;
          var h = window.innerHeight*0.5;
          console.log(w,h);
          if (w>h) {h=w*1.3}
          var canvas = document.createElement('canvas');
          canvas.width = 5*w;
          canvas.height = 5*h;
          canvas.style.width = w + 'px';
          canvas.style.height = h + 'px';
          var context = canvas.getContext('2d');
          context.scale(4,4);
          context.translate(0,-h*0.1)
          html2canvas(document.getElementById('template'),{canvas:canvas}).then(function(canvas){
            console.log(canvas);
               var dataUrl = canvas.toDataURL();
               self.src = dataUrl
               // document.getElementById('template').remove()
               document.getElementById('show_img').src = dataUrl
          })
        },500)
          
     
     },
     methods: {
       getData (){
         console.log(this.$route.query);
          let name = this.$route.query.name;
          this.poss = this.$route.query.poss || '';
          this.text = this.$route.query.text || '';
          this.day = this.$route.query.time || '';
          this.gps = this.$route.query.gps || '';
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
    width: 50px;
    position: absolute;
    bottom: 0px;
    right: 0px
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
   width: 80%;
  height: 50%;
  position: absolute;
  top: 80px;
  pointer-events:none;
  left: 10%;
   pointer-events:none;
       border: solid 3px transparent;
   background-size: 100% 100%;

}
.card_cover2{
   width: 80%;
  height: 50%;
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
  height: 50px;
  width: 100%;
  background-color: #F7FD18;
  background-image: url(./assets/ghost.png);
  background-size: 100% auto;
  background-position: bottom;
}
.card-my {
  width: 80%;
  height: 50%;
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
-ms-transform:rotate(5deg); 	/* IE 9 */
-moz-transform:rotate(7deg); 	/* Firefox */
-webkit-transform:rotate(5deg); /* Safari 和 Chrome */
-o-transform:rotate(7deg);  
}
.footest {
  background-color: #3A62C7;
transform:rotate(3deg);
-ms-transform:rotate(3deg); 	/* IE 9 */
-moz-transform:rotate(3deg); 	/* Firefox */
-webkit-transform:rotate(3deg); /* Safari 和 Chrome */
-o-transform:rotate(3deg);  
}
.date {
  margin: 10% 0 5% 5%;
  /*width: 78px;*/
}
.date span {
    padding: 5px 15px;
  border: solid 1px #000;
  border-radius: 16px;
  font-size: 12px;
}
.later {
    margin: 10% 0 2% 5%;
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
  /*font-weight: bold;*/
  font-size: 32px;
}

.address-img {
  width: 20px;
  height: 27px;
  background-image: url(./assets/address.png);
  background-size: 100% 100%;
  display: inline-block;
  margin-right: 5px;
}
.address {
   margin: 0% 0 2% 5%;
  color: #4471E6;
  font-weight: bold;
  font-size: 1.6rem;
}
.wedding {
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
  bottom: 18%;
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