<template>
  <div class="balance">
    <img class="bal-logo" src="../assets/Gcoinlogo.svg" />
    <div :class="['bal-count', fontSizeClass]">{{ formattedBalCount }}</div>
  </div>
</template>

<script>
export default {
  name: "PlayerBal",
  props: {
    balCount: {
      type: String,
      required: true,
      default: "0", // Добавлен дефолтное значение
    },
  },
  computed: {
    fontSizeClass() {
      if (!this.balCount) return "font-size-normal";
      const length = this.balCount.length;
      if (length > 18) return "font-size-smallest";
      if (length > 15) return "font-size-smaller";
      if (length > 12) return "font-size-small";
      return "font-size-normal";
    },
    formattedBalCount() {
      // Разбиваем строку на части по 3 символа справа налево
      return this.balCount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style scoped>
.balance {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.bal-logo {
  width: 32px;
  height: 32px;
}

.bal-count {
  color: white;
  font-weight: 700;
  transition: font-size 0.3s ease;
}

.font-size-normal {
  font-size: 32px;
}

.font-size-small {
  font-size: 28px;
}

.font-size-smaller {
  font-size: 24px;
}

.font-size-smallest {
  font-size: 20px;
}
</style>
