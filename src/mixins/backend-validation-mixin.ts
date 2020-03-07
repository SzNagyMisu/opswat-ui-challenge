import { Vue, Component as Mixin } from 'vue-property-decorator'
import { BackendValidationErrors } from '@/types'

@Mixin
export default class BackendValidationMixin extends Vue {
  showBackendErrors (errors: BackendValidationErrors): void {
    Object.values(errors).forEach((errorMessage: string) => {
      this.$q.notify({
        type: 'negative',
        message: errorMessage,
        position: 'top-right',
        timeout: 0,
        closeBtn: '×'
      })
    })
  }
}
