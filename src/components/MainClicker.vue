<template>
  <div id="root">
    <div class="container">
      <div class="main-block">
        <div class="achievement">
          <img class="achi-img" src="../assets/anonym.svg" />
          <div class="achievement-name">Hamster</div>
        </div>
        <div class="balance">
          <img class="bal-logo" src="../assets/Gcoinlogo.svg" />
          <div class="bal-count">113,337,488,732,231</div>
        </div>
        <div class="infopanel">
          <div class="infopanel-wrapper">
            <div class="infopanel-item-first">
              <div class="infopanel-item">
                <img src="../assets/block.svg" />
                <div class="item-var">3/4</div>
              </div>
              <div class="clock-block">
                <LottieAnimation
                  :animationData="animationData"
                  color="#E77812"
                />
                <div class="timer">90s.</div>
              </div>
            </div>
            <div class="infopanel-item">
              <img src="../assets/buffer.svg" />
              <div class="item-var">256</div>
            </div>
            <div class="infopanel-item">
              <img src="../assets/tap.svg" />
              <div class="item-var">+1</div>
            </div>
          </div>
        </div>
      </div>
      <div class="tap-container">
        <div class="tap-wrapper">
          <img class="tapper" id="tapper" src="../assets/main_tapper.svg" />
        </div>
      </div>

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
    </div>
  </div>
</template>

<script>
import LottieAnimation from "./LottieAnimation.vue";
import animationData from "../assets/menu_secret_chat.json";

export default {
  name: "MainClicker",
  components: {
    LottieAnimation,
  },
  data() {
    return {
      animationData,
    };
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  min-height: calc(100dvh + 1px);
  height: 100vh;
  max-width: 420px;
}

.main-block {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

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

.balance {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.bal-logo {
  width: 32px;
  height: auto;
}
.bal-count {
  color: white;
  font-size: 32px;
  font-weight: 700;
}

.infopanel {
  display: block;
}

.infopanel-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
}

.infopanel-item-first {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.infopanel-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.clock-block {
  /* visibility: hidden; */
  display: flex;
  align-items: center;
  gap: 5px;
}

.timer {
  font-size: 10px;
  color: #e77812;
}

.item-var {
  color: white;
}

.tap-wrapper {
  display: flex;
  justify-content: center;
}

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
