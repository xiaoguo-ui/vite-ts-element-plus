<template>
  <el-dialog v-bind="$attrs" v-model="service.PagePayload.visible">
    <template #header>
      <slot name="header"></slot>
    </template>
    <template #default>
      <slot name="default"></slot>
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import Service from './service.ts'

  const service = new Service()

  // 导出，便于父组件手动操作显示
  defineExpose({
    visible: service.PagePayload.visible,
    // 弹框的显示与隐藏
    hide: service.hideDialog.bind(service),
    show: service.showDialog.bind(service)
  })
</script>
