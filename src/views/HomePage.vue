<template>
  <div id="root">
    <div class="container" ref="scrollableEl">
      <div class="main-block">
        <PlayerAchiv
          :achievementName="achievementName"
          @click="goToLeaderboard"
        />
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
        @tapCountSent="handleTapCountSent"
        @updateAchievement="updateAchievement"
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
</template>

<script>
import PlayerAchiv from "../components/PlayerAchiv.vue";
import PlayerBal from "../components/PlayerBal.vue";
import InfoPanel from "../components/InfoPanel.vue";
import TapArea from "../components/TapArea.vue";
import ButtonBlock from "../components/ButtonBlock.vue";
import TapConfig from "../components/TapConfig.vue";

export default {
  name: "HomePage",
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
      tapCount: 0,
      tapValue: 1,
      remainingEnergy: 4 * 256,
      nextRestoreTime: 0,
      balCount: "0",
      achievementName: "Newbie",
      ts: undefined,
      scrollableEl: null,
    };
  },
  mounted() {
    this.scrollableEl = this.$refs.scrollableEl;

    document.documentElement.addEventListener("touchstart", this.onTouchStart, {
      passive: false,
    });

    document.documentElement.addEventListener("touchmove", this.onTouchMove, {
      passive: false,
    });
  },
  beforeUnmount() {
    document.documentElement.removeEventListener(
      "touchstart",
      this.onTouchStart
    );
    document.documentElement.removeEventListener("touchmove", this.onTouchMove);
  },
  methods: {
    onTouchStart(e) {
      this.ts = e.touches[0].clientY;
    },
    onTouchMove(e) {
      if (this.scrollableEl) {
        const scroll = this.scrollableEl.scrollTop;
        const te = e.changedTouches[0].clientY;

        if (scroll <= 0 && this.ts < te) {
          e.preventDefault();
        }
      } else {
        e.preventDefault();
      }
    },
    handleTap(value) {
      this.tapCount += value;
      if (this.tapCount >= 256) {
        this.$refs.tapConfig.sendTapCountToBackend(this.tapCount);
        this.tapCount = 0;
      }
    },
    updateTapValue(value) {
      this.tapValue = value;
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
      const timerDuration = 15000;
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
    handleTapCountSent() {
      console.log("Tap count sent successfully");
    },
    updateBalance(balance) {
      this.balCount = balance;
    },
    updateAchievement(achievementName) {
      this.achievementName = achievementName;
    },
    goToLeaderboard() {
      this.$router.push({ name: "LeaderboardPage" });
    },
  },
};
</script>

<style scoped>
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
  max-width: 768px;
  touch-action: none; /* Убирает прокруты на айфоне, если будет хуево отображаться, то удалить */
}

.main-block {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
