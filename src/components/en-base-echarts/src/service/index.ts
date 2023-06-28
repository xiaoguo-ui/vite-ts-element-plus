import { shallowRef, watch, onBeforeUnmount } from 'vue'
import Echarts from './echarts.ts'
import { EChartsOption } from 'echarts'

class Service {
  echarts = shallowRef<Echarts | null>(null)

  // 设置Echarts容器
  setEchartsDivRef(el: HTMLDivElement | null) {
    // 有元素，就需要设置实例
    if (el) {
      this.echarts.value = new Echarts(el)
      this.echarts.value.addEventResize()
    }
  }

  /**
   *  监听option值的变化
   * @param option echarts的option
   */
  watchOption(option: EChartsOption) {
    watch(
      () => [option, this.echarts.value],
      ([newOption, newEcharts]) => {
        if (!newEcharts) return
        this.echarts.value!.setOptions(newOption as EChartsOption)
      },
      {
        immediate: true,
        deep: true
      }
    )
  }

  destroy() {
    onBeforeUnmount(() => {
      this.echarts.value?.destroyEcharts()
    })
  }
}

export default Service
