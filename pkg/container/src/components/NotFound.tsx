import { defineComponent, PropType } from 'vue';
export const NotFound = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div>尚未完成</div>
    )
  }
})
