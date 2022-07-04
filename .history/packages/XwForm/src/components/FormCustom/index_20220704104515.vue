<template>
  <div>
    <el-form v-bind="$attrs" ref="ruleFormRef" :model="formDate" :rules="props.rules">
      <el-row>
        <el-col v-for="(item, index) in formColumn" :key="index + 'sd'" v-bind="item.col">
          <template v-if="item.slotName">
            <slot :name="item.slotName" :item="item"></slot>
          </template>
          <el-form-item v-else :label="item.label" :prop="item.prop" v-bind="item.formItemProps">
            <component :is="item.type" v-bind="item.componentsProps" v-model="formDate[item.prop]">
              <template v-if="item?.slot">
                <CreateElement :component-type="item.type" :slots="item.slot" />
              </template>
            </component>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'XwFrom'
}
</script>
<script setup lang="ts">
import { useSlots, reactive, ref, useAttrs } from 'vue'
import { defaultProps } from './props'
import { useModelVal, useDefaultProps, useDefaultEmits } from '../../utils/index';
import type { FormInstance } from 'element-plus'
import CreateElement from '../CreateElement/index.vue'
const slots = useSlots()
const props = defineProps({ ...useDefaultProps(), ...defaultProps })
const emits = defineEmits([...useDefaultEmits()])
const formDate = useModelVal(props, emits)

// 将表单绑定的ref暴露给父组件
const ruleFormRef = ref<FormInstance>();
defineExpose({ ruleFormRef });

</script>