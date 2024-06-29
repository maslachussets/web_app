<template>
  <div class="achievement">
    <img class="achi-img" src="../assets/anonym.svg" />
    <div class="achievement-name">Hamster</div>
  </div>
</template>
<script>
export default {
  name: "PlayerAchiv",
};
</script>
<style>
.achievement {
  display: flex;
  justify-content: center;
  gap: 10px;
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
