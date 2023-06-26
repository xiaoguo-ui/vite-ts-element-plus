<template>
  <el-button
    v-bind="$attrs"
    @[eventType].stop="isButtonLoading && service.handleLoadingFn(props.waitLoading!)"
    :loading="service.PagePayload.loading"
  >
    <slot name="default"></slot>
    <slot name="loading"></slot>
    <slot name="icon"></slot>
  </el-button>
</template>

<script setup lang="ts">
  import Service, { Props } from './service'

  const props = withDefaults(defineProps<Props>(), {
    eventType: 'click',
    isButtonLoading: false
  })

  const service = new Service()
  // 校验参数是否传递
  service.validProps(props)

  // 需要给父组件，手动关闭loading
  defineExpose({
    closeLoading: service.manualCloseLoading.bind(service)
  })
</script>
