import { ref } from 'vue'

class Service {
  // 测试两个表单项具有相互影响的表单
  static formData1 = ref({
    inputTest: '',
    selectTest: '1'
  })

  static handleInput() {
    if (!Service.formData1.value.inputTest) {
      Service.formData1.value.selectTest = '1'
    }
    Service.formData1.value.selectTest = ''
  }

  static handleBlur() {
    if (!Service.formData1.value.inputTest) {
      Service.formData1.value.selectTest = '1'
    }
  }
}

export const { formData1, handleInput, handleBlur } = Service
