import { RouteConfig } from 'vue-router'
import LandingPage from '@/views/landing-page.vue'

const landingRoutes: RouteConfig[] = [
  { path: '/', name: 'LandingPage', component: LandingPage }
]

export default landingRoutes
