import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Import des pages
import HomeView from '../views/HomeView.vue'
import MyQuotes from '../views/MyQuotes.vue'
import CreateQuote from '../views/CreateQuote.vue'
import Quote from '../views/Quote.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,  
    },
    {
      path:'/quotes/:id',
      name:'Quote',
      component: Quote,
    }

  ],
})

export default router
