import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LeaderboardPage from "../views/LeaderboardPage.vue";
import BoostPage from "../views/BoostPage.vue";
import InviteFrensPage from "../views/InviteFrensPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/leaderboard",
    name: "LeaderboardPage",
    component: LeaderboardPage,
  },
  {
    path: "/boosts",
    name: "BoostPage",
    component: BoostPage,
  },
  {
    path: "/frens",
    name: "InviteFrensPage",
    component: InviteFrensPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
