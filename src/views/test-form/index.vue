<template>
  <EnBaseForm label-position="top" :form-column="arr" v-model="formData" :rules="formRules">
    <template #customChildSlot>
      <div style="color: red">3333</div>
    </template>
  </EnBaseForm>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import EnBaseForm from '@/components/en-base-form'
  import { arr } from './config.ts'

  import emit from '@/utils/GlobalMitt.ts'

  const formRules = {
    select: [{ required: true, message: 'Please select name', trigger: 'change' }],
    val: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
    val5: [
      {
        required: true,
        message: 'Please input your suggestion',
        trigger: 'blur'
      }
    ]
  }

  const formData = ref({
    input: '我是input框的测试',
    val: '你好',
    val2: 0,
    val3: undefined,
    val4: 8,
    val5: '你好哇'
  })

  emit.on('handleInput', val => {
    console.log('=>(index.vue:37) val', val)
  })
</script>
