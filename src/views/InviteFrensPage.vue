<template>
  <div class="container-boosts">
    <div class="page-title">Your referral link</div>
    <RefLink />
    <div class="page-title">Your frens</div>
    <div class="fren-container">
      <FrenPush
        v-for="(transaction, index) in transactions"
        :key="index"
        :description="transaction.description"
        :amount="transaction.amount"
        :type="transaction.type"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RefLink from "../components/RefLink.vue";
import FrenPush from "../components/FrenPush.vue";

export default {
  name: "InviteFrensPage",
  components: {
    RefLink,
    FrenPush,
  },
  data() {
    return {
      transactions: [],
    };
  },
  mounted() {
    this.fetchTransactions();

    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.BackButton.show();
      window.Telegram.WebApp.BackButton.onClick(this.goBack);
    }
  },
  beforeUnmount() {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.BackButton.hide();
      window.Telegram.WebApp.BackButton.offClick(this.goBack);
    }

    if (this.fetchInterval) {
      clearInterval(this.fetchInterval);
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Возвращаемся на предыдущую страницу
    },
    fetchTransactions() {
      axios
        .get("http://your-api-endpoint/transactions") // Замените на ваш фактический API-эндпоинт
        .then((response) => {
          this.transactions = response.data;
        })
        .catch((error) => {
          console.error("Error fetching transactions:", error);
        });

      // Устанавливаем интервал для периодического запроса данных
      this.fetchInterval = setInterval(() => {
        axios
          .get("http://your-api-endpoint/transactions")
          .then((response) => {
            this.transactions = response.data;
          })
          .catch((error) => {
            console.error("Error fetching transactions:", error);
          });
      }, 10000); // Запрос каждые 10 секунд
    },
  },
};
</script>

<style>
/* ваши стили */
</style>
