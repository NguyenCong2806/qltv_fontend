import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../components/layouts/AppMain.vue'),
    children:[
        {
            path: '/',
            name: 'dasboard',
            component: () => import(/* webpackChunkName: "about" */ '../components/pages/Dashboard.vue'),
        },
        {
            path: '/loaisach',
            name: 'loaisach',
            component: () => import(/* webpackChunkName: "about" */ '../components/pages/LoaiSach/LoaiSachView.vue'),
        },
    ]

  },
  {
    path: '/:catchAll(.*)*',
    component: () => import(/* webpackChunkName: "about" */ '../components/layouts/Errors404.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../components/pages/Login.vue'),
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;