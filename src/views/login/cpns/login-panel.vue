<template>
  <div class="loginPanel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <loginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <loginPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeep">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="loginBtn" @click="loginBtnClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  setup() {
    const isKeep = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const loginBtnClick = () => {
      accountRef.value?.loginAction()
    }
    return {
      isKeep,
      loginBtnClick,
      accountRef
    }
  },
  components: {
    LoginAccount,
    LoginPhone
  }
})
</script>

<style scoped>
.loginPanel {
  width: 320px;
  margin-bottom: 150px;
}
.title {
  text-align: center;
}
.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.loginBtn {
  margin-top: 10px;
  width: 100%;
}
</style>
