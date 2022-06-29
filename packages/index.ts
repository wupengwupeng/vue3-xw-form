import { App } from 'vue'
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElRate,
  ElInputNumber,
  ElSlider,
} from 'element-plus'
import XwForm from './XwForm/src/components/FormCustom/index.vue'
import 'element-plus/dist/index.css'

const components = [
  XwForm,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElRate,
  ElInputNumber,
  ElSlider,
]

const install = function (app: App) {
  components.forEach(res => {
    app.component(res.name, res)
  })
}

export default {
  install,
  ...components,
}
