<template>
  <div class="user">
    <div class="search"></div>
    <page-search :searchConfig="searchConfig" />
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="user"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { searchConfig } from '@/views/main/system/user/config/search.config'
import pageSearch from '@/components/page-search/'
import pageContent from '@/components/page-content/'
import { contentTableConfig } from '@/views/main/system/user/config/content.config'
export default defineComponent({
  name: 'user',
  components: { pageSearch, pageContent },
  setup() {
    const handleSelectChange = (value: any) => {
      console.log(value)
    }
    return {
      searchConfig,
      handleSelectChange,
      contentTableConfig
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
