import { RouteConfig } from 'vue-router'
import LoginPage from '@/views/login-page.vue'
import RegisterPage from '@/views/register-page.vue'

const loginRoutes: RouteConfig[] = [
  { path: '/login', name: 'LoginPage', component: LoginPage, meta: { layout: 'login' } },
  { path: '/register', name: 'RegisterPage', component: RegisterPage, meta: { layout: 'login' } }
]

export default loginRoutes
