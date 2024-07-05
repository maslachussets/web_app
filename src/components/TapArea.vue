<template>
  <div
    ref="tapContainer"
    class="tap-container"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @touchcancel="handleTouchEnd"
  >
    <div
      class="plus-one"
      v-for="plusOne in plusOnes"
      :key="plusOne.id"
      :style="plusOne.style"
    >
      +{{ tapValue }}
    </div>
    <div
      class="gradient"
      v-for="gradient in gradients"
      :key="gradient.id"
      :style="gradient.style"
    ></div>
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
      gradients: [],
    };
  },
  methods: {
    handleTouchStart(event) {
      if (this.remainingEnergy <= 0) {
        return; // Не обрабатываем тап, если нет энергии
      }
      this.activeTouches += event.changedTouches.length;
      this.showPlusOne(event.changedTouches);
      this.showGradient(event.changedTouches);
      this.emitTapEvent();
      this.triggerVibration();
      this.consumeEnergy();
    },
    handleTouchEnd(event) {
      this.activeTouches -= event.changedTouches.length;
      if (this.activeTouches < 0) {
        this.activeTouches = 0;
      }
    },
    showPlusOne(touches) {
      const rect = this.$refs.tapContainer.getBoundingClientRect();
      Array.from(touches).forEach((touch) => {
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
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
    showGradient(touches) {
      const rect = this.$refs.tapContainer.getBoundingClientRect();
      Array.from(touches).forEach((touch) => {
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        const id = Date.now() + Math.random(); // Уникальный идентификатор для каждого элемента
        const color = `hsl(${Math.random() * 360}, 100%, 75%)`; // Рандомный цвет
        const gradient = {
          id,
          style: {
            position: "absolute",
            left: `${x - 50}px`,
            top: `${y - 50}px`,
            width: "100px",
            height: "100px",
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            opacity: 0,
            transform: "scale(0.5)",
            transition: "transform 0.5s ease-out, opacity 1s ease-out",
          },
        };
        this.gradients.push(gradient);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            gradient.style.opacity = 1;
            gradient.style.transform = "scale(1)";
          });
        });
        setTimeout(() => {
          gradient.style.opacity = 0;
          gradient.style.transform = "scale(1.5)";
          setTimeout(() => {
            this.gradients = this.gradients.filter((g) => g.id !== id);
          }, 1000);
        }, 500);
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
        window.Telegram.WebApp.HapticFeedback.impactOccurred("medium");
      } else if (navigator.vibrate) {
        navigator.vibrate(200); // Вибрация на 200 миллисекунд
      }
    },
    consumeEnergy() {
      this.$emit("consumeEnergy");
    },
  },
};
</script>

<style scoped>
.tap-container {
  position: relative;
  width: 100%;
  height: 290px;
  touch-action: none;
  border: dashed 1px #2e2e2e;
  border-radius: 16px;
}
.plus-one {
  font-size: 24px;
  font-weight: bold;
  color: white;
  pointer-events: none;
  user-select: none;
}

.gradient {
  border-radius: 50%;
  pointer-events: none;
  user-select: none;
}
</style>
