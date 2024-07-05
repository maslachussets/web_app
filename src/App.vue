<template>
  <div id="app">
    <router-view></router-view>
    <TapConfig />
  </div>
</template>

<script>
import TapConfig from "./components/TapConfig.vue";

export default {
  name: "App",
  components: {
    TapConfig,
  },
  mounted() {
    if (window.Telegram && window.Telegram.WebApp) {
      this.tg = window.Telegram.WebApp;
      this.tg.ready();

      // Обработка кнопки "Назад"
      this.tg.BackButton.onClick(() => {
        this.$router.go(-1); // Возвращаемся на предыдущую страницу
      });
    }
    this.tg.initDataUnsafe;
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  --tg-viewport-height: 100vh;
  --tg-viewport-stable-height: 100vh;
}

body {
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #000000;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}
</style>
