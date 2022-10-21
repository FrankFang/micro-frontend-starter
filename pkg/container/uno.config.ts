import {
  defineConfig, presetAttributify, presetIcons, presetTypography, presetUno,
  transformerAttributifyJsx,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#4285f4'
    }
  },
  shortcuts: [
    {
      'btn': 'inline-flex items-center justify-center rounded b-1 '
        + ' ' + 'text-white px-4 py-2',
    },
    [/^btn-(.*)$/, ([, c]) => {
      switch (c) {
        case 'primary':
          return 'bg-primary text-white b-primary'
        case 'secondary':
          return 'bg-white text-primary b-secondary'
        case 'danger':
          return 'bg-red-500 text-white b-red-500'
        default:
          return ''
      }
    }],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle'
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
})
