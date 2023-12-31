import { ComponentInternalInstance, Component } from 'vue'
import type { FormRules } from 'element-plus'

export interface FormColumn {
  row?: object
  col?: object
  slotName?: string
  formItemProps?: object // el-form-item的属性
  label?: string // from表单的label
  slotCustomLabel?: string //是否自定义label插槽
  prop?: string // from表单的prop
  componentsProps?: object // 组件的props
  componentTypeSlot?: string | ComponentInternalInstance | Component // 内部组件的slot 组件实例
  slot?: Object // 组件的插槽
  type?: string | ComponentInternalInstance | Component // 组件的名字
  children?: {
    childType: string | ComponentInternalInstance | Component // 组件的名字
    childComponentsProps?: object
    childSlot?: string
  }[]
}

export interface defaultProps {
  formColumn: FormColumn[]
  formRules?: FormRules
  // 表单数据
  modelValue: any
  formRow?: object
}
