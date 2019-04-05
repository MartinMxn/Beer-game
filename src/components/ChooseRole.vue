<template>
  <div class="bg">
    <ghost/>
    <!-- card -->
    <div class="boxes">
      <div class="box1">
        <div class="roletitle">Manufacturer</div>
        <br>
        <ul class="roleDes">
          <li style="margin-bottom:5px">
            Inital balance :
            <span style="color:rgb(255, 255, 255)">4000$</span>
          </li>
          <li style="margin-bottom:5px">Upstream of this supply chain</li>
          <li style="margin-bottom:5px">The orders received fluctuate the most</li>
        </ul>
        <br>
        <nav>
          <router-link :to="{path:'/game', query:{role:'Manufacturer'}}">
            <div class="box__description">
              <a href="#" class="box__button3">Hard</a>
            </div>
          </router-link>
        </nav>
      </div>
      <div class="box2">
        <div class="roletitle">Supplier</div>
        <br>
        <ul class="roleDes">
          <li style="margin-bottom:5px">
            Inital balance :
            <span style="color:rgb(255, 255, 255)">3500$</span>
          </li>
          <li style="margin-bottom:5px">Midstream of this supply chain</li>
          <li style="margin-bottom:5px">The orders received fluctuate a little</li>
        </ul>
        <br>
        <nav>
          <router-link :to="{path:'/game', query:{role:'Supplier'}}">
            <div class="box__description">
              <a href="#" class="box__button2">Median</a>
            </div>
          </router-link>
        </nav>
      </div>
      <div class="box3">
        <div class="roletitle">Retailer</div>
        <br>
        <ul class="roleDes">
          <li style="margin-bottom:5px">
            Inital balance :
            <span style="color:rgb(255, 255, 255)">3000$</span>
          </li>
          <li style="margin-bottom:5px">Downstream of this supply chain</li>
          <li style="margin-bottom:5px">Receive orders from customers directly</li>
        </ul>
        <br>
        <nav>
          <router-link :to="{path:'/game', query:{role:'Retailer'}}">
            <div class="box__description">
              <a href="#" class="box__button1">Easy</a>
            </div>
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import ghost from "../components/homepage/Ghost.vue";
export default {
  name: "chooserole",
  components: {
    ghost,
  }
};
</script>

<style scoped>
.boxes {
  display: flex;
  flex-wrap: wrap;
}

.roleDes {
  font-size: medium;
  color: rgb(184, 183, 209);
  margin: 0px;
}
.roletitle {
  color: rgb(255, 255, 255);
  font-size: x-large;
}

.title {
  margin-top: 100px;
  color: rgb(0, 217, 255);
  text-align: center;
  font-size: xx-large;
}
.bg {
  background-color: #28254c;
  height: 100%;
  position: fixed;
  width: 100%;
}
.box1 {
  width: 300px;
  height: 100%;
  max-height: 500px;
  min-height: 450px;
  background: #332f63;
  border-radius: 20px;
  position: absolute;
  left: 16%;
  top: 28%;
  padding: 30px 70px;
  font-size: large;
  text-align: center;

  -webkit-transition: all 0.25s;
  -moz-transition: all 0.25s;
  -ms-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;
}

.box1:hover {
  -webkit-transform: scale(1.04, 1.04);
  -moz-transform: scale(1.04, 1.04);
  -ms-transform: scale(1.04, 1.04);
  -o-transform: scale(1.04, 1.04);
  transform: scale(1.04, 1.04);
}

.box2 {
  width: 300px;
  height: 100%;
  max-height: 500px;
  min-height: 450px;
  background: #332f63;
  border-radius: 20px;
  position: absolute;
  left: 41%;
  top: 28%;
  padding: 30px 70px;
  font-size: large;
  text-align: center;

  -webkit-transition: all 0.25s;
  -moz-transition: all 0.25s;
  -ms-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;
}

.box2:hover {
  -webkit-transform: scale(1.04, 1.04);
  -moz-transform: scale(1.04, 1.04);
  -ms-transform: scale(1.04, 1.04);
  -o-transform: scale(1.04, 1.04);
  transform: scale(1.04, 1.04);
}

.box3 {
  width: 300px;
  height: 100%;
  max-height: 500px;
  min-height: 450px;
  background: #332f63;
  border-radius: 20px;
  position: absolute;
  left: 66%;
  top: 28%;
  padding: 30px 70px;
  font-size: large;
  text-align: center;

  -webkit-transition: all 0.25s;
  -moz-transition: all 0.25s;
  -ms-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;
}

.box3:hover {
  -webkit-transform: scale(1.04, 1.04);
  -moz-transform: scale(1.04, 1.04);
  -ms-transform: scale(1.04, 1.04);
  -o-transform: scale(1.04, 1.04);
  transform: scale(1.04, 1.04);
}

.box4 {
  width: 300px;
  height: 100%;
  max-height: 500px;
  min-height: 450px;
  background: #17233d;
  border-radius: 20px;
  position: absolute;
  left: 75%;
  top: 28%;
  padding: 30px 70px;
  font-size: large;
  text-align: center;

  -webkit-transition: all 0.25s;
  -moz-transition: all 0.25s;
  -ms-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;
}

.box4:hover {
  -webkit-transform: scale(1.04, 1.04);
  -moz-transform: scale(1.04, 1.04);
  -ms-transform: scale(1.04, 1.04);
  -o-transform: scale(1.04, 1.04);
  transform: scale(1.04, 1.04);
}

html,
body {
  background: #28254c;
  font-family: "Ubuntu";
}

* {
  box-sizing: border-box;
}

.box .box__description {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}
.box .box__description .box__description-container {
  color: #fff;
  text-align: center;
  width: 200px;
  font-size: 16px;
  margin: 0 auto;
}
.box .box__description .box__description-container .box__description-title {
  font-size: 24px;
  letter-spacing: 0.5px;
}
.box .box__description .box__description-container .box__description-text {
  color: #8c8aa7;
  line-height: 20px;
  margin-top: 20px;
}
.box__button1 {
  display: block;
  position: relative;
  background: rgb(117, 228, 191);
  border: 1px solid transparent;
  border-radius: 50px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  line-height: 50px;
  font-size: 18px;
  white-space: nowrap;
  margin-top: 25px;
  transition: background 0.5s ease;
  overflow: hidden;
}
.box__button1:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 100px;
  background: #fff;
  bottom: -25px;
  left: 0;
  border: 2px solid #fff;
  transform: translateX(-50px) rotate(45deg);
  transition: transform 0.5s ease;
}
.box__button1:hover {
  background: transparent;
  border-color: #fff;
}
.box__button1:hover:before {
  transform: translateX(250px) rotate(45deg);
}

.box__button2 {
  display: block;
  position: relative;
  background: rgb(253, 199, 23);
  border: 1px solid transparent;
  border-radius: 50px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  line-height: 50px;
  font-size: 18px;
  white-space: nowrap;
  margin-top: 25px;
  transition: background 0.5s ease;
  overflow: hidden;
}
.box__button2:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 100px;
  background: #fff;
  bottom: -25px;
  left: 0;
  border: 2px solid #fff;
  transform: translateX(-50px) rotate(45deg);
  transition: transform 0.5s ease;
}
.box__button2:hover {
  background: transparent;
  border-color: #fff;
}
.box__button2:hover:before {
  transform: translateX(250px) rotate(45deg);
}

.box__button3 {
  display: block;
  position: relative;
  background: rgb(255, 94, 83);
  border: 1px solid transparent;
  border-radius: 50px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  line-height: 50px;
  font-size: 18px;
  white-space: nowrap;
  margin-top: 25px;
  transition: background 0.5s ease;
  overflow: hidden;
}
.box__button3:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 100px;
  background: #fff;
  bottom: -25px;
  left: 0;
  border: 2px solid #fff;
  transform: translateX(-50px) rotate(45deg);
  transition: transform 0.5s ease;
}
.box__button3:hover {
  background: transparent;
  border-color: #fff;
}
.box__button3:hover:before {
  transform: translateX(250px) rotate(45deg);
}

.box__button4 {
  display: block;
  position: relative;
  background: rgb(0, 195, 255);
  border: 1px solid transparent;
  border-radius: 50px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  line-height: 50px;
  font-size: 18px;
  white-space: nowrap;
  margin-top: 25px;
  transition: background 0.5s ease;
  overflow: hidden;
}
.box__button4:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 100px;
  background: #fff;
  bottom: -25px;
  left: 0;
  border: 2px solid #fff;
  transform: translateX(-50px) rotate(45deg);
  transition: transform 0.5s ease;
}
.box__button4:hover {
  background: transparent;
  border-color: #fff;
}
.box__button4:hover:before {
  transform: translateX(250px) rotate(45deg);
}

</style>

<script>
import ghost from "../components/homepage/Ghost.vue";
export default {
  name: "chooserole",
  components: {
    ghost,
  }
};
</script>


