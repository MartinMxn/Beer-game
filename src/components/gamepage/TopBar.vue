<template>
  <div class="top-bar">
    <span class="top-price">Real-time Price : Buy {{realTimeBuy}}$/case. Sell {{realTimeSell}}$/case</span>
    <span class="top-tips">Tips: {{curTip}}</span>
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

.top-tips {
  margin-left: 120px;
  font-size: medium;
}

.backIcon {
  margin-top: 6px;
  color: #ffffff;
  float: right;
}

@media screen and (max-width: 768px) {
  .top-bar {
    line-height: 20px;
  }
  .top-price {
    font-size: small;
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