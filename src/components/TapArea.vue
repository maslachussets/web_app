<template>
  <div
    class="tap-container"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @touchcancel="handleTouchEnd"
  >
    <div class="tap-wrapper">
      <img
        ref="tapper"
        class="tapper"
        id="tapper"
        src="../assets/main_tapper.svg"
      />
    </div>
    <div
      class="plus-one"
      v-for="plusOne in plusOnes"
      :key="plusOne.id"
      :style="plusOne.style"
    >
      +{{ tapValue }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TapArea",
  props: {
    tapValue: {
      type: Number,
      default: 1,
    },
    remainingEnergy: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      activeTouches: 0,
      plusOnes: [],
    };
  },
  methods: {
    handleTouchStart(event) {
      if (this.remainingEnergy <= 0) {
        return; // Не обрабатываем тап, если нет энергии
      }
      this.activeTouches += event.changedTouches.length;
      this.updateScale();
      this.showPlusOne(event.changedTouches);
      this.emitTapEvent();
      this.triggerVibration();
      this.consumeEnergy();
    },
    handleTouchEnd(event) {
      this.activeTouches -= event.changedTouches.length;
      if (this.activeTouches < 0) {
        this.activeTouches = 0;
      }
      this.updateScale();
    },
    updateScale() {
      if (this.activeTouches > 0) {
        this.$refs.tapper.style.transform = `scale(0.985)`; // Уменьшение размера при касании
      } else {
        this.$refs.tapper.style.transform = `scale(1)`; // Возвращение к исходному размеру
      }
    },
    showPlusOne(touches) {
      Array.from(touches).forEach((touch) => {
        const x = touch.clientX;
        const y = touch.clientY;
        const id = Date.now() + Math.random(); // Уникальный идентификатор для каждого элемента
        const plusOne = {
          id,
          style: {
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
            opacity: 1,
            transform: "translateY(0)",
            transition: "transform 0.8s ease-out, opacity 1s ease-out",
          },
        };
        this.plusOnes.push(plusOne);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            plusOne.style.opacity = 0;
            plusOne.style.transform = "translateY(-100px)";
          });
        });
        setTimeout(() => {
          this.plusOnes = this.plusOnes.filter((p) => p.id !== id);
        }, 1000);
      });
    },
    emitTapEvent() {
      this.$emit("tap", this.tapValue);
    },
    triggerVibration() {
      if (
        window.Telegram &&
        window.Telegram.WebApp &&
        window.Telegram.WebApp.HapticFeedback
      ) {
        window.Telegram.WebApp.HapticFeedback.impactOccurred("light");
      }
    },
    consumeEnergy() {
      this.$emit("consumeEnergy");
    },
  },
};
</script>

<style scoped>
.tap-wrapper {
  display: flex;
  justify-content: center;
}
.tapper {
  transition: transform 0.01s ease-in-out;
}
.plus-one {
  font-size: 24px;
  font-weight: bold;
  color: white;
  pointer-events: none;
  user-select: none;
}
</style>
