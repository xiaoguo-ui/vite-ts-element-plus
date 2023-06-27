<template>
  <el-button @click="handleClick1">显示alertMessageBox</el-button>
  <el-button @click="handleClick2">显示confirmMessageBox</el-button>
  <el-button @click="handleClick3">显示promptMessageBox</el-button>
</template>

<script setup lang="ts">
  import { h, markRaw } from 'vue'
  import { Delete } from '@element-plus/icons-vue'
  import { alertMessageBox, confirmMessageBox, promptMessageBox } from '@/utils/GlobalMessageBox.ts'

  const handleClick1 = async () => {
    const res = alertMessageBox({
      title: '123',
      message: '<strong>proxy is <i>HTML</i> string</strong>',
      dangerouslyUseHTMLString: true
    })

    res.then(() => {
      console.log('=>(index.vue:36) 2222', 2222)
    })
  }

  const handleClick2 = () => {
    const res = confirmMessageBox({
      title: '我是confirmMessageBox',
      message: h('p', null, [
        h('span', null, 'Message can be '),
        h('i', { style: 'color: teal' }, 'VNode')
      ]),
      center: true,
      icon: markRaw(Delete),
      draggable: true,
      beforeClose: (action, instance, done) => {
        if (action === 'confirm') {
          instance.confirmButtonLoading = true
          instance.confirmButtonText = 'Loading...'
          setTimeout(() => {
            done()
            setTimeout(() => {
              instance.confirmButtonLoading = false
            }, 300)
          }, 3000)
        } else {
          done()
        }
      }
    })

    res.then(() => {
      console.log('=>(index.vue:36) 2222', 2222)
    })
  }

  const handleClick3 = () => {
    const res = promptMessageBox({
      title: '123',
      message: '<strong>proxy is <i>HTML</i> string</strong>',
      dangerouslyUseHTMLString: true,
      inputPlaceholder: '请输入内容',
      inputPattern:
        /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      inputErrorMessage: 'Invalid Email'
    })

    res.then(result => {
      console.log('=>(index.vue:36) 2222', 2222)
      console.log('=>(index.vue:69) result', result)
    })
  }
</script>
