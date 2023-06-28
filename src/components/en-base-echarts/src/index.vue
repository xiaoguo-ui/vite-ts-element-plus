<template>
  <div :style="{ ...style }" :ref="service.setEchartsDivRef.bind(service)"></div>
</template>

<script setup lang="ts">
  import { onBeforeUnmount } from 'vue'
  import Service from '@/components/en-base-echarts/src/service'
  import { EChartsOption } from 'echarts'

  interface Props {
    option: EChartsOption
    style?: {
      width: string
      height: string
    }
  }

  const props = withDefaults(defineProps<Props>(), {
    style: {
      width: '100%',
      height: '600px'
    }
  })

  const service = new Service()

  //监听props值的变化，更新图表
  service.watchOption(props.option)
  // 销毁以及移除事件监听
  service.destroy()

  // 暴露当前的Echarts实例
  defineExpose({
    curEchartsInstance: service.echarts
  })
</script>
