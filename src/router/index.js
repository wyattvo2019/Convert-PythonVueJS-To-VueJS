import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from "@/views/Home.vue"
import PageNotFound from '@/views/PageNotFound.vue'
import AirportDetail from '@/views/AirportDetail.vue'
import AirportDestinations from '@/views/AirportDestinations.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/airport/:code',
    name: "AirportDetail",
    component: AirportDetail,
    children: [
			{
			  path: 'destinations',
				name: 'AirportDestinations',
				component: AirportDestinations
			}
		]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
