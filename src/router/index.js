import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue'
import CharacterView from '@/views/CharacterView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  scrollBehavior() {
    return { top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/kategorie/:id',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/postavy/:id',
      name: 'character',
      component: CharacterView
    },
    {
      path: '/o-strance',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
