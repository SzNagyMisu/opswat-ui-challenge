import { ActionContext } from 'vuex'
import { User } from '@/types'

export default {
  namespaced: true,
  state: {
    id: null,
    username: '',
    email: ''
  },
  getters: {
    get: (state: User): User => state
  },
  mutations: {
    login: (state: User, userData: User): void => {
      state.id = userData.id
      state.username = userData.username
      state.email = userData.email
    },
    logout: (state: User): void => {
      state.id = null
      state.username = ''
      state.email = ''
    }
  },
  actions: {
    login: (context: ActionContext<User, any>, userData: User): User => {
      context.commit('login', userData)
      return context.state
    },
    logout: (context: ActionContext<User, any>): User => {
      context.commit('logout')
      return context.state
    }
  }
}
