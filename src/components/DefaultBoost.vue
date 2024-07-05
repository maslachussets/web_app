<template>
  <div class="leader-item">
    <div class="leader-left">
      <img class="boost-ico" src="../assets/tap.svg" />
      <div class="lead-info">
        <div class="boost-name">Tap Multiplier {{ level }}</div>
        <div class="bal-state">
          <img class="logo-micro" src="../assets/Gcoinlogo.svg" />
          <div class="leader-balance">{{ balance }}</div>
        </div>
      </div>
    </div>
    <div class="leader-right">
      <button class="button-medium" @click="buyBoost">Buy</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DefaultBoost",
  data() {
    return {
      level: "", // Initialize as an empty string or default value
      balance: "", // Initialize as an empty string or default value
    };
  },
  mounted() {
    this.fetchBoostData();
  },
  methods: {
    async fetchBoostData() {
      try {
        const response = await axios.get("https://your-api-endpoint.com/boost");
        this.level = response.data.level; // Adjust based on your API response
        this.balance = response.data.balance; // Adjust based on your API response
      } catch (error) {
        console.error("Error fetching boost data:", error);
      }
    },
    buyBoost() {
      // Implement buy functionality here
    },
  },
};
</script>

<style>
.boost-name {
  color: white;
  font-size: 12px;
  font-weight: 700;
}
</style>
