import { ref } from 'vue'

export interface Props {
  eventType?: string //事件类型
  isButtonLoading?: boolean //是否显示loading
  waitLoading?: () => void //需要等待loading处理的button
}

class Service {
  //组件负载
  pagePayload = ref({
    loading: false
  })

  get PagePayload() {
    return this.pagePayload.value
  }

  //处理loading
  async handleLoadingFn(fn: () => void) {
    try {
      this.PagePayload.loading = true
      await fn()
    } catch (e) {
      // 抛出错误，例如请求接口错误的时候，需要把此错误抛出去
      throw new Error(e as any)
    } finally {
      this.PagePayload.loading = false
    }
  }

  // 校验参数
  validProps(props: Props) {
    if (props.isButtonLoading && !props.waitLoading) {
      throw new Error('当button的isButtonLoading为true时，等待处理的方法必传')
    }
  }
  // 这个主要是用来给父组件关闭loading
  manualCloseLoading() {
    this.PagePayload.loading = false
  }
}

export default Service
