<template>
  <div class="loginPanel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card">
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><avatar /></el-icon>账号登录
          </span>
        </template>
        账号登录
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><cellphone /></el-icon>手机登录
          </span>
        </template>
        手机登录
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Cellphone, Avatar } from '@element-plus/icons'
export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
