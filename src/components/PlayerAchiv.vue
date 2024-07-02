<template>
  <div class="achievement">
    <img class="achi-img" :src="achievementImage" />
    <div class="achievement-name">{{ achievementName }}</div>
  </div>
</template>
<script>
export default {
  name: "PlayerAchiv",
  props: {
    achievementName: {
      type: String,
      required: true,
    },
  },
  computed: {
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
      return images[this.achievementName] || images.Newbie;
    },
  },
};
</script>
<style>
.achievement {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.achi-img {
  width: 30px;
  height: 30px;
}

.achievement-name {
  color: white;
  font-size: 16px;
}

.achievement-name::after {
  content: ">";
  margin-left: 10px;
}
</style>
