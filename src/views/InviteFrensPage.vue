<template>
  <div class="container-boosts">
    <div class="page-title">Your referral link</div>
    <RefLink />
    <div class="page-title">Your frens</div>
    <div class="fren-container">
      <FrenPush />
      <FrenPush />
      <FrenPush />
      <FrenPush />
    </div>
  </div>
</template>
<script>
import RefLink from "../components/RefLink.vue";
import FrenPush from "../components/FrenPush.vue";

export default {
  name: "InviteFrensPage",
  components: {
    RefLink,
    FrenPush,
  },
};
</script>
<style></style>
