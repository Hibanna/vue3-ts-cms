<template>
  <div class="user">
    <div class="search"></div>
    <page-search :searchConfig="searchConfig" />
    <div class="content">
      <myTable :listData="userList" :propList="propList"> </myTable>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { searchConfig } from '@/views/main/system/user/config/search.config'
import pageSearch from '@/components/page-search/'
import { useStore } from '@/store'
import myTable from '@/base-ui/table'
export default defineComponent({
  name: 'user',
  components: { pageSearch, myTable },
  setup() {
    const store = useStore()
    store.dispatch('systemModule/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.systemModule.userList)
    const userCount = store.state.systemModule.userCount
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250'
      }
    ]
    return {
      searchConfig,
      userList,
      propList
    }
  }
})
</script>

<style scoped>
.content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
</style>
