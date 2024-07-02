<template>
  <div class="test-item">
    <div class="item-pic"><img src="../assets/Plus.svg" /></div>
    <div class="item-name">Empty</div>
  </div>
</template>
<script>
export default {
  name: "NftBoost",
};
</script>
<style>
.test-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.item-pic {
  width: 110px;
  height: 110px;
  border: dashed 1px #2e2e2e;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-name {
  font-size: 12px;
  font-weight: 400;
  color: #2e2e2e;
}
</style>
