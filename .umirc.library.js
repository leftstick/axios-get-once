import { splash } from 'docz-plugin-splash'

export default {
  esm: 'rollup',
  cjs: 'rollup',
  doc: {
    src: './docs',
    hashRouter: true,
    themeConfig: { mode: 'light' },
    base: '/axios-last',
    title: 'axios-last',
    description: 'Solution for taking the last value from multiple calls',
    plugins: [splash()]
  }
}
