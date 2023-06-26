<template>
  <h1>基础测试</h1>
  <el-button @click="handleClick">点击显示弹框</el-button>
  <EnBaseDialog
    @close="handleClose"
    :destroy-on-close="true"
    :close-on-click-modal="false"
    title="我是标题"
    ref="enBaseDialogRef"
  >
    <template #default>
      <el-table :data="gridData">
        <el-table-column property="date" label="Date" width="150" />
        <el-table-column property="name" label="Name" width="200" />
        <el-table-column property="address" label="Address" />
      </el-table>
    </template>
    <template #footer>
      <EnBaseButton
        ref="enBaseButtonRef"
        :is-button-loading="true"
        :wait-loading="CommonUtil.sleep"
        type="primary"
        >点击开启loading效果</EnBaseButton
      >
      <EnBaseButton type="primary" @click="handleHideClick">关闭弹框，隐藏loading效果</EnBaseButton>
    </template>
  </EnBaseDialog>
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue'
  import EnBaseDialog from '@/components/en-base-dialog'
  import EnBaseButton from '@/components/en-base-button'

  import CommonUtil from '@/utils/CommonUtil'

  const gridData = [
    {
      date: '2016-05-02',
      name: 'John Smith',
      address: 'No.1518,  Jinshajiang Road, Putuo District'
    },
    {
      date: '2016-05-04',
      name: 'John Smith',
      address: 'No.1518,  Jinshajiang Road, Putuo District'
    },
    {
      date: '2016-05-01',
      name: 'John Smith',
      address: 'No.1518,  Jinshajiang Road, Putuo District'
    },
    {
      date: '2016-05-03',
      name: 'John Smith',
      address: 'No.1518,  Jinshajiang Road, Putuo District'
    }
  ]

  const enBaseDialogRef: Ref<InstanceType<typeof EnBaseDialog> | null> = ref(null)
  const enBaseButtonRef: Ref<InstanceType<typeof EnBaseButton> | null> = ref(null)

  const handleClick = () => {
    if (!enBaseDialogRef.value) return
    enBaseDialogRef.value.show()
  }

  const handleHideClick = () => {
    if (!enBaseDialogRef.value) return
    enBaseDialogRef.value.hide()
  }

  const handleClose = () => {
    if (!enBaseButtonRef.value) return
    enBaseButtonRef.value.closeLoading()
  }
</script>
