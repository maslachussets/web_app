<template>
  <div class="leader-item">
    <div class="leader-left">
      <img class="boost-ico" src="../assets/tap.svg" />
      <div class="lead-info">
        <div class="boost-name">Tap Multiplier lvl.2</div>
        <div class="bal-state">
          <img class="logo-micro" src="../assets/Gcoinlogo.svg" />
          <div class="leader-balance">1,024</div>
        </div>
      </div>
    </div>
    <div class="leader-right">
      <button class="button-medium">Buy</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "DefaultBoost",
};
</script>
<style>
.boost-name {
  color: white;
  font-size: 12px;
  font-weight: 700;
}

.button-medium {
  width: 100px;
  height: 30px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 400;
}
</style>
