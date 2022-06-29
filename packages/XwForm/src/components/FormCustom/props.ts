import { PropType, ComponentInternalInstance, Component } from 'vue';
import type { FormRules } from 'element-plus'
export type FormColumnRaw = {
  col: object // el-col的属性
  slotName?: string
  formItemProps: object // el-form-item的属性
  label: string // from表单的label
  prop: string // from表单的prop
  componentsProps: object // 组件的props
  type: string | ComponentInternalInstance | Component // 组件的名字
}
export const defaultProps = {
  formColumn: {// 表单输props
    type: Array as PropType<Array<FormColumnRaw>>,
    default: () => []
  },
  rules: {
    type: Object as PropType<FormRules>,
    default: () => { }
  }
}