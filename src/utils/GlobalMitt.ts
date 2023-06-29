// 全局的事件触发器
import mitt from 'mitt'

class GlobalMitt {
  static mitt = mitt()
}

export default GlobalMitt.mitt
