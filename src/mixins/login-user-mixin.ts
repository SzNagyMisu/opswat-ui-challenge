import { Vue, Component as Mixin } from 'vue-property-decorator'
import { User } from '@/types'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/constants'

@Mixin
export default class LoginUserMixin extends Vue {
  loginUser (userData: User): void {
    this.$store.dispatch('currentUser/set', userData)
    window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, userData.token || '')
    this.$router.push({ name: 'LandingPage' })
  }
}
