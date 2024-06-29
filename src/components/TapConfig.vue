<template>
  <div class="tap-config">
    <!-- Поле ввода удалено -->
  </div>
</template>

<script>
import { fetchUserState, fetchUserBalance } from "../mockBackend";

export default {
  name: "TapConfig",
  data() {
    return {
      tapValue: 1, // Значение будет заменено после получения данных с "бэкенда"
      totalEnergyBlocks: 4,
      energyPerBlock: 256,
      remainingEnergy: 4 * 256, // Значение будет заменено после получения данных с "бэкенда"
      restoreTimers: [],
      restoreTime: 15 * 1000, // 15 секунд в миллисекундах
    };
  },
  mounted() {
    this.fetchInitialState(); // Получение начального состояния с "бэкенда"
    this.fetchBalance(); // Получение баланса пользователя с "бэкенда"
  },
  methods: {
    fetchInitialState() {
      fetchUserState()
        .then((data) => {
          this.tapValue = data.tapValue;
          this.remainingEnergy = data.remainingEnergy;
          this.$emit("updateTapValue", this.tapValue);
          this.$emit("updateEnergy", this.remainingEnergy);
        })
        .catch((error) =>
          console.error("Error fetching initial state:", error)
        );
    },
    fetchBalance() {
      fetchUserBalance()
        .then((data) => {
          this.$emit("updateBalance", data.balance);
        })
        .catch((error) => console.error("Error fetching user balance:", error));
    },
    consumeEnergy() {
      if (this.remainingEnergy > 0) {
        this.remainingEnergy -= 1;
        this.$emit("updateEnergy", this.remainingEnergy);
        if (this.remainingEnergy % this.energyPerBlock === 0) {
          this.startRestoreTimer();
        }
      }
    },
    startRestoreTimer() {
      const timer = setTimeout(() => {
        this.remainingEnergy += this.energyPerBlock;
        this.$emit("updateEnergy", this.remainingEnergy);
        this.restoreTimers.shift();
      }, this.restoreTime);
      this.restoreTimers.push(timer);
    },
  },
};
</script>

<style scoped>
.tap-config {
  display: none; /* Скрываем компонент */
}
</style>
