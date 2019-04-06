<template>
  <div class="box">
    <div class="roletitle">{{role_title}}</div>
    <ul class="roleDes">
      <li>
        Inital balance :
        <span>{{role_money}}$</span>
      </li>
      <li>{{role_dec2}}</li>
      <li>{{role_dec3}}</li>
    </ul>
    <nav>
      <router-link :to="{path:'/game', query:{role:role_title}}">
        <a href="#" class="button" :class="button">{{role_level}}</a>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "role",
  props: [
    "button",
    "role_level",
    "role_title",
    "role_money",
    "role_dec2",
    "role_dec3"
  ]
};
</script>

<style scoped>
.box {
  width: 350px;
  height: 455px;
  background: #332f63;
  border-radius: 20px;
  padding: 25px 4vw;
  font-size: large;
  text-align: center;
  z-index: 1;
  margin: 0 2vw;

  -webkit-transition: all 0.25s;
  -moz-transition: all 0.25s;
  -ms-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;
}

.roletitle {
  color: rgb(255, 255, 255);
  font-size: x-large;
  margin-bottom: 20px;
}

.roleDes {
  font-size: medium;
  color: rgb(184, 183, 209);
  margin: 50px 0;
}

.roleDes li {
  list-style: circle;
  margin: 15px 0;
}

.roleDes li span {
  color: rgb(255, 255, 255);
}

.box:hover {
  -webkit-transform: scale(1.04, 1.04);
  -moz-transform: scale(1.04, 1.04);
  -ms-transform: scale(1.04, 1.04);
  -o-transform: scale(1.04, 1.04);
  transform: scale(1.04, 1.04);
}

.button {
  display: block;
  position: relative;
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

.button:before {
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

.button:hover {
  background: transparent;
  border-color: #fff;
}

.button:hover:before {
  transform: translateX(300px) rotate(45deg);
}

.button1 {
  background: rgb(117, 228, 191);
}

.button2 {
  background: rgb(253, 199, 23);
}

.button3 {
  background: rgb(255, 94, 83);
}

@media only screen and (min-width: 768px) and (max-width: 1200px) {
  .box {
    height: 200px;
    margin: 5px auto;
    width: 60vw;
    padding: 0;
    word-break: break-all;
  }

  .roletitle {
    color: rgb(255, 255, 255);
    font-size: large;
    margin-bottom: 2px;
  }

  .roleDes {
    font-size: medium;
    color: rgb(184, 183, 209);
    margin: 0px;
  }

  .roleDes li {
    list-style: none;
    margin: 0;
  }
  nav{
    padding: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -15px;
  }
  .button{
    width: 300px;
  }
}

@media only screen and (max-width: 768px) {
  .box {
    height: 200px;
    margin: 5px auto;
    width: 90vw;
    padding: 0;
    word-break: break-all;
  }

  .roletitle {
    color: rgb(255, 255, 255);
    font-size: large;
    margin-bottom: 2px;
  }

  .roleDes {
    font-size: medium;
    color: rgb(184, 183, 209);
    margin: 0px;
  }

  .roleDes li {
    list-style: none;
    margin: 0;
  }
  nav{
    padding: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -15px;
  }
  .button {
    width: 60vw;
  }
}
</style>