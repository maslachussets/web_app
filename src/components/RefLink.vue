<template>
  <div class="link-item">
    <div class="leader-left">
      <img class="boost-ico" src="../assets/link_ico.svg" />
      <div class="lead-info">
        <div class="ref-link">
          https://t.me/glyph_app_bot/start?startapp=r14325462982
        </div>
      </div>
    </div>
    <div class="leader-right">
      <button class="button-medium" @click="copyLink">Copy</button>
    </div>
    <div v-if="showNotification" class="notification">Link copied!</div>
  </div>
</template>

<script>
export default {
  name: "RefLink",
  data() {
    return {
      showNotification: false,
    };
  },
  methods: {
    copyLink() {
      const link = "https://t.me/glyph_app_bot/start?startapp=r14325462982";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(link)
          .then(() => {
            this.showCopiedNotification();
            this.triggerVibration();
          })
          .catch((err) => {
            console.error("Failed to copy: ", err);
            this.fallbackCopyTextToClipboard(link);
          });
      } else {
        this.fallbackCopyTextToClipboard(link);
      }
    },
    fallbackCopyTextToClipboard(text) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; // Avoid scrolling to bottom
      textArea.style.opacity = "0"; // Make it invisible
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand("copy");
        if (successful) {
          this.showCopiedNotification();
          this.triggerVibration();
        } else {
          console.error("Fallback: Oops, unable to copy");
        }
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
      document.body.removeChild(textArea);
    },
    showCopiedNotification() {
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, 2000); // Уведомление будет отображаться 2 секунды
    },
    triggerVibration() {
      if (
        window.Telegram &&
        window.Telegram.WebApp &&
        window.Telegram.WebApp.HapticFeedback
      ) {
        window.Telegram.WebApp.HapticFeedback.impactOccurred("medium");
      } else if (navigator.vibrate) {
        navigator.vibrate(200); // Вибрация на 200 миллисекунд
      }
    },
  },
};
</script>

<style scoped>
.link-item {
  width: 100%;
  background-color: #111111;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  padding: 0 20px 0 20px;
}
.ref-link {
  color: white;
  font-size: 12px;
  font-weight: 400;
  word-break: break-all;
  padding: 10px;
}
.notification {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #111111;
  color: white;
  padding: 10px 20px;
  border-radius: 16px;
  font-size: 12px;
  z-index: 1000;
}
</style>
