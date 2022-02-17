<template>
  <div class="user">
    <div class="search"></div>
    <page-search :searchConfig="searchConfig" />
    <page-content :contentTableConfig="contentTableConfig"></page-content>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { searchConfig } from '@/views/main/system/user/config/search.config'
import pageSearch from '@/components/page-search/'
import pageContent from '@/components/page-content/'
import { useStore } from '@/store'
import { contentTableConfig } from '@/views/main/system/user/config/content.config'
export default defineComponent({
  name: 'user',
  components: { pageSearch, pageContent },
  setup() {
    const store = useStore()
    store.dispatch('systemModule/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.systemModule.userList)
    const userCount = store.state.systemModule.userCount

    const handleSelectChange = (value: any) => {
      console.log(value)
    }
    return {
      searchConfig,
      userList,
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
