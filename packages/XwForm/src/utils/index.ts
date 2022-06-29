import { reactive, ref, computed, PropType, ExtractPropTypes } from "vue";

// use分页
export function useElPagination() {
  const pagination = reactive({
    pageSizes: [10, 20, 30, 50, 100, 150, 200, 300],
    pageSize: 10,
    currentPage: 1,
    total: 0
  })
  return pagination
}
// useProps
export function useDefaultProps<T extends Record<keyof T, any>>(arg?: T) {
  return {
    modelValue: {
      type: [Object, String, Number, Array, Boolean, undefined, null, Function] as PropType<any>
    },
    ...arg
  }
}
// useEmits
export function useDefaultEmits() {
  return ['update:modelValue']
}
// useModelValue
export function useModelVal(props: any, emits: any) {
  const val = computed({
    get() {
      return props.modelValue
    },
    set(v) {
      emits('update:modelValue', v)
    }
  })
  return val
}