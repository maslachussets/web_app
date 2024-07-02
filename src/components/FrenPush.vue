<template>
  <div class="leader-item">
    <div class="leader-left">
      <img class="fren-ico" src="../assets/fren_ico.svg" />
      <div class="lead-info">
        <div class="fren-user">@root</div>
        <div class="bal-state">
          <div class="fren-activity">Join</div>
        </div>
      </div>
    </div>
    <div class="leader-right">
      <div class="reward">+256</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FrenPush",
};
</script>
<style>
.fren-ico {
  width: 21px;
  height: auto;
}

.fren-activity {
  color: #1ad64a;
  font-size: 12px;
  font-weight: 400;
}

.fren-user {
  color: white;
  font-size: 12px;
  font-weight: 400;
}

.reward {
  color: #1ad64a;
  font-size: 16px;
  font-weight: 700;
}
</style>
