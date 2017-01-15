<template>
    <div  class="background back-quare">
      <p class="long-tip">长按图片可保存预测结果</p>
        <div class="card-my footest"></div>
        <div class="card-my middle"></div>
        <div class="card-my top">
            <p>2017年2月</p>
            <p>过儿<span>将会在</span></p>
            <p>一</p>
            <p>印度尼西亚巴厘岛</p>
            <p>举行盛大的婚礼</p>
            <div class="look-more"><span>查看 “巴厘岛” 更多的奇遇</span></div>
        </div>

        <div class="btns">
            <ul>
              <li>再玩一次</li>
              <li>分享出去</li>
            </ul>
        </div>

        <div class="footer">
          <img src="" alt="">
          <p>上香蕉聊天App,发现各地小伙伴的巧妙趣闻！</p>
          <a href="">点击下载-></a>
        </div>
    </div>
</template>
<script>
export default {
       
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
}
body{
  height: 97%;
}
.long-tip {
  margin: 8% 0 2% 10%;
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

.top {
  background-color: #F7FD18 ;
  background-image: url(./assets/ghost.png);
  background-size: 100% 100%;
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
.look-more {
    position: absolute;
    bottom: -5%;
    margin: 0 auto;
    text-align: center;
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
  position: fixed;
  bottom:20px;
  text-align: center;
}

.btns {
  position: absolute;
  height: 50px;
}
.btns ul {
  text-align: center;
}
.btns li {
  list-style: none;
  float: left;
  width: 200px;
}
</style>