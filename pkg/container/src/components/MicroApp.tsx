import type { PropType } from 'vue'
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { createScript } from '../lib/createScript'

interface Props {
  name: string
  entry: string
  beforeEntry?: string | string[]
}

export const MicroApp = defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    entry: {
      type: String,
      required: true,
    },
    beforeEntry: {
      type: [Array, String] as PropType<string[] | string>,
    },
  },
  setup: ({ beforeEntry, entry, name }, context) => {
    const div = ref<HTMLDivElement>()
    onMounted(async () => {
      if (beforeEntry) {
        (typeof beforeEntry === 'string' ? [beforeEntry] : beforeEntry)
          .forEach((url) => {
            createScript(url)
          })
      }
      if (isDev) {
        await createScript(entry)
      } else {
        const response = await fetch(entry)
        const json: Manifest = await response.json()
        const found = Object.entries(json).find(([_, item]) => item.isEntry)
        if (!found) { return }
        const [, item] = found
        const regex = /https?:\/\/.+?\//g
        const match = entry.match(regex)
        if (!match) { return }
        await createScript(match[0] + item.file)
      }
      window.apps[name].create()
      window.apps[name].mount(div.value!)
    })
    onUnmounted(() => {
      window.apps[name].unmount()
    })
    return () => (
      <div ref={div} />
    )
  },
})

export const createMicroApp = (props: Props) => {
  return <MicroApp key={props.name} {...props} />
}
