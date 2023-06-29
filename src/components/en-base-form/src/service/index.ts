import { computed, shallowRef } from 'vue'
import { FormInstance } from 'element-plus'

class Service {
  formRef = shallowRef<FormInstance | null>(null)

  setFormRef(el: FormInstance) {
    if (el) this.formRef.value = el
  }

  /**
   *  更新modelValue的值
   * @param props
   * @param emits
   */
  updateModelValue(props: any, emits: any) {
    return computed({
      get() {
        return props.modelValue
      },
      set(v) {
        emits('update:modelValue', v)
      }
    })
  }
}

export default Service
