<template>
  <div class="user">
    <div class="search"></div>
    <page-search :searchConfig="searchConfig" />
    <div class="content">
      <myTable
        :listData="userList"
        :propList="propList"
        :showIndex="showIndex"
        :showSelect="showSelect"
        @handleSelectChange="handleSelectChange"
      >
        <template #status="scope">
          <el-button
            size="small"
            :type="scope.row.enable ? 'primary' : 'danger'"
            >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
          >
        </template>
        <template #createAt="scope">
          {{ $filters.formatTime(scope.row.createAt) }}
        </template>
        <template #updateAt="scope">
          {{ $filters.formatTime(scope.row.updateAt) }}
        </template>
        <template #handle>
          <el-button size="mini" icon="el-icon-edit" type="text"
            >编辑</el-button
          >
          <el-button size="mini" icon="el-icon-delete" type="text"
            >删除</el-button
          >
        </template>
      </myTable>
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
    const showIndex = true
    const showSelect = true
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      },
      {
        label: '操作',
        minWidth: '120',
        slotName: 'handle'
      }
    ]
    const handleSelectChange = (value: any) => {
      console.log(value)
    }
    return {
      searchConfig,
      userList,
      propList,
      showIndex,
      showSelect,
      handleSelectChange
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
