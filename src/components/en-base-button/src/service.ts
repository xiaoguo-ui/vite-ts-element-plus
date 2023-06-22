import { ref } from 'vue'

export interface Props {
  eventType?: string //事件类型
  isButtonLoading?: boolean //是否显示loading
  waitLoading?: () => void //需要等待loading处理的button
}

class Service {
  static service: Service = new Service()
  static pagePayload = ref({
    loading: false
  }) //页面负载

  get getPayload() {
    return Service.pagePayload.value
  }

  //处理loading
  async handleLoadingFn(fn: () => void) {
    try {
      this.getPayload.loading = true
      await fn()
    } catch (e) {
      // 抛出接口请求的错误，手动处理
      throw new Error(e as any)
    } finally {
      this.getPayload.loading = false
    }
  }

  // 校验参数
  validProps(props: Props) {
    if (props.isButtonLoading && !props.waitLoading) {
      throw new Error('当button的isButtonLoading为true时，等待处理的方法必传')
    }
  }
}

export const { pagePayload } = Service
export default Service.service
