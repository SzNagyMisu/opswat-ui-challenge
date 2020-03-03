import BaseService from './base-service'
import { AxiosRequestConfig } from 'axios'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/constants'

export default class AuthenticatableService extends BaseService {
  constructor () {
    super()
    this.http.interceptors.request.use(
      (config: AxiosRequestConfig): AxiosRequestConfig => {
        if (!config.headers) config.headers = {}
        const bearer: string = `BEARER ${window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)}`

        config.headers.authorization = bearer
        return config
      }
    )
  }
}
