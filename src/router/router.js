import Vue from 'vue'
import Router from 'vue-router'
import Game from "@/components/Game.vue" 
import ChooseRole from "@/components/ChooseRole.vue"
import Rank from "@/components/Rank.vue"

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'chooserole',
      component: ChooseRole,
      alias: '/index',
    },
    {
      path: "/game",
      name: "game",
      component: Game
    },
    {
      path: "/rank",
      name: "rank",
      component: Rank
    }
  ]
})
