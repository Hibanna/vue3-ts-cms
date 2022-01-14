<template>
  <div class="my-table">
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectChange"
    >
      <el-table-column
        v-if="showSelect"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndex"
        type="index"
        label="序号"
        width="80"
        align="center"
      ></el-table-column>
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
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    showSelect: {
      type: Boolean,
      default: false
    }
  },
  emits: ['handleSelectChange'],
  setup(props, { emit }) {
    const handleSelectChange = (value: any) => {
      emit('handleSelectChange', value)
    }
    return {
      handleSelectChange
    }
  }
})
</script>

<style scoped></style>
