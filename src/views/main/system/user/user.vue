<template>
  <div class="user">
    <div class="search">
      <hy-from v-bind="form" />
    </div>
    <div class="content">content</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import hyFrom from '@/base-ui/form/src/form.vue'
import { form } from '@/views/main/system/user/config/search.config'
export default defineComponent({
  name: 'user',
  setup() {
    return {
      form
    }
  },
  components: {
    hyFrom
  }
})
</script>

<style scoped></style>
