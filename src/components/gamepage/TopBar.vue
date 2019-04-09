<template>
  <div class="top-bar">
    <div class="top-price">Real-time Price : Buy {{realTimeBuy}}$/case. Sell {{realTimeSell}}$/case</div>
    <div class="top-tips">Tips: {{curTip}}</div>
    <router-link to="/">
      <Icon type="md-arrow-round-back" class="backIcon"/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props: ["realTimeBuy", "realTimeSell", "curTip"]
};
</script>

<style scoped>
.top-bar {
  margin-left: 1px;
  color: rgb(255, 255, 255);
  font-size: x-large;
  background-color: rgb(60, 55, 107);
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.top-price{
  display: inline;
}

.top-tips {
  font-size: medium;
  display: inline;
  margin-left: 10%;
}

.backIcon {
  margin-top: 6px;
  color: #ffffff;
  float: right;
}

@media screen and (max-width: 768px) {
  .top-bar {
    height: 70px;
    line-height: 10px;
    text-align: center;
  }
  
  .top-price {
    font-size: small;
    margin: 0 auto;
  }

  .top-tips{
    font-size: small;
    display: block;
    text-align: center;
    margin-top: 15px;
    width: 80%;
  }

  router-link{
    display: inline;
  }
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
  .top-price {
    font-size: medium;
  }
  .top-tips {
    margin-left: 50px;
    font-size: medium;
  }
}
</style>