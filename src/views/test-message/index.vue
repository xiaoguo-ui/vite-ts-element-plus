<template>
  <el-button @click="handleMessage">点击显示message</el-button>
</template>

<script setup lang="ts">
  import { message } from '@/utils/GlobalMessage.ts'

  const handleMessage = () => {
    const a = message({
      message: '我是提示的消息',
      duration: 0,
      grouping: true,
      showClose: true,
      onClose: () => {
        console.log(222)
      }
    })
    // 手动关闭
    setTimeout(() => {
      a.close()
    }, 3000)
  }
</script>
