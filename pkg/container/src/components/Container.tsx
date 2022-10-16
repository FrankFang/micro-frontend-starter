import { defineComponent, PropType } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
export const Container = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div>
        <ol>
          <li>
            <RouterLink to="/app1">app1</RouterLink>
          </li>
          <li>
            <RouterLink to="/app2">app2</RouterLink>
          </li>
        </ol>
        <RouterView />
      </div>
    )
  }
})
