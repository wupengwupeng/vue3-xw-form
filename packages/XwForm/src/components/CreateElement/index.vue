<script lang="ts">
import { defineComponent, h, PropType, toRefs } from 'vue'
export default defineComponent({
  props: {
    componentType: {
      type: String as PropType<any>,
    },
    hProps: {
      type: Object as PropType<any>,
      default: () => { }
    },
    slots: {
      type: Object as PropType<any>,
      default: () => { }
    }
  },
  setup(props) {
    return {
      ...toRefs(props)
    }
  },
  render() {
    return h('span', { ...this.hProps }, { ...this.slots })
  }
})
</script>