<template>
  <div class="container-leader">
    <div class="page-title">Leaderboard</div>
    <div class="leader-wrapper">
      <LeaderItem
        v-for="leader in leaders"
        :key="leader.place"
        :place="leader.place"
        :username="leader.username"
        :balance="leader.balance"
        :achievement="leader.achievement"
      />
    </div>
    <CurrentUserPlace />
  </div>
</template>

<script>
import LeaderItem from "../components/LeaderItem.vue";
import eventBus from "../eventBus";
import CurrentUserPlace from "../components/CurrentUserPlace.vue";

export default {
  name: "LeaderboardPage",
  components: {
    LeaderItem,
    CurrentUserPlace,
  },
  mounted() {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.BackButton.show();
    }
  },
  data() {
    return {
      leaders: [],
    };
  },
  created() {
    eventBus.on("updateLeaderboard", this.updateLeaderboard);
    eventBus.emit("fetchLeaderboard");
  },
  beforeUnmount() {
    eventBus.off("updateLeaderboard", this.updateLeaderboard);
  },
  methods: {
    updateLeaderboard(leaders) {
      this.leaders = leaders;
    },
    goBack() {
      if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.BackButton.hide();
      }
      this.$router.go(-1); // Возвращаемся на предыдущую страницу
    },
  },
};
</script>

<style scoped>
.container-leader {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  padding-top: 10px;
  min-height: calc(100dvh + 1px);
  height: 100vh;
  max-width: 768px;
  width: 100%; /* Добавлено для полной ширины */
}

.leader-wrapper {
  overflow-y: auto;
}

.page-title {
  color: white;
  font-size: 12px;
  font-weight: 400;
  padding-left: 20px;
}

.leader-wrapper {
  display: block;
}
</style>
