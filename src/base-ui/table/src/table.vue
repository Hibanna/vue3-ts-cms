<template>
  <div class="my-table">
    <el-table :data="listData" border style="width: 100%">
      <template v-for="prop in propList" :key="prop.prop">
        <el-table-column v-bind="prop" align="center">
          <template #default="scope">
            <slot :name="prop.slotName" :row="scope.row">
              {{ scope.row[prop.prop] }}
            </slot></template
          >
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
