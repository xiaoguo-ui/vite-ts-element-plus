/**
 * 此工具是对ElMessageBox的封装，基本可以使用所有的功能
 */

import { ElMessageBox } from 'element-plus'
import { ElMessageBoxOptions } from 'element-plus/lib/components/message-box/src/message-box.type'

type ExcludeTitleAndMessage = Omit<ElMessageBoxOptions, 'beforeClose' | 'inputValidator'>

// 可以设置全局设置的默认值，使用解构给参数即可
// const defaultOptions: ExcludeTitleAndMessage = {
//   autofocus: true,
//   dangerouslyUseHTMLString: false,
//   showClose: true,
//   distinguishCancelAndClose: true,
//   lockScroll: true
// }

class EnBaseMessageBox {
  // 提示框
  static alertMessageBox(params: ElMessageBoxOptions) {
    return EnBaseMessageBox.messageBox('alert', params)
  }

  // 确认框
  static confirmMessageBox(params: ElMessageBoxOptions) {
    return EnBaseMessageBox.messageBox('confirm', params)
  }

  // 输入框
  static promptMessageBox(params: ElMessageBoxOptions) {
    return EnBaseMessageBox.messageBox('prompt', params)
  }

  // 主体方法
  private static messageBox(type: 'alert' | 'confirm' | 'prompt', params: ElMessageBoxOptions) {
    return ElMessageBox[type](params.message, params.title, {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      beforeClose: params.beforeClose && params.beforeClose,
      inputValidator: params.inputValidator && params.inputValidator,
      ...(params as ExcludeTitleAndMessage)
    })
  }
}

export const { alertMessageBox, confirmMessageBox, promptMessageBox } = EnBaseMessageBox
