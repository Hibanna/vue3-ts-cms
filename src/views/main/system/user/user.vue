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
import pageSearch from '@/components/page-search/'
import { useStore } from '@/store'
export default defineComponent({
  name: 'user',
  components: { pageSearch },
  setup() {
    const store = useStore()
    store.dispatch('sgetPageListAction')
    return {
      searchConfig
    }
  }
})
</script>

<style scoped></style>
