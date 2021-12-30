import { createStore, Store, useStore as useVuexStore } from 'vuex'
import loginModule from './login/login'
import systemModule from './main/system/system'
import { IRootState, IStoreType } from './types'

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
    loginModule,
    systemModule
  }
})
export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
