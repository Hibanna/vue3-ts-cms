<template>
  <div class="page-content">
    <myTable
      :listData="userList"
      v-bind="contentTableConfig"
      @handleSelectChange="handleSelectChange"
    >
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
      </template>
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
        <el-button size="mini" icon="el-icon-edit" type="text">编辑</el-button>
        <el-button size="mini" icon="el-icon-delete" type="text"
          >删除</el-button
        >
      </template>
    </myTable>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import myTable from '@/base-ui/table/src/table.vue'
export default defineComponent({
  props: {
    contentTableConfig: { type: Object, require: true },
    pageName: { type: String, require: true }
  },
  components: { myTable },
  setup(props) {
    const store = useStore()
    store.dispatch('systemModule/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.systemModule.userList)
    return { userList }
  }
})
</script>

<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
