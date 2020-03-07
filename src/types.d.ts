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

export interface QTableColumn {
  name: string
  label: string
  field?: string|((row: any) => any)
  required?: boolean
  align?: 'left'|'right'|'center'
  sortable?: boolean
  sort?: (a: any, b: any, aRow?: any, bRow?: any) => number
  format?: (val: any, row?: any) => string
  style?: string
  classes?: string
  headerStyle?: string
  headerClasses?: string
}

export interface NewArticle {
  title: string
  description: string
  body: string
  tagList: string[]
}

export interface Article {
  id: number
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  created: number
  author: User
}
