<template>
  <div>
    <span>form表单测试</span>
    <section style="width: 600px;height: 500px;">
      <XwFrom label-width="80px" v-model="state.formDate" :form-column="column" :rules="rules" ref="xwForm">
        <template #footer>
          <div style="display:flex;justify-content: flex-end">
            <el-button>取消</el-button>
            <el-button type="primary" @click="handleSubmit">提交9</el-button>
          </div>
        </template>
      </XwFrom>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, } from 'vue'
import { useFormColumn } from './index'
import XwFormTest from '../packages/index'
const { column, rules, emitter } = useFormColumn()

const state = reactive({
  formDate: {
    select: 'zhangan',
    val: '你好',
    val2: 0,
    val3: undefined,
    val4: 8,
    val5: '你好哇',
  },
})
emitter.on('handlerChange', (val) => {
  console.log(val)
})
emitter.on('handlerChangeVisible', (val) => {
  console.log(val)
})


function handleSubmit() {
  console.log(state.formDate, "formDate")
}

</script>