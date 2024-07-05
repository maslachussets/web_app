<template>
  <div class="leader-item">
    <div class="leader-left">
      <div class="lead-info">
        <div class="transaction-descr">{{ description }}</div>
      </div>
    </div>
    <div class="leader-right">
      <div :class="amountClass">+{{ formattedAmount }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FrenPush",
  props: {
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    formattedAmount() {
      const sign = this.type === "add" ? "+" : "-";
      return `${sign}${this.amount.toLocaleString()}`;
    },
    amountClass() {
      return this.type === "add" ? "reward-amount" : "penalty-amount";
    },
  },
};
</script>
<style>
.transaction-descr {
  color: white;
  font-size: 12px;
  font-weight: 400;
}

.reward-amount {
  color: #1ad64a;
  font-size: 16px;
  font-weight: 700;
}

.penalty-amount {
  color: #d64a1a;
  font-size: 16px;
  font-weight: 700;
}
</style>
