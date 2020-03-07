import { RouteConfig } from 'vue-router'
import landingRoutes from './landing-routes'
import loginRoutes from './login-routes'
import userRoutes from './user-routes'
import articleRoutes from './article-routes'

const routes: RouteConfig[] = [
  ...landingRoutes,
  ...loginRoutes,
  ...userRoutes,
  ...articleRoutes
]

export default routes
