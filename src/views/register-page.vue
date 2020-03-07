<template lang="pug">
q-page#register-page
  h3 Register
  q-form(@submit="onSubmit")
    .q-py-md
      q-input(v-model="user.username" label="Username" :rules="rules.username")/
    .q-py-md
      q-input(v-model="user.email" label="E-mail" :rules="rules.email")/
    .q-py-md
      password-field(v-model="user.password" label="Password" :rules="rules.password")/
    .q-py-md.flex.justify-between
      q-btn.q-px-lg.q-py-sm(type="submit" label="Sign up" color="primary")/
      q-btn.q-px-xl.q-py-sm(:to="{ name: 'LoginPage' }" label="Back to login" color="secondary")/
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component'
import { AxiosResponse } from 'axios'
import { User, ValidationErrorResponse, QuasarRules } from '@/types'
import LoginUserMixin from '@/mixins/login-user-mixin'
import BackendValidationMixin from '@/mixins/backend-validation-mixin'
import { required, email } from '@/quasar-rules'
import loginService from '@/services/login-service'
import PasswordField from '@/components/password-field.vue'

@Component({
  components: { PasswordField }
})
export default class RegisterPage extends mixins(LoginUserMixin, BackendValidationMixin) {
  user: User = {
    username: '',
    email: '',
    password: ''
  }

  rules: QuasarRules = {
    username: [ required ],
    email: [ required, email ],
    password: [ required ]
  }

  onSubmit (): void {
    loginService.createUser(this.user).then((user: User): void => {
      this.loginUser(user)
      this.$q.notify({
        type: 'positive',
        position: 'top-right',
        message: 'User registered successfully'
      })
    }).catch((response: AxiosResponse<ValidationErrorResponse>|undefined): void => {
      response && this.showBackendErrors(response.data.errors)
    })
  }
}
</script>
