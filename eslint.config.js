import { eslintConfig } from '@kutsan/eslint-config'
import { defineConfig } from 'eslint/config'

const config = defineConfig([
  ...eslintConfig({
    configs: ['node'],
  }),
])

export default config
