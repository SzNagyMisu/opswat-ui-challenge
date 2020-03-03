import { User } from '@/types'
import AuthenticatableService from './authenticatable-service'

class UserService extends AuthenticatableService { // singleton?
  async getCurrent (): Promise<User> {
    const { user } = await this.http.get('user')
    return user
  }

  async update (userData: User): Promise<User> {
    return await this.http.put('user', userData)
  }

  async destroy (email: string): Promise<any> {
    return await this.http.delete(`users/${email}`)
  }
}

export default new UserService
