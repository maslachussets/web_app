<template>
  <div class="current-user-position">
    <div class="current-user-position-wrapper">
      <div class="leader-item">
        <div class="leader-left">
          <div class="place-number">1,000,000</div>
          <div class="lead-info">
            <div class="leader-username">@batumis</div>
            <div class="bal-state">
              <img class="logo-micro" src="../assets/Gcoinlogo.svg" />
              <div class="leader-balance">1,488</div>
            </div>
          </div>
        </div>
        <div class="leader-right">
          <img class="leader-achi-img" :src="achievementImage" />
          <div class="leader-achievement-name">Newbie</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CurrentUserPlace", // я хуй знает как тут организовать передачу данных из других компонентов, чат гпт выдает какой-то кал
};
</script>
<style scoped>
.current-user-position {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 768px;
}
</style>
