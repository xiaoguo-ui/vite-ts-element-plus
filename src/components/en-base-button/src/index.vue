<template>
  <el-button
    v-bind="$attrs"
    @[eventType].stop="isButtonLoading && service.handleLoadingFn(props.waitLoading)"
    :loading="pagePayload.loading"
  >
    <slot name="default"></slot>
    <slot name="loading"></slot>
    <slot name="icon"></slot>
  </el-button>
</template>

<script setup lang="ts">
  import { withDefaults } from 'vue'
  import service, { pagePayload, Props } from '@/components/en-base-button/src/service'

  const props = withDefaults(defineProps<Props>(), {
    eventType: 'click',
    isButtonLoading: false
  })
  // 校验参数是否传递
  service.validProps(props)
</script>
