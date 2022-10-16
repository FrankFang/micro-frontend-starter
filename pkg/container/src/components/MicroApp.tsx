import { defineComponent, onMounted, onUnmounted, PropType, ref } from 'vue';
import { createScript } from '../lib/createScript';

type Props = {
  name: string;
  entry: string;
  beforeEntry?: string | string[]
}

export const createMicroApp = (props: Props) => {
  return <MicroApp key={props.name} {...props} />
}

export const MicroApp = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    entry: {
      type: String,
      required: true
    },
    beforeEntry: {
      type: [Array, String] as PropType<string[] | string>,
    }
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
      await createScript(entry)
      window.apps[name].create()
      window.apps[name].mount(div.value!)
    })
    onUnmounted(() => {
      console.log('unmount')
      window.apps[name].unmount()
    })
    return () => (
      <div ref={div} />
    )
  }
})
