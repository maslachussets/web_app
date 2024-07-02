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
  mounted() {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.BackButton.show();
    }
  },
  methods: {
    goBack() {
      if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.BackButton.hide();
      }
      this.$router.go(-1); // Возвращаемся на предыдущую страницу
    },
  },
};
</script>
<style></style>
