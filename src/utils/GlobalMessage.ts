import { Component, VNode } from 'vue'
import { ElMessage } from 'element-plus'

interface MessageProps {
  message: string | VNode | (() => VNode)
  type?: 'success' | 'warning' | 'info' | 'error'
  showClose?: boolean
  center?: boolean
  duration?: number
  grouping?: boolean
  icon?: string | Component
  dangerouslyUseHTMLString?: boolean
  onClose?: () => void
}

class EnBaseMessage {
  static message(params: MessageProps) {
    // 返回了调用实例
    return ElMessage({
      type: 'info',
      ...params
    })
  }
}

export const { message } = EnBaseMessage
