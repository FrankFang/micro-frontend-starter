import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
export const App = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>
        <RouterView />
      </div>
    )
  },
})
