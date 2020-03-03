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
    set: (state: User, userData: User): void => {
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
    set: (context: ActionContext<User, any>, userData: User): User => {
      context.commit('set', userData)
      return context.state
    },
    logout: (context: ActionContext<User, any>): User => {
      context.commit('logout')
      return context.state
    }
  }
}
