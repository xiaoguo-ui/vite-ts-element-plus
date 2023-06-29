<template>
  <h1>多个表单项具有相互影响的表单</h1>
  <EnBaseForm
    label-position="top"
    :formRow="{ gutter: 100 }"
    :form-column="arr"
    :rules="formRules"
    v-model="formData1"
    ref="enBaseForm"
  >
  </EnBaseForm>
</template>

<script setup lang="ts">
  import EnBaseForm from '@/components/en-base-form'
  import { formData1 } from './service.ts'
  import { arr, formRules } from './config.ts'
</script>
