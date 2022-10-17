import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import s from './Container.module.scss'
export const Container = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <nav class={s.nav}>
          <ul>
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/app1">App 1 (Vue)</RouterLink>
            </li>
            <li>
              <RouterLink to="/app2">App 2 (React)</RouterLink>
            </li>
            <li>
              <RouterLink to="/app3">App 3 (Vue)</RouterLink>
            </li>
          </ul>
        </nav>
        <main class={s.main}>
          <RouterView />
        </main>
      </div>
    )
  },
})
