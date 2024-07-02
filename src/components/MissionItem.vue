<template>
  <div class="leader-item">
    <div class="leader-left">
      <img class="boost-ico" src="../assets/mission.svg" />
      <div class="lead-info">
        <div class="mission-name">Connect Wallet</div>
        <div class="bal-state">
          <img class="logo-micro" src="../assets/Gcoinlogo.svg" />
          <div class="leader-balance">2,048</div>
        </div>
      </div>
    </div>
    <div class="leader-right">
      <button class="button-medium">Check</button>
    </div>
  </div>
  <div class="leader-item">
    <div class="leader-left">
      <img class="boost-ico" src="../assets/mission.svg" />
      <div class="lead-info">
        <div class="mission-name">Buy NFT-Boost</div>
        <div class="bal-state">
          <img class="logo-micro" src="../assets/Gcoinlogo.svg" />
          <div class="leader-balance">16,384</div>
        </div>
      </div>
    </div>
    <div class="leader-right">
      <button class="button-medium">Check</button>
    </div>
  </div>
  <div class="leader-item">
    <div class="leader-left">
      <img class="boost-ico" src="../assets/mission.svg" />
      <div class="lead-info">
        <div class="mission-name">Subscribe to the TG Channel</div>
        <div class="bal-state">
          <img class="logo-micro" src="../assets/Gcoinlogo.svg" />
          <div class="leader-balance">1,024</div>
        </div>
      </div>
    </div>
    <div class="leader-right">
      <button class="button-medium">Check</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "MissionItem",
};
</script>
<style>
.mission-name {
  color: white;
  font-size: 12px;
  font-weight: 700;
}
</style>
