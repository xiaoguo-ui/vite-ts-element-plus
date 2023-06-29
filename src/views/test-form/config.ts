import emit from '@/utils/GlobalMitt.ts'

export const arr = [
  {
    col: { span: 11 },
    formItemProps: {},
    componentsProps: { onInput: handleInput, clearable: true, placeholder: '需要输入input的值' },
    label: '输入框',
    prop: 'input',
    type: 'el-input'
  },
  {
    col: { span: 11 },
    formItemProps: {},
    componentsProps: {
      size: 'large',
      clearable: true,
      multiple: true,
      filterable: true,
      onVisibleChange: visibleChange
    },
    label: '下拉框',
    prop: 'select',
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

// 输入事件
function handleInput(val: string) {
  emit.emit('handleInput', val)
}

function visibleChange(val: boolean) {
  console.log('=>(config.ts:44) val', val)
}
