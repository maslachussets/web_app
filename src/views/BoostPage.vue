<template>
  <div class="container-boosts">
    <div class="page-title">Default Boosts</div>
    <DefaultBoost />
    <div class="page-title">Your Wallet</div>
    <ConnectWallet />
    <div class="page-title">NFT-Boosts</div>
    <div class="NFT-container">
      <div class="NFT-grid">
        <NftBoost />
        <NftBoost />
        <NftBoost />
      </div>
    </div>
    <div class="page-title">Missions</div>
    <div class="mis-container">
      <MissionItem />
    </div>
  </div>
</template>
<script>
import DefaultBoost from "../components/DefaultBoost.vue";
import ConnectWallet from "../components/ConnectWallet.vue";
import MissionItem from "../components/MissionItem.vue";
import NftBoost from "../components/NftBoost.vue";

export default {
  name: "BoostPage",
  components: {
    DefaultBoost,
    ConnectWallet,
    MissionItem,
    NftBoost,
  },
  mounted() {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.BackButton.show();
      window.Telegram.WebApp.BackButton.onClick(this.goBack); // Добавляем обработчик события для кнопки "Назад"
    }
  },
  beforeUnmount() {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.BackButton.hide();
      window.Telegram.WebApp.BackButton.offClick(this.goBack); // Убираем обработчик события при размонтировании
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Возвращаемся на предыдущую страницу
    },
  },
};
</script>
<style>
.container-boosts {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  padding-top: 10px;
  max-width: 768px;
  width: 100%;
}
.page-title {
  color: white;
  font-size: 12px;
  font-weight: 400;
  padding-left: 20px;
}

.NFT-container {
  width: 100%;
  background-color: #111111;
  padding: 20px;
}

.NFT-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */
  gap: 10px;
}

.tc-root {
  all: unset;
}

.tc-root * {
  all: unset;
}
</style>
