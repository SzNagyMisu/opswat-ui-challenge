import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios'
import { BACKEND_BASE_URL } from '@/constants'

export default abstract class BaseService {
  protected readonly http: AxiosInstance = axios.create({
    baseURL: BACKEND_BASE_URL
  })

  constructor () {
    this.http.interceptors.response.use(
      (response: AxiosResponse<any>): any => response.data,
      (error: AxiosError): Promise<AxiosResponse<any>|void> => Promise.reject(error.response)
    )
  }
}
