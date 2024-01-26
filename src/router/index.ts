// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/Login.vue'),
      },
      {
        path: '/home_visit',
        name: 'table-homvisit',
        component: () => import('@/views/homevisit/Table.vue'),
      },
      {
        path: '/personal_care',
        name: 'table-persnalcare',
        component: () => import('@/views/personalcare/Table.vue'),
      },
      {
        path: '/adl',
        name: 'table-adl',
        component: () => import('@/views/adl/Table.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
