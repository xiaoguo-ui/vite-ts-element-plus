import * as echarts from 'echarts'
import { ECharts, EChartsOption } from 'echarts'

class Echarts {
  chartInstance: ECharts

  constructor(element: HTMLElement) {
    this.chartInstance = echarts.init(element)
  }

  // 设置option
  setOptions(options: EChartsOption) {
    this.chartInstance.setOption(options)
  }

  // 更新图表大小
  updateSize() {
    this.chartInstance.resize()
  }

  // 添加图表的resize事件
  addEventResize() {
    window.addEventListener('resize', this.updateSize.bind(this))
  }

  destroyEcharts() {
    this.chartInstance.dispose()
    window.removeEventListener('resize', this.updateSize.bind(this))
  }
}

export default Echarts
