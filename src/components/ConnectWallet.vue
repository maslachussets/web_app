<template>
  <div class="leader-item">
    <div class="leader-left">
      <img class="boost-ico" src="../assets/wallet_ico.svg" />
      <div class="lead-info">
        <div class="boost-name">Current Wallet:</div>
        <div v-if="walletAddress" class="wallet-address">
          {{ walletAddress }}
        </div>
      </div>
    </div>
    <div class="leader-right">
      <button class="button-medium" @click="openConnectUI">Connect</button>
    </div>
  </div>
</template>

<script>
import { TonConnectUI } from "@tonconnect/ui";

export default {
  name: "ConnectWallet",
  data() {
    return {
      tonConnectUI: null,
      walletAddress: "",
    };
  },
  mounted() {
    if (!window.tonConnectUIInstance) {
      window.tonConnectUIInstance = new TonConnectUI({
        manifestUrl: `http://192.168.31.20:8080/manifest.json`,
      });

      window.tonConnectUIInstance.onStatusChange((wallet) => {
        if (wallet) {
          this.walletAddress = wallet.account.address;
        } else {
          this.walletAddress = "";
        }
      });
    }

    this.tonConnectUI = window.tonConnectUIInstance;
  },
  methods: {
    async openConnectUI() {
      try {
        await this.tonConnectUI.connectWallet();
      } catch (error) {
        if (error.message !== "Wallet was not connected") {
          console.error("Error connecting wallet:", error);
        }
      }
    },
  },
};
</script>
<style>
.wallet-address {
  color: white;
  font-size: 12px;
  font-weight: 400;
  word-break: break-all;
}

.tc-root {
  all: initial;
  font-family: initial;
  font-size: initial;
  color: initial;
  background: initial;
}

.tc-root * {
  all: initial;
  font-family: initial;
  font-size: initial;
  color: initial;
  background: initial;
}
</style>
