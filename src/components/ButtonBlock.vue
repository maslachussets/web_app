<template>
  <div class="button-block">
    <div class="button-item">
      <button class="button-large" id="boost">
        <img class="button-icon" src="../assets/boost_ico.svg" />
        <div class="button-text">Boosts</div>
      </button>
    </div>
    <div class="button-item">
      <button class="button-large" id="fren">
        <img class="button-icon" src="../assets/fren_ico.svg" />
        <div class="button-text">Invite frens</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonBlock",
};
</script>

<style>
.button-block {
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.button-item {
  width: 100%;
  padding: 10px;
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

.button-large {
  width: 100%;
  border-radius: 100px;
}
</style>
