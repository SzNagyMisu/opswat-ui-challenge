import { RawLocation } from 'vue-router'
import router from '@/router'

export default (to: RawLocation) => (
  (_target: object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor => ({
    ...descriptor,
    async value (...args: any[]): Promise<any> {
      const promiseValue: any = await descriptor.value.call(this, ...args)
      router.push(to)
      return promiseValue
    }
  })
)
