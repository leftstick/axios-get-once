import { splash } from 'docz-plugin-splash'

export default {
  entry: 'src/index.ts',
  esm: 'rollup',
  cjs: 'rollup',
  doc: {
    src: './docs',
    public: './public',
    base: '/axios-last/',
    title: 'axios-last',
    description: 'Solution for taking the last value from multiple calls',
    plugins: [splash()]
  }
}
