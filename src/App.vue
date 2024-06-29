<template>
  <div id="app">
    <div id="root">
      <div class="container">
        <div class="main-block">
          <PlayerAchiv />
          <PlayerBal :balCount="balCount" />
          <InfoPanel
            :tapCount="tapCount"
            :tapValue="tapValue"
            :remainingEnergy="remainingEnergy"
            :nextRestoreTime="nextRestoreTime"
          />
        </div>
        <TapConfig
          ref="tapConfig"
          @updateTapValue="updateTapValue"
          @updateEnergy="updateEnergy"
          @updateBalance="updateBalance"
        />
        <TapArea
          :tapValue="tapValue"
          :remainingEnergy="remainingEnergy"
          @tap="handleTap"
          @consumeEnergy="consumeEnergy"
        />
        <ButtonBlock />
      </div>
    </div>
  </div>
</template>

<script>
import PlayerAchiv from "./components/PlayerAchiv.vue";
import PlayerBal from "./components/PlayerBal.vue";
import InfoPanel from "./components/InfoPanel.vue";
import TapArea from "./components/TapArea.vue";
import ButtonBlock from "./components/ButtonBlock.vue";
import TapConfig from "./components/TapConfig.vue";

export default {
  name: "App",
  components: {
    PlayerAchiv,
    PlayerBal,
    InfoPanel,
    TapArea,
    ButtonBlock,
    TapConfig,
  },
  data() {
    return {
      tg: null,
      tapCount: 0,
      tapValue: 1, // Значение будет обновлено из TapConfig
      remainingEnergy: 4 * 256, // Значение будет обновлено из TapConfig
      nextRestoreTime: 0,
      balCount: "0", // Начальное значение баланса
    };
  },
  mounted() {
    if (window.Telegram && window.Telegram.WebApp) {
      this.tg = window.Telegram.WebApp;
      this.tg.ready();
    }
  },
  methods: {
    handleTap(value) {
      this.tapCount += value; // Увеличиваем счетчик касаний на стоимость одного тапа
    },
    updateTapValue(value) {
      this.tapValue = value; // Обновляем стоимость одного тапа
    },
    updateEnergy(value) {
      this.remainingEnergy = value;
      if (this.remainingEnergy % 256 === 0 && this.remainingEnergy < 4 * 256) {
        this.startRestoreTimer();
      }
    },
    consumeEnergy() {
      if (this.remainingEnergy > 0) {
        this.remainingEnergy -= 1;
        if (
          this.remainingEnergy % 256 === 0 &&
          this.remainingEnergy < 4 * 256
        ) {
          this.startRestoreTimer();
        }
      }
    },
    startRestoreTimer() {
      const timerDuration = 15000; // 15 секунд
      if (this.nextRestoreTime === 0) {
        this.nextRestoreTime = timerDuration;
      } else {
        this.nextRestoreTime += timerDuration;
      }

      const interval = setInterval(() => {
        this.nextRestoreTime -= 1000;
        if (this.nextRestoreTime <= 0) {
          clearInterval(interval);
          this.remainingEnergy += 256;
          if (this.remainingEnergy > 4 * 256) {
            this.remainingEnergy = 4 * 256;
          }
        }
      }, 1000);
    },
    updateBalance(balance) {
      this.balCount = balance;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  user-select: none; /* Стандартное свойство */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  --tg-viewport-height: 100vh;
  --tg-viewport-stable-height: 100vh;
}

body {
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #000000;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  min-height: calc(100dvh + 1px);
  height: 100vh;
  max-width: 420px;
}

.main-block {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
