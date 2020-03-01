import { User } from '@/types'
import BaseService from './base-service'

class UserService extends BaseService { // singleton?
  async create (userData: User): Promise<any> {
    const { user } = await this.http.post('users', userData)
    return user
  }
}

export default new UserService
