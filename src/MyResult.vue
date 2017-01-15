<template>
    <div  class="background back-quare">
      <p class="long-tip"><i class="arrow"></i>长按图片可保存预测结果</p>
      <div class="cards">
        <div class="card-my footest"></div>
        <div class="card-my middle"></div>
         <div class="card-my copy">
            <img src="" id="show_img" style="transform: scale(0.5,0.5) translate(-50%,-50%)
            ;width: 200%;height:200%">
        </div>
        <div class="card-my top" id="template">
            <p class="date"><span >2017年2月</span></p>
            <p class="later">过儿<span class="will">将会在</span></p>
            <p class="one">一</p>
            <p class="address"><i class="address-img"></i>印度尼西亚巴厘岛</p>
            <p class="wedding">举行盛大的婚礼</p>
            <p class="find_fun">上蕉蕉聊天App,发现各地小伙伴的巧妙见闻</p>
        </div>
       
      </div>
        
        <div class="look-more"><span>查看 “巴厘岛” 更多的奇遇</span></div>

        <div class="btns">
            <div class="btn">
              <i class="again-img"></i>再玩一次
            </div>
            <div class="btn">
              <i class="share-img"></i>分享出去
            </div>
        </div>

        <div class="footer">
           <i class="logo"></i>
            <span>上香蕉聊天App,发现各地小伙伴的巧妙趣闻！</span>
            <a href="">点击下载-></a>
        </div>
    </div>
</template>
<script>
export default {
  
     mounted(){
          console.log(window.innerWidth);
          var w = window.innerWidth*2*0.8;
          var h = window.innerHeight*2*0.5;
          var div = document.querySelector('#divtoconvert');
          var canvas = document.createElement('canvas');
          canvas.width = 2*w;
          canvas.height = 2*h;
          canvas.style.width = w + 'px';
          canvas.style.height = h + 'px';
          var context = canvas.getContext('2d');
          context.translate(w/4,w/4)
          context.scale(2,2);
          html2canvas(document.getElementById('template'),{canvas:canvas}).then(function(canvas){
              console.log(canvas);
              var content = canvas.getContext('2d');
              content.scale(2,2)
               var dataUrl = canvas.toDataURL();
               self.src = dataUrl
               // document.getElementById('template').remove()
               document.getElementById('show_img').src = dataUrl
          })
     
     }
};

</script>
<style>
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
  background-size: 100% 100%;
}
.cards {
  width: 100%;
  height: 50%;
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
.card-my .find_fun{
  font-size: 8px;
  position: absolute;
  bottom: 4px;
  text-align: center;
  left: 0;
  right: 0;
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
  background-color: #F7FD18 ;
  background-image: url(./assets/ghost.png);
  background-size: 100% 100%;
  pointer-events:none;
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
  border-radius: 20px;
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
    position: relative;
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
  text-align: center;;
}
.btn{
  display: inline-block;
  background-color: #fff;
  border: solid 2px #000;
  padding: 3px 10px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 12px;
}
.btns ul {
    text-align: center;
}
.btns li {
  list-style: none;
  float: left;
  margin: 0 20px 0 0;
  /*height: 44px;*/
  border: solid 1px #000;
  padding: 5px 20px;
  border-radius: 22px;
  font-weight: bold;

}
.btns li span {
  line-height: 20px;
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