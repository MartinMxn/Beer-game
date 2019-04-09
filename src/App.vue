<template>
  <div>
    <router-view></router-view>
    <Modal v-model="introDia" width="700">
      <p slot="header" style="color:#f60;text-align:center;">
        <Icon type="md-beer" size="24"></Icon>
        <span style="font-size:22px">Welcome to Beer Game!</span>
      </p>
      <div style="text-align:center;font-size:20px">
        <p>
          Beer game is an experiential learning business simulation game created by
          a group of professors at MIT Sloan School of Management in early 1960s to
          demonstrate a number of key principles of supply chain management.
        </p>
        <p>
          The overall aim in this version is to make as much revenue
          as possible until the end(12 rounds). And the only thing you
          need to do is to order for the upstream of this chain, but it may
          be not as simple as it looks like
        </p>
        <p>
          Your inventory and backlog are your enemies, try as much as you can
          to fulfill the order from downstream and get much bonus
        </p>
      </div>
      <div slot="footer" style="color:#f60;text-align:center">
        <Button
          type="error"
          size="large"
          long
          @click="chooseRoleMes()"
          style="text-align:center"
        >Start!</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      introDia: false
    };
  },
  methods: {
    chooseRoleMes() {
      this.$Message.info("Choose your role to begin");
      this.introDia = false;
    }
  },
  mounted() {
    setTimeout(() => {
      this.introDia = true;
    }, 1000);
  }
};
</script>

<style>
</style>
