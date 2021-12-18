<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFold"
    ></i>
    <div class="content">
      <nav-breadcrumb :breadcrumbs="breadcrumbs"/>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import userInfo from './user-info.vue'
import navBreadcrumb from '@/base-ui/breadcrumb'
import { IBreadCrumb} from '@/base-ui/breadcrumb/types'
export default defineComponent({
  emits: ['foldChange'],

  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFold = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    const breadcrumbs :IBreadCrumb[] = []

    return {
      isFold,
      handleFold,
      breadcrumbs
    }
  },
  components: {
    userInfo,
    navBreadcrumb
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
