import { createStore } from 'vuex'
import loginModule from './login/login'
import { IRootState } from './types'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coder',
      age: ''
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})

export default store
