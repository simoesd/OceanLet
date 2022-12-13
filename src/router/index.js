import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import ActivityView from '../views/ActivityView.vue'
import LocationView from '../views/LocationView.vue'
import SearchView from '../views/SearchView.vue'
import ListingView from '../views/ListingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPageView
    },    
    // these are passed to `createRouter`
    {
      path: '/activity/:activity',
      name: 'activity',
      component: ActivityView,
      props: true,
    },
    {
      path: '/location/:location',
      name: 'location',
      component: LocationView,
      props: true,
    },
    {
      path: '/listing/:listing',
      name: 'listings',
      component: ListingView,
      props: true,
    },
    {
      path: '/search/:searchTerm',
      name: 'search',
      component: SearchView,
      props: true,
    },
    {
      path: '/search/',
      name: 'searchNoResult',
      component: SearchView,
      props: true,
    },
    {
      // path: '/about',
      // name: 'about',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
