<template lang="pug">
q-layout#main-layout.row
  q-page-container.col.q-px-md
    q-toolbar.bg-primary.text-white
      q-btn(:to="{ name: 'LandingPage' }" flat icon="home")/
      q-toolbar-title UI Challenge
      q-btn-dropdown(flat label="users")
        q-list
          q-item(clickable v-close-popup :to="{ name: 'DeleteUserPage' }")
            q-item-section
              q-item-label Delete User
      q-btn-dropdown(flat :label="currentUserData" no-caps)
        q-list
          q-item(clickable v-close-popup :to="{ name: 'ProfilePage' }")
            q-item-section
              q-item-label Profile
          q-item(clickable v-close-popup @click="logout")
            q-item-section
              q-item-label Log out
    router-view/
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { LOCAL_STORAGE_TOKEN_KEY } from '@/constants'
import userService from '@/services/user-service'
import { User } from '@/types'

@Component
export default class MainLayout extends Vue {
  created (): void {
    if (this.currentUser.email === '') {
      userService.getCurrent().then((user: User): void => {
        window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, user.token as string) // TODO interface CurrentUser ?
        this.$store.dispatch('currentUser/set', user)
      })
    }
  }

  get currentUser (): User {
    return this.$store.getters['currentUser/get']
  }

  get currentUserData (): string {
    return `${this.currentUser.username} (${this.currentUser.email})`
  }

  logout (): void {
    this.$store.dispatch('currentUser/logout')
    window.localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
    this.$router.push({ name: 'LoginPage' })
  }
}
</script>
