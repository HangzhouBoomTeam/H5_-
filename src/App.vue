<template>
  <div id="app">
     <div class=" back-quare background" height="100%">

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
            <p class="tip-detail">你好，我是好好先生</p>
            <div class="start-btn">
                <button class="start-btn-img" @click="startGuess">开始预测</button>
        </div>
        </div>
        
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods:{
    startGuess(){
      if(this.name.length === 0) {
          return ;
      }
      this.$router.push({
                    name: 'my'
                });
    }
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
body{
  height: 100%;
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
.card {
  width: 75%;
  height: 70%;
  border: solid 3px #000;
  border-radius: 2%;
  position: absolute;
  top: 80px;
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
    position: absolute;
    bottom: -5%;
    width: 100%;
    text-align: center;

}

.start-btn-img {
  background-image: url(./assets/start.png);
  background-repeat: no-repeat;
  display: inline-block;
  width: 50%;
  height: 100%;
  background-size: 100% 100%;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 100%;
  background-color:inherit;
  border: none;
}
</style>
