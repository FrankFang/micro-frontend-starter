import { defineComponent } from 'vue'
import logo from '../assets/images/logo.png'
export const Home = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>
        <nav>

        </nav>
        <main text-center flex flex-col gap-y-16px py-16px>
          <img src={logo} alt="logo" />
          <h1 text-6xl>Demo</h1>
          <div flex gap-x-16px justify-center align-center>
            <button btn btn-primary>开始使用</button>
            <button btn btn-secondary>查看文档</button>
            <button btn btn-secondary>切换主题</button>
          </div>
        </main>
      </div>
    )
  },
})
