<template lang="pug">
q-page#profile-page.row
  .col-6
    h3 Profile
    q-form(@submit="onSubmit")
      .q-py-md
        q-input(v-model="user.username" filled label="Username" :rules="rules.username")/
      .q-py-md
        q-input(v-model="user.email" filled type="email" label="E-mail" :rules="rules.email")/
      .q-py-md
        q-input(v-model="user.bio" filled type="textarea" label="Bio")/
      .q-py-md
        q-btn.q-px-lg.q-py-sm(type="submit" label="Save" color="primary")/
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { User, QuasarRules } from '@/types'
import userService from '@/services/user-service'
import { required } from '@/quasar-rules'

@Component
export default class ProfilePage extends Vue {
  user: User = {
    id: null,
    username: '',
    email: '',
    bio: '',
    image: ''
  }

  rules: QuasarRules = {
    username: [ required ],
    email: [ required ]
  }

  async created (): Promise<void> {
    this.user = await userService.getCurrent()
  }

  onSubmit (): void {
    userService.update(this.user).then((user: User) => {
      this.$store.dispatch('currentUser/set', user)
      this.$router.push({ name: 'LandingPage' })
      this.$q.notify({
        message: 'Profile successfully updated',
        type: 'positive',
        position: 'top-right'
      })
    })
  }
}
</script>
