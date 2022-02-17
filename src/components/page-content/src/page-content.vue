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
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    contentTableConfig: { type: Object, require: true }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
