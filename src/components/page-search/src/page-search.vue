<template>
  <div class="page-search">
    <hy-from v-bind="searchConfig" :formData="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="primary" icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </hy-from>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import hyFrom from '@/base-ui/form/src/form.vue'
export default defineComponent({
  props: {
    searchConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    hyFrom
  },
  setup() {
    const formData = reactive({
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { formData }
  }
})
</script>

<style scoped>
.footer {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
