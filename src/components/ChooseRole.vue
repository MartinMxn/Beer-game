<template>
  <div class="bg">
    <!-- ghost animation -->
    <Ghost/>
    <!-- role cards -->
    <div class="cards">
      <Role
        button="button3"
        role_level="Hard"
        role_title="Manufacturer"
        role_money="4000"
        role_dec2="Upstream of this supply chain"
        role_dec3="The orders received fluctuate the most"
      />
      <Role
        button="button2"
        role_level="Median"
        role_title="Supplier"
        role_money="3500"
        role_dec2="Midstream of this supply chain"
        role_dec3="The orders received fluctuate moderately"
      />
      <Role
        button="button1"
        role_level="Easy"
        role_title="Retailer"
        role_money="3000"
        role_dec2="Downstream of this supply chain"
        role_dec3="Receive orders from customers directly"
      />
    </div>
  </div>
</template>

<script>
import Ghost from "../components/homepage/Ghost.vue";
import Role from "../components/homepage/Role.vue";
export default {
  name: "chooserole",
  components: {
    Ghost,
    Role
  }
};
</script>

<style scoped>
.bg {
  background-color: #28254c;
  height: 100vh;
  width: 100%;
}

.cards {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
}

@media screen and (max-width: 1200px) {
  .cards {
    display: flex;
    flex-direction:column-reverse;
  }
}
</style>

