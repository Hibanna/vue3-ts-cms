<template>
  <div class="user">
    <div class="search">
      <hy-from v-bind="form" :formData="formData" />
    </div>
    <div class="content">content</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import hyFrom from '@/base-ui/form/src/form.vue'
import { form } from '@/views/main/system/user/config/search.config'
export default defineComponent({
  name: 'user',
  setup() {
    const formData = reactive({
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      form,
      formData
    }
  },
  components: {
    hyFrom
  }
})
</script>

<style scoped></style>
