<template>
  <div>我是Tab2组件</div>
  <div>{{ test1 }}</div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const test1 = ref(0)

  setInterval(() => {
    test1.value++
  })
</script>
