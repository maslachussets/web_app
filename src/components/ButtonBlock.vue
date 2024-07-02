<template>
  <div class="button-block">
    <div class="button-item">
      <button class="button-large" id="boost" @click="goToBoosts">
        <img class="button-icon" src="../assets/boost_ico.svg" />
        <div class="button-text">Boosts</div>
      </button>
    </div>
    <div class="button-item">
      <button class="button-large" id="fren" @click="goToFrens">
        <img class="button-icon" src="../assets/fren_ico.svg" />
        <div class="button-text">Invite frens</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonBlock",
  methods: {
    goToBoosts() {
      this.$router.push({ name: "BoostPage" });
    },
    goToFrens() {
      this.$router.push({ name: "InviteFrensPage" });
    },
  },
};
</script>

<style>
.button-block {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 10px;
  max-width: 768px;
  padding: 10px;
}

.button-item {
  display: block;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 50px;
  background: #d71921;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: white;
  text-align: inherit;
  text-decoration: none;
  cursor: pointer;
  outline: none;

  /* Убираем фокусное выделение для некоторых браузеров */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* Убираем все тени, которые могут применяться в некоторых браузерах */
  box-shadow: none;
}

.button-text {
  font-size: 12px;
  font-weight: 400;
}

.button-large {
  width: 40vw;
  border-radius: 100px;
  max-width: 200px;
}
</style>
