<template>
  <div>
    <EnBaseButton
      round
      type="primary"
      :isButtonLoading="true"
      :waitLoading="() => CommonUtil.sleep(10000)"
    >
      <template #default>测试</template>
    </EnBaseButton>
  </div>
</template>

<script setup lang="ts">
  import EnBaseButton from './en-base-button'
  import CommonUtil from '@/utils/CommonUtil'
</script>
