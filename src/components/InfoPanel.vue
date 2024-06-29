<template>
  <div class="infopanel">
    <div class="infopanel-wrapper">
      <div class="infopanel-item-first">
        <div class="infopanel-item">
          <img src="../assets/block.svg" />
          <div class="item-var">
            {{ Math.ceil(remainingEnergy / energyPerBlock) }}/{{
              totalEnergyBlocks
            }}
          </div>
        </div>
        <div class="clock-block" :class="{ hidden: nextRestoreTime === 0 }">
          <LottieAnimation :animationData="animationData" color="#E77812" />
          <div class="timer">{{ formattedTime }}</div>
        </div>
      </div>
      <div class="infopanel-item">
        <img src="../assets/buffer.svg" />
        <div class="item-var">{{ tapCount }}</div>
      </div>
      <div class="infopanel-item">
        <img src="../assets/tap.svg" />
        <div class="item-var">{{ tapValue }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import LottieAnimation from "./LottieAnimation.vue";
import animationData from "../assets/menu_secret_chat.json";

export default {
  name: "InfoPanel",
  components: {
    LottieAnimation,
  },
  props: {
    tapCount: {
      type: Number,
      required: true,
    },
    tapValue: {
      type: Number,
      required: true,
    },
    remainingEnergy: {
      type: Number,
      required: true,
    },
    nextRestoreTime: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      animationData,
      energyPerBlock: 256,
      totalEnergyBlocks: 4,
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.nextRestoreTime / 60000);
      const seconds = Math.floor((this.nextRestoreTime % 60000) / 1000);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
  },
};
</script>

<style scoped>
.infopanel {
  display: block;
}

.infopanel-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
}

.infopanel-item-first {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.infopanel-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.clock-block {
  display: flex;
  align-items: center;
  gap: 5px;
  height: 10px; /* Установите фиксированную высоту для резервирования пространства */
}

.clock-block.hidden {
  visibility: hidden; /* Скрываем таймер, но сохраняем пространство */
}

.timer {
  font-size: 10px;
  color: #e77812;
}

.item-var {
  color: white;
}
</style>
