import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced : true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  actions: {
    getPageListAction({ commit }, payload: any) {
      console.log(payload)
    }
  }
}

export default systemModule
