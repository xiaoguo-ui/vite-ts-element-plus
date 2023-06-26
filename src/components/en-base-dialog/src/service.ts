import { ref } from 'vue'

class Service {
  static service: Service = new Service()
  pagePayload = ref({
    visible: false
  })

  get PagePayload() {
    return this.pagePayload.value
  }

  // 显示
  showDialog() {
    this.PagePayload.visible = true
  }

  // 隐藏
  hideDialog() {
    this.PagePayload.visible = false
  }
}

export default Service

export const { service } = Service
