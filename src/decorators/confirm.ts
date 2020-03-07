import { Dialog } from 'quasar'

export default (options: object = {}) => (
  (_target: object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor => ({
    ...descriptor,
    value (...args: any[]): void {
      const _this = this
      Dialog.create({
        cancel: true,
        title: 'Destroy',
        message: 'Are you sure?',
        ...options
      }).onOk(function (): any {
        return descriptor.value.call(_this, ...args)
      })
    }
  })
)
