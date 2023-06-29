// import emit from '@/utils/GlobalMitt.ts'
import { handleInput, handleBlur } from './service.ts'

export const arr = [
  {
    col: { span: 11 },
    formItemProps: {},
    componentsProps: {
      onInput: handleInput,
      onBlur: handleBlur,
      clearable: true,
      placeholder: '输入清空下拉框的值'
    },
    label: '输入框',
    prop: 'inputTest',
    type: 'el-input'
  },
  {
    col: { span: 11 },
    formItemProps: {},
    componentsProps: {
      clearable: true,
      filterable: true,
      style: { width: '100%' }
    },
    label: '下拉框',
    prop: 'selectTest',
    type: 'el-select',
    children: [
      {
        childType: 'el-option',
        childComponentsProps: { value: 1, label: 'v二十' }
      },
      {
        childType: 'el-option',
        childComponentsProps: { value: 2, label: 'v二十一' }
      },
      {
        childType: 'el-option',
        childComponentsProps: { value: 2, label: 'v二十一' },
        childSlot: 'customChildSlot'
      }
    ]
  }
]

export const formRules = {
  inputTest: [{ validator: validInputTest, trigger: 'blur' }],
  selectTest: [{ required: true, message: 'Please select name', trigger: 'change' }]
}

function validInputTest(rule: any, value: any, callback: any) {
  if (!value) {
    return callback(new Error('当前无值'))
  }

  return callback()
}
