import { markRaw, h } from 'vue'
import mitt from 'mitt'
export const emitter = mitt()

export const options = [
  {
    value: 'zhangan',
    label: 'shangsan'
  }
]
export const column = markRaw([
  {
    col: { span: 11 },
    formItemProps: {},
    label: '输入框',
    prop: 'select',
    componentsProps: { options: options, clearable: true, onChange: handlerChange, onVisibleChange: handlerChangeVisible },
    type: 'el-input'
  },
  {
    col: { span: 11, offset: 2 },
    formItemProps: {},
    label: 'name',
    prop: 'val',
    componentsProps: { clearable: true },
    type: 'el-input'
  },
  {
    col: { span: 11, },
    formItemProps: {},
    label: '数字:',
    prop: 'val2',
    componentsProps: { clearable: true, placeholder: "Please input" },
    type: 'el-input-number'
  },
  {
    col: { span: 11, offset: 2 },
    formItemProps: {},
    label: '评分',
    prop: 'val3',
    componentsProps: { clearable: true },
    type: 'el-rate'
  },
  {
    col: { span: 11, },
    formItemProps: {},
    label: '滑块',
    prop: 'val4',
    componentsProps: { clearable: true },
    type: 'el-slider'
  },
  {
    col: { span: 24, },
    formItemProps: {},
    label: '意见',
    prop: 'val5',
    componentsProps: { clearable: true, type: "textarea", placeholder: '请输入你的意见或者建议' },
    type: 'el-input'
  },
  {
    col: { span: 12 },
    formItemProps: {},
    label: '按钮',
    prop: 'val5',
    componentsProps: {},
    slot: { default: () => '我是阿牛' },
    type: 'el-button'
  },
  {
    slotName: 'footer',
    col: { span: 24 },
    formItemProps: {},
    label: '',
    prop: '',
    componentsProps: {},
    type: ''
  }
])
export const rules = markRaw({
  select: [
    { required: true, message: 'Please select name', trigger: 'change' }
  ],
  val: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' }
  ],
  val5: [
    {
      required: true, message: 'Please input your suggestion', trigger: 'blur'
    }
  ]
})

export function handlerChange(val?: any) {
  emitter.emit('handlerChange', val)
}

export function handlerChangeVisible(val: boolean) {
  emitter.emit('handlerChangeVisible', val)
}

export function useFormColumn() {
  return {
    column,
    rules,
    emitter,
    handlerChange,
    handlerChangeVisible,
  }
}