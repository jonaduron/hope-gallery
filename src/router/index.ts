import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Photo from '../views/Photo.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/photo/:id',
    name: 'Photo',
    component: Photo
  }
]

const router = new VueRouter({
  routes
})

export default router
