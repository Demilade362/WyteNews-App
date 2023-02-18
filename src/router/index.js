import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SportView from '../views/SportView.vue'
import BusinessView from '../views/BusinessView.vue'
import TechnologyView from '../views/TechnologyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomeView
    },

    {
      path: '/sports',
      name: 'sports',
      component: SportView
    },

    {
      path: '/business',
      name: 'business',
      component: BusinessView
    },

    {
      path: '/technology',
      name: 'technology',
      component: TechnologyView
    }
  ]
})

export default router
