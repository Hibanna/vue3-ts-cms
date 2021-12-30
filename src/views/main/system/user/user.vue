<template>
  <div class="user">
    <div class="search"></div>
    <page-search :searchConfig="searchConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { searchConfig } from '@/views/main/system/user/config/search.config'
import pageSearch from '@/components/page-search/src/page-search.vue'
export default defineComponent({
  name: 'user',
  components: { pageSearch },
  setup() {
    return {
      searchConfig
    }
  }
})
</script>

<style scoped></style>
