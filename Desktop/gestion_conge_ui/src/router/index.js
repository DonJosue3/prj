import { createRouter, createWebHistory } from 'vue-router'
import ListeEmployes from "../views/ListeEmployes.vue"
import listeeleve from "../views/listeeleve.vue"
import listevoiture from"../views/listevoiture.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/listeEmployes",
      name:"listeEmployes",
      component:ListeEmployes
    },{
      path:"/listeeleve",
      name:"listeeleve",
      component:listeeleve
    },{
      path:"/listevoiture",
      name:"listevoiture",
      component:listevoiture

    }
  ]
})

export default router
