<template>
  <div id="fourCard" class="col-6 col-xl-3">
    <div :class="cardColor" class="card-body">
      <div class="media align-items-center">
        <div class="media-body">
          <p class="text-white">{{cardTitle}}</p>
          <h4 class="text-white line-height-5">{{cardNumber}}</h4>
        </div>
        <Icon :type="cardIcon" size="50" color="white"></Icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: ["cardColor", "cardTitle", "cardNumber", "cardIcon"]
};
</script>

<style scoped>
.card-body{
  border-radius: 25px;
}
#fourCard {
  -webkit-transition: all 0.25s;
  -moz-transition: all 0.25s;
  -ms-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;
}
#fourCard :hover {
  -webkit-transform: scale(1.02, 1.02);
  -moz-transform: scale(1.02, 1.02);
  -ms-transform: scale(1.02, 1.02);
  -o-transform: scale(1.02, 1.02);
  transform: scale(1.02, 1.02);
}

@media screen and (max-width: 768px) {

}

@media screen and (min-width: 768px) and (max-width: 1200px) {

}
</style>