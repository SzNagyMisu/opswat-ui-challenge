import ProfilePage from '@/views/profile-page.vue'
import DeleteUserPage from '@/views/delete-user-page.vue'

export default [
  { path: '/profile', name: 'ProfilePage', component: ProfilePage },
  { path: '/delete-user', name: 'DeleteUserPage', component: DeleteUserPage }
]
