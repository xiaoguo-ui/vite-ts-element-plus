/**
 * 此处是由于<component :is></component> 不能渲染组件
 *需要自己手动引入
 *issue：https://github.com/antfu/unplugin-vue-components/issues/643
 */

import { App } from 'vue'
import {
  ElInput,
  ElButton,
  ElRate,
  ElInputNumber,
  ElSlider,
  ElSelect,
  ElOption
} from 'element-plus'

const components = [ElInput, ElButton, ElRate, ElInputNumber, ElSlider, ElSelect, ElOption]

const install = function (app: App) {
  components.forEach(res => {
    app.component(res.name, res)
  })
}

export default {
  install
}
