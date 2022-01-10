import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'
import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const result = await getPageListData(payload.pageUrl, payload.queryInfo)
      const { list, totalCount } = result.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, totalCount: number) {
      state.userCount = totalCount
    }
  }
}

export default systemModule
