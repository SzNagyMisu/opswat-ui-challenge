export interface User {
  id?: number|null
  username: string
  email: string
  password?: string
  bio?: string
  image?: string
  token?: string
}

export interface LoginData {
  email: string
  password: string
}

export interface ValidationErrorResponse {
  message: string
  errors: BackendValidationErrors
}

export interface BackendValidationErrors {
  [key: string]: string
}

export interface QuasarRules {
  [key: string]: QuasarRule[]
}

export interface QuasarRule {
  (value: string|any): true|string
}
