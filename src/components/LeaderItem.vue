<template>
  <div class="leader-item">
    <div class="leader-left">
      <div class="place-number">{{ place }}</div>
      <div class="lead-info">
        <div class="leader-username">{{ username }}</div>
        <div class="bal-state">
          <img class="logo-micro" src="../assets/Gcoinlogo.svg" />
          <div class="leader-balance">{{ formattedBalance }}</div>
        </div>
      </div>
    </div>
    <div class="leader-right">
      <img class="leader-achi-img" :src="achievementImage" />
      <div class="leader-achievement-name">{{ achievement }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LeaderItem",
  props: {
    place: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    achievement: {
      type: String,
      required: true,
    },
  },
  computed: {
    formattedBalance() {
      return this.balance.toLocaleString();
    },
    achievementImage() {
      const images = {
        Newbie: require("../assets/rack.png"),
        Enthusiast: require("../assets/rock.png"),
        Master: require("../assets/rocket.png"),
        Grandmaster: require("../assets/Diamond.png"),
        Legend: require("../assets/edinorog.png"),
        Whale: require("../assets/kit.png"),
        MrBeast: require("../assets/beast.png"),
      };
      return images[this.achievement] || images.Newbie;
    },
  },
};
</script>
<style>
.leader-item {
  width: 100%;
  height: 60px;
  background-color: #111111;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
}

.leader-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.place-number {
  color: white;
  font-size: 24px;
}

.lead-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.leader-username {
  color: white;
  font-size: 12px;
  font-weight: 400;
}

.bal-state {
  display: flex;
  align-items: center;
  gap: 5px;
}

.logo-micro {
  width: 12px;
  height: 12px;
}

.leader-balance {
  font-size: 12px;
  font-weight: 400;
  color: white;
}

.leader-right {
  display: flex;
  align-items: center;
  gap: 5px;
}

.leader-achi-img {
  width: 20px;
  height: 20px;
}

.leader-achievement-name {
  font-size: 12px;
  color: white;
  font-weight: 700;
}
</style>
