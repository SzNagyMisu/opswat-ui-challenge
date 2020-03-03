<template lang="pug">
q-page#delete-user-page.row
  .col-6
    h3 Delete User
    q-form(@submit="onSubmit")
      .q-py-md
        q-input(v-model="email" filled type="email" label="E-mail" :rules="emailRules" hint="Enter an e-mail address")/
      .q-py-md
        q-btn(type="submit" label="Delete" color="negative")/
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component'
import BackendValidationMixin from '@/mixins/backend-validation-mixin'
import { AxiosResponse } from 'axios'
import { QuasarRule, ValidationErrorResponse } from '@/types'
import { required } from '@/quasar-rules'
import userService from '@/services/user-service'

@Component
export default class DeleteUserPage extends mixins(BackendValidationMixin) {
  email: string = ''
  emailRules: QuasarRule[] = [ required ]

  onSubmit (): void {
    userService.destroy(this.email).then(() => {
      this.$q.notify({
        message: `User ${this.email} successfully deleted`,
        type: 'positive',
        position: 'top-right'
      })
    }).catch((response: AxiosResponse<ValidationErrorResponse>) => {
      response && response.status === 400 && this.showBackendErrors({ message: response.data.message })
    })
  }
}
</script>
