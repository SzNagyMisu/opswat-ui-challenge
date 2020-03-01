<template lang="pug">
q-page#login-page
  h3 Login
  q-form(@submit="onSubmit")
    .q-py-md
      q-input(v-model="login.email" type="email" label="E-mail" :rules="rules.email")/
    .q-py-md
      //- TODO q-password
      q-input(v-model="login.password" type="password" label="Password" :rules="rules.password")/
    .q-py-md.flex.justify-between
      q-btn.q-px-lg.q-py-sm(type="submit" label="Sign in" color="primary")/
      q-btn.q-px-xl.q-py-sm(:to="{ name: 'RegisterPage' }" label="Sign up" color="secondary")/
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component'
import LoginUserMixin from '@/mixins/login-user-mixin'
import BackendValidationMixin from '@/mixins/backend-validation-mixin'
import { AxiosResponse } from 'axios'
import { QuasarRules, LoginData, User, ValidationErrorResponse } from '@/types'
import { required } from '@/quasar-rules'
import loginService from '@/services/login-service'

@Component
export default class LoginPage extends mixins(LoginUserMixin, BackendValidationMixin) {
  login: LoginData = {
    email: '',
    password: ''
  }

  rules: QuasarRules = {
    email: [ required ], // TODO email
    password: [ required ]
  }

  onSubmit (): void {
    loginService.login(this.login).then((user: User): void => {
      this.loginUser(user)
    }).catch((response: AxiosResponse<ValidationErrorResponse>|undefined): void => {
      if (response && response.status === 401) {
        this.showBackendErrors({ emailOrPassword: 'Invalid authentication data' })
      }
    })
  }
}
</script>
