import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/order/Index.vue'),
    },
    {
      path: '/master-product',
      name: 'masterProduct',
      component: () => import('../views/master-product/Index.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/checkout/Index.vue'),
    },
  ],
})

export default router
