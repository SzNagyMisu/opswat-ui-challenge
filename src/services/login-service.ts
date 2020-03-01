import BaseService from './base-service'
import { LoginData, User } from '@/types'

class LoginService extends BaseService {
  async login (loginData: LoginData): Promise<User> {
    const { user } = await this.http.post('users/login', loginData)
    return user
  }
}

export default new LoginService
