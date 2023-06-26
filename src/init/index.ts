import { createApp, App } from 'vue'
import AppCom from '../App.vue'
import router from '../router'
import pinia from '../store'

import 'normalize.css'
import 'element-plus/dist/index.css'

class Init {
  static initApp: Init = new Init()
  app!: App

  constructor() {
    this.app = createApp(AppCom)
    this.mountGlobal()
  }

  // 加载插件和挂载
  mountGlobal() {
    this.app.use(router)
    this.app.use(pinia)
    this.app.mount('#app')
  }
}

export default Init.initApp
