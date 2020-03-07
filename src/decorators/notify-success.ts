import { Notify } from 'quasar'

export default (message: string) => (
  (_target: object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor => ({
    ...descriptor,
    async value (...args: any[]): Promise<any> {
      const promiseValue: any = await descriptor.value.call(this, ...args)
      Notify.create({ message, type: 'positive', position: 'top-right' })
      return promiseValue
    }
  })
)
