<template>
  <div class="role">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from '@/views/main/system/role/config/content.config'

export default defineComponent({
  name: 'role',
  components: { pageContent },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>
