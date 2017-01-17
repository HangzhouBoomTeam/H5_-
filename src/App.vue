<template>
  <div id="app">
     <div class=" back-quare background" height="100%">
        <div class="five-mao">
          <i class="line-img"> <i class="cicle"></i></i>
         
        </div>

        <div class="red-back card">
        </div>
        <div class="yellow-back back-quare card">
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
                <input type="text" name="name" value="" placeholder="请输入姓名" v-model="name">
            </div>
            
            <p class="tip">tips:</p>
            <p class="tip-detail">1.测过的都说准2.不准的请再测一次3.谢谢</p>
            <div class="start-btn">
                <i class="start-btn-img" @click="startGuess"><span class="start-span">开始预测</span></i>
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
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default {
  data () {
    return {
      name: ''
    }
  },
  methods:{
    startGuess(){
      window.isMe=true
      if(this.name.length === 0) {
          return ;
      }
      var w = wenan[getRandomIntInclusive(0,wenan.length-1)]
      var poss = w.name
      var gps = w.gps.join()
      var quote = w.quotes[getRandomIntInclusive(0,w.quotes.length-1)]
      var now =new Date()
      var time = now.getFullYear() +'年'+ now.getDay()+'日'
      console.log(quote);
      this.$router.push({
                    name: 'my',
                    query:{name:this.name,poss,text:quote,gps,time}
                });
    }
  },
  mounted(){
      
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
}
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
